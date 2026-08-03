import { SectionHeader } from "../components/SectionHeader";
import { techStack } from "../data/content";

export function About() {
  return (
    <div className="flex-1 bg-cream dark:bg-cream-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeader eyebrow="Who I am" heading="About" path="about" />

        <p className="mb-12 max-w-2xl text-base leading-relaxed text-black/70 dark:text-white/70">
          Started with "how hard can it be" and ended up with a growing list of things I only
          understood after they broke. Web developer, currently building real systems — payments,
          auth, the parts tutorials skip.
        </p>

        <h3 className="mb-4 font-mono text-sm uppercase tracking-wide text-black/50 dark:text-white/50">
          Tech stack
        </h3>
        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          {techStack.map((item) => (
            <div key={item.label} className="panel">
              <p className="font-mono text-xs uppercase tracking-wide text-accent-2">{item.label}</p>
              <p className="mt-2 font-semibold">{item.value}</p>
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="panel max-w-2xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-wide text-accent-2">How I work</p>
          <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
            I write the code myself first, then bring it back for review — not looking for
            solutions handed to me. I want the why before the what.
          </p>
        </div>
      </div>
    </div>
  );
}