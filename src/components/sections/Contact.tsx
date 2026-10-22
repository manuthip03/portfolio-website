import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Card } from "@/components/ui/Card";
import { ContactActions } from "@/components/ui/ContactActions";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const socials = [
  {
    label: "GitHub",
    handle: profile.githubHandle,
    href: profile.github,
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    handle: profile.linkedinHandle,
    href: profile.linkedin,
    Icon: LinkedinIcon,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="Let's build something"
      intro="I am looking for a software engineering internship. If you think I would be a good fit for your team, I would be glad to hear from you."
    >
      <Reveal>
        <Card className="relative overflow-hidden p-8 sm:p-12">
          {/* Glow behind the call to action. */}
          <div
            aria-hidden="true"
            className="orb -right-20 -top-24 h-72 w-72"
            style={{ background: "var(--glow-violet)" }}
          />
          <div
            aria-hidden="true"
            className="orb -bottom-28 -left-16 h-64 w-64"
            style={{ background: "var(--glow-teal)" }}
          />

          <div className="relative">
            <h3 className="text-balance text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              Open to internship opportunities
            </h3>
            <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-fg-muted sm:text-base">
              The quickest way to reach me is by email. I am based in{" "}
              {profile.location} and happy to talk about full-stack development,
              data science, or anything on this page.
            </p>

            <div className="mt-8">
              <ContactActions />
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-sm text-fg-subtle">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </p>
          </div>
        </Card>
      </Reveal>

      {/* Profiles */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {socials.map((social, i) => {
          const { Icon } = social;
          return (
            <Reveal key={social.label} delay={i + 1}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass gradient-ring group flex items-center justify-between rounded-2xl p-6 transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-surface-hover"
              >
                <span className="flex items-center gap-4">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-subtle"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--accent-soft), var(--accent-2-soft))",
                    }}
                  >
                    <Icon className="h-5 w-5 text-accent" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-fg">
                      {social.label}
                    </span>
                    <span className="mt-0.5 block font-mono text-xs text-fg-subtle">
                      {social.handle}
                    </span>
                  </span>
                </span>

                <ArrowUpRight
                  className="h-5 w-5 text-fg-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
