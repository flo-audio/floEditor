import { FileText } from "lucide-react";

interface FileUploadSectionProps {
  file: File | null;
  onFileUpload: (file: File | null) => void;
  isParsingMetadata?: boolean;
  metadataSummary?: string;
}

export function FileUploadSection({
  file,
  onFileUpload,
  isParsingMetadata = false,
  metadataSummary,
}: FileUploadSectionProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFileUpload(event.target.files?.[0] || null);
  };

  return (
    <div className="space-y-3">
      <label className="micro-label">Upload MP3 File</label>
      <label
        className="group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 px-4 py-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/60 cursor-pointer"
        aria-busy={isParsingMetadata}
      >
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/15 p-2 text-primary">
            <FileText className="h-4 w-4 icon-accent" />
          </div>
          <div>
            <p className="font-semibold">Drop or browse your MP3</p>
            <p className="text-xs text-muted-foreground">
              All metadata editing happens locally.
            </p>
          </div>
        </div>
        <span
          className="btn"
          data-variant="solid"
          data-tone="primary"
          data-size="xs"
        >
          Browse
        </span>
        <input
          type="file"
          accept="audio/mpeg,audio/mp3"
          onChange={handleChange}
          className="sr-only"
        />
      </label>
      {file && (
        <div className="rounded-lg border border-input/60 bg-background/60 px-3 py-2 text-sm flex items-center gap-2">
          <FileText className="h-4 w-4 icon-accent" />
          <div className="flex flex-col">
            <span className="font-medium">{file.name}</span>
            <span className="text-xs text-muted-foreground">
              Ready to tag · {(file.size / (1024 * 1024)).toFixed(2)} MB
            </span>
          </div>
        </div>
      )}
      {file && (
        <div className="text-xs text-muted-foreground">
          {isParsingMetadata ? (
            <span className="flex items-center gap-2 text-primary">
              <span
                className="h-1.5 w-1.5 animate-ping rounded-full bg-primary"
                aria-hidden="true"
              />
              Reading embedded tags...
            </span>
          ) : metadataSummary ? (
            <span className="text-foreground/70">{metadataSummary}</span>
          ) : null}
        </div>
      )}
    </div>
  );
}
