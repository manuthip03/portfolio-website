import { Building2, CalendarDays } from "lucide-react";
import { experience } from "@/data/experience";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Experience"
      title="Where I have worked"
      intro="Nine months in a data analytics role, building the reporting that a business actually makes decisions from."
    >
      <div className="space-y-4">
        {experience.map((job, i) => (
          <Reveal key={job.organisation} delay={i}>
            <Card className="p-7 sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-fg">
                    {job.role}
                  </h3>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm text-fg-muted">
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                    {job.organisation}
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:items-end">
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-fg-subtle">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {job.period}
                  </span>
                  <span
                    className="inline-flex w-fit items-center rounded-full border border-subtle px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent-soft), var(--accent-2-soft))",
                    }}
                  >
                    {job.duration}
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-5">
                {job.highlights.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    {/* Gradient bullet rail. */}
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-full w-0.5 shrink-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(to bottom, var(--accent), var(--accent-2))",
                      }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-fg">
                        {item.label}
                      </p>
                      <p className="mt-1.5 text-pretty text-sm leading-relaxed text-fg-muted">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
