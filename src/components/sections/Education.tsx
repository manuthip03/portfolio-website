import { Award, GraduationCap } from "lucide-react";
import { education, leadership } from "@/data/education";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Education() {
  return (
    <Section
      id="education"
      index="05"
      eyebrow="Education"
      title="How I got here"
      intro="Two undergraduate degrees read in parallel, alongside professional qualifications in management accounting and human resource management."
    >
      {/* Timeline */}
      <ol className="relative space-y-4 pl-8 sm:pl-10">
        {/* The vertical rail the markers sit on. */}
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-[7px] top-4 w-px sm:left-[11px]"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)",
          }}
        />

        {education.map((entry, i) => (
          <li key={entry.institution} className="relative">
            {/* Marker */}
            <span
              aria-hidden="true"
              className="absolute -left-8 top-7 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-subtle bg-bg-elevated sm:-left-10"
            >
              <span
                className="h-[5px] w-[5px] rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--accent-2))",
                }}
              />
            </span>

            <Reveal delay={i}>
              <Card interactive className="p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-fg">
                        {entry.institution}
                      </h3>
                      <p className="mt-1.5 text-sm text-fg-muted">
                        {entry.qualification}
                      </p>
                    </div>
                  </div>

                  {entry.status ? (
                    <span className="shrink-0 rounded-full border border-subtle bg-bg-elevated/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                      {entry.status}
                    </span>
                  ) : null}
                </div>

                {entry.results ? (
                  <ul className="mt-4 space-y-1.5 border-l-2 border-subtle pl-4">
                    {entry.results.map((result) => (
                      <li key={result} className="font-mono text-xs text-fg-subtle">
                        {result}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Card>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Leadership */}
      <Reveal delay={1}>
        <div className="mt-14">
          <h3 className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
            <Award className="h-4 w-4 text-accent" aria-hidden="true" />
            Extra-curricular leadership
          </h3>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {leadership.map((role) => (
              <Card key={role.role} interactive className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-fg">{role.role}</p>
                    <p className="mt-1.5 text-sm text-fg-muted">
                      {role.organisation}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-accent">
                    {role.year}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
