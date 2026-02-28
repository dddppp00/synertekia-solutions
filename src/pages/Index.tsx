import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, BarChart3, Cog, TrendingUp, Zap, Database, Timer, Target, BarChart2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import brandVisual from "@/assets/hero-bg-new.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const services = [
  { icon: Brain, title: "Consultoría en IA", desc: "Estrategia e implementación de inteligencia artificial adaptada a tu negocio." },
  { icon: Cog, title: "Automatización Empresarial", desc: "RPAs y agentes inteligentes para optimizar procesos repetitivos." },
  { icon: BarChart3, title: "Business Intelligence", desc: "Dashboards y análisis de datos para tomar decisiones informadas." },
  { icon: Database, title: "Soluciones IA Personalizadas", desc: "Desarrollo a medida de modelos y herramientas con IA." },
  { icon: TrendingUp, title: "Análisis de Datos", desc: "Extrae valor de tus datos con análisis avanzado y predictivo." },
  { icon: Zap, title: "SaaS Adaptado", desc: "Plataformas software como servicio diseñadas para tu sector." },
];

const cases = [
  {
    title: "Flujos administrativos y contables",
    sector: "AUTOMATIZACIÓN",
    result: "-65% Tiempo invertido en tareas administrativas",
    desc: "Contexto: Organización con alto volumen de tareas repetitivas. Reto: exceso de horas en registro manual de dietas, extracciones y operaciones bancarias. Solución: implantación de flujos automatizados para dietas, balances y PyG, subvenciones vía API y contabilización de remesas. Tecnologías: Power Automate, Python, APIs REST, Excel y SQL.",
  },
  {
    title: "IA en el sector hotelero",
    sector: "FORMACIÓN",
    result: "+80% Tasa de adopción en administración",
    desc: "Contexto: cadena hotelera con necesidad de mejorar productividad administrativa. Reto: falta de conocimiento práctico en IA para tareas diarias. Solución: sesiones prácticas con casos reales, guías de prompts y protocolo de uso seguro. Tecnologías: ChatGPT, Copilot y Microsoft 365.",
  },
  {
    title: "Curso de iniciación a la IA",
    sector: "FORMACIÓN",
    result: "+120 Personas formadas",
    desc: "Contexto: programa para perfiles no técnicos de Pymes. Reto: interés en IA sin base metodológica para aplicarla con seguridad. Solución: curso intensivo orientado a productividad, automatización y evaluación de respuestas. Tecnologías: ChatGPT, Gemini, Copilot y Google Workspace.",
  },
  {
    title: "Control financiero desde XML",
    sector: "ANÁLISIS DE DATOS",
    result: "-80% Tiempo de consolidación de datos",
    desc: "Contexto: consultora que pasó de múltiples Excel a XML. Reto: transformación manual lenta que frenaba el reporting. Solución: construcción de un pipeline automatizado de extracción, limpieza y modelado financiero. Tecnologías: Python, Pandas, Power BI, SQL y XML parsers.",
  },
  {
    title: "GPTs para productividad",
    sector: "IA PERSONALIZADA",
    result: "-90% Tiempo de redacción",
    desc: "Contexto: equipos con alta carga documental especializada. Reto: pérdida masiva de tiempo en redacción de documentos y escritos para AAPP. Solución: desarrollo de GPTs y agentes con bases de conocimiento diversas. Tecnologías: ChatGPT, RAG, Vector DB y Python.",
  },
];


const faqs = [
  { q: "¿Qué tipo de Consultoría IA ofrecéis?", a: "Ofrecemos Consultoría estratégica e implementación de soluciones de inteligencia artificial: desde análisis de viabilidad hasta el desarrollo e integración de modelos de IA en tu operativa empresarial." },
  { q: "¿Cuánto cuesta un proyecto de automatización?", a: "Cada proyecto es único. Realizamos un diagnóstico inicial gratuito para entender tus necesidades y ofrecerte un presupuesto personalizado acorde al alcance y complejidad." },
  { q: "¿En cuánto tiempo se implementa una solución?", a: "Dependiendo de la complejidad, los proyectos pueden oscilar entre 4 y 16 semanas. Trabajamos con metodología ágil para entregar valor desde las primeras fases." },
  { q: "¿Trabajáis solo en Galicia?", a: "Aunque nuestra sede está en Galicia, trabajamos con empresas de toda España de forma remota y presencial." },
  { q: "¿Necesito conocimientos técnicos para empezar?", a: "No. Nuestro equipo se encarga de todo el proceso técnico. Nos adaptamos a tu nivel de madurez digital y te acompañamos en cada paso." },
];

const problems: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Timer, title: "Procesos ineficientes", desc: "Tareas manuales repetitivas que consumen tiempo y recursos valiosos." },
  { icon: Target, title: "Sin estrategia en IA", desc: "Desconocimiento de cómo la inteligencia artificial puede impulsar tu negocio." },
  { icon: BarChart2, title: "Datos desaprovechados", desc: "Información valiosa que no se convierte en decisiones estratégicas." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden md:min-h-[90vh] md:flex md:items-center">
        <div className="absolute inset-0 z-0">
          {/* Imagen de fondo — solo visible en desktop */}
          <div className="hidden md:block absolute inset-y-0 right-0 md:w-[68%] lg:w-[64%] xl:w-[60%]">
            <img
              src={brandVisual}
              alt=""
              className="w-full h-full object-cover object-[90%_56%] lg:object-[96%_56%] contrast-[1.06] saturate-[1.04] brightness-[1.02]"
              style={{
                WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.42) 14%, rgba(0,0,0,0.82) 28%, rgba(0,0,0,1) 46%)",
                maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.42) 14%, rgba(0,0,0,0.82) 28%, rgba(0,0,0,1) 46%)",
              }}
            />
          </div>
          {/* Gradientes desktop */}
          <div className="hidden md:block absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background)/0.72)_0%,hsl(var(--background)/0.46)_34%,hsl(var(--background)/0.24)_56%,hsl(var(--background)/0.14)_74%,hsl(var(--background)/0.18)_100%)]" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-background/12 via-transparent to-background/18" />
          {/* Gradiente decorativo — ambos tamaños */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.08),transparent_52%)]" />
          {/* Gradiente mobile */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/40" />
        </div>

        <div className="container relative z-10 pt-14 pb-0 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl lg:max-w-2xl xl:max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              <span className="text-primary">Consultoría estratégica en inteligencia artificial</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Soluciones de IA personalizadas, formación, automatización de procesos y Business Intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contacto">
                  Solicitar Consultoría
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-background/65 backdrop-blur-sm">
                <Link to="/servicios">Ver servicios</Link>
              </Button>
            </div>
          </motion.div>

          {/* Imagen visible solo en mobile, debajo del texto */}
          <div className="md:hidden mt-10 overflow-hidden rounded-t-2xl h-64 relative">
            <img
              src={brandVisual}
              alt=""
              className="w-full h-full object-cover object-[86%_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <SectionHeading
            tag="El reto"
            title="¿Tu empresa enfrenta estos desafíos?"
            description="La transformación digital no es una opción, es una necesidad competitiva."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-lg p-8 shadow-sm border border-border"
              >
                <p.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            tag="Servicios"
            title="Soluciones que impulsan resultados"
            description="Combinamos estrategia, tecnología e inteligencia artificial para transformar tu operativa."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-card rounded-lg p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <s.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/servicios">
                Explorar todos los servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <SectionHeading
            tag="Portfolio"
            title="Casos de éxito"
            description="Proyectos reales con resultados medibles para empresas como la tuya."
          />
          <Carousel opts={{ align: "start", loop: true }} className="w-full px-12">
            <CarouselContent>
              {cases.map((c, i) => (
                <CarouselItem key={c.title} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-card rounded-lg p-8 border border-border hover:shadow-md transition-all h-full"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{c.sector}</span>
                    <h3 className="font-display text-xl font-semibold mt-2 mb-2 text-foreground">{c.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{c.desc}</p>
                    <div className="bg-primary/10 rounded-md px-4 py-2 inline-block">
                      <span className="text-primary font-semibold text-sm">{c.result}</span>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/portfolio">
                Ver todos los casos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container max-w-3xl">
          <SectionHeading
            tag="FAQ"
            title="Preguntas frecuentes"
          />
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-medium text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              ¿Listo para transformar tu empresa con IA?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Contacta con nosotros y descubre cómo la inteligencia artificial puede impulsar tu negocio.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacto">
                Solicitar Consultoría gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;




