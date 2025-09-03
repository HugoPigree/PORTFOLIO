export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200/60 dark:border-white/10">
      <div className="container py-8 text-sm text-slate-500 dark:text-slate-400 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Hugo Pigree — Développeur Python.</p>
        <p className="opacity-80">Disponible sur Malt • Île-de-France • Remote ok</p>
      </div>
    </footer>
  );
}
