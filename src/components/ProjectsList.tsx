import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function ProjectsList() {
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section id="work" className="px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-mono text-sm tracking-wide text-accent uppercase">
            Proyectos
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl">
            Lo que fui construyendo
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-8">
          {sorted.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
