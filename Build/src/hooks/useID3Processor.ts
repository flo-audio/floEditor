import { useState } from "react";

interface ProcessResult {
  success: boolean;
  message: string;
}

export function useID3Processor() {
  const [isProcessing, setIsProcessing] = useState(false);

  const processFile = async (
    file: File,
    tags: ID3Tags,
    syltFrame: SYLTFrame,
    albumArtUrl: string | null,
  ): Promise<ProcessResult> => {
    setIsProcessing(true);

    try {
      const arrayBuffer = await file.arrayBuffer();

      const id3Module = await import("browser-id3-writer");
      const { ID3Writer } = id3Module;
      const writer = new ID3Writer(arrayBuffer);

      if (tags.title) {
        (writer as any).setFrame("TIT2", tags.title);
      }
      if (tags.artist) {
        (writer as any).setFrame("TPE1", [tags.artist]);
      }
      if (tags.album) {
        (writer as any).setFrame("TALB", tags.album);
      }
      if (tags.albumArtist) {
        (writer as any).setFrame("TPE2", tags.albumArtist);
      }
      if (tags.composer) {
        (writer as any).setFrame("TCOM", [tags.composer]);
      }
      if (tags.lyricist) {
        (writer as any).setFrame("TEXT", [tags.lyricist]);
      }
      if (tags.publisher) {
        (writer as any).setFrame("TPUB", tags.publisher);
      }
      if (tags.copyright) {
        (writer as any).setFrame("TCOP", tags.copyright);
      }
      if (tags.genre) {
        (writer as any).setFrame("TCON", [tags.genre]);
      }
      if (tags.year) {
        (writer as any).setFrame("TYER", tags.year);
      }
      if (tags.bpm) {
        const bpmValue = parseInt(tags.bpm, 10);
        if (!Number.isNaN(bpmValue)) {
          (writer as any).setFrame("TBPM", bpmValue);
        }
      }
      if (tags.initialKey) {
        (writer as any).setFrame("TKEY", tags.initialKey);
      }
      if (tags.mood) {
        try {
          (writer as any).setFrame("TMOO", tags.mood);
        } catch {
          (writer as any).setFrame("TXXX", {
            description: "Mood",
            value: tags.mood,
          });
        }
      }
      if (tags.grouping) {
        (writer as any).setFrame("TIT1", tags.grouping);
      }
      if (tags.encoder) {
        try {
          (writer as any).setFrame("TENC", tags.encoder);
        } catch {
          (writer as any).setFrame("TXXX", {
            description: "Encoded By",
            value: tags.encoder,
          });
        }
      }
      if (tags.isrc) {
        (writer as any).setFrame("TSRC", tags.isrc);
      }
      const trackFrame = [tags.track, tags.trackTotal]
        .filter(Boolean)
        .join("/");
      if (trackFrame) {
        (writer as any).setFrame("TRCK", trackFrame);
      }
      const discFrame = [tags.disc, tags.discTotal].filter(Boolean).join("/");
      if (discFrame) {
        (writer as any).setFrame("TPOS", discFrame);
      }
      if (tags.comment) {
        (writer as any).setFrame("COMM", {
          description: "",
          text: tags.comment,
        });
      }
      if (tags.unsyncedLyrics) {
        (writer as any).setFrame("USLT", {
          description: tags.title || "Lyrics",
          language: syltFrame.language || "eng",
          lyrics: tags.unsyncedLyrics,
        });
      }
      if (tags.website) {
        const websiteValue = tags.website;
        const trySetUrlFrame = (frame: string, value: unknown): boolean => {
          try {
            (writer as any).setFrame(frame, value);
            return true;
          } catch {
            return false;
          }
        };

        // Prefer official URL frames so downstream parsers surface the link automatically.
        const wroteUrl =
          trySetUrlFrame("WXXX", { description: "Website", value: websiteValue }) ||
          trySetUrlFrame("WOAR", websiteValue) ||
          trySetUrlFrame("WOAS", websiteValue);

        if (!wroteUrl) {
          trySetUrlFrame("TXXX", { description: "Website", value: websiteValue });
        }
      }

      if (albumArtUrl) {
        try {
          const response = await fetch(albumArtUrl);
          const blob = await response.blob();
          const imageBuffer = await blob.arrayBuffer();
          const mimeType = blob.type || "image/jpeg";
          const apicPayload = {
            type: 3,
            data: new Uint8Array(imageBuffer),
            description: "",
            pictureType: 3,
          } as Record<string, any>;

          if (mimeType) {
            apicPayload.mime = mimeType;
          }

          try {
            (writer as any).setFrame("APIC", apicPayload);
          } catch (mimeErr) {
            console.warn("Retrying album art without mime type", mimeErr);
            const fallbackPayload = { ...apicPayload };
            delete fallbackPayload.mime;
            (writer as any).setFrame("APIC", fallbackPayload);
          }
        } catch (err) {
          console.warn("Failed to set album art:", err);
        }
      }

      if (syltFrame.text.length > 0) {
        const formattedText = syltFrame.text.map(([text, timestamp]) => [
          String(text || ""),
          Math.floor(Number(timestamp || 0)),
        ]);

        (writer as any).setFrame("SYLT", {
          type: 1,
          text: formattedText,
          timestampFormat: 2,
          language: syltFrame.language || "eng",
          description: syltFrame.description || "Synced Lyrics",
        });
      }

      writer.addTag();

      const outputBuffer = (writer as any).arrayBuffer;
      const blob = new Blob([outputBuffer], { type: "audio/mpeg" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${tags.title || file.name.replace(".mp3", "")}_tagged.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      return {
        success: true,
        message: "File processed and downloaded successfully!",
      };
    } catch (err) {
      console.error("Error processing file:", err);
      return {
        success: false,
        message: `Failed to process file: ${err instanceof Error ? err.message : "Unknown error"}`,
      };
    } finally {
      setIsProcessing(false);
    }
  };

  return { isProcessing, processFile };
}
