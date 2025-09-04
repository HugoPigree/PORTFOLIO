"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
    const [error, setError] = useState<string>("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        setError("");

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
            email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
            honeypot: (form.elements.namedItem("company") as HTMLInputElement).value, // champ caché
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const json = await res.json();
            if (!res.ok || !json.ok) throw new Error(json.error || "Échec d’envoi");
            setStatus("sent");
            form.reset();
        } catch (err: any) {
            setStatus("error");
            setError(err.message || "Erreur inconnue");
        }
    }

    return (
        <form onSubmit={onSubmit} className="relative">
            {/* champ anti-bot (caché) */}
            <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
            />

            <div className="card p-6 space-y-5">
                <div>
                    <label className="block text-sm mb-1.5">Nom</label>
                    <input
                        name="name"
                        required
                        className="w-full rounded-xl bg-white/5 border border-white/10 text-white
                       placeholder-white/40 px-4 py-2.5 outline-none
                       focus:ring-2 focus:ring-indigo-400/40 focus:border-white/20"
                        placeholder="Votre nom"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1.5">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-xl bg-white/5 border border-white/10 text-white
                       placeholder-white/40 px-4 py-2.5 outline-none
                       focus:ring-2 focus:ring-indigo-400/40 focus:border-white/20"
                        placeholder="vous@exemple.com"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1.5">Message</label>
                    <textarea
                        name="message"
                        required
                        className="w-full rounded-xl bg-white/5 border border-white/10 text-white
                       placeholder-white/40 px-4 py-2.5 min-h-[160px] resize-y
                       outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-white/20"
                        placeholder="Décrivez brièvement votre besoin…"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn disabled:opacity-70"
                    >
                        {status === "sending" ? "Envoi…" : "Envoyer"}
                    </button>
                    <p className="text-sm text-white/60">
                        Je réponds sous 24–48h ouvrées.
                    </p>
                </div>

                {status === "sent" && (
                    <p className="text-sm text-emerald-300">
                        Merci ! Votre message a bien été envoyé ✅
                    </p>
                )}
                {status === "error" && (
                    <p className="text-sm text-rose-300">
                        Oups, impossible d’envoyer le message : {error}
                    </p>
                )}
            </div>
        </form>
    );
}
