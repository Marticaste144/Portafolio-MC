import { profile } from "../data/profile";
import { Reveal } from "./Reveal";

export function Contact() {
  const links = [
    { label: profile.email, href: `mailto:${profile.email}` },
    profile.linkedinUrl ? { label: "LinkedIn", href: profile.linkedinUrl } : null,
    profile.githubUrl ? { label: "GitHub", href: profile.githubUrl } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <section id="contact" className="px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-sm tracking-wide text-accent uppercase">
            Contacto
          </span>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold text-paper sm:text-4xl">
            ¿Hablamos?
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Si querés escribirme por una oportunidad, un proyecto o simplemente
            para charlar de tecnología, estas son las mejores formas de
            encontrarme.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
