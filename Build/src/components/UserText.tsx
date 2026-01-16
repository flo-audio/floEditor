import { Plus, Trash2, Hash } from "lucide-react";

interface UserTextEntry {
  description: string;
  value: string;
}

interface UserTextSectionProps {
  userText: UserTextEntry[];
  onUserTextChange: (next: UserTextEntry[]) => void;
}

export function UserTextSection({
  userText = [],
  onUserTextChange,
}: UserTextSectionProps) {
  const handleAdd = () => {
    onUserTextChange([...userText, { description: "", value: "" }]);
  };

  const handleUpdate = (
    index: number,
    field: keyof UserTextEntry,
    value: string,
  ) => {
    const updated = [...userText];
    updated[index] = { ...updated[index], [field]: value };
    onUserTextChange(updated);
  };

  const handleDelete = (index: number) => {
    onUserTextChange(userText.filter((_, i) => i !== index));
  };

  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="micro-label">Advanced</p>
          <h2 className="text-lg font-semibold">Custom Metadata</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Store custom key/value info for your own app or player
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
          Add Pair
        </button>
      </div>
      <div className="space-y-3">
        {userText.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            <Hash className="h-10 w-10 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No custom data added</p>
            <p className="text-xs">Click "Add Pair" to start</p>
          </div>
        ) : (
          userText.map((row, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm"
            >
              <input
                type="text"
                value={row.description}
                onChange={(e) =>
                  handleUpdate(index, "description", e.target.value)
                }
                placeholder="Label"
                className="w-36 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={64}
              />
              <input
                type="text"
                value={row.value}
                onChange={(e) => handleUpdate(index, "value", e.target.value)}
                placeholder="Value"
                className="flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={255}
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
