interface BasicTagsSectionProps {
  metadata: FloMetadata;
  onMetadataChange: (field: keyof FloMetadata, value: any) => void;
}

type TagField = {
  key: keyof FloMetadata;
  label: string;
  placeholder: string;
  type?: "text" | "number";
  colSpan?: "full";
};

const ESSENTIALS: TagField[] = [
  { key: "title", label: "Title", placeholder: "Song title" },
  { key: "artist", label: "Artist", placeholder: "Primary artist" },
  { key: "album", label: "Album", placeholder: "Album name" },
  {
    key: "album_artist",
    label: "Album Artist",
    placeholder: "Various Artists",
  },
  { key: "genre", label: "Genre", placeholder: "Electronic" },
  { key: "year", label: "Year", placeholder: "2025", type: "number" },
];

const RELEASE_DETAILS: TagField[] = [
  {
    key: "track_number",
    label: "Track Number",
    placeholder: "04",
    type: "number",
  },
  {
    key: "track_total",
    label: "Total Tracks",
    placeholder: "12",
    type: "number",
  },
  {
    key: "disc_number",
    label: "Disc Number",
    placeholder: "1",
    type: "number",
  },
  { key: "disc_total", label: "Total Discs", placeholder: "2", type: "number" },
  { key: "bpm", label: "BPM", placeholder: "118", type: "number" },
  { key: "key", label: "Key", placeholder: "A Minor" },
  {
    key: "isrc",
    label: "ISRC",
    placeholder: "US-ABC-24-00001",
    colSpan: "full",
  },
];

const CREDITS: TagField[] = [
  { key: "composer", label: "Composer", placeholder: "Composer name" },
  { key: "lyricist", label: "Lyricist", placeholder: "Lyric writer" },
  { key: "publisher", label: "Publisher", placeholder: "Label / Publisher" },
  { key: "copyright", label: "Copyright", placeholder: "℗ & © info" },
  { key: "mood", label: "Mood", placeholder: "Euphoric night drive" },
  { key: "encoded_by", label: "Encoded By", placeholder: "floEditor" },
];

const URLS: TagField[] = [
  {
    key: "url_commercial",
    label: "Commercial URL",
    placeholder: "https://example.com/buy",
    colSpan: "full",
  },
];

export function BasicTagsSection({
  metadata,
  onMetadataChange,
}: BasicTagsSectionProps) {
  const populatedFields = Object.values(metadata).filter(
    (value) => typeof value === "string" && value.trim().length > 0
  ).length;
  const totalFields =
    ESSENTIALS.length +
    RELEASE_DETAILS.length +
    CREDITS.length +
    URLS.length +
    1; // + comment

  const renderInput = ({
    key,
    label,
    placeholder,
    type,
    colSpan,
  }: TagField) => {
    const value = metadata[key];
    const stringValue =
      typeof value === "string" || typeof value === "number" ? value : "";
    return (
      <div
        key={key}
        className={`space-y-2 ${colSpan === "full" ? "md:col-span-2" : ""}`}
      >
        <label
          htmlFor={key as string}
          className="text-sm font-semibold tracking-wide text-foreground/80"
        >
          {label}
        </label>
        <input
          id={key as string}
          value={stringValue}
          onChange={(e) =>
            onMetadataChange(
              key,
              type === "number"
                ? parseInt(e.target.value) || undefined
                : e.target.value
            )
          }
          placeholder={placeholder}
          type={type ?? "text"}
          className="w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        />
      </div>
    );
  };

  return (
    <section className="glass-panel p-6 mb-6">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <p className="micro-label">Metadata</p>
          <h2 className="text-xl font-semibold mt-1">Flo™ Tag Editor</h2>
        </div>
        <div className="text-sm bg-primary/10 border border-primary/30 rounded-full px-4 py-1 font-medium text-primary-foreground/80">
          {populatedFields} / {totalFields} fields filled
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wide text-foreground/70">
            Essentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ESSENTIALS.map(renderInput)}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wide text-foreground/70">
            Release Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RELEASE_DETAILS.map(renderInput)}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wide text-foreground/70">
            Credits & Codes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CREDITS.map(renderInput)}
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold tracking-wide text-foreground/70">
            Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {URLS.map(renderInput)}
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-2">
        <label
          htmlFor="comment"
          className="text-sm font-semibold tracking-wide text-foreground/80"
        >
          Comments
        </label>
        <textarea
          id="comment"
          rows={4}
          value={metadata.comments?.[0]?.text || ""}
          onChange={(e) =>
            onMetadataChange("comments", [{ text: e.target.value }])
          }
          placeholder="Liner notes, sample credits, or short story behind the track..."
          className="w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        />
      </div>
    </section>
  );
}
