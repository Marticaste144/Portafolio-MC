import { profile } from "../data/profile";
import { Reveal } from "./Reveal";

const formatPhone = (phone: string) =>
  `+54 9 ${phone.slice(0, 4)} ${phone.slice(4)}`;

export function Contact() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;
  const whatsappUrl = `https://wa.me/549${profile.phone}`;

  const links = [
    { label: profile.email, href: gmailComposeUrl },
    profile.phone
      ? { label: formatPhone(profile.phone), href: whatsappUrl }
      : null,
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
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ))}

            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper transition-transform hover:scale-105"
              >
                Descargar CV
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
