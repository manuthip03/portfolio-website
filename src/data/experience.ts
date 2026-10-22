import type { ExperienceEntry } from "./types";

export const experience: readonly ExperienceEntry[] = [
  {
    role: "Junior Data Analyst",
    organisation: "Mosko International (Pvt) Ltd",
    period: "November 2024 — July 2025",
    duration: "9 months",
    highlights: [
      {
        label: "Dashboards & Reporting",
        detail:
          "Created and maintained dashboards, business intelligence reports, and scorecards to provide insights for decision-making.",
      },
      {
        label: "Data Systems",
        detail:
          "Developed and implemented data systems to enable efficient data collection and reporting.",
      },
      {
        label: "Data Visualization",
        detail:
          "Built interactive visualizations using Power BI to bring data to life.",
      },
    ],
  },
] as const;
