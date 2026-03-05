"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

let currentTheme: Theme = "light";
const listeners = new Set<() => void>();

function getSnapshot(): Theme {
  return currentTheme;
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setThemeValue(next: Theme) {
  currentTheme = next;
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(next);
  localStorage.setItem("theme", next);
  listeners.forEach((fn) => fn());
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "light" as Theme);

  useEffect(() => {
    const initial = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";
    if (initial !== currentTheme) {
      currentTheme = initial;
      listeners.forEach((fn) => fn());
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeValue(currentTheme === "dark" ? "light" : "dark");
  }, []);

  return { theme, toggleTheme } as const;
}
