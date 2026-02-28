import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Cog,
  BarChart3,
  Database,
  TrendingUp,
  Zap,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import consultoriaImage from "@/assets/consultoria.png";
import analiticaImage from "@/assets/analitica.png";
import formacionImage from "@/assets/formacion.png";
import automatizacionImage from "@/assets/automatizacion.png";
import solucionesImage from "@/assets/soluciones.png";
import heroBg from "@/assets/hero-bg.jpg";

const philosophyBenefits = [
  "Formación estructurada y continua",
  "Solo aplicamos lo que hemos validado internamente",
  "Revisión periódica de implantaciones",
];

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  benefits: string[];
  results: string;
  cta: string;
  image?: string;
  imageAlt?: string;
};

const services: Service[] = [
  {
    id: "consultoria",
    icon: Brain,
    title: "Consultoría en IA",
    desc: "Evaluamos tus procesos, datos y objetivos para definir una hoja de ruta de Inteligencia Artificial realista y 100% alineada con tu negocio.",
    benefits: [
      "Diagnóstico de madurez digital",
      "Roadmap de adopción por fases",
      "Protocolos de seguridad y cumplimiento normativo",
      "Acompañamiento estratégico y técnico",
    ],
    results: "Estrategia de IA priorizada, segura y enfocada a resultados.",
    cta: "Solicitar diagnóstico",
    image: consultoriaImage,
    imageAlt: "Consultoría de IA",
  },
  {
    id: "formacion",
    icon: Zap,
    title: "Formación en IA",
    desc: "Diseñamos formaciones prácticas para directivos, equipos administrativos y técnicos, adaptadas al nivel y a las necesidades reales de tu empresa.",
    benefits: [
      "Curso de iniciación a la IA",
      "Formaciones por área o departamento",
      "Casos de uso aplicados al día a día",
    ],
    results: "Equipos capacitados para aplicar IA con criterio en su operativa diaria.",
    cta: "Hablar sobre formación",
    image: formacionImage,
    imageAlt: "Formación en IA",
  },
  {
    id: "soluciones",
    icon: Database,
    title: "Soluciones de IA Personalizadas",
    desc: "Construimos soluciones de Inteligencia Artificial a medida para integrarse directamente en tus flujos de trabajo y sistemas internos.",
    benefits: [
      "Desarrollo de automatizaciones con IA (GPTs, Gems...)",
      "Desarrollo de flujos de trabajo con IA (Agentes, proyectos...)",
      "Implantaciones completas de IA en local (transcriptores de voz a texto, procesamiento de imagen y documentos...)",
    ],
    results: "Automatización y despliegue de IA ajustados a la realidad operativa de tu empresa.",
    cta: "Solicitar solución a medida",
    image: solucionesImage,
    imageAlt: "Soluciones de IA personalizadas",
  },
  {
    id: "analisis",
    icon: TrendingUp,
    title: "Análisis de datos",
    desc: "Convertimos tus datos dispersos en información procesable y visual para facilitar la toma de decisiones en dirección y operaciones.",
    benefits: [
      "Cuadros de mando en Power BI",
      "Procesamiento avanzado de datos con Python",
      "Extracción y estructuración de documentos",
    ],
    results: "Información fiable y accionable para decidir con rapidez y precisión.",
    cta: "Solicitar análisis de datos",
    image: analiticaImage,
    imageAlt: "Analítica y análisis de datos",
  },
  {
    id: "automatizacion",
    icon: Cog,
    title: "Automatización de procesos",
    desc: "Automatizamos procesos administrativos y operativos para reducir tareas manuales y errores repetitivos.",
    benefits: [
      "Flujos de Power Automate para envíos masivos de correos",
      "Automatizaciones de backoffice",
      "Integración con APIs y sistemas existentes",
    ],
    results: "Procesos más rápidos, trazables y con menor carga manual.",
    cta: "Solicitar automatización",
    image: automatizacionImage,
    imageAlt: "Automatización de procesos",
  },
];


const Servicios = () => {
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
              Servicios
            </span>
            <h1 className="font-display mb-5 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Nuestras soluciones
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Aplicamos una metodología de implantación basada en formación, validación interna y mejora continua para garantizar resultados sostenibles.
            </p>
          </motion.div>

          <div className="md:hidden mt-10 overflow-hidden rounded-t-2xl h-64 relative">
            <img src={heroBg} alt="" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container">
          {/* Filosofía de trabajo */}
          <div className="mb-14 rounded-2xl border border-border bg-secondary p-8 md:p-10">
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-primary">
                  Nuestra filosofía
                </p>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Cómo trabajamos
                </h3>
              </div>
            </div>
            <p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">
              En Synertekia somos transparentes: solo formamos en lo que nos hemos formado
              exhaustivamente y solo aplicamos tecnologías que hemos probado y validado
              internamente.
            </p>
            <div className="mb-5 flex flex-wrap gap-3">
              {philosophyBenefits.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
                  {b}
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-primary">
              Implantaciones de IA sólidas, aplicables al negocio y sostenibles en el tiempo.
            </p>
          </div>

          {/* Lista de servicios */}
          <div className="space-y-20">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <s.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="font-display mb-3 text-2xl font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mb-6 space-y-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6 rounded-md bg-primary/10 px-4 py-3">
                    <p className="text-sm font-semibold text-primary">{s.results}</p>
                  </div>
                  <Button asChild>
                    <Link to="/contacto">
                      {s.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div
                  className={`aspect-[4/3] overflow-hidden rounded-lg bg-secondary ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {s.image ? (
                    <img
                      src={s.image}
                      alt={s.imageAlt ?? s.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <s.icon className="h-24 w-24 text-primary/20" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <div className="container text-center">
          <h2 className="font-display mb-4 text-3xl font-bold text-primary-foreground">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-primary-foreground/70">
            Te ayudamos a identificar la solución perfecta para tu negocio con una consultoría
            inicial sin compromiso.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contacto">
              Solicitar consultoría gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
