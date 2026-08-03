import { SectionHeader } from "../components/SectionHeader";
import { experience } from "../data/content";

export function Experience() {
  return (
    <div className="flex-1 bg-cream dark:bg-cream-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeader eyebrow="Work history" heading="Experience" path="experience" />

        <div className="space-y-6">
          {experience.map((item) => (
            <article key={item.title} className="panel max-w-3xl">
              <div className="mb-4 border-b border-black/10 pb-4 dark:border-white/10">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                  {item.company} <span aria-hidden="true">·</span>{" "}
                  <span className="font-mono">{item.date}</span>
                </p>
              </div>
              <ol className="space-y-3">
                {item.bullets.map((bullet, i) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-black/70 dark:text-white/70">
                    <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}