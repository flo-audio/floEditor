import { useState } from "react";
import init, { get_metadata as getFloMetadata, info as getFloInfo } from "@flo-audio/libflo-audio";

interface FloLoadResult {
  metadata: FloMetadata | null;
  audioInfo: {
    sample_rate: number;
    channels: number;
    bit_depth: number;
    total_frames: number;
    duration_secs: number;
    file_size: number;
    compression_ratio: number;
    crc_valid: boolean;
    is_lossy: boolean;
    lossy_quality: number;
    version: string;
  } | null;
  error: string | null;
}

export function useFloLoader() {
  const [isLoading, setIsLoading] = useState(false);

  const loadFloFile = async (file: File): Promise<FloLoadResult> => {
    setIsLoading(true);

    try {
      // Check file extension
      if (!file.name.toLowerCase().endsWith('.flo')) {
        return {
          metadata: null,
          audioInfo: null,
          error: 'Please upload a valid .flo file',
        };
      }

      // Initialize WASM if needed (in case not done elsewhere)
      await init();

      const arrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);

      // Get metadata
      const metadata = getFloMetadata(uint8Array) as FloMetadata | null;

      // Get audio info
      const audioInfoObj = getFloInfo(uint8Array);
      const audioInfo = audioInfoObj ? {
        sample_rate: audioInfoObj.sample_rate,
        channels: audioInfoObj.channels,
        bit_depth: audioInfoObj.bit_depth,
        total_frames: Number(audioInfoObj.total_frames), // bigint to number
        duration_secs: audioInfoObj.duration_secs,
        file_size: audioInfoObj.file_size,
        compression_ratio: audioInfoObj.compression_ratio,
        crc_valid: audioInfoObj.crc_valid,
        is_lossy: audioInfoObj.is_lossy,
        lossy_quality: audioInfoObj.lossy_quality,
        version: audioInfoObj.version,
      } : null;

      return {
        metadata,
        audioInfo,
        error: null,
      };
    } catch (err) {
      console.error('Failed to load flo™ file:', err);
      return {
        metadata: null,
        audioInfo: null,
        error: `Failed to parse flo™ file: ${err instanceof Error ? err.message : 'Unknown error'}`,
      };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, loadFloFile };
}
