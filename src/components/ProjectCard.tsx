import type { Project } from "../data/content";
import { GithubIcon } from "./icons/GithubIcon";
import { ExternalLink } from "lucide-react";

const statusStyles: Record<Project["status"], string> = {
  Done: "bg-accent-2/10 text-accent-2 border-accent-2/30",
  "In progress": "bg-accent/10 text-accent border-accent/30",
  Partial: "bg-black/5 text-black/60 border-black/20 dark:bg-white/5 dark:text-white/60 dark:border-white/20",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="panel">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-3 dark:border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-black/40 dark:text-white/40">{project.number}</span>
          <h3 className="text-lg font-semibold">{project.title}</h3>
        </div>
        <span
          className={`rounded-full border px-2.5 py-0.5 font-mono text-xs uppercase tracking-wide ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">{project.description}</p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-sm border border-black/10 px-2 py-0.5 font-mono text-xs text-black/60 dark:border-white/10 dark:text-white/60"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 font-mono text-xs">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-black/60 transition-colors hover:text-accent dark:text-white/60"
          >
            <GithubIcon size={14} />
            code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-black/60 transition-colors hover:text-accent dark:text-white/60"
            >
              <ExternalLink size={14} />
              live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}