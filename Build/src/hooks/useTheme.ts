import { useEffect, useState } from "react";

type ThemePreference = "auto" | "light" | "dark";

type ThemeState = {
  theme: ThemePreference;
  resolvedTheme: "light" | "dark";
  setTheme: (value: ThemePreference) => void;
};

const STORAGE_KEY = "id3editor-theme";

const isBrowser = () =>
  typeof window !== "undefined" && typeof document !== "undefined";

const getStoredTheme = (): ThemePreference => {
  if (!isBrowser()) return "auto";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "auto") {
    return stored;
  }
  return "auto";
};

export function useTheme(): ThemeState {
  const [theme, setThemeState] = useState<ThemePreference>(getStoredTheme);
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (!isBrowser()) return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () =>
      setSystemTheme(media.matches ? "dark" : "light");

    updateSystemTheme();
    media.addEventListener("change", updateSystemTheme);

    return () => {
      media.removeEventListener("change", updateSystemTheme);
    };
  }, []);

  useEffect(() => {
    if (!isBrowser()) return;

    const root = document.documentElement;
    const resolved = theme === "auto" ? systemTheme : theme;

    if (resolved === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, [theme, systemTheme]);

  const resolvedTheme: "light" | "dark" =
    theme === "auto" ? systemTheme : theme;

  const setTheme = (value: ThemePreference) => {
    setThemeState(value);
    if (isBrowser()) {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
  };

  return {
    theme,
    resolvedTheme,
    setTheme,
  };
}
