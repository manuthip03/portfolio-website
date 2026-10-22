import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Frosted panel with a gradient outline that lights up on hover.
 *
 * `interactive` adds the lift and glow; omit it for static content panels so
 * the page does not feel like everything is clickable.
 */
export function Card({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass gradient-ring relative overflow-hidden rounded-2xl",
        interactive &&
          "transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-1 hover:bg-surface-hover hover:shadow-[var(--shadow-glow)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
