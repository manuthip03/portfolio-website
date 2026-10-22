import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionProps {
  /** Must match the href used in the navigation, e.g. "about". */
  id: string;
  /** Two-digit index shown before the label, e.g. "01". */
  index: string;
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
 * <section aria-labelledby> ties the region to its heading, so screen reader
 * users can jump between sections the way sighted users scan them.
 */
export function Section({
  id,
  index,
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
      className={cn("scroll-mt-24 py-24 sm:py-32", className)}
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-medium text-accent">
              {index}
            </span>
            <span
              aria-hidden="true"
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent), var(--accent-2))",
              }}
            />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-fg-subtle">
              {eyebrow}
            </span>
          </div>

          <h2
            id={headingId}
            className="mt-5 text-balance text-3xl font-semibold tracking-tight text-fg sm:text-5xl"
          >
            {title}
          </h2>

          {intro ? (
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted">
              {intro}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
