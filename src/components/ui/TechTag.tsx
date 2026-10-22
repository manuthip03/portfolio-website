import { cn } from "@/lib/utils";

/**
 * A single technology chip. Monospaced, to read as "tooling" rather than prose.
 */
export function TechTag({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-subtle bg-bg-elevated",
        "px-2.5 py-1 font-mono text-xs text-fg-muted",
        "transition-colors hover:border-strong hover:text-fg",
        className,
      )}
    >
      {label}
    </span>
  );
}
