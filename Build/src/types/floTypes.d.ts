// Mirrors FloMetadata from libflo/src/core/metadata.rs
// Enums and types use snake_case for JS compatibility

type SyncedLyricsContentType =
  | "other"
  | "lyrics"
  | "text_transcription"
  | "part_name"
  | "events"
  | "chord"
  | "trivia"
  | "webpage_url"
  | "image_url";

type PictureType =
  | "other"
  | "file_icon"
  | "other_file_icon"
  | "cover_front"
  | "cover_back"
  | "leaflet_page"
  | "media"
  | "lead_artist"
  | "artist"
  | "conductor"
  | "band"
  | "composer"
  | "lyricist"
  | "recording_location"
  | "during_recording"
  | "during_performance"
  | "video_screen_capture"
  | "bright_coloured_fish"
  | "illustration"
  | "band_logo"
  | "publisher_logo";

type SectionType =
  | "intro"
  | "verse"
  | "pre_chorus"
  | "chorus"
  | "post_chorus"
  | "bridge"
  | "breakdown"
  | "drop"
  | "buildup"
  | "solo"
  | "instrumental"
  | "outro"
  | "silence"
  | "other";

type CoverVariantType =
  | "standard"
  | "explicit"
  | "clean"
  | "remix"
  | "deluxe"
  | "limited"
  | "vinyl"
  | "cassette"
  | "digital"
  | "other";

interface UserUrl {
  description: string;
  url: string;
}

interface Comment {
  language?: string;
  description?: string;
  text: string;
}

interface Lyrics {
  language?: string;
  description?: string;
  text: string;
}

interface SyncedLyricsLine {
  text: string;
  timestamp_ms: number;
}

interface SyncedLyrics {
  language?: string;
  content_type: SyncedLyricsContentType;
  description?: string;
  lines: SyncedLyricsLine[];
}

interface Picture {
  mime_type: string;
  picture_type: PictureType;
  description?: string;
  data: Uint8Array;
}

interface UserText {
  description: string;
  value: string;
}

interface Popularimeter {
  email?: string;
  rating: number;
  play_count?: number;
}

interface WaveformData {
  peaks_per_second: number;
  peaks: number[];
  channels: number;
}

interface BpmChange {
  timestamp_ms: number;
  bpm: number;
}

interface KeyChange {
  timestamp_ms: number;
  key: string;
}

interface LoudnessPoint {
  timestamp_ms: number;
  lufs: number;
}

interface SectionMarker {
  timestamp_ms: number;
  section_type: SectionType;
  label?: string;
}

interface CreatorNote {
  timestamp_ms?: number;
  text: string;
}

interface CollaborationCredit {
  role: string;
  name: string;
  timestamp_ms?: number;
}

interface RemixChainEntry {
  title: string;
  artist: string;
  year?: number;
  isrc?: string;
  relationship: string;
}

interface AnimatedCover {
  mime_type: string;
  data: Uint8Array;
  duration_ms?: number;
  loop_count?: number;
}

interface CoverVariant {
  variant_type: CoverVariantType;
  mime_type: string;
  data: Uint8Array;
  description?: string;
}

interface FloMetadata {
  // IDENTIFICATION (ID3v2.4 compatible)
  title?: string;
  subtitle?: string;
  content_group?: string;
  album?: string;
  original_album?: string;
  set_subtitle?: string;
  track_number?: number;
  track_total?: number;
  disc_number?: number;
  disc_total?: number;
  isrc?: string;
  playlist_delay?: number;

  // INVOLVED PERSONS
  artist?: string;
  album_artist?: string;
  conductor?: string;
  remixer?: string;
  original_artist?: string;
  composer?: string;
  lyricist?: string;
  original_lyricist?: string;
  encoded_by?: string;
  involved_people: [string, string][]; // [role, name]
  musician_credits: [string, string][]; // [instrument, name]

  // PROPERTIES
  genre?: string;
  mood?: string;
  bpm?: number;
  key?: string;
  language?: string;
  length_ms?: number;

  // DATES/TIMES
  year?: number;
  recording_time?: string;
  release_time?: string;
  original_release_time?: string;
  encoding_time?: string;
  tagging_time?: string;

  // RIGHTS/LICENSE
  copyright?: string;
  produced_notice?: string;
  publisher?: string;
  file_owner?: string;
  radio_station?: string;
  radio_station_owner?: string;

  // SORT ORDER
  album_sort?: string;
  artist_sort?: string;
  title_sort?: string;

  // URLS
  url_commercial?: string;
  url_copyright?: string;
  url_audio_file?: string;
  url_artist?: string;
  url_audio_source?: string;
  url_radio_station?: string;
  url_payment?: string;
  url_publisher?: string;
  user_urls: UserUrl[];

  // COMPLEX FRAMES
  comments: Comment[];
  lyrics: Lyrics[]; // For unsynced lyrics
  synced_lyrics: SyncedLyrics[];
  pictures: Picture[];
  user_text: UserText[];
  popularimeter?: Popularimeter;

  // VISUALIZATION (flo™-unique)
  waveform_data?: WaveformData;
  spectrum_fingerprint?: Uint8Array;

  // TIMING & ANALYSIS (flo™-unique)
  bpm_map: BpmChange[];
  key_changes: KeyChange[];
  loudness_profile: LoudnessPoint[];
  integrated_loudness_lufs?: number;
  loudness_range_lu?: number;
  true_peak_dbtp?: number;
  section_markers: SectionMarker[];

  // CREATOR INFO (flo™-unique)
  creator_notes: CreatorNote[];
  collaboration_credits: CollaborationCredit[];
  remix_chain: RemixChainEntry[];

  // COVERS (flo™-unique)
  animated_cover?: AnimatedCover;
  cover_variants: CoverVariant[];
  artist_signature?: Picture;

  // flo™-SPECIFIC
  flo_encoder_version?: string;
  encoder_settings?: string;
  source_format?: string;
  original_filename?: string;
  custom: Record<string, any>; // JSON value
}

interface SYLTFrame {
  type: number;
  text: [string, number][];
  timestampFormat: number;
  language: string;
  description: string;
}
