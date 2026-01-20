import { Info } from "lucide-react";

interface ViewInfoProps {
  metadata: FloMetadata;
}

const INFO_FIELDS: {
  key: keyof FloMetadata;
  label: string;
}[] = [
  { key: "original_filename", label: "Original Filename" },
  { key: "encoder_settings", label: "Encoder Settings" },
  { key: "flo_encoder_version", label: "Encoder Version" },
  { key: "encoding_time", label: "Encoding Time" },
  { key: "source_format", label: "Source Format" },
  { key: "tagging_time", label: "Last Tag Edit" },
  { key: "encoded_by", label: "Encoded By" },
];

function renderPrimitive(val: unknown): React.ReactNode {
  if (typeof val === "string" && val.trim().length > 0) return val;
  if (typeof val === "number") return val;
  // Blank with muted styling
  return <span className="text-muted-foreground">–</span>;
}

export function ViewInfo({ metadata }: ViewInfoProps) {
  const totalFields = INFO_FIELDS.length;
  const populatedFields = INFO_FIELDS.filter(({ key }) => {
    const v = metadata[key];
    return (
      (typeof v === "string" && v.trim().length > 0) ||
      (typeof v === "number" && v !== undefined && v !== null)
    );
  }).length;

  return (
    <section className="glass-panel p-6 mb-6">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <p className="micro-label flex items-center gap-1">
            <Info className="h-3.5 w-3.5 icon-accent -ml-0.5" />
            Technical
          </p>
          <h2 className="text-xl font-semibold mt-1">File & Encoding Info</h2>
        </div>
        <div className="text-sm bg-primary/10 border border-primary/30 rounded-full px-4 py-1 font-medium text-primary-foreground/80">
          {populatedFields} / {totalFields} fields filled
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {INFO_FIELDS.map(({ key, label }) => (
          <div key={key} className="space-y-1">
            <div className="text-xs text-muted-foreground">{label}</div>
            <div className="font-mono text-sm bg-primary/5 rounded px-2 py-1 border">
              {renderPrimitive(metadata[key])}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
