import { useState, useEffect } from "react";
import init, {
  create_metadata_from_object,
  get_metadata as getFloMetadata,
  update_metadata,
  validate,
} from "@flo-audio/libflo-audio";
import { FloMetadata } from "../types/floTypes";

interface ProcessResult {
  success: boolean;
  message: string;
}

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

  return {
    isProcessing,
    isInitialized,
    loadMetadata,
    updateMetadata,
    downloadFile,
    validateFile,
  };
}