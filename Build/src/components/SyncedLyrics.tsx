import { Plus, Trash2, Clock, Upload } from "lucide-react";
import { DEFAULT_SYLT_FRAME } from "../utils/constants";

interface SyncedLyricsSectionProps {
  syncedLyrics?: SyncedLyrics[];
  onSyncedLyricsChange: (syncedLyrics: SyncedLyrics[]) => void;
  lrcText: string;
  onLrcTextChange: (text: string) => void;
  onImport: () => void;
  unsyncedLyrics: string;
  onUnsyncedLyricsChange: (value: string) => void;
}

export function SyncedLyricsSection({
  syncedLyrics = [],
  onSyncedLyricsChange,
  lrcText,
  onLrcTextChange,
  onImport,
  unsyncedLyrics,
  onUnsyncedLyricsChange,
}: SyncedLyricsSectionProps) {
  const sylt =
    syncedLyrics.length > 0
      ? syncedLyrics[0]
      : { ...DEFAULT_SYLT_FRAME, lines: [] };

  const handleAddEntry = () => {
    const updated = [...syncedLyrics];
    if (updated.length === 0) {
      updated.push({
        content_type: "lyrics",
        lines: [{ text: "", timestamp_ms: 0 }],
      });
    } else {
      updated[0].lines.push({ text: "", timestamp_ms: 0 });
    }
    onSyncedLyricsChange(updated);
  };

  const handleUpdateEntry = (
    index: number,
    text: string,
    timestamp: number
  ) => {
    const updated = [...syncedLyrics];
    if (updated.length > 0) {
      updated[0].lines[index] = { text, timestamp_ms: timestamp };
      onSyncedLyricsChange(updated);
    }
  };

  const handleDeleteEntry = (index: number) => {
    const updated = [...syncedLyrics];
    if (updated.length > 0) {
      updated[0].lines.splice(index, 1);
      onSyncedLyricsChange(updated);
    }
  };

  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="micro-label">Lyrics</p>
          <h2 className="text-lg font-semibold">Lyrics & Sync</h2>
        </div>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {sylt.lines?.length || 0} entries
        </span>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-sm font-semibold tracking-wide text-foreground/70">
                Import from LRC
              </p>
              <p className="text-xs text-muted-foreground">
                Paste a timestamped block and drop it straight into SYLT.
              </p>
            </div>
            <button
              onClick={onImport}
              className="btn"
              data-variant="soft"
              data-tone="primary"
              data-size="sm"
            >
              <Upload className="h-4 w-4 icon-accent" />
              Convert SYLT
            </button>
          </div>
          <textarea
            value={lrcText}
            onChange={(e) => onLrcTextChange(e.target.value)}
            rows={4}
            placeholder="[00:01.40]First line\n[00:08.50]Next line"
            className="w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold tracking-wide text-foreground/70">
              Language
            </label>
            <input
              value={sylt.language || ""}
              onChange={(e) => {
                const updated = [...syncedLyrics];
                if (updated.length > 0) {
                  updated[0].language = e.target.value;
                  onSyncedLyricsChange(updated);
                }
              }}
              placeholder="eng"
              maxLength={3}
              className="w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold tracking-wide text-foreground/70">
                Unsynced Lyrics
              </label>
              <span className="text-xs text-muted-foreground text-right">
                Leave blank to auto-fill from the synced lines above.
              </span>
            </div>
            <textarea
              value={unsyncedLyrics}
              onChange={(e) => onUnsyncedLyricsChange(e.target.value)}
              rows={4}
              placeholder="Paste the full lyric sheet if you don’t need timestamps."
              className="w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            />
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="text-sm font-semibold tracking-wide text-foreground/70">
              Timeline Entries
            </label>
            <button
              onClick={handleAddEntry}
              className="btn"
              data-variant="soft"
              data-tone="primary"
              data-size="sm"
            >
              <Plus className="h-4 w-4 icon-accent" />
              Add Entry
            </button>
          </div>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {sylt.lines?.map((entry, index) => (
              <LyricEntry
                key={index}
                index={index}
                text={entry.text}
                timestamp={entry.timestamp_ms}
                onUpdate={handleUpdateEntry}
                onDelete={handleDeleteEntry}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface LyricEntryProps {
  index: number;
  text: string;
  timestamp: number;
  onUpdate: (index: number, text: string, timestamp: number) => void;
  onDelete: (index: number) => void;
}

function LyricEntry({
  index,
  text,
  timestamp,
  onUpdate,
  onDelete,
}: LyricEntryProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-input/60 bg-background/60 p-3 sm:flex-row sm:items-center sm:gap-3">
      <input
        value={text}
        onChange={(e) => onUpdate(index, e.target.value, timestamp)}
        placeholder="Lyrics text"
        className="flex-1 border border-input/60 rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
      />
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 icon-accent" />
        <input
          type="number"
          value={timestamp}
          onChange={(e) => onUpdate(index, text, parseInt(e.target.value) || 0)}
          placeholder="ms"
          className="w-24 border border-input/60 rounded-md px-2 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        />
      </div>
      <button
        onClick={() => onDelete(index)}
        className="btn"
        data-variant="soft"
        data-tone="danger"
        data-size="sm"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
