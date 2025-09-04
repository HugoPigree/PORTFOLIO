// src/app/api/contact/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message, honeypot } = await req.json();

        // anti-bot simple
        if (honeypot) return new Response("OK", { status: 200 });

        if (!name || !email || !message) {
            return Response.json(
                { ok: false, error: "Champs requis manquants." },
                { status: 400 }
            );
        }

        const html = `
      <h2>Nouveau message depuis le portfolio</h2>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p style="white-space:pre-wrap;margin-top:12px">${message}</p>
    `;

        const { error } = await resend.emails.send({
            from: process.env.CONTACT_FROM!,   // ex: onboarding@resend.dev (ou ton domaine vérifié)
            to: process.env.CONTACT_TO!,       // ton adresse de réception
            subject: `Contact — ${name}`,
            html,
            replyTo: email,                    // ✅ bonne propriété
        });

        if (error) {
            console.error(error);
            return Response.json({ ok: false, error: "Échec d’envoi." }, { status: 500 });
        }

        return Response.json({ ok: true });
    } catch (e) {
        console.error(e);
        return Response.json({ ok: false, error: "Erreur serveur." }, { status: 500 });
    }
}
