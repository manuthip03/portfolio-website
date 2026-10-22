import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionProps {
  /** Must match the href used in the navigation, e.g. "about". */
  id: string;
  /** Small label above the heading, e.g. "01 / About". */
  eyebrow: string;
  title: string;
  /** Optional sentence under the heading. */
  intro?: string;
  children: ReactNode;
  className?: string;
}

/**
 * One page section with a consistent heading block and vertical rhythm.
 *
 * Using <section aria-labelledby> ties the region to its heading, so screen
 * reader users can jump between sections the same way sighted users scan them.
 */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
              {intro}
            </p>
          ) : null}
          <div className="rule-fade mt-8 h-px w-full" />
        </Reveal>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
