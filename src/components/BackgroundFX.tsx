"use client";

import { useEffect, useState } from "react";

type Props = {
    variant?: "aurora"; // on simplifie: un seul style propre
    className?: string;
};

export default function BackgroundFX({ className = "" }: Props) {
    // Parallax souris (valeurs -1 → 1)
    const [mxy, setMxy] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            const { innerWidth: w, innerHeight: h } = window;
            const x = (e.clientX / w) * 2 - 1;
            const y = (e.clientY / h) * 2 - 1;
            setMxy({ x, y });
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    // util: applique un parallax léger
    const parallax = (factor = 6) =>
        `translate3d(${(mxy.x * factor).toFixed(2)}%, ${(mxy.y * factor).toFixed(
            2
        )}%, 0)`;

    return (
        <div
            aria-hidden
            className={`pointer-events-none fixed inset-0 z-0 overflow-hidden ${className}`}
        >
            {/* vignette sobre */}
            <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_-10%,rgba(8,14,30,0.15),rgba(8,14,30,0.9)_70%)]" />

            {/* blobs plus PETITS + parallax + drift */}
            <div
                className="aurora-blob-sm anim-driftA left-[-10%] top-[12%] from-[#a78bfa] via-[#818cf8] to-[#60a5fa]"
                style={{ transform: parallax(4) }}
            />
            <div
                className="aurora-blob-sm anim-driftB right-[-12%] top-[38%] from-[#60a5fa] via-[#7dd3fc] to-[#818cf8]"
                style={{ transform: parallax(6) }}
            />
            <div
                className="aurora-blob-sm anim-driftC left-[18%] bottom-[-12%] from-[#9333ea] via-[#a78bfa] to-[#60a5fa]"
                style={{ transform: parallax(3) }}
            />

            {/* grain très léger */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%270 0 100 100%27><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.30%22/></svg>')]" />
        </div>
    );
}
