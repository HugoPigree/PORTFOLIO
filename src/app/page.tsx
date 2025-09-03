import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { services, projects } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Développeur <span className="text-primary">Python/Django</span> — Automatisation & Reporting
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
            J’aide les entreprises à gagner du temps et à réduire les erreurs en transformant des
            processus manuels en <strong>outils automatisés fiables</strong> (scripts Python,
            reporting Excel connecté aux BDD, dashboards web).
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn px-6 py-3 text-base flex items-center gap-2" href="#projects">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Voir mes projets
            </a>
            <a className="btn-ghost flex items-center gap-2" href="#contact">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Discuter de votre besoin
            </a>
          </div>
          <ul className="mt-6 text-sm text-slate-500 dark:text-slate-400 space-y-1">
            <li>Python, Django, Pandas, OpenPyXL</li>
            <li>SQL (MySQL/PostgreSQL), Docker</li>
            <li>Next.js (projets front), déploiement</li>
          </ul>
        </div>
        <div aria-hidden="true">
          <div className="skeleton h-64 md:h-80" />
        </div>
      </section>

      {/* Services */}
      <Section id="services" title="Services">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} text={s.text} />
          ))}
        </div>
      </Section>

      {/* Projets */}
      <Section id="projects" title="Projets">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              desc={p.desc}
              tags={p.tags}
              href={p.href}
            />
          ))}
        </div>
      </Section>

      {/* À propos */}
      <Section id="about" title="À propos">
        <div className="card p-6">
          <p className="text-slate-700 dark:text-slate-200">
            Développeur web spécialisé en Python. Expérience en alternance au Ministère de l’Intérieur
            et projets collaboratifs (hackathon européen). Mon approche : comprendre vos besoins métiers
            et transformer vos process en solutions automatisées simples et efficaces.
          </p>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <ContactForm />
      </Section>
    </main>
  );
}
