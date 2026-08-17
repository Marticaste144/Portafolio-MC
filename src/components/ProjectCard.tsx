import type { Project } from "../data/projects";
import { Reveal } from "./Reveal";
import { Carousel } from "./Carousel";

interface ProjectCardProps {
  project: Project;
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.images.length === 0) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-line bg-gradient-to-br from-ink-card to-ink-soft">
        <span className="font-display text-6xl font-extrabold text-line select-none">
          {project.title
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("")}
        </span>
      </div>
    );
  }

  return <Carousel images={project.images} alt={project.title} />;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const featured = project.featured;

  return (
    <Reveal>
      <article
        data-cursor-hover
        className={`group grid gap-8 rounded-3xl border border-line bg-ink-card/50 p-6 transition-colors hover:border-accent-dim sm:p-8 md:grid-cols-5 md:items-center ${
          featured ? "md:p-10" : ""
        }`}
      >
        <div className="order-2 md:order-1 md:col-span-2">
          <ProjectVisual project={project} />
        </div>

        <div className="order-1 md:order-2 md:col-span-3">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
            <span className="rounded-full border border-line px-3 py-1 uppercase tracking-wide">
              {project.category}
            </span>
            <span>{project.year}</span>
          </div>

          <h3
            className={`mt-4 font-display font-bold text-paper ${
              featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
            }`}
          >
            {project.title}
          </h3>

          <p className="mt-3 text-muted">{project.description}</p>

          <p className="mt-3 text-sm text-paper/80">
            <span className="font-medium text-accent-soft">Mi rol: </span>
            {project.role}
          </p>

          {project.status && (
            <p className="mt-2 text-sm text-muted italic">{project.status}</p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-ink-soft px-3 py-1 text-xs font-medium text-paper/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-6 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent-soft"
                >
                  Ver sitio →
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-paper underline decoration-line underline-offset-4 hover:text-accent"
                >
                  Repositorio →
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}
