/**
 * Fixed decorative background: a faint graph-paper grid plus slowly drifting
 * colour orbs. Sits behind everything and never intercepts clicks.
 *
 * Rendered once in the page, not per section, so the grid stays continuous
 * while the content scrolls over it.
 */
export function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Graph-paper grid, masked so it fades out towards the bottom. */}
      <div className="grid-bg absolute inset-0" />

      {/* Teal orb, upper left. */}
      <div
        className="orb animate-float-slow left-[-10%] top-[-12%] h-[42rem] w-[42rem]"
        style={{ background: "var(--glow-teal)" }}
      />

      {/* Violet orb, upper right. */}
      <div
        className="orb animate-float-slower right-[-14%] top-[8%] h-[38rem] w-[38rem]"
        style={{ background: "var(--glow-violet)" }}
      />

      {/* Faint teal orb far down the page, so the lower sections are not flat. */}
      <div
        className="orb animate-float-slow left-[25%] top-[140%] h-[34rem] w-[34rem]"
        style={{ background: "var(--glow-teal)" }}
      />
    </div>
  );
}
