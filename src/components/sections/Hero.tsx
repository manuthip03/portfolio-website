import { ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-[100svh] scroll-mt-24 items-center"
    >
      {/* Decorative glow behind the heading. */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[60vh]"
      />

      <div className="relative mx-auto w-full max-w-5xl px-5 py-28 sm:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-subtle bg-bg-elevated px-3 py-1 font-mono text-xs text-fg-muted">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
            Seeking a software engineering internship
          </p>
        </Reveal>

        <Reveal delay={1}>
          <h1
            id="home-heading"
            className="mt-6 text-balance text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">
            {profile.role}
          </p>
        </Reveal>

        <Reveal delay={3}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={4}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-strong"
            >
              View projects
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-strong bg-bg-elevated px-5 py-3 text-sm font-medium text-fg transition-colors hover:bg-surface-hover"
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={5}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-fg-subtle">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              {profile.githubHandle}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
              {profile.linkedinHandle}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
