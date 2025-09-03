export default function ProjectCard({
  title,
  desc,
  tags,
  href
}: {
  title: string;
  desc: string;
  tags: string[];
  href?: string;
}) {
  return (
    <article className="card overflow-hidden">
      <div className="skeleton" aria-hidden="true" />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        {href ? (
          <a className="btn-ghost" href={href} target="_blank" rel="noreferrer">
            Voir le code
          </a>
        ) : null}
      </div>
    </article>
  );
}
