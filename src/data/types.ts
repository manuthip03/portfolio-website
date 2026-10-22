/**
 * Shared shapes for the portfolio content.
 *
 * All content lives in `src/data/*` so the site can be updated by editing
 * plain data, without touching any component code.
 */

export type ProjectCategory =
  | "Full-Stack Web"
  | "Data Science & Time Series"
  | "Machine Learning"
  | "Statistical Analysis"
  | "Embedded & Hardware";

export interface Project {
  /** Stable key used for React lists and anchor ids. */
  slug: string;
  title: string;
  /** The right-hand label from the CV, e.g. "MVP Completed". */
  status: string;
  category: ProjectCategory;
  /** Shown as the headline summary on the card. */
  description: string;
  /** What this person personally did. Kept separate: it is the part that matters. */
  role: string;
  tech: readonly string[];
  /**
   * Where the code lives, when it is not publicly linkable.
   * Rendered as plain text, never as a dead link.
   */
  repoNote?: string;
  team?: string;
  client?: string;
  featured: boolean;
}

export interface SkillGroup {
  name: string;
  items: readonly string[];
}

export interface ExperienceEntry {
  role: string;
  organisation: string;
  period: string;
  duration: string;
  highlights: readonly { label: string; detail: string }[];
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  status?: string;
  detail?: string;
  results?: readonly string[];
}

export interface LeadershipEntry {
  role: string;
  organisation: string;
  year: string;
}
