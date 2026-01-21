import { Plus, Trash2, Music3 } from "lucide-react";

interface MusicianCredit {
  instrument: string;
  name: string;
}

interface MusicianCreditsSectionProps {
  musicianCredits: MusicianCredit[];
  onMusicianCreditsChange: (credits: MusicianCredit[]) => void;
}

export function MusicianCreditsSection({
  musicianCredits = [],
  onMusicianCreditsChange,
}: MusicianCreditsSectionProps) {
  const handleAdd = () => {
    onMusicianCreditsChange([...musicianCredits, { instrument: "", name: "" }]);
  };

  const handleUpdate = (
    index: number,
    field: keyof MusicianCredit,
    value: string,
  ) => {
    const updated = [...musicianCredits];
    updated[index] = { ...updated[index], [field]: value };
    onMusicianCreditsChange(updated);
  };

  const handleDelete = (index: number) => {
    onMusicianCreditsChange(musicianCredits.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3 mt-6">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground/70 flex items-center gap-2">
            Other Musician Credits
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Credit instruments and performers
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
          Add Musician
        </button>
      </div>
      <div className="space-y-2">
        {musicianCredits.length === 0 ? (
          <div className="text-center text-muted-foreground py-4">
            <Music3 className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No musician credits added</p>
            <p className="text-xs">Click "Add Musician" to start</p>
          </div>
        ) : (
          musicianCredits.map((credit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-3"
            >
              <input
                type="text"
                value={credit.instrument}
                onChange={(e) =>
                  handleUpdate(index, "instrument", e.target.value)
                }
                placeholder="Instrument"
                className="w-44 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                maxLength={64}
              />
              <input
                type="text"
                value={credit.name}
                onChange={(e) => handleUpdate(index, "name", e.target.value)}
                placeholder="Performer Name"
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
