import type { ProjectCategory } from "@/data/types";
import { cn } from "@/lib/utils";

/**
 * Generated artwork for a project card.
 *
 * These are deliberately abstract motifs that evoke the kind of work each
 * project involved: a dashboard, a forecast curve, a network, a circuit.
 * They are NOT screenshots and are never presented as such. No project here
 * has a public demo, and a fabricated screenshot would be dishonest.
 *
 * Drawn as inline SVG rather than image files, so they stay sharp at any
 * size, re-colour with the theme, and add nothing to the page weight.
 */

interface VisualProps {
  category: ProjectCategory;
  className?: string;
}

/** Per-category colour weighting, so the six cards do not look identical. */
const washes: Record<ProjectCategory, string> = {
  "Full-Stack Web":
    "radial-gradient(120% 110% at 15% 0%, var(--accent-soft) 0%, transparent 60%), radial-gradient(90% 90% at 95% 100%, var(--accent-2-soft) 0%, transparent 65%)",
  "Data Science & Time Series":
    "radial-gradient(120% 110% at 85% 0%, var(--accent-soft) 0%, transparent 62%), radial-gradient(90% 90% at 10% 100%, var(--accent-2-soft) 0%, transparent 60%)",
  "Machine Learning":
    "radial-gradient(120% 110% at 50% 0%, var(--accent-2-soft) 0%, transparent 60%), radial-gradient(90% 90% at 15% 100%, var(--accent-soft) 0%, transparent 65%)",
  "Statistical Analysis":
    "radial-gradient(110% 110% at 20% 100%, var(--accent-soft) 0%, transparent 60%), radial-gradient(90% 90% at 90% 0%, var(--accent-2-soft) 0%, transparent 62%)",
  "Embedded & Hardware":
    "radial-gradient(120% 110% at 70% 20%, var(--accent-soft) 0%, transparent 58%), radial-gradient(100% 100% at 5% 90%, var(--accent-soft) 0%, transparent 62%)",
};

function idFor(category: ProjectCategory) {
  return category.toLowerCase().replace(/[^a-z]+/g, "-");
}

export function ProjectVisual({ category, className }: VisualProps) {
  const id = idFor(category);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative w-full overflow-hidden border-b border-subtle",
        className,
      )}
      style={{ background: washes[category] }}
    >
      {/* Dot texture behind the motif. */}
      <div className="dot-bg absolute inset-0 opacity-60" />

      <svg
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid slice"
        className="relative h-full w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id={`stroke-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-2)" />
          </linearGradient>
          <linearGradient id={`fill-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <Motif category={category} />
      </svg>

      {/* Fade the artwork into the card body below. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--bg-elevated))",
        }}
      />
    </div>
  );
}

function Motif({ category }: { category: ProjectCategory }) {
  const id = idFor(category);
  const stroke = `url(#stroke-${id})`;
  const fill = `url(#fill-${id})`;

  switch (category) {
    /* A dashboard: sidebar, header bar, stat tiles and a chart panel. */
    case "Full-Stack Web":
      return (
        <g fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.9">
          <rect x="40" y="32" width="320" height="136" rx="10" opacity="0.55" />
          <line x1="40" y1="56" x2="360" y2="56" opacity="0.4" />
          <circle cx="54" cy="44" r="3" fill={stroke} stroke="none" opacity="0.8" />
          <circle cx="66" cy="44" r="3" fill={stroke} stroke="none" opacity="0.5" />
          <circle cx="78" cy="44" r="3" fill={stroke} stroke="none" opacity="0.3" />
          <line x1="110" y1="56" x2="110" y2="168" opacity="0.35" />
          {[72, 88, 104, 120, 136].map((y) => (
            <line key={y} x1="56" y1={y} x2="94" y2={y} opacity="0.3" />
          ))}
          <rect x="126" y="70" width="64" height="34" rx="6" opacity="0.7" />
          <rect x="198" y="70" width="64" height="34" rx="6" opacity="0.5" />
          <rect x="270" y="70" width="64" height="34" rx="6" opacity="0.35" />
          <rect x="126" y="116" width="208" height="38" rx="6" opacity="0.45" />
          <polyline
            points="136,146 162,132 188,138 214,122 240,128 266,114 292,120 324,106"
            strokeWidth="2"
          />
        </g>
      );

    /* A forecast curve, with a dashed projection at the end. */
    case "Data Science & Time Series":
      return (
        <g fill="none" stroke={stroke} strokeWidth="1.5">
          {[60, 90, 120, 150].map((y) => (
            <line key={y} x1="40" y1={y} x2="360" y2={y} opacity="0.18" />
          ))}
          <path
            d="M40 150 L40 134 Q80 108 104 120 Q136 136 164 98 Q196 58 224 86 Q252 114 284 74 Q316 38 360 58 L360 150 Z"
            fill={fill}
            stroke="none"
          />
          <path
            d="M40 134 Q80 108 104 120 Q136 136 164 98 Q196 58 224 86 Q252 114 284 74"
            strokeWidth="2.5"
          />
          <path
            d="M284 74 Q316 38 360 58"
            strokeWidth="2.5"
            strokeDasharray="5 5"
            opacity="0.85"
          />
          {[
            [104, 120],
            [164, 98],
            [224, 86],
            [284, 74],
          ].map(([cx, cy]) => (
            <circle
              key={cx}
              cx={cx}
              cy={cy}
              r="3.5"
              fill="var(--bg-elevated)"
              strokeWidth="2"
            />
          ))}
          <line x1="40" y1="150" x2="360" y2="150" opacity="0.4" />
        </g>
      );

    /* A small feed-forward network. */
    case "Machine Learning": {
      const layers = [
        { x: 92, ys: [64, 100, 136] },
        { x: 200, ys: [50, 86, 122, 158] },
        { x: 308, ys: [86, 122] },
      ];
      return (
        <g stroke={stroke} fill="none" strokeWidth="1">
          {layers.slice(0, -1).map((layer, li) =>
            layer.ys.map((y) =>
              layers[li + 1].ys.map((ny) => (
                <line
                  key={`${li}-${y}-${ny}`}
                  x1={layer.x}
                  y1={y}
                  x2={layers[li + 1].x}
                  y2={ny}
                  opacity="0.22"
                />
              )),
            ),
          )}
          {layers.map((layer) =>
            layer.ys.map((y) => (
              <circle
                key={`${layer.x}-${y}`}
                cx={layer.x}
                cy={y}
                r="7"
                fill="var(--bg-elevated)"
                strokeWidth="1.8"
              />
            )),
          )}
        </g>
      );
    }

    /* Bars with a distribution curve laid over them. */
    case "Statistical Analysis": {
      const bars: readonly (readonly [number, number])[] = [
        [64, 36],
        [96, 58],
        [128, 86],
        [160, 108],
        [192, 96],
        [224, 72],
        [256, 48],
        [288, 28],
      ];
      return (
        <g stroke={stroke} fill="none" strokeWidth="1.5">
          {bars.map(([x, h]) => (
            <rect
              key={x}
              x={x}
              y={156 - h}
              width="22"
              height={h}
              rx="3"
              fill={fill}
              opacity="0.9"
            />
          ))}
          <path
            d="M52 150 Q110 148 142 96 Q176 36 210 70 Q248 112 300 142 Q324 152 348 152"
            strokeWidth="2.5"
            opacity="0.95"
          />
          <line x1="48" y1="156" x2="352" y2="156" opacity="0.4" />
        </g>
      );
    }

    /* Circuit traces running into a central chip. */
    case "Embedded & Hardware":
      return (
        <g stroke={stroke} fill="none" strokeWidth="1.5">
          <path d="M40 62 H112 V92 H164" opacity="0.5" />
          <path d="M40 140 H92 V112 H164" opacity="0.4" />
          <path d="M360 56 H300 V88 H236" opacity="0.5" />
          <path d="M360 144 H288 V116 H236" opacity="0.4" />
          <path d="M200 30 V68" opacity="0.45" />
          <path d="M200 132 V172" opacity="0.45" />
          {[
            [40, 62],
            [40, 140],
            [360, 56],
            [360, 144],
            [200, 30],
            [200, 172],
          ].map(([cx, cy]) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="3.5"
              fill={stroke}
              stroke="none"
              opacity="0.8"
            />
          ))}
          <rect
            x="164"
            y="68"
            width="72"
            height="64"
            rx="8"
            fill={fill}
            strokeWidth="2"
          />
          <rect x="180" y="84" width="40" height="32" rx="4" opacity="0.6" />
          {[76, 92, 108, 124].map((y) => (
            <line key={`l${y}`} x1="156" y1={y} x2="164" y2={y} opacity="0.7" />
          ))}
          {[76, 92, 108, 124].map((y) => (
            <line key={`r${y}`} x1="236" y1={y} x2="244" y2={y} opacity="0.7" />
          ))}
        </g>
      );
  }
}
