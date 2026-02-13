import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const casesData: Record<string, {
  title: string; sector: string; context: string; problem: string;
  solution: string; technologies: string[]; results: { label: string; value: string }[];
}> = {
  "automatizacion-logistica": {
    title: "Automatización logística integral",
    sector: "Logística",
    context: "Empresa de logística con más de 200 empleados que gestionaba manualmente pedidos, facturación y tracking de envíos, generando errores frecuentes y retrasos.",
    problem: "Procesos manuales lentos y propensos a errores en la gestión de más de 5.000 pedidos mensuales, con un equipo administrativo sobrecargado.",
    solution: "Implementamos una solución de RPA con agentes inteligentes que automatiza el ciclo completo: recepción de pedido, asignación de ruta, facturación y notificación al cliente.",
    technologies: ["UiPath", "Python", "API REST", "PostgreSQL", "Power Automate"],
    results: [
      { label: "Eficiencia operativa", value: "+40%" },
      { label: "Errores de facturación", value: "-95%" },
      { label: "Tiempo de procesamiento", value: "-70%" },
      { label: "ROI en 6 meses", value: "320%" },
    ],
  },
  "bi-retail": {
    title: "Business Intelligence para retail",
    sector: "Retail",
    context: "Cadena de tiendas con 15 puntos de venta que carecía de visibilidad centralizada sobre ventas, inventario y comportamiento del cliente.",
    problem: "Datos dispersos en múltiples sistemas sin conexión, imposibilitando la toma de decisiones basada en datos y la predicción de demanda.",
    solution: "Desarrollamos un ecosistema de BI con dashboards en tiempo real, integración de todas las fuentes de datos y un modelo de predicción de demanda.",
    technologies: ["Power BI", "Python", "SQL Server", "Azure", "Machine Learning"],
    results: [
      { label: "Incremento en ventas", value: "+25%" },
      { label: "Reducción de stock muerto", value: "-40%" },
      { label: "Tiempo de reporting", value: "-80%" },
      { label: "Precisión de forecasting", value: "92%" },
    ],
  },
  "agente-ia-atencion": {
    title: "Agente IA de atención al cliente",
    sector: "Servicios",
    context: "Empresa de servicios con más de 10.000 clientes que recibía un volumen creciente de consultas por múltiples canales.",
    problem: "Tiempos de espera inaceptables, respuestas inconsistentes y un equipo de soporte que no podía escalar al ritmo de crecimiento.",
    solution: "Diseñamos e implementamos un agente conversacional con NLP capaz de resolver el 70% de consultas sin intervención humana, integrado en web, WhatsApp y email.",
    technologies: ["OpenAI API", "LangChain", "Node.js", "WhatsApp API", "PostgreSQL"],
    results: [
      { label: "Tiempo de respuesta", value: "-60%" },
      { label: "Consultas resueltas por IA", value: "70%" },
      { label: "Satisfacción del cliente", value: "+30%" },
      { label: "Coste por consulta", value: "-55%" },
    ],
  },
  "analisis-predictivo-finanzas": {
    title: "Análisis predictivo financiero",
    sector: "Finanzas",
    context: "Empresa financiera que necesitaba mejorar la precisión de sus previsiones de flujo de caja y optimizar sus inversiones a medio plazo.",
    problem: "Modelos de forecasting manuales basados en hojas de cálculo con baja precisión y alto consumo de tiempo del equipo financiero.",
    solution: "Desarrollamos un modelo de machine learning para predicción de flujos de caja con actualización automática y alertas inteligentes.",
    technologies: ["Python", "TensorFlow", "Apache Airflow", "PostgreSQL", "Grafana"],
    results: [
      { label: "Precisión de forecasting", value: "+35%" },
      { label: "Tiempo de análisis", value: "-65%" },
      { label: "Decisiones automatizadas", value: "40%" },
      { label: "Ahorro anual", value: "€120K" },
    ],
  },
  "saas-gestion-proyectos": {
    title: "SaaS de gestión de proyectos IA",
    sector: "Tecnología",
    context: "Consultora tecnológica que gestionaba proyectos de forma descentralizada, sin visibilidad global ni estimaciones fiables de tiempo y recursos.",
    problem: "Sobrecarga de gestión manual, estimaciones imprecisas y falta de herramientas adaptadas a su metodología de trabajo.",
    solution: "Creamos una plataforma SaaS a medida con asignación inteligente de recursos, estimación automática basada en datos históricos y reporting ejecutivo.",
    technologies: ["React", "Node.js", "PostgreSQL", "OpenAI", "Docker", "AWS"],
    results: [
      { label: "Proyectos gestionados", value: "3x" },
      { label: "Precisión de estimaciones", value: "+45%" },
      { label: "Tiempo de reporting", value: "-90%" },
      { label: "Satisfacción del equipo", value: "+50%" },
    ],
  },
};

const CaseDetail = () => {
  const { id } = useParams();
  const caseData = id ? casesData[id] : null;

  if (!caseData) {
    return (
      <Layout>
        <div className="container py-32 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Caso no encontrado</h1>
          <Button asChild><Link to="/portfolio">Volver al portfolio</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <Link to="/portfolio" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="mr-1 h-4 w-4" /> Volver al portfolio
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{caseData.sector}</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">{caseData.title}</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {caseData.results.map((r) => (
                <div key={r.label} className="bg-primary/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{r.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{r.label}</p>
                </div>
              ))}
            </div>

            {[
              { title: "Contexto", content: caseData.context },
              { title: "Problema", content: caseData.problem },
              { title: "Solución implementada", content: caseData.solution },
            ].map((section) => (
              <div key={section.title} className="mb-8">
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}

            <div className="mb-12">
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Tecnologías utilizadas</h2>
              <div className="flex flex-wrap gap-2">
                {caseData.technologies.map((tech) => (
                  <span key={tech} className="bg-secondary text-foreground text-sm px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>

            <div className="bg-foreground rounded-lg p-8 text-center">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">¿Quieres resultados similares?</h3>
              <p className="text-primary-foreground/70 mb-6">Cuéntanos tu reto y diseñamos la solución perfecta.</p>
              <Button variant="secondary" asChild>
                <Link to="/contacto">Solicitar consultoría <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseDetail;
