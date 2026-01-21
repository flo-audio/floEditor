import { Plus, Trash2, User } from "lucide-react";

interface InvolvedPerson {
  role: string;
  name: string;
}

interface InvolvedPeopleSectionProps {
  involvedPeople: InvolvedPerson[];
  onInvolvedPeopleChange: (people: InvolvedPerson[]) => void;
}

export function InvolvedPeopleSection({
  involvedPeople = [],
  onInvolvedPeopleChange,
}: InvolvedPeopleSectionProps) {
  const handleAdd = () => {
    onInvolvedPeopleChange([...involvedPeople, { role: "", name: "" }]);
  };

  const handleUpdate = (
    index: number,
    field: keyof InvolvedPerson,
    value: string,
  ) => {
    const updated = [...involvedPeople];
    updated[index] = { ...updated[index], [field]: value };
    onInvolvedPeopleChange(updated);
  };

  const handleDelete = (index: number) => {
    onInvolvedPeopleChange(involvedPeople.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3 mt-8">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground/70 flex items-center gap-2">
            Additional Credits
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Credit any other contributors: engineers, producers, artwork, etc.
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
          Add Person
        </button>
      </div>
      <div className="space-y-2">
        {involvedPeople.length === 0 ? (
          <div className="text-center text-muted-foreground py-4">
            <User className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No additional credits added</p>
            <p className="text-xs">Click "Add Person" to start</p>
          </div>
        ) : (
          involvedPeople.map((person, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-3"
            >
              <input
                type="text"
                value={person.role}
                onChange={(e) => handleUpdate(index, "role", e.target.value)}
                placeholder="Role (e.g. Producer)"
                className="w-44 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={64}
              />
              <input
                type="text"
                value={person.name}
                onChange={(e) => handleUpdate(index, "name", e.target.value)}
                placeholder="Name"
                className="flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={128}
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
