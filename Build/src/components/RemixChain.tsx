import { Plus, Trash2, Shuffle } from "lucide-react";

interface RemixChainEntry {
  title: string;
  artist: string;
  year?: number;
  isrc?: string;
  relationship: string;
}

interface RemixChainSectionProps {
  remixChain: RemixChainEntry[];
  onRemixChainChange: (chain: RemixChainEntry[]) => void;
}

export function RemixChainSection({
  remixChain = [],
  onRemixChainChange,
}: RemixChainSectionProps) {
  const handleAdd = () => {
    onRemixChainChange([
      ...remixChain,
      { title: "", artist: "", year: undefined, isrc: "", relationship: "" },
    ]);
  };

  const handleUpdate = (
    index: number,
    field: keyof RemixChainEntry,
    value: any
  ) => {
    const updated = [...remixChain];
    updated[index] = { ...updated[index], [field]: value };
    onRemixChainChange(updated);
  };

  const handleDelete = (index: number) => {
    onRemixChainChange(remixChain.filter((_, i) => i !== index));
  };

  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="micro-label">Lineage</p>
          <h2 className="text-lg font-semibold">Remix/Chain History</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Credits for source originals, remixes, covers, samples, etc.
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
          Add Entry
        </button>
      </div>
      <div className="space-y-3">
        {remixChain.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <Shuffle className="h-10 w-10 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No remix/covers/lineage set yet</p>
            <p className="text-xs">Click "Add Entry" to start</p>
          </div>
        ) : (
          remixChain.map((entry, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm"
            >
              <input
                type="text"
                value={entry.title}
                onChange={(e) => handleUpdate(index, "title", e.target.value)}
                placeholder="Title"
                className="w-32 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={100}
              />
              <input
                type="text"
                value={entry.artist}
                onChange={(e) => handleUpdate(index, "artist", e.target.value)}
                placeholder="Artist"
                className="w-32 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={80}
              />
              <input
                type="number"
                value={entry.year ?? ""}
                onChange={(e) =>
                  handleUpdate(
                    index,
                    "year",
                    e.target.value === "" ? undefined : parseInt(e.target.value)
                  )
                }
                placeholder="Year"
                className="w-16 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                min={0}
              />
              <input
                type="text"
                value={entry.isrc ?? ""}
                onChange={(e) => handleUpdate(index, "isrc", e.target.value)}
                placeholder="ISRC"
                className="w-32 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={32}
              />
              <input
                type="text"
                value={entry.relationship}
                onChange={(e) =>
                  handleUpdate(index, "relationship", e.target.value)
                }
                placeholder="Relationship (remix/sample/cover)"
                className="w-65 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={32}
              />

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
          ))
        )}
      </div>
    </section>
  );
}
