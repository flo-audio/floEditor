import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { UserUrlsSection } from "./UserUrls";
import { InvolvedPeopleSection } from "./InvolvedPeople";

interface AdvancedTagsSectionProps {
  metadata: FloMetadata;
  onMetadataChange: (field: keyof FloMetadata, value: any) => void;
}

type AdvField = {
  key: keyof FloMetadata;
  label: string;
  placeholder?: string;
  type?: "text" | "number";
  colSpan?: "full";
};

const STRUCTURE: AdvField[] = [
  {
    key: "content_group",
    label: "Content Group",
    placeholder: "e.g. Movement 1",
  },
  {
    key: "original_album",
    label: "Original Album",
    placeholder: "e.g. Greatest Hits 1979",
  },
  {
    key: "original_artist",
    label: "Original Artist",
    placeholder: "If this is a cover/remix",
  },
  {
    key: "original_lyricist",
    label: "Original Lyricist",
    placeholder: "Lyricist for a cover",
  },
];

const SORT_OWNERSHIP: AdvField[] = [
  { key: "album_sort", label: "Album Sort", placeholder: "Night at Opera, A" },
  { key: "artist_sort", label: "Artist Sort", placeholder: "Queen, The" },
  { key: "title_sort", label: "Title Sort", placeholder: "Bohemian Rhapsody" },
  {
    key: "file_owner",
    label: "File Owner",
    placeholder: "Copyright owner/label",
  },
];

const LINKS: AdvField[] = [
  {
    key: "url_audio_file",
    label: "Audio File URL",
    placeholder: "Direct track URL",
    colSpan: "full",
  },
  {
    key: "url_audio_source",
    label: "Audio Source URL",
    placeholder: "Original source URL",
    colSpan: "full",
  },
  {
    key: "url_radio_station",
    label: "Radio Station URL",
    placeholder: "Radio stream/source",
    colSpan: "full",
  },
  {
    key: "url_payment",
    label: "Payment/Tip URL",
    placeholder: "Buy link / tip jar",
    colSpan: "full",
  },
];

const TIMING: AdvField[] = [
  {
    key: "playlist_delay",
    label: "Playlist Delay (ms)",
    type: "number",
    placeholder: "Delay before playback",
  },
  {
    key: "recording_time",
    label: "Recording Time",
    placeholder: "YYYY-MM-DD or ISO date",
  },
  {
    key: "release_time",
    label: "Release Time",
    placeholder: "YYYY-MM-DD or ISO date",
  },
  { key: "radio_station", label: "Radio Station", placeholder: "e.g. NPR One" },
  {
    key: "radio_station_owner",
    label: "Radio Station Owner",
    placeholder: "Owner of station",
  },
];

const GROUPS = [
  { name: "Structure", fields: STRUCTURE },
  { name: "Sorting & Ownership", fields: SORT_OWNERSHIP },
  { name: "Links", fields: LINKS },
  { name: "Timing & Broadcast", fields: TIMING },
];

// Flat list of all field configs
const ALL_ADV_FIELDS: AdvField[] = [
  ...STRUCTURE,
  ...SORT_OWNERSHIP,
  ...LINKS,
  ...TIMING,
];

export function AdvancedTagsSection({
  metadata,
  onMetadataChange,
}: AdvancedTagsSectionProps) {
  const [expanded, setExpanded] = useState(false);

  // Count only string/number-populated advanced fields
  const populatedFields = ALL_ADV_FIELDS.filter(({ key }) => {
    const v = metadata[key];
    return (
      (typeof v === "string" && v.trim().length > 0) ||
      (typeof v === "number" && !isNaN(v))
    );
  }).length;
  const totalFields = ALL_ADV_FIELDS.length;

  const renderInput = ({
    key,
    label,
    placeholder,
    type,
    colSpan,
  }: AdvField) => {
    const value = metadata[key];
    if (
      value !== undefined &&
      value !== null &&
      typeof value !== "string" &&
      typeof value !== "number"
    ) {
      return null;
    }
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
          value={value ?? ""}
          onChange={(e) =>
            onMetadataChange(
              key,
              type === "number"
                ? e.target.value === ""
                  ? undefined
                  : parseInt(e.target.value) || 0
                : e.target.value,
            )
          }
          type={type ?? "text"}
          placeholder={placeholder}
          className="w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        />
      </div>
    );
  };

  return (
    <section className="glass-panel p-6 mb-6">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <p className="micro-label">Advanced</p>
          <h2 className="text-xl font-semibold mt-1">Advanced Tags</h2>
        </div>
        <div className="text-sm bg-primary/10 border border-primary/30 rounded-full px-4 py-1 font-medium text-primary-foreground/80">
          {populatedFields} / {totalFields} fields filled
        </div>
      </div>
      <button
        type="button"
        className="flex items-center w-full gap-2 text-lg font-semibold mb-4 select-none"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <span className="ml-auto">
          {expanded ? (
            <ChevronDown className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </span>
      </button>
      {expanded && (
        <div className="space-y-8">
          {GROUPS.map(({ name, fields }) => (
            <div key={name} className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wide text-foreground/70">
                {name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.map(renderInput)}
              </div>
            </div>
          ))}

          <UserUrlsSection
            userUrls={metadata.user_urls ?? []}
            onUserUrlsChange={(list) => onMetadataChange("user_urls", list)}
          />

          <InvolvedPeopleSection
            involvedPeople={(metadata.involved_people ?? []).map(
              ([role, name]) => ({
                role,
                name,
              }),
            )}
            onInvolvedPeopleChange={(list) =>
              onMetadataChange(
                "involved_people",
                list.map(({ role, name }) => [role, name]),
              )
            }
          />

          <span>
            <hr></hr>
          </span>

          <p className="text-xs text-muted-foreground mt-4">
            These fields are optional and rarely used; fill in only if needed
            for advanced use cases, library sorting, or publishing metadata.
          </p>
        </div>
      )}
    </section>
  );
}
