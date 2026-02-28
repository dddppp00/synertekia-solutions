import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const cases = [
  {
    id: "automatizacion-logistica",
    title: "Flujos administrativos y contables",
    sector: "Automatización",
    result: "-65% Tiempo invertido en tareas administrativas",
    desc: "Organización con alto volumen de tareas administrativas repetitivas. Se implantaron flujos automatizados para dietas, extracciones, operaciones bancarias y contabilidad.",
  },
  {
    id: "bi-retail",
    title: "IA en el sector hotelero",
    sector: "Formación",
    result: "+80% Tasa de adopción",
    desc: "Cadena hotelera con necesidad de mejorar la productividad administrativa. Sesiones prácticas con casos reales, guías de prompts y protocolo de uso seguro.",
  },
  {
    id: "agente-ia-atencion",
    title: "Curso de iniciación a la IA",
    sector: "Formación",
    result: "+120 Personas formadas",
    desc: "Programa dirigido a perfiles no técnicos de Pymes, orientado a productividad, automatización y evaluación de respuestas.",
  },
  {
    id: "analisis-predictivo-finanzas",
    title: "Control financiero desde XML",
    sector: "Análisis de datos",
    result: "-80% Tiempo de consolidación",
    desc: "Consultora que migró de múltiples Excel a ficheros XML. Se construyó un pipeline automatizado de extracción, limpieza y modelado financiero.",
  },
  {
    id: "saas-gestion-proyectos",
    title: "GPTs para productividad",
    sector: "IA personalizada",
    result: "-90% Tiempo de redacción",
    desc: "Equipos con alta carga documental. Desarrollo de GPTs y agentes con bases de conocimiento diversas para escritos dirigidos a AAPP.",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden md:min-h-[75vh] md:flex md:items-center">
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block absolute inset-y-0 right-0 md:w-[65%] lg:w-[60%] xl:w-[56%]">
            <img
              src={heroBg}
              alt=""
              className="w-full h-full object-cover object-center"
              style={{
                WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.42) 14%, rgba(0,0,0,0.82) 28%, rgba(0,0,0,1) 46%)",
                maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.42) 14%, rgba(0,0,0,0.82) 28%, rgba(0,0,0,1) 46%)",
              }}
            />
          </div>
          <div className="hidden md:block absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background)/0.72)_0%,hsl(var(--background)/0.46)_34%,hsl(var(--background)/0.24)_56%,hsl(var(--background)/0.14)_74%,hsl(var(--background)/0.18)_100%)]" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-background/12 via-transparent to-background/18" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.08),transparent_52%)]" />
          <div className="md:hidden absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/40" />
        </div>

        <div className="container relative z-10 pt-14 pb-0 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/8 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Casos de éxito
            </span>
            <h1 className="font-display mb-5 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Resultados reales,<br />medibles y verificables
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Cada proyecto que presentamos ha sido ejecutado, medido y validado. Aquí no hay
              estimaciones: son datos reales de empresas que ya trabajan con IA.
            </p>
          </motion.div>

          <div className="md:hidden mt-10 overflow-hidden rounded-t-2xl h-64 relative">
            <img src={heroBg} alt="" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Grid de casos */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={`/portfolio/${c.id}`}
                  className="flex h-full flex-col rounded-xl bg-card p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {c.sector}
                    </span>
                  </div>
                  <h3 className="font-display mb-3 text-xl font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                  <div className="mb-4 rounded-md bg-primary/10 px-4 py-2 inline-block">
                    <span className="text-sm font-semibold text-primary">{c.result}</span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-primary">
                    Ver caso completo <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground">
        <div className="container text-center">
          <h2 className="font-display mb-4 text-3xl font-bold text-primary-foreground">
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>
          <p className="mb-8 text-primary-foreground/70">
            Cuéntanos tu reto y diseñamos la solución.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contacto">
              Solicitar información <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
