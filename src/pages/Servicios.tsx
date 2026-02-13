import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cog, BarChart3, Database, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Brain,
    title: "Consultoría en Inteligencia Artificial",
    desc: "Analizamos tu negocio para identificar oportunidades de aplicación de IA. Diseñamos una hoja de ruta estratégica y te acompañamos en cada fase de implementación.",
    benefits: ["Diagnóstico de madurez digital", "Hoja de ruta IA personalizada", "Acompañamiento en la implementación"],
    results: "Hasta un 50% de mejora en eficiencia operativa.",
  },
  {
    icon: Database,
    title: "Soluciones IA Personalizadas",
    desc: "Desarrollamos modelos de machine learning, procesamiento de lenguaje natural y visión artificial adaptados a las necesidades específicas de tu empresa.",
    benefits: ["Modelos ML a medida", "NLP y chatbots inteligentes", "Visión artificial aplicada"],
    results: "Automatización de decisiones complejas con +90% de precisión.",
  },
  {
    icon: Zap,
    title: "SaaS Adaptado a Negocio",
    desc: "Creamos plataformas software como servicio diseñadas específicamente para tu sector, escalables y con integración de inteligencia artificial.",
    benefits: ["Plataformas escalables", "Integración IA nativa", "Mantenimiento y soporte continuo"],
    results: "Reducción de costes operativos hasta un 35%.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    desc: "Implementamos dashboards interactivos y sistemas de reporting que transforman datos crudos en insights accionables para la toma de decisiones.",
    benefits: ["Dashboards en tiempo real", "KPIs automatizados", "Reporting ejecutivo"],
    results: "Decisiones un 60% más rápidas basadas en datos.",
  },
  {
    icon: TrendingUp,
    title: "Análisis de Datos",
    desc: "Aplicamos técnicas avanzadas de análisis estadístico y predictivo para extraer patrones ocultos y anticipar tendencias de mercado.",
    benefits: ["Análisis predictivo", "Segmentación avanzada", "Detección de anomalías"],
    results: "Anticipación a tendencias con hasta 3 meses de ventaja.",
  },
  {
    icon: Cog,
    title: "Automatización Empresarial (RPA + Agentes IA)",
    desc: "Implementamos robots de software y agentes inteligentes que automatizan procesos repetitivos, reduciendo errores y liberando talento humano.",
    benefits: ["RPAs para procesos repetitivos", "Agentes IA autónomos", "Integración con sistemas existentes"],
    results: "Hasta un 80% de reducción en tareas manuales.",
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
            description="Cada servicio está diseñado para generar impacto medible en tu negocio, combinando estrategia y tecnología de vanguardia."
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
                      Solicitar información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`bg-secondary rounded-lg aspect-[4/3] flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <s.icon className="h-24 w-24 text-primary/20" />
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
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Te ayudamos a identificar la solución perfecta para tu negocio con una consultoría inicial sin compromiso.
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
