"use client";

import { useSyncExternalStore } from "react";

export type Theme = "dark" | "light";

/**
 * The class on <html> is the single source of truth for the theme: the inline
 * script in layout.tsx sets it before first paint, and setTheme updates it.
 *
 * Treating the DOM as an external store (rather than mirroring it in React
 * state) means there is only ever one copy of the truth, and no effect is
 * needed to sync them.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("light")
    ? "light"
    : "dark";
}

/** The server always renders the dark theme, matching <html class="dark">. */
function getServerSnapshot(): Theme {
  return "dark";
}

export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setTheme(next: Theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(next);

  try {
    localStorage.setItem("theme", next);
  } catch {
    // Private browsing can block storage. The theme still applies for this
    // visit; it just will not be remembered.
  }
}
