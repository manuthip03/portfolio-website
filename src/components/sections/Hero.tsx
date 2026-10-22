import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";

/** The technologies worth surfacing immediately, drawn from the CV. */
const headlineTech = [
  "React",
  "Next.js",
  "NestJS",
  "TypeScript",
  "Python",
  "MongoDB",
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative flex min-h-[100svh] scroll-mt-24 items-center"
    >
      <div className="relative mx-auto w-full max-w-5xl px-5 pb-24 pt-32 sm:px-8">
        {/* Availability badge */}
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-subtle bg-surface px-3.5 py-1.5 font-mono text-xs backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-2 w-2 rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="shimmer-text">
              Seeking a software engineering internship
            </span>
          </p>
        </Reveal>

        {/* Name */}
        <Reveal delay={1}>
          <h1
            id="home-heading"
            className="text-gradient mt-7 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
          >
            {profile.name}
          </h1>
        </Reveal>

        {/* Role */}
        <Reveal delay={2}>
          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xl font-medium sm:text-2xl">
            <span className="text-gradient-accent">Full-Stack Developer</span>
            <span aria-hidden="true" className="text-fg-subtle">
              /
            </span>
            <span className="text-fg">Data Science Undergraduate</span>
          </p>
        </Reveal>

        {/* Tagline */}
        <Reveal delay={3}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted sm:text-lg">
            {profile.tagline}
          </p>
        </Reveal>

        {/* Technology strip */}
        <Reveal delay={4}>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Core technologies">
            {headlineTech.map((tech) => (
              <li
                key={tech}
                className="rounded-lg border border-subtle bg-surface px-3 py-1.5 font-mono text-xs text-fg-muted backdrop-blur-md transition-colors hover:border-strong hover:text-fg"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Calls to action */}
        <Reveal delay={5}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold text-accent-contrast shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(110deg, var(--accent), var(--accent-2))",
              }}
            >
              View my work
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="glass gradient-ring inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-fg transition-colors duration-300 hover:bg-surface-hover"
            >
              Get in touch
            </a>
          </div>
        </Reveal>

        {/* Meta row */}
        <Reveal delay={6}>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-fg-subtle">
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
              <GithubIcon className="h-4 w-4" />
              {profile.githubHandle}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-4 w-4" />
              {profile.linkedinHandle}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute inset-x-0 bottom-8 mx-auto hidden w-fit flex-col items-center gap-1.5 text-fg-subtle transition-colors hover:text-accent sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
