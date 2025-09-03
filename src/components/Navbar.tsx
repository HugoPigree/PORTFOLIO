"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
      <header
        className={clsx(
          "sticky top-0 z-50 border-b border-stroke/50 backdrop-blur",
          "bg-bg/90",
          elevated && "shadow-soft"
        )}
      >
        <div className="container flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-primary text-white">
              H
            </span>
            Hugo
          </a>
          <nav>
            <button
              className="btn-ghost btn-sm md:hidden"
              onClick={() => setOpen(!open)}
            >
              Menu
            </button>
            <ul
              className={clsx(
                "text-sm font-medium md:flex md:items-center md:gap-2",
                open ? "block space-y-2 p-4" : "hidden md:flex"
              )}
            >
              <li>
                <a href="#services" className="btn-ghost btn-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="btn-ghost btn-sm">
                  Projets
                </a>
              </li>
              <li>
                <a href="#about" className="btn-ghost btn-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A12.042 12.042 0 0112 15c2.036 0 3.952.486 5.621 1.328M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  À propos
                </a>
              </li>
              <li>
                <a
                  className="btn btn-sm flex items-center gap-1"
                  href="#contact"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
}
