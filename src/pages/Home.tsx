import { Link } from "react-router-dom";
import { CodeCard } from "../components/CodeCard";
import { TechMarquee } from "../components/TechMarquee";
import { ProjectCard } from "../components/ProjectCard";
import { projects, techStack, experience, contact } from "../data/content";

export function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Cambodia — Remote friendly</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              I build the web
              <br />
              <span className="text-accent">end to end.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-black/70 dark:text-white/70">
              I build fast, reliable product interfaces and the systems behind them — currently
              focused on payments, auth, and the parts tutorials skip.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-white transition-colors hover:bg-accent/90"
              >
                view projects →
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-black/20 px-5 py-2.5 font-mono text-sm transition-colors hover:border-accent hover:text-accent dark:border-white/20"
              >
                get in touch
              </Link>
            </div>
          </div>

          <div className="hidden justify-self-center lg:flex lg:justify-end">
            <CodeCard />
          </div>
        </div>
      </section>

      <TechMarquee />

      <div className="flex-1 bg-cream dark:bg-cream-dark">
      {/* About preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Who I am</p>
            <h2 className="text-2xl font-bold sm:text-3xl">About</h2>
          </div>
          <Link
            to="/about"
            className="font-mono text-sm text-accent transition-opacity hover:opacity-80"
          >
            more about me →
          </Link>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-black/70 dark:text-white/70">
          Started with "how hard can it be" and ended up with a growing list of things I only
          understood after they broke. Web developer, currently building real systems — payments,
          auth, the parts tutorials skip.
        </p>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-8">
          <p className="eyebrow mb-3">Gear &amp; equipment</p>
          <h2 className="text-2xl font-bold sm:text-3xl">Stack</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((item) => (
            <div key={item.label} className="panel">
              <p className="font-mono text-xs uppercase tracking-wide text-accent-2">
                {item.label}
              </p>
              <p className="mt-2 font-semibold">{item.value}</p>
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Where I've worked</p>
            <h2 className="text-2xl font-bold sm:text-3xl">Experience</h2>
          </div>
          <Link
            to="/experience"
            className="font-mono text-sm text-accent transition-opacity hover:opacity-80"
          >
            full history →
          </Link>
        </div>
        {experience.map((item) => (
          <div key={item.title + item.company} className="panel">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold">
                {item.title} <span className="text-black/50 dark:text-white/50">— {item.company}</span>
              </p>
              <p className="font-mono text-xs text-black/50 dark:text-white/50">{item.date}</p>
            </div>
            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-black/70 dark:text-white/70">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
          </div>
          <Link
            to="/projects"
            className="font-mono text-sm text-accent transition-opacity hover:opacity-80"
          >
            all projects →
          </Link>
        </div>
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="panel flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow mb-3">Let's talk</p>
            <h2 className="text-2xl font-bold sm:text-3xl">Get in touch</h2>
            <p className="mt-2 text-sm text-black/60 dark:text-white/60">
              {contact.email}
            </p>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-white transition-colors hover:bg-accent/90"
          >
            contact page →
          </Link>
        </div>
      </section>
      </div>
    </div>
  );
}