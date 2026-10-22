"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { useHydrated } from "@/lib/useHydrated";

/**
 * The primary "email me" button plus a copy-to-clipboard shortcut.
 *
 * The address is assembled here, in the browser, from the two halves stored in
 * the profile data, so the complete string never appears in the served HTML
 * where address-harvesting crawlers would find it.
 */
export function ContactActions() {
  const hydrated = useHydrated();
  const [copied, setCopied] = useState(false);

  const address = hydrated
    ? `${profile.emailUser}@${profile.emailDomain}`
    : "";

  async function copy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked. The mailto button still works, and
      // the address is visible on screen to copy by hand.
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href={hydrated ? `mailto:${address}` : undefined}
        aria-disabled={!hydrated}
        className="group inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-accent-contrast shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.02]"
        style={{
          background: "linear-gradient(110deg, var(--accent), var(--accent-2))",
        }}
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        {/* Keep the label stable before hydration so the markup matches. */}
        <span>{hydrated ? address : "Email me"}</span>
      </a>

      <button
        type="button"
        onClick={copy}
        disabled={!hydrated}
        className="glass gradient-ring inline-flex items-center justify-center gap-2.5 rounded-xl px-5 py-3.5 text-sm font-semibold text-fg transition-colors duration-300 hover:bg-surface-hover disabled:opacity-60"
      >
        {copied ? (
          <Check className="h-4 w-4 text-accent" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        {copied ? "Copied" : "Copy address"}
      </button>

      {/* Announced to screen readers when the copy succeeds. */}
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </div>
  );
}
