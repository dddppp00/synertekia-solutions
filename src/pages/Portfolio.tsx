import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const cases = [
  {
    id: "automatizacion-logistica",
    title: "Flujos administrativos y contables",
    sector: "Automatización",
    result: "-65% Tiempo en tareas administrativas",
    desc: "Implantación de flujos automatizados para el registro de dietas, extracción masiva de balances y PyG, descarga de subvenciones vía API y contabilización de remesas bancarias.",
  },
  {
    id: "bi-retail",
    title: "IA en el sector hotelero",
    sector: "Formación",
    result: "+80% Tasa de adopción interna de la IA",
    desc: "Sesiones prácticas con casos reales del sector, guías de prompts efectivas y creación de un protocolo de uso seguro de la IA.",
  },
  {
    id: "agente-ia-atencion",
    title: "Curso de iniciación a la IA",
    sector: "Formación",
    result: "+120 Profesionales formados",
    desc: "Curso intensivo orientado a la productividad personal, automatización básica y evaluación crítica de respuestas de modelos generativos.",
  },
  {
    id: "analisis-predictivo-finanzas",
    title: "Control financiero desde XML",
    sector: "Análisis de Datos",
    result: "-55% Tiempo de consolidación de datos",
    desc: "Pipeline automatizado de extracción, limpieza y modelado de datos financieros, complementado con validaciones y cuadros de mando.",
  },
  {
    id: "saas-gestion-proyectos",
    title: "GPTs para productividad",
    sector: "IA Personalizada",
    result: "-60% Tiempo empleado en redacción",
    desc: "Desarrollo de GPTs personalizados y agentes conversacionales conectados a bases de conocimiento propias, incluyendo asistentes legales para AAPP.",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            tag="Portfolio"
            title="Casos de exito"
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
            Quieres ser nuestro proximo caso de exito?
          </h2>
          <p className="text-primary-foreground/70 mb-8">Cuentanos tu reto y disenamos la solucion.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contacto">Solicitar consultoria <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
