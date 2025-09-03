export default function ServiceCard({
  icon,
  title,
  text
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <article className="card p-6">
      <div className="text-2xl mb-3" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{text}</p>
    </article>
  );
}
