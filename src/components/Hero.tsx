"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Code2,
    Database,
    Boxes,
    FileSpreadsheet,
    Sigma,
    ServerCog,
    Rocket,
    LayoutDashboard,
} from "lucide-react";

const CHIPS = [
    { label: "Python", icon: <Code2 className="h-4 w-4" /> },
    { label: "Django", icon: <ServerCog className="h-4 w-4" /> },
    { label: "Pandas", icon: <Sigma className="h-4 w-4" /> },
    { label: "OpenPyXL", icon: <FileSpreadsheet className="h-4 w-4" /> },
    { label: "SQL", icon: <Database className="h-4 w-4" /> },
    { label: "Docker", icon: <Boxes className="h-4 w-4" /> },
    { label: "Next.js/React", icon: <LayoutDashboard className="h-4 w-4" /> },
    { label: "Déploiement", icon: <Rocket className="h-4 w-4" /> },
];

export default function Hero() {
    return (
        <section className="relative container py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
            {/* Texte à gauche */}
            <div>
                <h1 className="mb-5 text-3xl md:text-4xl font-extrabold leading-tight text-white">
                    Automatisation & Reporting <br/>
                    <span className="text-gradient-indigo">Python&nbsp;/&nbsp;Django</span>
                </h1>


                <p className="mb-6 max-w-xl text-base text-white/75 md:text-lg">
                    J’aide les entreprises à{" "}
                    <span className="font-semibold">gagner du temps</span> et à{" "}
                    <span className="font-semibold">réduire les erreurs</span> grâce à
                    des outils automatisés et des dashboards sur-mesure.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                    <Link
                        href="#projects"
                        className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-slate-900 bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 hover:opacity-90 active:opacity-80 shadow-lg shadow-indigo-500/20"
                    >
                        Voir mes projets
                    </Link>

                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/[0.08]"
                    >
                        Me contacter
                    </Link>
                </div>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                    {CHIPS.map((c) => (
                        <span
                            key={c.label}
                            className="skill-chip inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/85"
                        >
              {c.icon}
                            {c.label}
            </span>
                    ))}
                </div>
            </div>

            {/* Photo à droite */}
            <div className="flex justify-center">
                <div
                    className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-r from-emerald-400 to-teal-300 p-1 shadow-lg shadow-emerald-500/20">
                    <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                            src="/moi.jpg" // Mets ton image dans /public/me.jpg
                            alt="Photo de profil Hugo Pigree"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
