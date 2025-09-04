// src/components/ProjectCard.tsx
import React from "react";

type Props = {
    title: string;
    desc: string;
    tags: string[];
    href: string;        // lien vers le code (externe)
    demoHref?: string;   // lien vers la démo (externe, optionnel)
    imageUrl?: string;   // optionnel: image/preview
};

export default function ProjectCard({
                                        title,
                                        desc,
                                        tags,
                                        href,
                                        demoHref,
                                        imageUrl,
                                    }: Props) {
    return (
        <article
            className="
        group relative overflow-hidden rounded-2xl
        border border-white/10 bg-white/[0.03]
        shadow-glass transition-transform
        hover:-translate-y-0.5 hover:border-white/20
      "
        >
            {/* image/placeholder */}
            <div className="relative h-44 w-full overflow-hidden border-b border-white/10 bg-white/[0.04]">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt=""
                        className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                ) : (
                    <div className="h-full w-full" />
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </div>

            <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((t) => (
                        <span
                            key={t}
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/80"
                        >
              {t}
            </span>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-3">
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              btn-cta
              inline-flex items-center justify-center gap-2 rounded-full
              px-4 py-2 text-sm font-semibold text-slate-900
              ring-1 ring-black/5
              transition-transform duration-200
              hover:-translate-y-0.5 active:translate-y-0
            "
                        aria-label={`Voir le code : ${title}`}
                    >
                        <span className="relative z-10">Voir le code</span>
                        <span className="shine absolute inset-0 rounded-full" />
                    </a>

                    {demoHref && (
                        <a
                            href={demoHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex items-center justify-center rounded-full
                border border-white/15 bg-white/5 px-4 py-2
                text-sm font-medium text-white/90
                hover:bg-white/10 transition-colors
              "
                            aria-label={`Voir la démo : ${title}`}
                        >
                            Démo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
