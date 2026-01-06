import { Plus, Trash2, Activity, TrendingUp } from "lucide-react";

interface BpmMapSectionProps {
  bpmMap: BpmChange[];
  onBpmMapChange: (bpmMap: BpmChange[]) => void;
}

export function BpmMapSection({
  bpmMap = [],
  onBpmMapChange,
}: BpmMapSectionProps) {
  const handleAdd = () => {
    onBpmMapChange([...bpmMap, { timestamp_ms: 0, bpm: 120 }]);
  };

  const handleUpdate = (index: number, field: keyof BpmChange, value: any) => {
    const updated = [...bpmMap];
    updated[index] = { ...updated[index], [field]: value };
    onBpmMapChange(updated);
  };

  const handleDelete = (index: number) => {
    onBpmMapChange(bpmMap.filter((_, i) => i !== index));
  };

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const sortedBpmMap = [...bpmMap].sort(
    (a, b) => a.timestamp_ms - b.timestamp_ms,
  );

  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="micro-label">Analysis</p>
          <h2 className="text-lg font-semibold">BPM Map</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Track tempo changes over time
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
          Add Change
        </button>
      </div>
      <div className="space-y-3">
        {sortedBpmMap.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <TrendingUp className="h-10 w-10 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No BPM changes added</p>
            <p className="text-xs">Click "Add Change" to start</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="h-4 w-4" />
              <span>
                Timeline:{" "}
                {sortedBpmMap
                  .map(
                    (c, i) =>
                      `${formatTime(c.timestamp_ms)} → ${c.bpm} BPM${i < sortedBpmMap.length - 1 ? ", " : ""}`,
                  )
                  .join("")}
              </span>
            </div>
            {sortedBpmMap.map((change, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <Activity className="h-4 w-4 icon-accent flex-shrink-0" />
                  <input
                    type="number"
                    value={change.timestamp_ms}
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
                    ({formatTime(change.timestamp_ms)})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 icon-accent" />
                  <input
                    type="number"
                    value={change.bpm}
                    onChange={(e) =>
                      handleUpdate(
                        index,
                        "bpm",
                        Math.max(1, parseFloat(e.target.value) || 120),
                      )
                    }
                    placeholder="BPM"
                    step="0.1"
                    className="w-16 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                  />
                  <span className="text-xs text-muted-foreground">BPM</span>
                </div>
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
            ))}
          </>
        )}
      </div>
    </section>
  );
}
