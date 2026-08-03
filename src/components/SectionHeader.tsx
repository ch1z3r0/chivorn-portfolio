interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  path: string;
}

export function SectionHeader({ eyebrow, heading, path }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-sans text-3xl font-bold sm:text-4xl">
        {heading} <span className="path-suffix">// {path}</span>
      </h2>
    </div>
  );
}