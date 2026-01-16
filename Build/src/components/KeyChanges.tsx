// Build/src/components/KeyChanges.tsx

import { Plus, Trash2, KeyRound, Hash } from "lucide-react";

interface KeyChange {
  timestamp_ms: number;
  key: string;
}

interface KeyChangesSectionProps {
  keyChanges: KeyChange[];
  onKeyChangesChange: (keyChanges: KeyChange[]) => void;
}

export function KeyChangesSection({
  keyChanges = [],
  onKeyChangesChange,
}: KeyChangesSectionProps) {
  const handleAdd = () => {
    onKeyChangesChange([...keyChanges, { timestamp_ms: 0, key: "" }]);
  };

  const handleUpdate = (index: number, field: keyof KeyChange, value: any) => {
    const updated = [...keyChanges];
    updated[index] = { ...updated[index], [field]: value };
    onKeyChangesChange(updated);
  };

  const handleDelete = (index: number) => {
    onKeyChangesChange(keyChanges.filter((_, i) => i !== index));
  };

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const sorted = [...keyChanges].sort(
    (a, b) => a.timestamp_ms - b.timestamp_ms
  );

  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="micro-label">Analysis</p>
          <h2 className="text-lg font-semibold">Key Changes</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Track musical key changes over time (e.g. C, F#m, D♭)
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="btn"
          data-variant="soft"
          data-tone="primary"
          data-size="sm"
          type="button"
        >
          <Plus className="h-4 w-4 icon-accent" />
          Add Change
        </button>
      </div>
      <div className="space-y-3">
        {sorted.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <KeyRound className="h-10 w-10 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No key changes added</p>
            <p className="text-xs">Click "Add Change" to start</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Hash className="h-4 w-4" />
              <span>
                Timeline:{" "}
                {sorted
                  .map(
                    (c, i) =>
                      `${formatTime(c.timestamp_ms)} → ${c.key || "?"}${
                        i < sorted.length - 1 ? ", " : ""
                      }`
                  )
                  .join("")}
              </span>
            </div>
            {sorted.map((change, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <KeyRound className="h-4 w-4 icon-accent flex-shrink-0" />
                  <input
                    type="number"
                    value={change.timestamp_ms}
                    onChange={(e) =>
                      handleUpdate(
                        index,
                        "timestamp_ms",
                        Math.max(0, parseInt(e.target.value) || 0)
                      )
                    }
                    placeholder="ms"
                    className="w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                  />
                  <span className="text-xs text-muted-foreground">
                    ({formatTime(change.timestamp_ms)})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={change.key}
                    onChange={(e) => handleUpdate(index, "key", e.target.value)}
                    placeholder="Key (e.g. C#m)"
                    className="w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                  />
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="btn"
                  data-variant="soft"
                  data-tone="danger"
                  data-size="xs"
                  type="button"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
