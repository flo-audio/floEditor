import { useCallback, useState } from 'react';
import type { IAudioMetadata, IPicture } from 'music-metadata';

type NativeTag = {
  rawId: string;
  id: string;
  descriptor?: string;
  value: unknown;
};

type NativeTagEntry = {
  id?: string;
  value: unknown;
};

type NativeTagDict = Record<string, NativeTagEntry[]>;

type LoadMetadataResult = {
  tags: ID3Tags;
  albumArtUrl: string | null;
  syltFrame: SYLTFrame | null;
};

export const DEFAULT_SYLT_FRAME: SYLTFrame = {
  type: 1,
  text: [],
  timestampFormat: 2,
  language: 'eng',
  description: 'Lyrics',
};

export function useID3Loader() {
  const [isLoading, setIsLoading] = useState(false);

  const loadMetadata = useCallback(async (file: File): Promise<LoadMetadataResult> => {
    setIsLoading(true);
    try {
      const { parseBlob } = await import('music-metadata');
      const metadata = await parseBlob(file);
      return normalizeMetadata(metadata);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, loadMetadata };
}

type AssignOptions = {
  joiner?: string;
};

function normalizeMetadata(metadata: IAudioMetadata): LoadMetadataResult {
  const tags: ID3Tags = {};
  const common = metadata.common ?? ({} as IAudioMetadata['common']);
  const nativeTags = flattenNative(metadata.native as NativeTagDict | undefined);

  const assign = (key: keyof ID3Tags, value: unknown, options?: AssignOptions) => {
    const normalized = extractTextValue(value, options?.joiner ?? ', ');
    if (normalized) {
      tags[key] = normalized;
    }
  };

  // helpers to access non-standard common properties safely:
  const getCommonProp = (key: string): unknown => (common as unknown as Record<string, unknown>)[key];
  const getCommonString = (key: string): string | undefined => {
    const v = getCommonProp(key);
    return typeof v === 'string' ? v : undefined;
  };
  const getCommonStringOrArray = (key: string): string | string[] | undefined => {
    const v = getCommonProp(key);
    return typeof v === 'string' || Array.isArray(v) ? (v as string | string[]) : undefined;
  };

  assign('title', common.title);
  assign('artist', common.artist);
  assign('album', common.album);
  assign('albumArtist', getCommonString('albumartist'));
  assign('genre', common.genre);
  assign('year', common.year);
  assign('track', common.track?.no);
  assign('trackTotal', common.track?.of);
  assign('disc', common.disk?.no);
  assign('discTotal', common.disk?.of);
  assign('bpm', common.bpm);
  assign('initialKey', common.key);
  assign('composer', common.composer);
  assign('lyricist', common.lyricist ?? getCommonStringOrArray('writer'));
  assign('publisher', getCommonStringOrArray('label'));
  assign('mood', getCommonStringOrArray('mood'));
  assign('isrc', getCommonStringOrArray('isrc'));
  assign('grouping', getCommonString('grouping'));
  assign('encoder', getCommonString('encoder') ?? getCommonString('encodedby'));
  assign('website', getCommonStringOrArray('website'));

  if (common.comment) {
    assign('comment', common.comment, { joiner: '\n' });
  }

  if (common.lyrics) {
    assign('unsyncedLyrics', common.lyrics, { joiner: '\n' });
  }

  assign('publisher', getNativeText(nativeTags, 'TPUB') ?? tags.publisher);
  assign('copyright', getNativeText(nativeTags, 'TCOP'));
  assign('composer', getNativeText(nativeTags, 'TCOM') ?? tags.composer);
  assign('lyricist', getNativeText(nativeTags, 'TEXT') ?? tags.lyricist);
  assign('initialKey', getNativeText(nativeTags, 'TKEY') ?? tags.initialKey);
  assign('mood', getNativeText(nativeTags, 'TMOO') ?? getNativeText(nativeTags, 'TXXX', 'Mood'));
  assign('grouping', getNativeText(nativeTags, 'TIT1') ?? tags.grouping);
  assign(
    'encoder',
    getNativeText(nativeTags, 'TENC') ??
      getNativeText(nativeTags, 'TSSE') ??
      getNativeText(nativeTags, 'TXXX', 'Encoded By')
  );
  const nativeWebsite = getNativeUrl(nativeTags) ?? getNativeText(nativeTags, 'TXXX', 'Website');
  assign('website', nativeWebsite);

  const albumArtUrl = extractPicture(common.picture?.[0] ?? null);
  const syltFrame = extractCommonSylt(common) ?? extractSylt(nativeTags);

  return { tags, albumArtUrl, syltFrame };
}

function extractCommonSylt(common: IAudioMetadata['common'] | undefined): SYLTFrame | null {
  if (!common || !Array.isArray(common.lyrics) || common.lyrics.length === 0) {
    return null;
  }

  const events: [string, number][] = [];
  let referenceTag: (typeof common.lyrics)[number] | null = null;

  for (const lyricTag of common.lyrics) {
    if (!lyricTag || !Array.isArray(lyricTag.syncText) || lyricTag.syncText.length === 0) {
      continue;
    }

    if (!referenceTag) {
      referenceTag = lyricTag;
    }

    for (const entry of lyricTag.syncText) {
      if (!entry) continue;
      const textValue = extractTextValue(entry.text);
      if (!textValue) continue;
      const timestamp = typeof entry.timestamp === 'number' ? entry.timestamp : Number(entry.timestamp ?? 0);
      const sanitizedTimestamp = Number.isFinite(timestamp) ? Math.max(0, Math.round(timestamp)) : 0;
      events.push([textValue, sanitizedTimestamp]);
    }
  }

  if (!events.length) {
    return null;
  }

  const descriptionSource = referenceTag ?? null;
  const language = descriptionSource?.language && descriptionSource.language.trim().length > 0
    ? descriptionSource.language
    : DEFAULT_SYLT_FRAME.language;
  const description =
    extractTextValue(descriptionSource?.descriptor ?? descriptionSource?.text) ?? DEFAULT_SYLT_FRAME.description;
  const timestampFormat =
    typeof descriptionSource?.timeStampFormat === 'number'
      ? descriptionSource.timeStampFormat
      : DEFAULT_SYLT_FRAME.timestampFormat;

  return {
    type: DEFAULT_SYLT_FRAME.type,
    text: events,
    timestampFormat,
    language,
    description,
  };
}

function extractTextValue(value: unknown, joiner = ', '): string | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }

  if (typeof value === 'number' || typeof value === 'bigint') {
    return String(value);
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  if (Array.isArray(value)) {
    const normalizedParts = value
      .map((part) => extractTextValue(part, joiner))
      .filter((part): part is string => Boolean(part && part.length > 0));
    if (!normalizedParts.length) {
      return undefined;
    }
    return normalizedParts.join(joiner);
  }

  if (typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const candidateKeys = ['text', 'value', 'content', 'lyrics', 'description', 'shortText', 'url'];
    for (const key of candidateKeys) {
      if (key in record) {
        const candidate = extractTextValue(record[key], joiner);
        if (candidate) {
          return candidate;
        }
      }
    }
    return undefined;
  }

  return undefined;
}

function flattenNative(nativeDict: NativeTagDict | undefined): NativeTag[] {
  if (!nativeDict) return [];
  return Object.values(nativeDict).reduce<NativeTag[]>((acc, tagList) => {
    if (!Array.isArray(tagList)) {
      return acc;
    }

    for (const tag of tagList) {
      if (!tag || typeof tag.id !== 'string') {
        continue;
      }
      const normalized = normalizeNativeId(tag.id);
      if (!normalized.frameId) {
        continue;
      }
      acc.push({
        rawId: tag.id,
        id: normalized.frameId,
        descriptor: normalized.descriptor,
        value: tag.value,
      });
    }

    return acc;
  }, []);
}

function getNativeText(nativeTags: NativeTag[], frameId: string, description?: string): string | undefined {
  if (!frameId) return undefined;
  const normalizedFrame = frameId.trim().toUpperCase();
  if (!normalizedFrame) return undefined;
  const normalizedDescription = description?.trim().toLowerCase();

  const collected: string[] = [];

  for (const tag of nativeTags) {
    if (tag.id !== normalizedFrame) continue;
    if (!descriptorMatches(tag, normalizedDescription)) {
      continue;
    }

    const candidate = extractTextValue(tag.value);
    if (!candidate) {
      continue;
    }

    if (!normalizedDescription) {
      return candidate;
    }
    collected.push(candidate);
  }

  if (!collected.length) {
    return undefined;
  }

  return mergeDescriptorValues(collected, normalizedDescription);
}

function normalizeNativeId(rawId: string): { frameId: string; descriptor?: string } {
  if (!rawId) {
    return { frameId: '', descriptor: undefined };
  }
  const trimmed = rawId.trim();
  if (!trimmed) {
    return { frameId: '', descriptor: undefined };
  }
  const [frame, ...rest] = trimmed.split(':');
  const descriptor = rest.length > 0 ? rest.join(':').trim() : undefined;
  return {
    frameId: frame.trim().toUpperCase(),
    descriptor: descriptor && descriptor.length > 0 ? descriptor : undefined,
  };
}

function descriptorMatches(tag: NativeTag, normalizedDescription?: string): boolean {
  if (!normalizedDescription) {
    return true;
  }

  if (tag.descriptor && tag.descriptor.trim().toLowerCase() === normalizedDescription) {
    return true;
  }

  if (tag.value && typeof tag.value === 'object') {
    const record = tag.value as Record<string, unknown>;
    const descriptionValue = typeof record.description === 'string' ? record.description.trim().toLowerCase() : undefined;
    if (descriptionValue && descriptionValue === normalizedDescription) {
      return true;
    }
    const shortText = typeof record.shortText === 'string' ? record.shortText.trim().toLowerCase() : undefined;
    if (shortText && shortText === normalizedDescription) {
      return true;
    }
  }

  return false;
}

function mergeDescriptorValues(values: string[], normalizedDescription?: string): string | undefined {
  if (!values.length) {
    return undefined;
  }

  if (!normalizedDescription) {
    return values[0];
  }

  const isUrlDescriptor = ['website', 'url', 'link'].includes(normalizedDescription);
  const joined = isUrlDescriptor ? values.join('') : values.join(', ');
  const sanitized = joined.trim();
  if (!sanitized) {
    return undefined;
  }
  return isUrlDescriptor ? repairUrl(sanitized) : sanitized;
}

function repairUrl(value: string): string {
  if (/^(https?):(?!\/\/)/i.test(value)) {
    return value.replace(/^(https?):/i, '$1://');
  }
  if (/^(ftp):(?!\/\/)/i.test(value)) {
    return value.replace(/^(ftp):/i, '$1://');
  }
  return value;
}

function getNativeUrl(nativeTags: NativeTag[]): string | undefined {
  const wxxxWebsite = getNativeText(nativeTags, 'WXXX', 'Website');
  if (wxxxWebsite) {
    return wxxxWebsite;
  }

  const prioritizedFrames = ['WXXX', 'WOAR', 'WOAS', 'WORS'];
  for (const frame of prioritizedFrames) {
    const value = getNativeText(nativeTags, frame);
    if (value) {
      return value;
    }
  }

  const txxxWebsite = getNativeText(nativeTags, 'TXXX', 'Website');
  if (txxxWebsite) {
    return txxxWebsite;
  }

  return undefined;
}

function extractPicture(picture: IPicture | null | undefined): string | null {
  if (!picture || !picture.data) {
    return null;
  }

  const data = picture.data instanceof Uint8Array ? picture.data : new Uint8Array(picture.data as ArrayBufferLike);
  try {
    const base64 = uint8ToBase64(data);
    const mime = picture.format || 'image/jpeg';
    return `data:${mime};base64,${base64}`;
  } catch (error) {
    console.warn('Failed to convert embedded artwork to data URL', error);
    return null;
  }
}

function uint8ToBase64(bytes: Uint8Array): string {
  if (typeof window === 'undefined' && typeof Buffer !== 'undefined') {
    return Buffer.from(bytes).toString('base64');
  }

  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return typeof btoa === 'function' ? btoa(binary) : '';
}

function extractSylt(nativeTags: NativeTag[]): SYLTFrame | null {
  const syltEntry = nativeTags.find((tag) => tag.id === 'SYLT');
  if (!syltEntry || !syltEntry.value || typeof syltEntry.value !== 'object') {
    return null;
  }

  const value = syltEntry.value as Record<string, unknown>;
  const collected: [string, number][] = [];

  const addEntry = (textValue: unknown, timeValue: unknown) => {
    if (typeof textValue !== 'string' || textValue.trim().length === 0) {
      return;
    }
    const timestamp = typeof timeValue === 'number' ? timeValue : Number(timeValue ?? 0);
    collected.push([textValue, Number.isFinite(timestamp) ? timestamp : 0]);
  };

  const maybeTextArray = value.text;
  if (Array.isArray(maybeTextArray)) {
    for (const entry of maybeTextArray) {
      if (Array.isArray(entry)) {
        addEntry(entry[0], entry[1]);
      } else if (entry && typeof entry === 'object') {
        const record = entry as Record<string, unknown>;
        addEntry(record.text ?? record.content, record.timeStamp ?? record.timestamp ?? record.time);
      } else if (typeof entry === 'string') {
        addEntry(entry, 0);
      }
    }
  }

  const maybeEvents = value.events;
  if (Array.isArray(maybeEvents)) {
    for (const event of maybeEvents) {
      if (event && typeof event === 'object') {
        const record = event as Record<string, unknown>;
        addEntry(record.text ?? record.content, record.timeStamp ?? record.timestamp ?? record.time);
      }
    }
  }

  if (!collected.length) {
    return null;
  }

  return {
    type: typeof value.type === 'number' ? (value.type as number) : DEFAULT_SYLT_FRAME.type,
    text: collected,
    timestampFormat:
      typeof value.timeStampFormat === 'number'
        ? (value.timeStampFormat as number)
        : DEFAULT_SYLT_FRAME.timestampFormat,
    language:
      typeof value.language === 'string' && value.language.trim().length > 0
        ? (value.language as string)
        : DEFAULT_SYLT_FRAME.language,
    description:
      typeof value.description === 'string' && value.description.trim().length > 0
        ? (value.description as string)
        : typeof value.shortText === 'string' && value.shortText.trim().length > 0
        ? (value.shortText as string)
        : DEFAULT_SYLT_FRAME.description,
  };
}
