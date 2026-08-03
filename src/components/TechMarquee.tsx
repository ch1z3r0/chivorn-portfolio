import { techMarquee } from "../data/content";

export function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="overflow-hidden border-y border-black/10 bg-black/[0.02] py-3 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="animate-marquee flex w-max items-center gap-3 whitespace-nowrap font-mono text-sm text-black/50 dark:text-white/50">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-3">
            {item}
            <span className="text-accent/60" aria-hidden="true">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}