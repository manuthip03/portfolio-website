"use client";

import { Moon, Sun } from "lucide-react";
import { setTheme, useTheme } from "@/lib/useTheme";
import { useHydrated } from "@/lib/useHydrated";

/**
 * Switches between the dark and light palettes and remembers the choice.
 *
 * The theme itself lives on the <html> element; see lib/useTheme.ts.
 */
export function ThemeToggle() {
  const theme = useTheme();
  const hydrated = useHydrated();

  const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-subtle bg-bg-elevated text-fg-muted transition-colors hover:border-strong hover:text-fg"
    >
      {/* Before hydration the server-rendered icon must be stable, so show the
          dark-theme icon until the real theme is known. */}
      {hydrated && theme === "dark" ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
