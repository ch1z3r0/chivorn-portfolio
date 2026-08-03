import { SectionHeader } from "../components/SectionHeader";
import { education, languages, skills } from "../data/content";

export function Education() {
  return (
    <div className="flex-1 bg-cream dark:bg-cream-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeader eyebrow="Background" heading="Education" path="education" />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="panel">
            <p className="mb-2 font-mono text-xs uppercase tracking-wide text-accent-2">School</p>
            <h3 className="text-lg font-semibold">{education.school}</h3>
            <p className="mt-1 text-sm text-black/60 dark:text-white/60">{education.program}</p>
            <span className="mt-4 inline-block rounded-full border border-accent-2/30 bg-accent-2/10 px-2.5 py-0.5 font-mono text-xs uppercase tracking-wide text-accent-2">
              {education.status}
            </span>
          </div>

          <div className="space-y-6">
            <div className="panel">
              <p className="mb-3 font-mono text-xs uppercase tracking-wide text-accent-2">Languages</p>
              <ul className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <li
                    key={lang}
                    className="rounded-full border border-black/15 px-3 py-1 text-sm dark:border-white/15"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <p className="mb-3 font-mono text-xs uppercase tracking-wide text-accent-2">Skills</p>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-black/15 px-3 py-1 text-sm dark:border-white/15"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}