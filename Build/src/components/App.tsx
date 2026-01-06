import { useState, useCallback, useEffect, useRef } from "react";
import { Music, Bug } from "lucide-react";
import { FileUploadSection } from "./Upload";
import { BasicTagsSection } from "./BasicTags";
import { AlbumArtSection } from "./AlbumArt";
import { SyncedLyricsSection } from "./SyncedLyrics";
import { ProcessButton } from "./Process";
import { AlertMessage } from "./Alert";
import { ThemeToggle } from "./ThemeToggle";
import { useID3Processor } from "../hooks/useID3Processor";
import { useLRCParser } from "../hooks/useLRCParser";
import { useID3Loader, DEFAULT_SYLT_FRAME } from "../hooks/useID3Loader";

export default function App() {
  const [file, setFile] = useState<File | null>(null);
  const [tags, setTags] = useState<ID3Tags>({});
  const [albumArtUrl, setAlbumArtUrl] = useState<string | null>(null);
  const [syltFrame, setSyltFrame] = useState<SYLTFrame>(() => ({ ...DEFAULT_SYLT_FRAME }));
  const [lrcText, setLrcText] = useState<string>("");
  const [showEruda, setShowEruda] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [metadataSummary, setMetadataSummary] = useState("");

  const { isProcessing, processFile } = useID3Processor();
  const { parseLRCFormat } = useLRCParser();
  const { isLoading: isReadingMetadata, loadMetadata } = useID3Loader();
  const activeFileSignature = useRef("");

  const buildFileSignature = useCallback(
    (target: File) => `${target.name}:${target.lastModified}:${target.size}`,
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined" && showEruda) {
      import("eruda").then((eruda) => {
        eruda.default.init();
        eruda.default.show();
      });
    }
  }, [showEruda]);

  const handleFileUpload = useCallback(
    async (uploadedFile: File | null) => {
      if (!uploadedFile) {
        activeFileSignature.current = "";
        setFile(null);
        setTags({});
        setAlbumArtUrl(null);
        setSyltFrame({ ...DEFAULT_SYLT_FRAME });
        setLrcText("");
        setMetadataSummary("");
        setSuccess(null);
        setError(null);
        return;
      }

      const acceptsMp3 =
        uploadedFile.type === "audio/mpeg" ||
        uploadedFile.type === "audio/mp3" ||
        uploadedFile.name.toLowerCase().endsWith(".mp3");

      if (!acceptsMp3) {
        setError("Please upload a valid MP3 file");
        setSuccess(null);
        return;
      }

      const signature = buildFileSignature(uploadedFile);
      activeFileSignature.current = signature;

      setFile(uploadedFile);
      setError(null);
      setSuccess("File loaded. Reading embedded tags...");
      setMetadataSummary("Scanning embedded metadata...");
      setTags({});
      setAlbumArtUrl(null);
      setSyltFrame({ ...DEFAULT_SYLT_FRAME });
      setLrcText("");

      try {
        const { tags: parsedTags, albumArtUrl: parsedAlbumArt, syltFrame: parsedSylt } = await loadMetadata(
          uploadedFile
        );

        if (activeFileSignature.current !== signature) {
          return;
        }

        setTags(parsedTags);
        setAlbumArtUrl(parsedAlbumArt);
        if (parsedSylt) {
          setSyltFrame({ ...DEFAULT_SYLT_FRAME, ...parsedSylt });
        }

        const importedFieldCount = Object.values(parsedTags).filter(
          (value) => typeof value === "string" && value.trim().length > 0
        ).length;
        const importedLyrics = parsedSylt?.text.length ?? 0;
        const hasImportedData =
          importedFieldCount > 0 || Boolean(parsedAlbumArt) || (parsedSylt && importedLyrics > 0);

        setMetadataSummary(
          importedFieldCount > 0
            ? `Imported ${importedFieldCount} embedded tag${importedFieldCount === 1 ? "" : "s"}.`
            : "No embedded tags found."
        );

        setSuccess(
          hasImportedData
            ? "Existing metadata imported. Continue editing below."
            : "File loaded. Add or update tags below."
        );
      } catch (loaderErr) {
        if (activeFileSignature.current !== signature) {
          return;
        }
        console.error("Failed to parse metadata", loaderErr);
        setMetadataSummary("");
        setError("Loaded file, but could not read embedded metadata automatically.");
        setSuccess(null);
      }
    },
    [loadMetadata, buildFileSignature]
  );

  const handleTagChange = (field: keyof ID3Tags, value: string) => {
    setTags((prev) => ({ ...prev, [field]: value }));
  };

  const handleLRCImport = () => {
    if (lrcText.trim()) {
      const entries = parseLRCFormat(lrcText);
      setSyltFrame((prev) => ({ ...prev, text: entries }));
      if (!tags.unsyncedLyrics || tags.unsyncedLyrics.trim().length === 0) {
        const derivedLyrics = entries
          .map(([line]) => line?.trim())
          .filter(Boolean)
          .join("\n");
        if (derivedLyrics) {
          setTags((prev) => ({ ...prev, unsyncedLyrics: derivedLyrics }));
        }
      }
      setLrcText("");
      setSuccess("LRC format lyrics imported successfully!");
    }
  };

  const handleProcess = async () => {
    if (!file) return;

    setError(null);
    setSuccess(null);

    const result = await processFile(file, tags, syltFrame, albumArtUrl);
    if (result.success) {
      setSuccess(result.message);
    } else {
      setError(result.message);
    }
  };

  const handleSYLTChange = (updatedText: [string, number][]) => {
    setSyltFrame((prev) => ({ ...prev, text: updatedText }));
  };

  const handleSYLTMetadataChange = (
    field: "language" | "description",
    value: string,
  ) => {
    setSyltFrame((prev) => ({ ...prev, [field]: value }));
  };

  const populatedFields = Object.values(tags).filter(
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
                      ID3Editor
                    </span>
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Tag MP3s, embed art, and sync lyrics without leaving your
                    browser.
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
                    : "Load an MP3 to unlock controls."}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                <ThemeToggle />
                <button
                  onClick={() => setShowEruda(!showEruda)}
                  type="button"
                  className="btn w-full"
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

        {/* Basic Tags */}
        <BasicTagsSection tags={tags} onTagChange={handleTagChange} />

        {/* Album Art */}
        <AlbumArtSection
          albumArtUrl={albumArtUrl}
          onAlbumArtChange={setAlbumArtUrl}
        />

        {/* Synced Lyrics */}
        <SyncedLyricsSection
          syltFrame={syltFrame}
          onTextChange={handleSYLTChange}
          onMetadataChange={handleSYLTMetadataChange}
          lrcText={lrcText}
          onLrcTextChange={setLrcText}
          onImport={handleLRCImport}
          unsyncedLyrics={tags.unsyncedLyrics || ""}
          onUnsyncedLyricsChange={(value) =>
            handleTagChange("unsyncedLyrics", value)
          }
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
