"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger successive items by passing 1, 2, 3... */
  delay?: number;
  className?: string;
}

/**
 * Fades content in and lifts it slightly as it scrolls into view.
 *
 * `once: true` means it animates a single time, so scrolling back up does not
 * replay it. Visitors who have asked their OS to reduce motion get the final
 * state immediately, handled by the global CSS rule in globals.css.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: delay * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
