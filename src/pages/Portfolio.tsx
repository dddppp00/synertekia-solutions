import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const cases = [
  { id: "automatizacion-logistica", title: "Automatización logística integral", sector: "Logística", result: "+40% eficiencia operativa", desc: "Implementación de RPA para gestión de pedidos, facturación automática y tracking en tiempo real." },
  { id: "bi-retail", title: "Business Intelligence para retail", sector: "Retail", result: "+25% incremento en ventas", desc: "Dashboard integral de ventas, inventario y predicción de demanda con machine learning." },
  { id: "agente-ia-atencion", title: "Agente IA de atención al cliente", sector: "Servicios", result: "-60% tiempo de respuesta", desc: "Chatbot con procesamiento de lenguaje natural integrado en web, WhatsApp y email." },
  { id: "analisis-predictivo-finanzas", title: "Análisis predictivo financiero", sector: "Finanzas", result: "+35% precisión en forecasting", desc: "Modelo predictivo para anticipar flujos de caja y optimizar inversiones." },
  { id: "saas-gestion-proyectos", title: "SaaS de gestión de proyectos IA", sector: "Tecnología", result: "3x más proyectos gestionados", desc: "Plataforma a medida con asignación inteligente de recursos y estimación automatizada." },
];

const Portfolio = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            tag="Portfolio"
            title="Casos de éxito"
            description="Proyectos reales donde hemos generado impacto medible para nuestros clientes."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="block bg-card rounded-lg p-8 border border-border hover:border-primary/30 hover:shadow-md transition-all h-full"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{c.sector}</span>
                  <h3 className="font-display text-xl font-semibold mt-2 mb-3 text-foreground">{c.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{c.desc}</p>
                  <div className="bg-primary/10 rounded-md px-4 py-2 inline-block mb-4">
                    <span className="text-primary font-semibold text-sm">{c.result}</span>
                  </div>
                  <div className="flex items-center text-primary text-sm font-medium">
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
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-primary-foreground/70 mb-8">Cuéntanos tu reto y diseñamos la solución.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contacto">Solicitar consultoría <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
