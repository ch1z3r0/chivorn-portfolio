import { contact } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-cream/90 dark:border-white/10 dark:bg-cream-dark/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-black/60 dark:text-white/60 sm:flex-row sm:px-6">
        <p className="font-mono">Chul Chivorn — Portfolio</p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${contact.email}`} className="transition-colors hover:text-accent">
            {contact.email}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}