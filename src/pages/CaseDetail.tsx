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
    title: "Flujos administrativos y contables",
    sector: "Automatización",
    context: "Organización con un alto volumen de tareas administrativas repetitivas repartidas entre varias áreas.",
    problem: "El equipo invertía demasiadas horas en el registro manual de dietas, extracciones contables y operaciones bancarias, asumiendo un alto riesgo de errores y nula trazabilidad.",
    solution: "Implantación de flujos automatizados para el registro de dietas, extracción masiva de balances y PyG, descarga de subvenciones vía API y contabilización de remesas bancarias.",
    technologies: ["Power Automate", "Python", "APIs REST", "Excel", "SQL"],
    results: [
      { label: "Tiempo en tareas administrativas", value: "-65%" },
      { label: "Reducción de errores manuales", value: "-70%" },
      { label: "Tiempo de cierre contable", value: "-40%" },
      { label: "Procesos trazables", value: "100%" },
    ],
  },
  "bi-retail": {
    title: "IA en el sector hotelero",
    sector: "Formación",
    context: "Cadena hotelera con necesidad de mejorar la productividad de su personal administrativo sin aumentar la plantilla.",
    problem: "Falta de conocimiento práctico para aprovechar la IA en tareas diarias (redacción, análisis documental, gestión interna), generando ineficiencias y desconfianza en la herramienta.",
    solution: "Sesiones prácticas con casos reales del sector, guías de prompts efectivas y creación de un protocolo de uso seguro de la IA.",
    technologies: ["ChatGPT", "Copilot", "Microsoft 365", "Notion", "Canva"],
    results: [
      { label: "Tasa de adopción interna de la IA", value: "+80%" },
      { label: "Tiempo en tareas de oficina repetitivas", value: "-35%" },
      { label: "Estandarización de documentos", value: "+60%" },
      { label: "Satisfacción del equipo", value: "+42%" },
    ],
  },
  "agente-ia-atencion": {
    title: "Curso de iniciación a la IA",
    sector: "Formación",
    context: "Programa dirigido a perfiles no técnicos de Pymes que necesitaban empezar a usar la IA con criterio profesional.",
    problem: "Mucho interés en la IA, pero falta de base metodológica para aplicarla de forma segura, útil y alineada con los objetivos del negocio.",
    solution: "Impartición de un curso intensivo orientado a la productividad personal, automatización básica y evaluación crítica de respuestas de modelos generativos.",
    technologies: ["ChatGPT", "Gemini", "Claude", "Google Workspace", "Miro"],
    results: [
      { label: "Profesionales formados", value: "+120" },
      { label: "Mejora en nivel de autonomía digital", value: "+75%" },
      { label: "Aumento en uso semanal de herramientas IA", value: "3x" },
      { label: "Valoración media de los asistentes", value: "4.8/5" },
    ],
  },
  "analisis-predictivo-finanzas": {
    title: "Control financiero desde XML",
    sector: "Análisis de Datos",
    context: "Empresa con múltiples fuentes de datos financieros en formato XML que realizaba su consolidación mensual de forma manual.",
    problem: "La lectura y transformación manual de los archivos XML consumía demasiado tiempo, propiciaba errores y limitaba drásticamente la agilidad del reporting.",
    solution: "Construcción de un pipeline automatizado de extracción, limpieza y modelado de datos financieros, complementado con validaciones y cuadros de mando (dashboards).",
    technologies: ["Python", "Pandas", "Power BI", "SQL", "XML parsers"],
    results: [
      { label: "Tiempo de consolidación de datos", value: "-55%" },
      { label: "Tiempo dedicado al análisis posterior", value: "-50%" },
      { label: "Mejora en calidad y fiabilidad de los datos", value: "+45%" },
      { label: "Reportes automatizados", value: "100%" },
    ],
  },
  "saas-gestion-proyectos": {
    title: "GPTs para productividad",
    sector: "IA Personalizada",
    context: "Equipos de trabajo con una altísima carga documental y necesidad constante de generar respuestas especializadas en distintos dominios técnicos.",
    problem: "Pérdida masiva de tiempo en la redacción de documentos, escritos dirigidos a las Administraciones Públicas (AAPP) y búsqueda de conocimiento interno disperso.",
    solution: "Desarrollo de una batería de GPTs personalizados y agentes conversacionales conectados a bases de conocimiento propias (incluyendo asistentes legales para AAPP).",
    technologies: ["OpenAI", "RAG", "Vector DB", "Python", "Make"],
    results: [
      { label: "Tiempo empleado en redacción", value: "-60%" },
      { label: "Tiempo de onboarding para nuevos empleados", value: "-45%" },
      { label: "Aumento de la productividad global del equipo", value: "+38%" },
      { label: "Volumen de consultas resueltas por día", value: "4x" },
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
              { title: "Solucion implementada", content: caseData.solution },
            ].map((section) => (
              <div key={section.title} className="mb-8">
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}

            <div className="mb-12">
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">Tecnologias utilizadas</h2>
              <div className="flex flex-wrap gap-2">
                {caseData.technologies.map((tech) => (
                  <span key={tech} className="bg-secondary text-foreground text-sm px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>

            <div className="bg-foreground rounded-lg p-8 text-center">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">Quieres resultados similares?</h3>
              <p className="text-primary-foreground/70 mb-6">Cuentanos tu reto y disenamos la solucion perfecta.</p>
              <Button variant="secondary" asChild>
                <Link to="/contacto">Solicitar consultoria <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseDetail;
