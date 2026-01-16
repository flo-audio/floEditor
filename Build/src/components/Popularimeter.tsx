interface PopularimeterProps {
  popularimeter: {
    email?: string;
    rating?: number; // 0–255
    play_count?: number;
  };
  onChange: (field: "email" | "rating" | "play_count", value: any) => void;
}

export function PopularimeterSection({
  popularimeter,
  onChange,
}: PopularimeterProps) {
  return (
    <section className="glass-panel p-6 sm:p-8">
      <div className="mb-4">
        <p className="micro-label">Stats</p>
        <h2 className="text-lg font-semibold">Popularity & Usage</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Track ratings and play count (for history or sync)
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex flex-col gap-2 flex-1">
          <label className="text-xs font-medium text-muted-foreground">
            User Email
          </label>
          <input
            type="email"
            className="w-full rounded border border-input/60 px-2 py-1 text-sm bg-background/50"
            value={popularimeter.email || ""}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="user@email.com"
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/3 min-w-[120px]">
          <label className="text-xs font-medium text-muted-foreground flex justify-between">
            Rating{" "}
            <span className="text-[0.85em] text-muted-foreground">
              {popularimeter.rating ?? 0} / 255
            </span>
          </label>
          <input
            type="range"
            min={0}
            max={255}
            step={1}
            className="w-full"
            value={popularimeter.rating ?? 0}
            onChange={(e) => onChange("rating", Number(e.target.value))}
          />
        </div>
        <div className="flex flex-col gap-2 w-1/4 min-w-[80px]">
          <label className="text-xs font-medium text-muted-foreground">
            Play Count
          </label>
          <input
            type="number"
            min={0}
            className="w-full rounded border border-input/60 px-2 py-1 text-sm bg-background/50"
            value={popularimeter.play_count ?? 0}
            onChange={(e) =>
              onChange("play_count", Math.max(0, Number(e.target.value)))
            }
            placeholder="0"
          />
        </div>
      </div>
    </section>
  );
}
