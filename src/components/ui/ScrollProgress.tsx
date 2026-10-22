"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gradient bar across the top showing how far down the page you are.
 * A small touch, but it makes a long single-page site feel navigable.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Spring smoothing stops the bar twitching on fast scroll wheels.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: "0%",
        background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
      }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5"
    />
  );
}
