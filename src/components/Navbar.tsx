"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { label: string; href: string; id?: string };

const NAV_ITEMS: Item[] = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Projets", href: "#projets", id: "projets" },
  { label: "À propos", href: "#apropos", id: "apropos" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = ids
        .map((id) => {
          const el = document.getElementById(id);
          return el ? { id, el } : null;
        })
        .filter(Boolean) as { id: string; el: HTMLElement }[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
              .filter((e) => e.isIntersecting)
              .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible?.target?.id) setActive(visible.target.id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join(",")]);

  return active;
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Détection de section active (one-page)
  const sectionIds = useMemo(
      () => NAV_ITEMS.map((i) => i.id!).filter(Boolean),
      []
  );
  const active = useActiveSection(sectionIds);

  // Scroll doux sur clic d’ancre
  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (e.currentTarget.getAttribute("href") || "").trim();
    if (!href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      setOpen(false);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }
  };

  return (
      <header
          className="
        sticky top-0 z-50
        backdrop-blur-md bg-[rgba(16,20,30,0.55)]
        border-b border-white/10
        shadow-glass
      "
          role="banner"
      >
        <nav
            className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4"
            aria-label="Navigation principale"
        >
          {/* Logo / Marque */}
          <Link
              href="/"
              className="group inline-flex items-center gap-2"
              aria-label="Accueil"
          >
          <span
              className="
              grid h-9 w-9 place-items-center rounded-xl
              bg-gradient-to-br from-cyan-400/30 to-indigo-400/30
              border border-white/15
              text-sm font-bold text-white
              transition-transform group-hover:scale-105
            "
          >
            H
          </span>
            <span className="hidden text-sm font-semibold text-white/90 md:block">
            Hugo Pigree — Dev Python
          </span>
          </Link>

          {/* Desktop items */}
          <div className="hidden items-center gap-2 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive =
                  active === item.id ||
                  (item.href === "/" && pathname === "/"); // pour de futures pages
              return (
                  <a
                      key={item.href}
                      href={item.href}
                      onClick={onAnchorClick}
                      className={`
                  rounded-full px-3.5 py-2 text-sm font-medium
                  transition-colors
                  ${isActive
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:text-white hover:bg-white/5"}
                `}
                  >
                    {item.label}
                  </a>
              );
            })}

            {/* CTA */}
            <a
                href="#contact"
                onClick={onAnchorClick}
                className="
              ml-3 rounded-full px-4 py-2 text-sm font-semibold
              bg-gradient-to-r from-cyan-400 to-indigo-400
              text-slate-900
              hover:opacity-90 active:opacity-80
              transition-opacity
            "
            >
              Me contacter
            </a>
          </div>

          {/* Burger mobile */}
          <button
              className="
            inline-flex h-10 w-10 items-center justify-center md:hidden
            rounded-xl border border-white/15
            text-white/80 hover:text-white
            bg-white/5
          "
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
          >
            <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${open ? "hidden" : "block"}`}
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${open ? "block" : "hidden"}`}
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </nav>

        {/* Drawer mobile */}
        <div
            className={`
          md:hidden overflow-hidden transition-[max-height] duration-300
          ${open ? "max-h-96" : "max-h-0"}
        `}
            aria-hidden={!open}
        >
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <div className="grid gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={onAnchorClick}
                        className={`
                    rounded-xl px-3.5 py-3 text-[15px] font-medium
                    ${isActive
                            ? "bg-white/10 text-white"
                            : "text-white/80 hover:text-white hover:bg-white/5"}
                  `}
                    >
                      {item.label}
                    </a>
                );
              })}
              <a
                  href="#contact"
                  onClick={onAnchorClick}
                  className="
                mt-1 rounded-xl px-3.5 py-3 text-[15px] font-semibold
                bg-gradient-to-r from-cyan-400 to-indigo-400
                text-slate-900 text-center
              "
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>

        {/* Barre de progression de scroll (bonus visuel) */}
        <ScrollProgress />
      </header>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / (h || 1)));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
      <div className="h-[2px] w-full bg-transparent">
        <div
            className="h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-400"
            style={{ width: `${progress * 100}%` }}
            aria-hidden
        />
      </div>
  );
}
