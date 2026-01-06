interface BasicTagsSectionProps {
  tags: ID3Tags;
  onTagChange: (field: keyof ID3Tags, value: string) => void;
}

type TagField = {
  key: keyof ID3Tags;
  label: string;
  placeholder: string;
  type?: "text" | "number";
  colSpan?: "full";
};

const INPUT_GROUPS: Array<{
  title: string;
  description: string;
  fields: TagField[];
}> = [
  {
    title: "Essentials",
    description: "Core fields most players surface first.",
    fields: [
      { key: "title", label: "Title", placeholder: "Song title" },
      { key: "artist", label: "Artist", placeholder: "Primary artist" },
      { key: "album", label: "Album", placeholder: "Album name" },
      {
        key: "albumArtist",
        label: "Album Artist",
        placeholder: "Various Artists",
      },
      { key: "genre", label: "Genre", placeholder: "Electronic" },
      { key: "year", label: "Year", placeholder: "2025", type: "number" },
    ],
  },
  {
    title: "Release Details",
    description: "Catalog data that keeps sequenced projects in order.",
    fields: [
      { key: "track", label: "Track Number", placeholder: "04" },
      { key: "trackTotal", label: "Total Tracks", placeholder: "12" },
      { key: "disc", label: "Disc Number", placeholder: "1" },
      { key: "discTotal", label: "Total Discs", placeholder: "2" },
      { key: "bpm", label: "BPM", placeholder: "118", type: "number" },
      { key: "initialKey", label: "Key", placeholder: "A Minor" },
      {
        key: "isrc",
        label: "ISRC",
        placeholder: "US-ABC-24-00001",
        colSpan: "full",
      },
    ],
  },
  {
    title: "Credits & Codes",
    description:
      "Make sure collaborators and publishers get proper attribution.",
    fields: [
      { key: "composer", label: "Composer", placeholder: "Composer name" },
      { key: "lyricist", label: "Lyricist", placeholder: "Lyric writer" },
      {
        key: "publisher",
        label: "Publisher",
        placeholder: "Label / Publisher",
      },
      { key: "copyright", label: "Copyright", placeholder: "℗ & © info" },
      { key: "grouping", label: "Grouping", placeholder: "DJ edits / suite" },
      { key: "mood", label: "Mood", placeholder: "Euphoric night drive" },
      { key: "encoder", label: "Encoded By", placeholder: "ID3Editor" },
    ],
  },
  {
    title: "Links",
    description: "Optional shareable destination for this release.",
    fields: [
      {
        key: "website",
        label: "Website / Link",
        placeholder: "https://example.com",
        colSpan: "full",
      },
    ],
  },
];

export function BasicTagsSection({ tags, onTagChange }: BasicTagsSectionProps) {
  const populatedFields = Object.entries(tags).filter(([, value]) =>
    Boolean(value && value.trim()),
  ).length;
  const totalFields =
    INPUT_GROUPS.reduce((count, group) => count + group.fields.length, 0) + 1; // + comment

  const renderInput = ({
    key,
    label,
    placeholder,
    type,
    colSpan,
  }: TagField) => (
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
        value={tags[key] || ""}
        onChange={(e) => onTagChange(key, e.target.value)}
        placeholder={placeholder}
        type={type ?? "text"}
        className="w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
      />
    </div>
  );

  return (
    <section className="glass-panel p-6 mb-6">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <p className="micro-label">Metadata</p>
          <h2 className="text-xl font-semibold mt-1">ID3 Tag Editor</h2>
        </div>
        <div className="text-sm bg-primary/10 border border-primary/30 rounded-full px-4 py-1 font-medium text-primary-foreground/80">
          {populatedFields} / {totalFields} fields filled
        </div>
      </div>

      <div className="space-y-8">
        {INPUT_GROUPS.map((group) => (
          <div key={group.title} className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-foreground/70">
                {group.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {group.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.fields.map(renderInput)}
            </div>
          </div>
        ))}
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
          value={tags.comment || ""}
          onChange={(e) => onTagChange("comment", e.target.value)}
          placeholder="Liner notes, sample credits, or short story behind the track..."
          className="w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        />
      </div>
    </section>
  );
}
