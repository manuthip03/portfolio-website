import {
  Brain,
  Code2,
  Database,
  Globe,
  Microscope,
  TrendingUp,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechTag } from "@/components/ui/TechTag";

/** Keys match the group names in src/data/skills.ts exactly. */
const icons: Record<string, LucideIcon> = {
  Programming: Code2,
  "Web Development": Globe,
  "Databases & Cloud": Database,
  "Data Science & ML": Brain,
  "Time Series": TrendingUp,
  Tools: Wrench,
  Research: Microscope,
  Professional: Users,
};

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title="What I work with"
      intro="The languages, frameworks and methods I have used across client work, research projects and university coursework."
    >
      {/* CSS columns give a masonry effect, so a long list like Data Science
          does not force every other card to match its height. */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.name] ?? Code2;
          return (
            <Reveal
              key={group.name}
              delay={i}
              className="mb-4 break-inside-avoid"
            >
              <Card interactive className="p-6">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-subtle"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent-soft), var(--accent-2-soft))",
                    }}
                  >
                    <Icon
                      className="h-4.5 w-4.5 text-accent"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="text-sm font-semibold text-fg">
                    {group.name}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <TechTag label={item} />
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
