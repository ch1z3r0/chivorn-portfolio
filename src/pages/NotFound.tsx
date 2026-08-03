import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="eyebrow mb-3">404</p>
      <h1 className="text-3xl font-bold sm:text-4xl">
        Page not found <span className="path-suffix">// nothing here</span>
      </h1>
      <p className="mt-4 max-w-md text-black/70 dark:text-white/70">
        The page you're looking for doesn't exist, or moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-white transition-colors hover:bg-accent/90"
      >
        back home →
      </Link>
    </div>
  );
}