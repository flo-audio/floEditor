import { useState, useEffect } from "react";
import init, {
  create_metadata_from_object,
  get_metadata as getFloMetadata,
  update_metadata,
  validate,
} from "@flo-audio/libflo-audio";

export const DEFAULT_SYLT_FRAME: SYLTFrame = {
    type: 1,
    text: [],
    timestampFormat: 2,
    language: "eng",
    description: "Synced Lyrics",
  };
export const DEFAULT_METADATA: FloMetadata = {
  title: "",
  artist: "",
  album: "",
  album_artist: "",
  year: undefined,
  genre: "",
  track_number: undefined,
  track_total: undefined,
  disc_number: undefined,
  disc_total: undefined,
  composer: "",
  lyricist: "",
  publisher: "",
  copyright: "",
  bpm: undefined,
  key: "",
  mood: "",
  isrc: "",
  encoded_by: "",
  involved_people: [],
  musician_credits: [],
  comments: [],
  lyrics: [],
  synced_lyrics: [],
  pictures: [],
  user_text: [],
  user_urls: [],
  bpm_map: [],
  key_changes: [],
  loudness_profile: [],
  section_markers: [],
  creator_notes: [],
  collaboration_credits: [],
  remix_chain: [],
  cover_variants: [],
  custom: {},
};

export function useFloProcessor() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        await init();
        setIsInitialized(true);
      } catch (err) {
        console.error("Failed to initialize flo™ WASM:", err);
      }
    };
    initialize();
  }, []);

  const loadMetadata = async (file: File): Promise<FloMetadata | null> => {
    if (!isInitialized) {
      throw new Error("flo™ WASM not initialized");
    }
    try {
      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const metadata = getFloMetadata(uint8Array);
      return metadata as FloMetadata | null;
    } catch (err) {
      console.error("Failed to load flo™ metadata:", err);
      return null;
    }
  };

  const updateMetadata = async (
    originalFile: Uint8Array,
    newMetadata: FloMetadata,
  ): Promise<Uint8Array | null> => {
    if (!isInitialized) {
      throw new Error("flo™ WASM not initialized");
    }
    setIsProcessing(true);
    try {
      const metadataBytes = create_metadata_from_object(newMetadata);
      const updatedFile = update_metadata(originalFile, metadataBytes);
      setIsProcessing(false);
      return updatedFile;
    } catch (err) {
      console.error("Failed to update flo™ metadata:", err);
      setIsProcessing(false);
      return null;
    }
  };

  const downloadFile = (data: Uint8Array, filename: string) => {
    const blob = new Blob([data], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const validateFile = (data: Uint8Array): boolean => {
    if (!isInitialized) return false;
    return validate(data);
  };

  const resetMetadata = (): FloMetadata => ({ ...DEFAULT_METADATA });

  return {
    isProcessing,
    isInitialized,
    loadMetadata,
    updateMetadata,
    downloadFile,
    validateFile,
    resetMetadata,
  };
}
