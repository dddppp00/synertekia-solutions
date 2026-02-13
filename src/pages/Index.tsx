import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, BarChart3, Cog, TrendingUp, Zap, Database, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroBg from "@/assets/hero-bg.jpg";

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
  { title: "Automatización logística", sector: "Logística", result: "+40% eficiencia operativa", desc: "Implementación de RPA para gestión de pedidos y tracking automatizado." },
  { title: "BI para retail", sector: "Retail", result: "+25% incremento en ventas", desc: "Dashboard integral de ventas con predicción de demanda." },
  { title: "Agente IA atención al cliente", sector: "Servicios", result: "-60% tiempo de respuesta", desc: "Chatbot inteligente con procesamiento de lenguaje natural." },
];

const testimonials = [
  { name: "María García", company: "TechLogistics S.L.", text: "Synertekia transformó completamente nuestra operativa. La automatización nos ahorró cientos de horas al mes." },
  { name: "Carlos Rodríguez", company: "RetailMax", text: "El dashboard de BI nos dio visibilidad total sobre nuestro negocio. Decisiones más rápidas y acertadas." },
  { name: "Ana Fernández", company: "ServiciosPlus", text: "El agente IA de atención al cliente superó nuestras expectativas. Nuestros clientes están más satisfechos." },
];

const faqs = [
  { q: "¿Qué tipo de consultoría IA ofrecéis?", a: "Ofrecemos consultoría estratégica e implementación de soluciones de inteligencia artificial: desde análisis de viabilidad hasta el desarrollo e integración de modelos de IA en tu operativa empresarial." },
  { q: "¿Cuánto cuesta un proyecto de automatización?", a: "Cada proyecto es único. Realizamos un diagnóstico inicial gratuito para entender tus necesidades y ofrecerte un presupuesto personalizado acorde al alcance y complejidad." },
  { q: "¿En cuánto tiempo se implementa una solución?", a: "Dependiendo de la complejidad, los proyectos pueden oscilar entre 4 y 16 semanas. Trabajamos con metodología ágil para entregar valor desde las primeras fases." },
  { q: "¿Trabajáis solo en Galicia?", a: "Aunque nuestra sede está en Galicia, trabajamos con empresas de toda España de forma remota y presencial." },
  { q: "¿Necesito conocimientos técnicos para empezar?", a: "No. Nuestro equipo se encarga de todo el proceso técnico. Nos adaptamos a tu nivel de madurez digital y te acompañamos en cada paso." },
];

const problems = [
  { icon: "⏳", title: "Procesos ineficientes", desc: "Tareas manuales repetitivas que consumen tiempo y recursos valiosos." },
  { icon: "🎯", title: "Sin estrategia en IA", desc: "Desconocimiento de cómo la inteligencia artificial puede impulsar tu negocio." },
  { icon: "📊", title: "Datos desaprovechados", desc: "Información valiosa que no se convierte en decisiones estratégicas." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="container relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Consultoría IA en Galicia y España para{" "}
              <span className="text-primary">transformar tu negocio</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Automatización empresarial, Business Intelligence y soluciones de Inteligencia Artificial personalizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contacto">
                  Solicitar consultoría
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/servicios">Ver servicios</Link>
              </Button>
            </div>
          </motion.div>
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
                <span className="text-4xl mb-4 block">{p.icon}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-lg p-8 border border-border hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{c.sector}</span>
                <h3 className="font-display text-xl font-semibold mt-2 mb-2 text-foreground">{c.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{c.desc}</p>
                <div className="bg-primary/10 rounded-md px-4 py-2 inline-block">
                  <span className="text-primary font-semibold text-sm">{c.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            tag="Testimonios"
            title="Lo que dicen nuestros clientes"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-lg p-8 border border-border"
              >
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.company}</p>
                </div>
              </motion.div>
            ))}
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
                Solicitar consultoría gratuita
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
