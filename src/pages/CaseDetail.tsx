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
    title: "Flujos automatizados administrativos y contables",
    sector: "Automatizacion",
    context: "Organizacion con alto volumen de tareas administrativas repetitivas repartidas entre varias areas.",
    problem: "El equipo invertia muchas horas en registro de dietas, extracciones contables y operaciones bancarias manuales, con riesgo de errores y poca trazabilidad.",
    solution: "Se implantaron flujos automatizados para el registro de dietas, extraccion masiva de balance y PyG, descarga automatizada de subvenciones via API y contabilizacion de remesas bancarias.",
    technologies: ["Power Automate", "Python", "APIs REST", "Excel", "SQL"],
    results: [
      { label: "Tiempo administrativo", value: "-65%" },
      { label: "Errores manuales", value: "-70%" },
      { label: "Procesos trazables", value: "100%" },
      { label: "Tiempo de cierre", value: "-40%" },
    ],
  },
  "bi-retail": {
    title: "Formacion de IA en sector hotelero",
    sector: "Formacion",
    context: "Cadena hotelera que necesitaba mejorar la productividad del personal administrativo sin aumentar plantilla.",
    problem: "Falta de conocimiento practico para usar IA en tareas diarias como redaccion, analisis documental y gestion interna.",
    solution: "Se disenaron sesiones practicas para personal administrativo con casos reales del sector, guias de prompts y protocolo de uso seguro de IA.",
    technologies: ["ChatGPT", "Copilot", "M365", "Notion", "Canva"],
    results: [
      { label: "Adopcion interna", value: "+80%" },
      { label: "Tiempo en tareas de oficina", value: "-35%" },
      { label: "Satisfaccion del equipo", value: "+42%" },
      { label: "Documentos estandarizados", value: "+60%" },
    ],
  },
  "agente-ia-atencion": {
    title: "Curso de iniciacion a la IA",
    sector: "Formacion",
    context: "Programa para perfiles no tecnicos que querian comenzar a usar IA en su trabajo con criterio.",
    problem: "Existia interes en IA, pero sin base metodologica para aplicar herramientas de forma segura y con resultados utiles.",
    solution: "Se impartio un curso de iniciacion orientado a productividad, automatizacion basica y evaluacion de calidad de respuestas de modelos generativos.",
    technologies: ["ChatGPT", "Gemini", "Claude", "Google Workspace", "Miro"],
    results: [
      { label: "Personas formadas", value: "+120" },
      { label: "Nivel de autonomia", value: "+75%" },
      { label: "Uso semanal de IA", value: "3x" },
      { label: "Valoracion media", value: "4.8/5" },
    ],
  },
  "analisis-predictivo-finanzas": {
    title: "Analisis financiero desde XML",
    sector: "Analisis de datos",
    context: "Empresa con multiples fuentes de datos financieros en formato XML y consolidacion manual mensual.",
    problem: "La lectura manual de XML y su transformacion para analisis consumia demasiado tiempo y limitaba la calidad del reporting.",
    solution: "Se construyo un pipeline de extraccion, limpieza y modelado de datos financieros desde XML, con validaciones y cuadros de mando automatizados.",
    technologies: ["Python", "Pandas", "Power BI", "SQL", "XML parsers"],
    results: [
      { label: "Tiempo de consolidacion", value: "-55%" },
      { label: "Calidad de datos", value: "+45%" },
      { label: "Reportes automatizados", value: "100%" },
      { label: "Tiempo de analisis", value: "-50%" },
    ],
  },
  "saas-gestion-proyectos": {
    title: "GPTs personalizados para productividad",
    sector: "IA personalizada",
    context: "Equipos con alta carga documental y necesidad de generar respuestas especializadas en distintos dominios.",
    problem: "Se perdia mucho tiempo en redaccion de documentos, escritos para AAPP y consulta de conocimiento interno disperso.",
    solution: "Se desarrollo una bateria de GPTs personalizados y agentes con bases de conocimiento diversas, incluyendo asistentes para escritos para AAPP.",
    technologies: ["OpenAI", "RAG", "Vector DB", "Python", "Make"],
    results: [
      { label: "Tiempo de redaccion", value: "-60%" },
      { label: "Productividad global", value: "+38%" },
      { label: "Consultas resueltas", value: "4x" },
      { label: "Tiempo de onboarding", value: "-45%" },
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
