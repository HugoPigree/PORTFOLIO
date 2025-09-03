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
              "sticky top-0 z-50 border-b border-stroke backdrop-blur",
              "bg-panel/70",
              elevated ? "shadow-glow" : ""
          )}
      >

        <div className="container flex items-center justify-between h-14">
          <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-primary text-white">
            H
          </span>
            Hugo
          </a>
          <nav>
            <button className="md:hidden btn-ghost" onClick={() => setOpen(!open)}>
              Menu
            </button>
            <ul
                className={clsx(
                    "md:flex md:gap-6 text-sm font-medium",
                    open ? "block p-4 space-y-3" : "hidden md:block"
                )}
            >
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projets</a>
              </li>
              <li>
                <a href="#about">À propos</a>
              </li>
              <li>
                <a className="btn" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
}
