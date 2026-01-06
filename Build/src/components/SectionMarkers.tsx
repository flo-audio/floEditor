import {
  Plus,
  Trash2,
  Clock,
  Music,
  BookOpen,
  Mic,
  Building2,
  Guitar,
  LogOut,
} from "lucide-react";

interface SectionMarkersSectionProps {
  sectionMarkers?: SectionMarker[];
  onSectionMarkersChange: (markers: SectionMarker[]) => void;
}

const SECTION_TYPES: {
  value: SectionType;
  label: string;
  icon: typeof Music;
}[] = [
  { value: "intro", label: "Intro", icon: Music },
  { value: "verse", label: "Verse", icon: BookOpen },
  { value: "chorus", label: "Chorus", icon: Mic },
  { value: "bridge", label: "Bridge", icon: Building2 },
  { value: "solo", label: "Solo", icon: Guitar },
  { value: "outro", label: "Outro", icon: LogOut },
  // TODO: Add more later
];

export function SectionMarkersSection({
  sectionMarkers = [],
  onSectionMarkersChange,
}: SectionMarkersSectionProps) {
  const handleAdd = () => {
    onSectionMarkersChange([
      ...sectionMarkers,
      { timestamp_ms: 0, section_type: "verse", label: "" },
    ]);
  };

  const handleUpdate = (
    index: number,
    field: keyof SectionMarker,
    value: any,
  ) => {
    const updated = [...sectionMarkers];
    updated[index] = { ...updated[index], [field]: value };
    onSectionMarkersChange(updated);
  };

  const handleDelete = (index: number) => {
    onSectionMarkersChange(sectionMarkers.filter((_, i) => i !== index));
  };

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes}:${seconds.toString().padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="micro-label">Timing</p>
          <h2 className="text-lg font-semibold">Section Markers</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Mark song sections for better playback
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="btn"
          data-variant="soft"
          data-tone="primary"
          data-size="sm"
        >
          <Plus className="h-4 w-4 icon-accent" />
          Add Marker
        </button>
      </div>
      <div className="space-y-3">
        {sectionMarkers.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <Music className="h-10 w-10 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No section markers added</p>
            <p className="text-xs">Click "Add Marker" to start</p>
          </div>
        ) : (
          sectionMarkers.map((marker, index) => {
            const typeData = SECTION_TYPES.find(
              (t) => t.value === marker.section_type,
            );
            const Icon = typeData?.icon || Music;
            return (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm"
              >
                <Icon className="h-5 w-5 icon-accent flex-shrink-0" />
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <Clock className="h-4 w-4 icon-accent flex-shrink-0" />
                  <input
                    type="number"
                    value={marker.timestamp_ms}
                    onChange={(e) =>
                      handleUpdate(
                        index,
                        "timestamp_ms",
                        Math.max(0, parseInt(e.target.value) || 0),
                      )
                    }
                    placeholder="ms"
                    className="w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                  />
                  <span className="text-xs text-muted-foreground">
                    ({formatTime(marker.timestamp_ms)})
                  </span>
                </div>
                <select
                  value={marker.section_type}
                  onChange={(e) =>
                    handleUpdate(
                      index,
                      "section_type",
                      e.target.value as SectionType,
                    )
                  }
                  className="border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                >
                  {SECTION_TYPES.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <input
                  value={marker.label || ""}
                  onChange={(e) => handleUpdate(index, "label", e.target.value)}
                  placeholder="Custom label"
                  className="flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                />
                <button
                  onClick={() => handleDelete(index)}
                  className="btn"
                  data-variant="soft"
                  data-tone="danger"
                  data-size="xs"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
