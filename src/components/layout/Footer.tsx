import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-subtle">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-mono text-sm text-fg">{profile.name}</p>
          <p className="mt-1 text-sm text-fg-subtle">
            {profile.location} · © {year}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="text-fg-muted transition-colors hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="text-fg-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-5 pb-8 sm:px-8">
        <p className="text-xs text-fg-subtle">
          Built with Next.js, TypeScript and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
