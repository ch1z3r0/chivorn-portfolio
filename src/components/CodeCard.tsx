import { profile } from "../data/content";

export function CodeCard() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border border-black/10 bg-white/70 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-center gap-2 border-b border-black/10 bg-black/[0.03] px-4 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-black/50 dark:text-white/50">chivorn.config.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-black/40 dark:text-white/40">export default </span>
          <span className="text-black/70 dark:text-white/60">{"{"}</span>
          {"\n"}
          {"  "}
          <span className="text-sky-600 dark:text-sky-400">name</span>
          <span className="text-black/50 dark:text-white/50">: </span>
          <span className="text-emerald-600 dark:text-emerald-400">"{profile.name}"</span>
          <span className="text-black/50 dark:text-white/50">,</span>
          {"\n"}
          {"  "}
          <span className="text-sky-600 dark:text-sky-400">role</span>
          <span className="text-black/50 dark:text-white/50">: </span>
          <span className="text-emerald-600 dark:text-emerald-400">"{profile.role}"</span>
          <span className="text-black/50 dark:text-white/50">,</span>
          {"\n"}
          {"  "}
          <span className="text-sky-600 dark:text-sky-400">location</span>
          <span className="text-black/50 dark:text-white/50">: </span>
          <span className="text-emerald-600 dark:text-emerald-400">"{profile.location}"</span>
          <span className="text-black/50 dark:text-white/50">,</span>
          {"\n"}
          {"  "}
          <span className="text-sky-600 dark:text-sky-400">focus</span>
          <span className="text-black/50 dark:text-white/50">: [</span>
          {profile.focus.map((f, i) => (
            <span key={f}>
              <span className="text-emerald-600 dark:text-emerald-400">"{f}"</span>
              {i < profile.focus.length - 1 && <span className="text-black/50 dark:text-white/50">, </span>}
            </span>
          ))}
          <span className="text-black/50 dark:text-white/50">],</span>
          {"\n"}
          {"  "}
          <span className="text-sky-600 dark:text-sky-400">available</span>
          <span className="text-black/50 dark:text-white/50">: </span>
          <span className="text-accent">{String(profile.available)}</span>
          <span className="text-black/50 dark:text-white/50">,</span>
          {"\n"}
          <span className="text-black/70 dark:text-white/60">{"}"}</span>
        </code>
      </pre>
      <div className="border-t border-black/10 px-5 py-3 font-mono text-[13px] dark:border-white/10">
        <span className="text-accent-2">$</span>{" "}
        <span className="text-black/70 dark:text-white/70">ship</span>
        <span className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-accent align-middle" aria-hidden="true" />
      </div>
    </div>
  );
}