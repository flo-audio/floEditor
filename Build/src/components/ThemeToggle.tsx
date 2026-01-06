import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

type ThemeOption = {
  value: "auto" | "light" | "dark";
  label: string;
  icon: typeof Monitor;
};

const OPTIONS: ThemeOption[] = [
  { value: "auto", label: "Auto", icon: Monitor },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const activeLabel =
    OPTIONS.find((option) => option.value === theme)?.label ?? "Auto";

  return (
    <div className="w-full rounded-2xl border border-primary/20 bg-background/80 p-3 shadow-sm shadow-primary/10 backdrop-blur-md">
      <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-primary/80">
        <span>Theme</span>
        <span className="font-semibold tracking-tight text-foreground/70">
          {activeLabel}
        </span>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {OPTIONS.map(({ value, label, icon: Icon }) => {
          const isActive = theme === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setTheme(value)}
              aria-pressed={isActive}
              aria-label={`Switch theme to ${label}`}
              className="btn w-full justify-center text-[0.65rem]"
              data-size="xs"
              data-tone="primary"
              data-variant="soft"
              data-toggle="theme"
              data-active={isActive}
            >
              <Icon className="h-3.5 w-3.5 icon-accent" aria-hidden="true" />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
