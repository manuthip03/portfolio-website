import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

/**
 * Evaluated once when this module is first loaded, which happens at build
 * time. Reading the clock during render is rejected by Next's Cache
 * Components prerender check, because a statically rendered page must not
 * depend on when it was rendered. The year therefore updates on each deploy,
 * which is exactly right for a copyright line.
 */
const BUILD_YEAR = new Date().getFullYear();

export function Footer() {
  const year = BUILD_YEAR;

  return (
    <footer className="relative mt-auto border-t border-subtle">
      <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2.5 font-mono text-sm text-fg">
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 rounded-sm"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--accent-2))",
                }}
              />
              {profile.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-subtle">
              {profile.role}
            </p>
            <p className="mt-3 text-sm text-fg-subtle">
              {profile.location} · © {year}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-subtle bg-surface text-fg-muted backdrop-blur-md transition-colors hover:border-strong hover:text-accent"
            >
              <GithubIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-subtle bg-surface text-fg-muted backdrop-blur-md transition-colors hover:border-strong hover:text-accent"
            >
              <LinkedinIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div className="rule-fade mt-10 h-px w-full" />

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-fg-subtle">
            Built with Next.js, TypeScript and Tailwind CSS.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 text-xs text-fg-subtle transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
