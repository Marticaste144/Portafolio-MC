import { Reveal } from "./Reveal";
import { profile } from "../data/profile";

export function About() {
  return (
    <section id="about" className="px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-sm tracking-wide text-accent uppercase">
            Sobre mí
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-3xl font-display text-2xl leading-snug font-medium text-paper sm:text-3xl md:text-4xl">
            {profile.about}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
