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

        <Reveal delay={0.2}>
          <div className="mt-20 border-t border-line pt-12">
            <h3 className="text-sm font-semibold tracking-wide text-muted uppercase">
              Idiomas
            </h3>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3">
              {profile.languages.map((lang) => (
                <li key={lang.name} className="flex flex-col gap-2">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-lg text-paper">
                      {lang.name}
                    </span>
                    <span className="text-xs text-muted">{lang.level}</span>
                  </div>
                  <div className="flex gap-1.5">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 flex-1 rounded-full ${
                          i < lang.value ? "bg-accent" : "bg-ink-soft"
                        }`}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
