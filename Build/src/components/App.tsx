import { useState, useCallback, useEffect, useRef } from "react";
import { Music, Bug } from "lucide-react";
import { FileUploadSection } from "./Upload";
import { BasicTagsSection } from "./BasicTags";
import { ArtworkSection } from "./Artwork";
import { SyncedLyricsSection } from "./SyncedLyrics";
import { SectionMarkersSection } from "./SectionMarkers";
import { BpmMapSection } from "./BpmMap";
import { KeyChangesSection } from "./KeyChanges";
import { PopularimeterSection } from "./Popularimeter";
import { UserTextSection } from "./UserText";
import { CreatorNotesSection } from "./CreatorNotes";
import { CollaborationCreditsSection } from "./CollaborationCredits";
import { ProcessButton } from "./Process";
import { AlertMessage } from "./Alert";
import { ThemeToggle } from "./ThemeToggle";
import { useFloProcessor } from "../hooks/useFloProcessor";
import { useFloLoader } from "../hooks/useFloLoader";
import { DEFAULT_METADATA, DEFAULT_SYLT_FRAME } from "../utils/constants";
import { WaveformSection, generateWaveformData } from "./Waveform";
import { AdvancedTagsSection } from "./AdvancedTags";
import { ViewInfo } from "./ViewInfo";
import { RemixChainSection } from "./RemixChain";

export default function App() {
  const [file, setFile] = useState<File | null>(null);
  const [, setLrcText] = useState<string>("");
  const [showEruda, setShowEruda] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [metadataSummary, setMetadataSummary] = useState("");
  const [originalFileBytes, setOriginalFileBytes] = useState<Uint8Array | null>(
    null,
  );
  const { isProcessing, updateMetadata, downloadFile, resetMetadata } =
    useFloProcessor();
  const [audioInfo, setAudioInfo] = useState<any | null>(null); // <- keep audioInfo for waveform
  const [metadata, setMetadata] = useState<FloMetadata>(() => ({
    ...DEFAULT_METADATA,
  }));
  const [albumArtUrl, setAlbumArtUrl] = useState<string | null>(null);
  const [syltFrame, setSyltFrame] = useState<SYLTFrame>(() => ({
    ...DEFAULT_SYLT_FRAME,
  }));
  const activeFileSignature = useRef("");
  const { isLoading: isReadingMetadata, loadFloFile } = useFloLoader();

  useEffect(() => {
    if (typeof window !== "undefined" && showEruda) {
      import("eruda").then((eruda) => {
        eruda.default.init();
        eruda.default.show();
      });
    }
  }, [showEruda]);

  const populatedFields = Object.values(metadata).filter(
    (value) => typeof value === "string" && value.trim().length > 0,
  ).length;

  const sessionStats = [
    {
      label: "Tag fields set",
      value: populatedFields.toString(),
      helper: "metadata saved this session",
    },
    {
      label: "Synced lines",
      value: syltFrame.text.length.toString(),
      helper: "timestamped lyric rows",
    },
    {
      label: "Artwork",
      value: albumArtUrl ? "Attached" : "Not added",
      helper: albumArtUrl ? "Cover ready to embed" : "Add PNG / JPG / WebP",
    },
  ];

  const buildFileSignature = useCallback(
    (target: File) => `${target.name}:${target.lastModified}:${target.size}`,
    [],
  );

  const handleRegenerateWaveform = useCallback(async () => {
    if (!originalFileBytes || !audioInfo) return;
    try {
      // Lazy-load decode from WASM only when needed
      const lib = await import("@flo-audio/libflo-audio");
      // Decode samples
      const samples: Float32Array = await lib.decode(originalFileBytes);
      const wf = generateWaveformData(
        samples,
        audioInfo.sample_rate,
        audioInfo.channels,
      );
      setMetadata((prev) => ({ ...prev, waveform_data: wf }));
      setSuccess("Waveform re-generated from audio data.");
    } catch (err) {
      setError("Could not re-generate waveform.");
    }
  }, [originalFileBytes, audioInfo]);

  const handleFileUpload = useCallback(
    async (uploadedFile: File | null) => {
      if (!uploadedFile) {
        activeFileSignature.current = "";
        setFile(null);
        setOriginalFileBytes(null);
        setMetadata(resetMetadata());
        setAlbumArtUrl(null);
        setSyltFrame({ ...DEFAULT_SYLT_FRAME });
        setLrcText("");
        setMetadataSummary("");
        setSuccess(null);
        setError(null);
        setAudioInfo(null);
        return;
      }

      const acceptsFlo = uploadedFile.name.toLowerCase().endsWith(".flo");

      if (!acceptsFlo) {
        setError("Please upload a valid .flo file");
        setSuccess(null);
        return;
      }

      const signature = buildFileSignature(uploadedFile);
      activeFileSignature.current = signature;

      setFile(uploadedFile);
      setError(null);
      setSuccess("File loaded. Reading embedded tags...");
      setMetadataSummary("Scanning embedded metadata...");
      setMetadata(resetMetadata());
      setAlbumArtUrl(null);
      setSyltFrame({ ...DEFAULT_SYLT_FRAME });
      setLrcText("");
      setAudioInfo(null);

      try {
        const {
          metadata: parsedMetadata,
          audioInfo: newAudioInfo,
          error: loadError,
        } = await loadFloFile(uploadedFile);

        if (activeFileSignature.current !== signature) {
          return;
        }

        if (loadError) {
          setError(loadError);
          setSuccess(null);
          return;
        }

        const arrayBuffer = await uploadedFile.arrayBuffer();
        const fileBytes = new Uint8Array(arrayBuffer);
        setOriginalFileBytes(fileBytes);

        setAudioInfo(newAudioInfo || null);

        let nextMetadata: FloMetadata = parsedMetadata
          ? { ...parsedMetadata }
          : { ...DEFAULT_METADATA };

        // Check/generate waveform_data
        if (
          (!nextMetadata.waveform_data ||
            !nextMetadata.waveform_data.peaks?.length) &&
          newAudioInfo
        ) {
          try {
            const lib = await import("@flo-audio/libflo-audio");
            const samples: Float32Array = await lib.decode(fileBytes);
            nextMetadata.waveform_data = generateWaveformData(
              samples,
              newAudioInfo.sample_rate,
              newAudioInfo.channels,
            );
          } catch (err) {
            // Optionally setError or no-op
          }
        }

        setMetadata(nextMetadata);

        // Extract album art from pictures if present
        if (nextMetadata.pictures) {
          const coverPic = nextMetadata.pictures.find(
            (p) => p.picture_type === "cover_front",
          );
          if (coverPic) {
            const blob = new Blob([coverPic.data], {
              type: coverPic.mime_type,
            });
            setAlbumArtUrl(URL.createObjectURL(blob));
          }
        }
        // Extract synced lyrics if present
        if (
          nextMetadata.synced_lyrics &&
          nextMetadata.synced_lyrics.length > 0
        ) {
          const firstSylt = nextMetadata.synced_lyrics[0];
          setSyltFrame({
            type: 1,
            timestampFormat: 2,
            language: firstSylt.language || "eng",
            description: firstSylt.description || "Synced Lyrics",
            text: firstSylt.lines.map((l) => [l.text, l.timestamp_ms]),
          });
        }

        const importedFieldCount = Object.values(nextMetadata || {}).filter(
          (value) => typeof value === "string" && value.trim().length > 0,
        ).length;
        const importedLyrics =
          nextMetadata?.synced_lyrics?.[0]?.lines.length ?? 0;
        const hasImportedData =
          importedFieldCount > 0 || Boolean(newAudioInfo) || importedLyrics > 0;

        setMetadataSummary(
          importedFieldCount > 0
            ? `Imported ${importedFieldCount} embedded tag${importedFieldCount === 1 ? "" : "s"}.`
            : "No embedded tags found.",
        );
        setSuccess(
          hasImportedData
            ? "Existing metadata imported. Continue editing below."
            : "File loaded. Add or update tags below.",
        );
      } catch (loaderErr) {
        if (activeFileSignature.current !== signature) {
          return;
        }
        console.error("Failed to parse metadata", loaderErr);
        setMetadataSummary("");
        setError(
          "Loaded file, but could not read embedded metadata automatically.",
        );
        setSuccess(null);
        setAudioInfo(null);
      }
    },
    [loadFloFile, buildFileSignature, resetMetadata],
  );

  const handleMetadataChange = (field: keyof FloMetadata, value: any) => {
    setMetadata((prev) => ({ ...prev, [field]: value }));
  };

  function handlePopularimeterChange(
    field: "email" | "rating" | "play_count",
    value: any,
  ) {
    setMetadata((prev) => ({
      ...prev,
      popularimeter: {
        email: field === "email" ? value : (prev.popularimeter?.email ?? ""),
        rating: field === "rating" ? value : (prev.popularimeter?.rating ?? 0),
        play_count:
          field === "play_count"
            ? value
            : (prev.popularimeter?.play_count ?? 0),
      },
    }));
  }

  const handleProcess = async () => {
    if (!file || !originalFileBytes) return;

    setError(null);
    setSuccess(null);

    const updatedFile = await updateMetadata(originalFileBytes, metadata);

    if (updatedFile) {
      // Generate filename as 'artist - title.flo' (objectively better way to save it), fallback to original if missing
      const artist = metadata.artist?.trim();
      const title = metadata.title?.trim();

      let newFileName;
      if (artist && title) {
        newFileName = `${artist} - ${title}.flo`;
      } else if (title) {
        newFileName = `${title}.flo`;
      } else {
        // fallback to original name ensuring .flo
        newFileName = file.name.endsWith(".flo")
          ? file.name
          : `${file.name.replace(/\.[^/.]+$/, "")}.flo`;
      }

      downloadFile(updatedFile, newFileName);
      setSuccess("File processed and downloaded successfully!");
    } else {
      setError("Failed to process file");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6">
      <div
        className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full blur-3xl opacity-60"
        style={{ backgroundImage: "var(--themegradient-active)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full blur-[140px] opacity-40"
        style={{ backgroundImage: "var(--themegradient-active)" }}
      />

      <main className="relative mx-auto flex max-w-5xl flex-col gap-6">
        {/* Hero */}
        <section className="glass-panel p-6 sm:p-8 space-y-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4 lg:max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/12 p-3 text-primary shadow-inner shadow-primary/30">
                  <Music className="h-6 w-6 icon-accent" />
                </div>
                <div>
                  <h1 className="text-3xl font-semibold hero-title">
                    <span className="gradient-text inline-block">
                      floEditor
                    </span>
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Tag flo™ files, embed art, and sync lyrics without leaving
                    your browser.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 lg:max-w-xs">
              <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4 text-right shadow-inner shadow-primary/10">
                <p className="micro-label justify-end text-primary/80">
                  Current file
                </p>
                <p
                  className={`text-2xl font-semibold ${file ? "text-primary" : "text-muted-foreground"}`}
                >
                  {file ? file.name : "No file loaded"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {file
                    ? "Ready for metadata tweaks."
                    : "Load a flo™ to unlock controls."}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                <ThemeToggle />
                <button
                  onClick={() => setShowEruda(!showEruda)}
                  type="button"
                  className="btn"
                  data-variant="soft"
                  data-size="sm"
                  data-tone="secondary"
                >
                  <Bug className="h-4 w-4 icon-accent" />
                  {showEruda ? "Hide" : "Show"} Debug
                </button>
              </div>
            </div>
          </div>

          {error && <AlertMessage type="error" message={error} />}
          {success && <AlertMessage type="success" message={success} />}

          <FileUploadSection
            file={file}
            onFileUpload={handleFileUpload}
            isParsingMetadata={isReadingMetadata}
            metadataSummary={metadataSummary}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {sessionStats.map(({ label, value, helper }) => (
              <div
                key={label}
                className="relative overflow-hidden rounded-xl border px-4 py-3 text-sm text-white shadow-lg shadow-primary/30"
                style={{
                  backgroundImage:
                    "var(--stat-card-gradient, var(--themegradient-active))",
                  borderColor: "var(--stat-card-border, transparent)",
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-black/10" />
                <div className="relative space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                    {label}
                  </p>
                  <p className="text-2xl font-semibold">{value}</p>
                  <p className="text-xs text-white/80">{helper}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ViewInfo metadata={metadata} />

        {/* Waveform Visualization */}
        <WaveformSection
          waveform={metadata.waveform_data}
          onRegenerate={
            originalFileBytes && audioInfo
              ? handleRegenerateWaveform
              : undefined
          }
        />

        {/* Basic Tags */}
        <BasicTagsSection
          metadata={metadata}
          onMetadataChange={handleMetadataChange}
        />

        {/* Advanced Tags */}
        <AdvancedTagsSection
          metadata={metadata}
          onMetadataChange={handleMetadataChange}
        />

        {/* Popularimeter */}
        <PopularimeterSection
          popularimeter={{
            email: metadata.popularimeter?.email ?? "",
            rating: metadata.popularimeter?.rating ?? 0,
            play_count: metadata.popularimeter?.play_count ?? 0,
          }}
          onChange={handlePopularimeterChange}
        />

        {/* Artwork */}
        <ArtworkSection
          pictures={metadata.pictures}
          onPicturesChange={(pictures) =>
            setMetadata({ ...metadata, pictures })
          }
          coverVariants={metadata.cover_variants}
          onCoverVariantsChange={(coverVariants) =>
            setMetadata({ ...metadata, cover_variants: coverVariants })
          }
          animatedCover={metadata.animated_cover}
          onAnimatedCoverChange={(animatedCover) =>
            setMetadata({ ...metadata, animated_cover: animatedCover })
          }
          artistSignature={metadata.artist_signature}
          onArtistSignatureChange={(pic) =>
            setMetadata({ ...metadata, artist_signature: pic })
          }
        />

        {/* Synced Lyrics */}
        <SyncedLyricsSection
          syncedLyrics={metadata.synced_lyrics}
          onSyncedLyricsChange={(val) =>
            handleMetadataChange("synced_lyrics", val)
          }
          unsyncedLyrics={
            Array.isArray(metadata.lyrics)
              ? metadata.lyrics.map((l) => l.text)
              : []
          }
          onUnsyncedLyricsChange={(arr) =>
            handleMetadataChange(
              "lyrics",
              arr.map((text) => ({ text })),
            )
          }
        />

        {/* Section Markers */}
        <SectionMarkersSection
          sectionMarkers={metadata.section_markers}
          onSectionMarkersChange={(sectionMarkers) =>
            setMetadata({ ...metadata, section_markers: sectionMarkers })
          }
        />

        {/* BPM Map */}
        <BpmMapSection
          bpmMap={metadata.bpm_map}
          onBpmMapChange={(bpmMap) =>
            setMetadata({ ...metadata, bpm_map: bpmMap })
          }
        />

        {/* Key Changes */}
        <KeyChangesSection
          keyChanges={metadata.key_changes}
          onKeyChangesChange={(keyChanges) =>
            handleMetadataChange("key_changes", keyChanges)
          }
        />

        {/* Creator Notes */}
        <CreatorNotesSection
          creatorNotes={metadata.creator_notes ?? []}
          onCreatorNotesChange={(list) =>
            handleMetadataChange("creator_notes", list)
          }
        />

        {/* Remix Chain */}
        <RemixChainSection
          remixChain={metadata.remix_chain ?? []}
          onRemixChainChange={(list) =>
            handleMetadataChange("remix_chain", list)
          }
        />

        {/* Collaboration Credits */}
        <CollaborationCreditsSection
          collaborationCredits={metadata.collaboration_credits ?? []}
          onCollaborationCreditsChange={(list) =>
            handleMetadataChange("collaboration_credits", list)
          }
        />

        {/* Custom Metadata */}
        <UserTextSection
          userText={metadata.user_text ?? []}
          onUserTextChange={(list) => handleMetadataChange("user_text", list)}
        />

        {/* Process Button */}
        <ProcessButton
          disabled={!file || isProcessing}
          isProcessing={isProcessing}
          fileName={file?.name}
          onProcess={handleProcess}
        />
      </main>
    </div>
  );
}
