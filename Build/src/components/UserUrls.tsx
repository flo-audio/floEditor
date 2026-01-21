import { Plus, Trash2, Link } from "lucide-react";

interface UserUrl {
  description: string;
  url: string;
}

interface UserUrlsSectionProps {
  userUrls: UserUrl[];
  onUserUrlsChange: (urls: UserUrl[]) => void;
}

export function UserUrlsSection({
  userUrls = [],
  onUserUrlsChange,
}: UserUrlsSectionProps) {
  const handleAdd = () => {
    onUserUrlsChange([...userUrls, { description: "", url: "" }]);
  };

  const handleUpdate = (index: number, field: keyof UserUrl, value: string) => {
    const updated = [...userUrls];
    updated[index] = { ...updated[index], [field]: value };
    onUserUrlsChange(updated);
  };

  const handleDelete = (index: number) => {
    onUserUrlsChange(userUrls.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground/70 flex items-center gap-2">
            User URLs
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Store custom URLs with descriptions (advanced use)
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
          Add URL
        </button>
      </div>
      <div className="space-y-2">
        {userUrls.length === 0 ? (
          <div className="text-center text-muted-foreground py-4">
            <Link className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No custom URLs added</p>
            <p className="text-xs">Click "Add URL" to start</p>
          </div>
        ) : (
          userUrls.map((entry, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-3"
            >
              <input
                type="text"
                value={entry.description}
                onChange={(e) =>
                  handleUpdate(index, "description", e.target.value)
                }
                placeholder="Label / Description"
                className="w-44 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={100}
              />
              <input
                type="url"
                value={entry.url}
                onChange={(e) => handleUpdate(index, "url", e.target.value)}
                placeholder="https://example.com"
                className="flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={512}
              />
              <button
                onClick={() => handleDelete(index)}
                type="button"
                className="btn"
                data-variant="soft"
                data-tone="danger"
                data-size="xs"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
