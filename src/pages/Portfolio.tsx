import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const cases = [
  {
    id: "automatizacion-logistica",
    title: "Flujos automatizados administrativos y contables",
    sector: "Automatizacion",
    result: "-65% tiempo en tareas recurrentes",
    desc: "Automatizacion del registro de dietas, extraccion masiva de balance y PyG, descarga de subvenciones via API y contabilizacion de remesas bancarias.",
  },
  {
    id: "bi-retail",
    title: "Formacion de IA en sector hotelero",
    sector: "Formacion",
    result: "+80% adopcion interna",
    desc: "Capacitacion para personal administrativo en tareas asistidas con IA, prompts efectivos y buenas practicas de uso seguro.",
  },
  {
    id: "agente-ia-atencion",
    title: "Curso de iniciacion a la IA",
    sector: "Formacion",
    result: "Mas de 120 personas formadas",
    desc: "Programa introductorio para perfiles no tecnicos enfocado en productividad personal, automatizacion basica y uso responsable de herramientas IA.",
  },
  {
    id: "analisis-predictivo-finanzas",
    title: "Analisis financiero desde XML",
    sector: "Analisis de datos",
    result: "Cierres mas rapidos y trazables",
    desc: "Procesamiento y analisis de datos financieros de una empresa a partir de XML, con validaciones y cuadros de mando para seguimiento.",
  },
  {
    id: "saas-gestion-proyectos",
    title: "GPTs personalizados para productividad",
    sector: "IA personalizada",
    result: "Reduccion notable de tiempos",
    desc: "Desarrollo de GPTs y agentes con bases de conocimiento diversas, incluyendo asistentes para escritos dirigidos a AAPP.",
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
