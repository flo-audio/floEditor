import { useRef, useState } from "react";
import { Plus, Trash2, Clock, Upload, FileText } from "lucide-react";
import { useLRCParser } from "../hooks/useLRCParser";

const DEFAULT_SYLT_GROUP: SyncedLyrics = {
  language: "eng",
  content_type: "lyrics",
  description: "",
  lines: [],
};

interface SyncedLyricsSectionProps {
  syncedLyrics?: SyncedLyrics[];
  onSyncedLyricsChange: (syncedLyrics: SyncedLyrics[]) => void;
  unsyncedLyrics?: string[]; // One USLT per SYLT group
  onUnsyncedLyricsChange: (usltArray: string[]) => void;
}

export function SyncedLyricsSection({
  syncedLyrics = [],
  onSyncedLyricsChange,
  unsyncedLyrics = [],
  onUnsyncedLyricsChange,
}: SyncedLyricsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lrcText, setLrcText] = useState("");
  const [showLrcImport, setShowLrcImport] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { parseLRCFormat } = useLRCParser();

  // Current group logic
  const currentSylt = syncedLyrics[activeIndex] || DEFAULT_SYLT_GROUP;
  const currentUslt = unsyncedLyrics[activeIndex] ?? "";

  // Add new SYLT group (+ corresponding USLT placeholder)
  const handleAddGroup = () => {
    const next = [...syncedLyrics, { ...DEFAULT_SYLT_GROUP }];
    onSyncedLyricsChange(next);
    onUnsyncedLyricsChange([...unsyncedLyrics, ""]);
    setActiveIndex(next.length - 1);
    setLrcText("");
  };

  // Delete SYLT/USLT group at idx
  const handleDeleteGroup = (idx: number) => {
    if (syncedLyrics.length < 2) return;
    const nextSylt = syncedLyrics.filter((_, i) => i !== idx);
    const nextUslt = unsyncedLyrics.filter((_, i) => i !== idx);
    const newActive = idx > 0 ? idx - 1 : 0;
    onSyncedLyricsChange(nextSylt);
    onUnsyncedLyricsChange(nextUslt);
    setActiveIndex(newActive);
    setLrcText("");
  };

  // Switch active SYLT/USLT group
  const handleSwitchGroup = (idx: number) => {
    setActiveIndex(idx);
    setLrcText("");
  };

  // Change field for current SYLT group
  const handleGroupField = (field: keyof SyncedLyrics, value: any) => {
    const next = [...syncedLyrics];
    next[activeIndex] = { ...next[activeIndex], [field]: value };
    onSyncedLyricsChange(next);
  };

  // Update USLT for current group
  const handleUsltChange = (text: string) => {
    const next = [...unsyncedLyrics];
    next[activeIndex] = text;
    onUnsyncedLyricsChange(next);
  };

  // Add/update/delete SYLT lines
  const handleAddEntry = () => {
    const next = [...syncedLyrics];
    next[activeIndex].lines.push({ text: "", timestamp_ms: 0 });
    onSyncedLyricsChange(next);
  };
  const handleUpdateEntry = (idx: number, text: string, time: number) => {
    const next = [...syncedLyrics];
    next[activeIndex].lines[idx] = { text, timestamp_ms: time };
    onSyncedLyricsChange(next);
  };
  const handleDeleteEntry = (idx: number) => {
    const next = [...syncedLyrics];
    next[activeIndex].lines.splice(idx, 1);
    onSyncedLyricsChange(next);
  };

  // Handle LRC textarea import for current group
  const handleLrcImport = () => {
    const parsed = parseLRCFormat(lrcText);
    if (!parsed.length) return;
    handleGroupField(
      "lines",
      parsed.map(([text, timestamp_ms]) => ({ text, timestamp_ms })),
    );
    setShowLrcImport(false);
    setLrcText("");
  };

  // Handle LRC file upload (text import)
  const handleLrcFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    setLrcText(text);
    setShowLrcImport(true);
    e.target.value = "";
  };

  // USLT fallback: auto-generate from SYLT if USLT is blank for current group
  const autoUSLT = (currentSylt.lines || []).map((l) => l.text).join("\n");

  // Tabs to switch between lyric groups
  const renderGroupTabs = () => (
    <div className="flex flex-wrap gap-2 mb-3">
      {syncedLyrics.map((g, i) => (
        <button
          key={i}
          type="button"
          onClick={() => handleSwitchGroup(i)}
          className={`btn px-3 py-1 text-xs ${activeIndex === i ? "bg-primary/20 border-primary" : "bg-background border-input/50"} border rounded-full`}
          data-variant={activeIndex === i ? "solid" : "soft"}
        >
          {g.language || "eng"} / {g.content_type || "lyrics"}
          {syncedLyrics.length > 1 && (
            <span
              className="ml-1 text-danger cursor-pointer"
              title="Delete group"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteGroup(i);
              }}
            >
              <Trash2 className="inline h-3 w-3" />
            </span>
          )}
        </button>
      ))}
      <button
        type="button"
        className="btn"
        data-variant="soft"
        data-tone="primary"
        data-size="xs"
        onClick={handleAddGroup}
      >
        <Plus className="h-4 w-4 icon-accent" /> Add group
      </button>
    </div>
  );

  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="mb-4">
        <div className="flex items-center justify-between gap-2 mb-1">
          <div>
            <p className="micro-label">Lyrics</p>
            <h2 className="text-xl font-semibold">Lyrics & Sync</h2>
          </div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {currentSylt.lines?.length || 0} entries
          </span>
        </div>
        {renderGroupTabs()}
      </div>
      <div className="space-y-4">
        {/* Upload LRC file */}
        <div className="flex gap-2 mb-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".lrc,text/plain"
            style={{ display: "none" }}
            onChange={handleLrcFileUpload}
          />
          <button
            type="button"
            className="btn"
            data-variant="soft"
            data-tone="primary"
            data-size="sm"
            onClick={() => fileInputRef.current?.click()}
          >
            <FileText className="h-4 w-4 icon-accent" />
            Upload LRC file
          </button>
          <button
            type="button"
            className="btn"
            data-variant="soft"
            data-tone="primary"
            data-size="sm"
            onClick={() => setShowLrcImport((v) => !v)}
          >
            <Upload className="h-4 w-4 icon-accent" />
            Paste LRC text
          </button>
        </div>
        {/* Import UI / textarea */}
        {showLrcImport && (
          <div className="space-y-2 mb-2">
            <label className="block text-sm font-semibold text-foreground/80 mb-1">
              Paste or edit LRC content:
            </label>
            <textarea
              value={lrcText}
              onChange={(e) => setLrcText(e.target.value)}
              rows={4}
              placeholder="[00:01.40]First line\n[00:08.50]Next line"
              className="w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono"
            />
            <button
              type="button"
              className="btn"
              data-variant="solid"
              data-tone="primary"
              data-size="sm"
              onClick={handleLrcImport}
              disabled={!lrcText.trim()}
            >
              Convert &amp; Import to current group
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold tracking-wide text-foreground/70">
              Language
            </label>
            <input
              value={currentSylt.language || ""}
              onChange={(e) => handleGroupField("language", e.target.value)}
              placeholder="eng"
              maxLength={3}
              className="w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm uppercase tracking-widest"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold tracking-wide text-foreground/70">
              Content Type
            </label>
            <select
              value={currentSylt.content_type || "lyrics"}
              onChange={(e) => handleGroupField("content_type", e.target.value)}
              className="w-full border border-input/80 bg-background/50 rounded-md px-3 py-2 text-sm"
            >
              <option value="lyrics">Lyrics</option>
              <option value="other">Other</option>
              <option value="text_transcription">Text transcription</option>
              <option value="part_name">Part name</option>
              <option value="events">Events</option>
              <option value="chord">Chord</option>
              <option value="trivia">Trivia</option>
              <option value="webpage_url">Webpage URL</option>
              <option value="image_url">Image URL</option>
            </select>
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
              value={currentUslt || autoUSLT}
              onChange={(e) => handleUsltChange(e.target.value)}
              rows={4}
              placeholder="Paste the full lyric sheet if you don’t need timestamps."
              className="w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono"
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
              type="button"
            >
              <Plus className="h-4 w-4 icon-accent" />
              Add Entry
            </button>
          </div>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {currentSylt.lines?.map((entry, index) => (
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
        className="flex-1 border border-input/60 rounded-md px-3 py-2 text-sm"
      />
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 icon-accent" />
        <input
          type="number"
          value={timestamp}
          onChange={(e) => onUpdate(index, text, parseInt(e.target.value) || 0)}
          placeholder="ms"
          className="w-24 border border-input/60 rounded-md px-2 py-2 text-sm"
        />
      </div>
      <button
        onClick={() => onDelete(index)}
        className="btn"
        data-variant="soft"
        data-tone="danger"
        data-size="sm"
        type="button"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
