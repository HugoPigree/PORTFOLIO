import React from "react";

type Props = {
    id?: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
};

export default function Section({ id, title, subtitle, children, className }: Props) {
    return (
        <section id={id} className={`container py-16 md:py-24 ${className || ""}`}>
            {/* Headline propre, sans halo/flou */}
            <div className="mb-8 md:mb-10">
                <h2 className="inline-flex items-center gap-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    <span className="text-edge">›</span>
                    <span className="text-gradient-indigo">{title}</span>
                    <span className="text-edge">‹</span>
                </h2>

                {/* barre d'accent (indigo/violet) */}
                <div className="mt-3 h-[3px] w-28 rounded-full accent-bar" />

                {subtitle && (
                    <p className="mt-3 max-w-2xl text-sm md:text-base text-white/65">{subtitle}</p>
                )}
            </div>

            {/* plus d’espace au-dessus du grid */}
            <div className="mt-6 md:mt-8">{children}</div>
        </section>
    );
}
