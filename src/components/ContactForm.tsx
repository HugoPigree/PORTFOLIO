"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("loading");
    // Branche un service externe (Formspree/EmailJS/API perso) ici :
    await new Promise((r) => setTimeout(r, 800));
    form.reset();
    setState("done");
    setTimeout(() => setState("idle"), 2500);
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 grid gap-4">
      <div>
        <label className="block text-sm mb-1">Nom</label>
        <input
          name="name"
          required
          className="w-full rounded-xl border border-slate-300/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-slate-300/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-slate-300/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-2"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="btn" type="submit" disabled={state !== "idle"}>
          {state === "idle" ? "Envoyer" : state === "loading" ? "Envoi..." : "Message envoyé ✅"}
        </button>
        <p className="text-xs text-slate-500 dark:text-slate-400">Je réponds sous 24–48h ouvrées.</p>
      </div>
    </form>
  );
}
