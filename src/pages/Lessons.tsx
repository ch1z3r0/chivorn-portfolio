import { SectionHeader } from "../components/SectionHeader";
import { lessons } from "../data/content";

export function Lessons() {
  return (
    <div className="flex-1 bg-cream dark:bg-cream-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeader eyebrow="Field notes" heading="Lessons" path="lessons" />

        <div className="max-w-3xl overflow-hidden rounded-lg border border-black/10 shadow-xl shadow-black/5 dark:border-white/10">
          <div className="flex items-center gap-2 border-b border-black/10 bg-black/[0.03] px-4 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" aria-hidden="true" />
            <span className="ml-2 font-mono text-xs text-black/50 dark:text-white/50">notes.log</span>
          </div>
          <ol className="divide-y divide-black/10 dark:divide-white/10">
            {lessons.map((lesson, i) => (
              <li key={lesson} className="flex gap-4 px-5 py-4 font-mono text-sm leading-relaxed">
                <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-black/80 dark:text-white/80">{lesson}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}