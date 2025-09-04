import React from "react";

type Props = {
    icon: React.ReactNode;
    title: string;
    text: string;
};

export default function ServiceCard({ icon, title, text }: Props) {
    return (
        <article
            className="
        group relative overflow-hidden rounded-2xl
        border border-white/10 bg-white/[0.05]
        shadow-glass transition-transform
        hover:-translate-y-0.5 hover:border-white/20
      "
        >
            <div className="relative p-6">
                {/* Icône */}
                <div
                    className="
            inline-grid h-11 w-11 place-items-center rounded-xl
            bg-gradient-to-br from-indigo-400/15 to-sky-400/15
            ring-1 ring-inset ring-white/12 text-white
          "
                >
                    {icon}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                    {text}
                </p>
            </div>
        </article>
    );
}
