import { Plus, Trash2, Users2 } from "lucide-react";

interface CollaborationCredit {
  role: string;
  name: string;
  timestamp_ms?: number;
}

interface CollaborationCreditsSectionProps {
  collaborationCredits: CollaborationCredit[];
  onCollaborationCreditsChange: (next: CollaborationCredit[]) => void;
}

export function CollaborationCreditsSection({
  collaborationCredits = [],
  onCollaborationCreditsChange,
}: CollaborationCreditsSectionProps) {
  const handleAdd = () => {
    onCollaborationCreditsChange([
      ...collaborationCredits,
      { role: "", name: "", timestamp_ms: undefined },
    ]);
  };

  const handleUpdate = (
    index: number,
    field: keyof CollaborationCredit,
    value: any,
  ) => {
    const updated = [...collaborationCredits];
    updated[index] = { ...updated[index], [field]: value };
    onCollaborationCreditsChange(updated);
  };

  const handleDelete = (index: number) => {
    onCollaborationCreditsChange(
      collaborationCredits.filter((_, i) => i !== index),
    );
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
          <p className="micro-label">People</p>
          <h2 className="text-lg font-semibold">Collaboration Credits</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Add credits for each contributor and their role. Optionally
            timestamp their contribution!
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
          Add Credit
        </button>
      </div>
      <div className="space-y-3">
        {collaborationCredits.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <Users2 className="h-10 w-10 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No collaboration credits</p>
            <p className="text-xs">Click "Add Credit" to start</p>
          </div>
        ) : (
          collaborationCredits.map((credit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm"
            >
              <input
                type="text"
                value={credit.role}
                onChange={(e) => handleUpdate(index, "role", e.target.value)}
                placeholder="Role (e.g. Producer)"
                className="w-32 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={40}
              />
              <input
                type="text"
                value={credit.name}
                onChange={(e) => handleUpdate(index, "name", e.target.value)}
                placeholder="Name"
                className="w-48 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={64}
              />
              <input
                type="number"
                value={credit.timestamp_ms ?? ""}
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
                ({formatTime(credit.timestamp_ms)})
              </span>
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
