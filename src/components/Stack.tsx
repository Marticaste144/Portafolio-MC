import { profile } from "../data/profile";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section id="stack" className="px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-sm tracking-wide text-accent uppercase">
            Stack
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl">
            Con qué trabajo
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {profile.stack.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.1}>
              <h3 className="text-sm font-semibold tracking-wide text-muted uppercase">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line pb-3 font-display text-lg text-paper"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
