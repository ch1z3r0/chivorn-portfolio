import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/content";

export function Projects() {
  return (
    <div className="flex-1 bg-cream dark:bg-cream-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeader eyebrow="Selected work" heading="Projects" path="selected-work" />

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}