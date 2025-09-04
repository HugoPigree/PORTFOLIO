import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { services, projects } from "@/lib/data";
import Hero from "@/components/Hero"; // <-- nouvel import

export default function HomePage() {
    return (
        <main>
            {/* Hero */}
            <Hero />

            {/* Services */}
            <Section id="services" title="Services">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <ServiceCard
                            key={s.title}
                            icon={s.icon}
                            title={s.title}
                            text={s.text}
                        />
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
                <div
                    className="
      relative overflow-hidden rounded-2xl border border-white/10
      bg-white/[0.04] backdrop-blur p-8 shadow-glass
    "
                >
                    <h3 className="text-2xl font-bold mb-4 text-gradient-indigo">
                        🚀 Qui suis-je ?
                    </h3>
                    <p className="text-base leading-relaxed text-white/80">
                        Je suis <span className="font-semibold text-white">Hugo Pigree</span>,
                        développeur spécialisé en <span className="text-400 font-medium">Python/Django</span>.
                        J’aide les entreprises à <span className="font-semibold">automatiser leurs processus </span>
                        et à <span className="font-semibold">gagner en efficacité</span> grâce à des scripts robustes,
                        du reporting connecté aux bases de données et des applications web sur mesure.
                    </p>

                    {/* Bloc spécial Mon approche */}
                    <div
                        className="
        mt-6 rounded-xl border border-indigo-500/30 bg-gradient-to-r
        from-indigo-500/10 via-sky-500/10 to-purple-500/10
        px-6 py-4 shadow-neon
      "
                    >
                        <p className="text-base text-white/90 font-medium">
                            💡 <span className="font-semibold text-gradient-indigo">Mon approche : </span>
                             Concevoir des solutions <span className="font-bold">claires, fiables et automatisées </span>
                            qui font gagner du temps et réduisent les erreurs dès leur mise en place.
                        </p>
                    </div>
                </div>
            </Section>



            {/* Contact */}
            <Section id="contact" title="Contact">
                <ContactForm />
            </Section>
        </main>
    );
}
