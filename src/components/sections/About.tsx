import { Brain, Briefcase, Code2 } from "lucide-react";
import { profile } from "@/data/profile";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

/**
 * The three strands of the CV, stated without embellishment. Each one is
 * backed by entries elsewhere on the page.
 */
const focusAreas = [
  {
    icon: Code2,
    title: "Full-Stack Web",
    detail:
      "Building production web applications end-to-end with React, Next.js, NestJS and MongoDB.",
  },
  {
    icon: Brain,
    title: "Machine Learning & Forecasting",
    detail:
      "Applying predictive modelling and time-series methods such as ARIMA and ARIMAX to real datasets.",
  },
  {
    icon: Briefcase,
    title: "Business Understanding",
    detail:
      "CIMA studies, a CIPM diploma and nine months of analytics work turning business questions into data.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title="Two disciplines, one way of thinking"
      intro="I study software engineering and data science in parallel, and I use both to turn real problems into working systems."
    >
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Biography */}
        <Reveal className="lg:col-span-3">
          <Card className="h-full p-8 sm:p-10">
            <div className="space-y-5">
              {profile.about.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-pretty text-base leading-relaxed text-fg-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        </Reveal>

        {/* Numbers */}
        <Reveal delay={1} className="lg:col-span-2">
          <Card className="h-full p-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
              At a glance
            </h3>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="text-gradient-accent block text-4xl font-semibold tracking-tight">
                      {stat.value}
                    </span>
                    <span className="mt-1.5 block text-xs leading-snug text-fg-subtle">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        </Reveal>
      </div>

      {/* Focus areas */}
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {focusAreas.map((area, i) => {
          const Icon = area.icon;
          return (
            <Reveal key={area.title} delay={i + 1}>
              <Card interactive className="h-full p-6">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-subtle"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-soft), var(--accent-2-soft))",
                  }}
                >
                  <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-fg">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {area.detail}
                </p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
