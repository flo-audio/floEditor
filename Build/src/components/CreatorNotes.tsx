import { Plus, Trash2, StickyNote } from "lucide-react";

interface CreatorNote {
  timestamp_ms?: number;
  text: string;
}

interface CreatorNotesSectionProps {
  creatorNotes: CreatorNote[];
  onCreatorNotesChange: (next: CreatorNote[]) => void;
}

export function CreatorNotesSection({
  creatorNotes = [],
  onCreatorNotesChange,
}: CreatorNotesSectionProps) {
  const handleAdd = () => {
    onCreatorNotesChange([
      ...creatorNotes,
      { timestamp_ms: undefined, text: "" },
    ]);
  };

  const handleUpdate = (
    index: number,
    field: keyof CreatorNote,
    value: any,
  ) => {
    const updated = [...creatorNotes];
    updated[index] = { ...updated[index], [field]: value };
    onCreatorNotesChange(updated);
  };

  const handleDelete = (index: number) => {
    onCreatorNotesChange(creatorNotes.filter((_, i) => i !== index));
  };

  const formatTime = (ms?: number) => {
    if (ms == null) return "–";
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="micro-label">Notes</p>
          <h2 className="text-lg font-semibold">Creator Notes</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Personal/team notes with optional timestamps (ms)
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
          Add Note
        </button>
      </div>
      <div className="space-y-3">
        {creatorNotes.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <StickyNote className="h-10 w-10 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No notes yet</p>
            <p className="text-xs">Click "Add Note" to start</p>
          </div>
        ) : (
          creatorNotes.map((note, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm"
            >
              <input
                type="number"
                value={note.timestamp_ms ?? ""}
                onChange={(e) =>
                  handleUpdate(
                    index,
                    "timestamp_ms",
                    e.target.value === ""
                      ? undefined
                      : Math.max(0, parseInt(e.target.value || "0")),
                  )
                }
                placeholder="ms"
                className="w-24 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/40"
                min={0}
              />
              <span className="text-xs text-muted-foreground w-16">
                ({formatTime(note.timestamp_ms)})
              </span>
              <textarea
                value={note.text}
                onChange={(e) => handleUpdate(index, "text", e.target.value)}
                placeholder="Note text"
                className="flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50 min-h-8"
                maxLength={512}
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
