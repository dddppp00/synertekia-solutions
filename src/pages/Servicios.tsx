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
    title: "Consultorias de IA",
    desc: "Evaluamos procesos, datos y objetivos para definir una hoja de ruta de IA realista y alineada con el negocio.",
    benefits: ["Diagnostico de madurez digital", "Roadmap de adopcion por fases", "Acompanamiento estrategico y tecnico"],
    results: "Priorizacion clara de iniciativas con impacto medible.",
    image: consultoriaImage,
    imageAlt: "Consultoria de IA",
  },
  {
    icon: Zap,
    title: "Formaciones de IA",
    desc: "Disenamos formaciones practicas para equipos administrativos y tecnicos, adaptadas al nivel y necesidades de cada empresa.",
    benefits: ["Curso de iniciacion a la IA", "Formaciones por area o departamento", "Casos de uso aplicados al dia a dia"],
    results: "Equipos mas autonomos en el uso diario de IA.",
    image: formacionImage,
    imageAlt: "Formacion de IA",
  },
  {
    icon: Database,
    title: "Soluciones de IA personalizadas",
    desc: "Construimos soluciones de IA a medida para tus flujos de trabajo y sistemas internos.",
    benefits: ["GPTs personalizados", "Agentes de Copilot", "Implantaciones completas de IA en local (transcriptor)"],
    results: "Mayor productividad con herramientas adaptadas a tu operativa.",
    image: solucionesImage,
    imageAlt: "Soluciones de IA personalizadas",
  },
  {
    icon: TrendingUp,
    title: "Analisis de datos",
    desc: "Convertimos datos dispersos en informacion accionable para direccion y operaciones.",
    benefits: ["Power BI para cuadros de mando", "Procesamiento de datos con Python", "Extraccion y procesamiento estructurado de documentos"],
    results: "Decisiones mas rapidas y mejor control del negocio.",
    image: analiticaImage,
    imageAlt: "Analitica y analisis de datos",
  },
  {
    icon: Cog,
    title: "Automatizacion de procesos",
    desc: "Automatizamos procesos administrativos y operativos para reducir tareas manuales y errores repetitivos.",
    benefits: ["Flujos de PAC para envios masivos de correos", "Automatizaciones de backoffice", "Integracion con APIs y sistemas existentes"],
    results: "Procesos mas rapidos, trazables y con menor carga manual.",
    image: automatizacionImage,
    imageAlt: "Automatizacion de procesos",
  },
  {
    icon: BarChart3,
    title: "Implementacion integral",
    desc: "Combinamos consultoria, IA, analitica y automatizacion en un despliegue coherente y escalable.",
    benefits: ["Arquitectura funcional por bloques", "Estandarizacion de procesos", "Seguimiento continuo de resultados"],
    results: "Adopcion de IA conectada de principio a fin.",
  },
];

const Servicios = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            tag="Servicios"
            title="Nuestras soluciones"
            description="Cada servicio esta disenado para generar impacto medible en tu negocio, combinando estrategia y tecnologia aplicada."
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
