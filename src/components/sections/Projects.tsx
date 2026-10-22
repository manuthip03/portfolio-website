import { Building2, Lock, Users } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";
import { Card } from "@/components/ui/Card";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechTag } from "@/components/ui/TechTag";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Things I have built"
      intro="Client work, independent research and university projects, spanning full-stack web development, machine learning and embedded hardware."
    >
      {/* Featured */}
      <div className="space-y-4">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i}>
            <FeaturedCard project={project} />
          </Reveal>
        ))}
      </div>

      {/* Everything else */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={i}>
            <CompactCard project={project} />
          </Reveal>
        ))}
      </div>

      {/* An honest note, rather than dead "Live demo" buttons. */}
      <Reveal>
        <p className="mt-8 flex items-start gap-2.5 text-sm text-fg-subtle">
          <Lock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Client work is covered by a private company repository, and the
            research projects are coursework. Source code can be discussed on
            request.
          </span>
        </p>
      </Reveal>
    </Section>
  );
}

/** Badge shown over the artwork. */
function StatusBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-subtle bg-bg-elevated/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur-md">
      {children}
    </span>
  );
}

function Attribution({ project }: { project: Project }) {
  if (!project.client && !project.team && !project.repoNote) return null;

  return (
    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-fg-subtle">
      {project.client ? (
        <span className="inline-flex items-center gap-1.5">
          <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
          {project.client}
        </span>
      ) : null}
      {project.team ? (
        <span className="inline-flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5" aria-hidden="true" />
          {project.team}
        </span>
      ) : null}
      {project.repoNote ? (
        <span className="inline-flex items-center gap-1.5">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          {project.repoNote}
        </span>
      ) : null}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <Card interactive className="overflow-hidden">
      <div className="grid lg:grid-cols-5">
        {/* Artwork */}
        <div className="relative lg:col-span-2 lg:border-b-0 lg:border-r lg:border-subtle">
          <ProjectVisual
            category={project.category}
            className="h-44 lg:h-full lg:min-h-[22rem] lg:border-b-0"
          />
          <div className="absolute left-5 top-5">
            <StatusBadge>{project.status}</StatusBadge>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 sm:p-9 lg:col-span-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">
            {project.category}
          </p>
          <h3 className="mt-3 text-balance text-xl font-semibold tracking-tight text-fg sm:text-2xl">
            {project.title}
          </h3>

          <p className="mt-4 text-pretty text-sm leading-relaxed text-fg-muted">
            {project.description}
          </p>

          <div className="mt-6 rounded-xl border border-subtle bg-bg-elevated/40 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              My role
            </p>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-fg-muted">
              {project.role}
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <li key={tech}>
                <TechTag label={tech} />
              </li>
            ))}
          </ul>

          <Attribution project={project} />
        </div>
      </div>
    </Card>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <Card interactive className="flex h-full flex-col">
      <div className="relative">
        <ProjectVisual category={project.category} className="h-32" />
        <div className="absolute left-4 top-4">
          <StatusBadge>{project.status}</StatusBadge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">
          {project.category}
        </p>
        <h3 className="mt-2.5 text-balance text-lg font-semibold tracking-tight text-fg">
          {project.title}
        </h3>

        <p className="mt-3 text-pretty text-sm leading-relaxed text-fg-muted">
          {project.description}
        </p>

        <div className="mt-4 border-l-2 border-subtle pl-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            My role
          </p>
          <p className="mt-1.5 text-pretty text-sm leading-relaxed text-fg-muted">
            {project.role}
          </p>
        </div>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li key={tech}>
              <TechTag label={tech} />
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Attribution project={project} />
        </div>
      </div>
    </Card>
  );
}
