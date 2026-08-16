import { motion } from "framer-motion";
import { profile } from "../data/profile";

export function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 sm:px-8"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="hero-blob -top-48 -left-56 h-[32rem] w-[32rem] bg-accent/15"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="hero-blob -top-20 -right-48 h-[30rem] w-[30rem] bg-accent-soft/10"
          style={{ animationDelay: "-11s" }}
        />
        <div
          className="hero-blob -bottom-56 left-1/3 h-[30rem] w-[30rem] bg-accent-dim/20"
          style={{ animationDelay: "-19s" }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm tracking-wide text-accent uppercase"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl leading-[1.05] font-extrabold tracking-tight text-paper sm:text-7xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={scrollToWork}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper transition-transform hover:scale-105"
          >
            Ver proyectos
          </button>

          <div className="flex items-center gap-4 text-sm text-muted">
            {profile.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line underline-offset-4 transition-colors hover:text-accent"
              >
                GitHub
              </a>
            )}
            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-line underline-offset-4 transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            )}
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download
                className="underline decoration-line underline-offset-4 transition-colors hover:text-accent"
              >
                CV
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
