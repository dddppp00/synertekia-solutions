import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Cog,
  Database,
  TrendingUp,
  Zap,
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

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  benefits: string[];
  results: string;
  image?: string;
  imageAlt?: string;
};

const services: Service[] = [
  {
    icon: Brain,
    title: "Consultoría en IA",
    desc: "Evaluamos tus procesos, datos y objetivos para definir una hoja de ruta de Inteligencia Artificial realista y 100% alineada con tu modelo de negocio.",
    benefits: ["Diagnóstico de madurez digital.", "Roadmap de adopción por fases.", "Acompañamiento estratégico y técnico."],
    results: "Priorización clara de iniciativas con impacto medible.",
    image: consultoriaImage,
    imageAlt: "Consultoría en IA",
  },
  {
    icon: Zap,
    title: "Formación en IA",
    desc: "Diseñamos formaciones prácticas para directivos, equipos administrativos y técnicos, adaptadas al nivel y a las necesidades reales de tu empresa.",
    benefits: ["Curso de iniciación a la IA.", "Formaciones específicas por área o departamento.", "Casos de uso aplicados al día a día."],
    results: "Equipos más productivos y autónomos en el uso seguro de la IA.",
    image: formacionImage,
    imageAlt: "Formación en IA",
  },
  {
    icon: Database,
    title: "Soluciones de IA Personalizadas",
    desc: "Construimos soluciones de Inteligencia Artificial a medida para integrarse directamente en tus flujos de trabajo y sistemas internos.",
    benefits: ["Desarrollo de GPTs personalizados.", "Agentes de Copilot y asistentes virtuales.", "Implantaciones completas de IA en local (ej. transcriptores seguros)."],
    results: "Mayor productividad con herramientas adaptadas a tu operativa exacta.",
    image: solucionesImage,
    imageAlt: "Soluciones de IA Personalizadas",
  },
  {
    icon: TrendingUp,
    title: "Análisis de Datos",
    desc: "Convertimos tus datos dispersos en información procesable y visual para facilitar la toma de decisiones en dirección y operaciones.",
    benefits: ["Cuadros de mando y Dashboards en Power BI.", "Procesamiento avanzado de datos con Python.", "Extracción y estructuración de documentos."],
    results: "Decisiones más rápidas, seguras y un mejor control del negocio.",
    image: analiticaImage,
    imageAlt: "Análisis de Datos",
  },
  {
    icon: Cog,
    title: "Automatización de Procesos",
    desc: "Automatizamos tareas administrativas y operativas para reducir la carga manual y eliminar errores repetitivos.",
    benefits: ["Flujos de Power Automate para envíos y gestión documental.", "Automatizaciones de backoffice.", "Integración con APIs y sistemas existentes."],
    results: "Procesos más rápidos, 100% trazables y eficientes.",
    image: automatizacionImage,
    imageAlt: "Automatización de Procesos",
  },
];

const Servicios = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            tag="SERVICIOS | Nuestras soluciones"
            title="No vendemos tecnología por vender."
            description="Cada servicio de Synertekia está diseñado para generar un impacto medible en tu empresa, combinando estrategia de negocio y tecnología punta aplicada de forma realista."
          />

          <div className="space-y-16">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <s.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary/10 rounded-md px-4 py-3 mb-6">
                    <p className="text-primary font-semibold text-sm">{s.results}</p>
                  </div>
                  <Button asChild>
                    <Link to="/contacto">
                      Solicitar informacion
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`bg-secondary rounded-lg aspect-[4/3] overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  {s.image ? (
                    <img src={s.image} alt={s.imageAlt ?? s.title} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
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
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            No sabes por donde empezar?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Te ayudamos a identificar la solucion perfecta para tu negocio con una consultoria inicial sin compromiso.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contacto">
              Solicitar consultoria gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
