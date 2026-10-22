"use client";

import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { useHydrated } from "@/lib/useHydrated";
import { cn } from "@/lib/utils";

/**
 * Renders the email address only once running in a real browser.
 *
 * The address is stored split across two fields and joined here, so it never
 * appears as a complete string in the served HTML. That defeats the simple
 * crawlers that harvest addresses for spam lists, without making the link any
 * harder for a real visitor to use.
 */
export function EmailLink({
  className,
  showIcon = true,
}: {
  className?: string;
  showIcon?: boolean;
}) {
  const hydrated = useHydrated();

  const classes = cn(
    "inline-flex items-center gap-2 font-mono text-sm transition-colors",
    className,
  );

  if (!hydrated) {
    // A placeholder of the same shape, so the layout does not shift.
    return (
      <span className={classes} aria-hidden="true">
        {showIcon ? <Mail className="h-4 w-4 shrink-0" /> : null}
        <span className="opacity-0">loading address</span>
      </span>
    );
  }

  const address = `${profile.emailUser}@${profile.emailDomain}`;

  return (
    <a href={`mailto:${address}`} className={classes}>
      {showIcon ? (
        <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
      ) : null}
      <span>{address}</span>
    </a>
  );
}
