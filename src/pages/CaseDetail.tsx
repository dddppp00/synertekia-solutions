import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const caseIds = [
  "automatizacion-logistica",
  "bi-retail",
  "agente-ia-atencion",
  "analisis-predictivo-finanzas",
  "saas-gestion-proyectos",
];

const casesData: Record<string, {
  shortTitle: string;
  title: string;
  sector: string;
  context: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: { label: string; value: string }[];
}> = {
  "automatizacion-logistica": {
    shortTitle: "Flujos administrativos y contables",
    title: "AUTOMATIZACIÓN | Flujos administrativos y contables",
    sector: "Automatización",
    context: "Organización con un alto volumen de tareas administrativas repetitivas.",
    problem: "El equipo invertía demasiadas horas en el registro manual de dietas, extracciones y operaciones bancarias.",
    solution: "Implantación de flujos automatizados para el registro de dietas, extracción masiva de balances y PyG, descarga de subvenciones vía API, contabilización de remesas bancarias y cualquier tipo de información para contabilidad.",
    technologies: ["Power Automate", "Python", "APIs REST", "Excel", "SQL"],
    results: [
      { label: "Tiempo administrativo", value: "-65%" },
      { label: "Errores manuales", value: "-70%" },
      { label: "Tiempo de cierre contable", value: "-40%" },
      { label: "Procesos trazables", value: "100%" },
    ],
  },
  "bi-retail": {
    shortTitle: "IA en el sector hotelero",
    title: "FORMACIÓN | IA en el sector hotelero",
    sector: "Formación",
    context: "Cadena hotelera con necesidad de mejorar la productividad administrativa.",
    problem: "Falta de conocimiento práctico para aprovechar la IA en tareas diarias.",
    solution: "Sesiones prácticas con casos reales del sector, guías de prompts y protocolo de uso seguro.",
    technologies: ["ChatGPT", "Copilot", "Microsoft 365"],
    results: [
      { label: "Tasa de adopción", value: "+80%" },
      { label: "Satisfacción del equipo", value: "100%" },
      { label: "Tiempo en tareas repetitivas", value: "-35%" },
      { label: "Estandarización documental", value: "+60%" },
    ],
  },
  "agente-ia-atencion": {
    shortTitle: "Curso de iniciación a la IA",
    title: "FORMACIÓN | Curso de iniciación a la IA",
    sector: "Formación",
    context: "Programa dirigido a perfiles no técnicos de Pymes.",
    problem: "Interés en la IA, pero falta de base metodológica para aplicarla de forma segura.",
    solution: "Curso intensivo orientado a productividad, automatización y evaluación de respuestas.",
    technologies: ["ChatGPT", "Gemini", "Copilot", "Google Workspace"],
    results: [
      { label: "Personas formadas", value: "+120" },
      { label: "Nivel de autonomía", value: "+75%" },
      { label: "Uso semanal de IA", value: "3x" },
      { label: "Valoración media", value: "4.8/5" },
    ],
  },
  "analisis-predictivo-finanzas": {
    shortTitle: "Control financiero desde XML",
    title: "ANÁLISIS DE DATOS | Control financiero desde XML",
    sector: "Análisis de datos",
    context: "Consultora que analizaba sus datos financieros trabajando con múltiples archivos Excel, pasando ahora a utilizar ficheros XML.",
    problem: "La transformación manual consumía demasiado tiempo y limitaba la agilidad del reporting.",
    solution: "Construcción de un pipeline automatizado de extracción, limpieza y modelado de datos financieros.",
    technologies: ["Python", "Pandas", "Power BI", "SQL", "XML parsers"],
    results: [
      { label: "Tiempo de consolidación", value: "-80%" },
      { label: "Calidad y fiabilidad", value: "+90%" },
      { label: "Tiempo de análisis", value: "-50%" },
      { label: "Reportes automatizados", value: "100%" },
    ],
  },
  "saas-gestion-proyectos": {
    shortTitle: "GPTs para productividad",
    title: "IA PERSONALIZADA | GPTs para productividad",
    sector: "IA personalizada",
    context: "Equipos con alta carga documental especializada.",
    problem: "Pérdida masiva de tiempo en la redacción de documentos y escritos para AAPP.",
    solution: "Desarrollo de GPTs y agentes con bases de conocimiento diversas (asistentes para AAPP).",
    technologies: ["ChatGPT", "RAG", "Vector DB", "Python"],
    results: [
      { label: "Tiempo de redacción", value: "-90%" },
      { label: "Tiempo de onboarding", value: "-90%" },
      { label: "Productividad global", value: "+80%" },
      { label: "Consultas resueltas", value: "4x" },
    ],
  },
};

const CaseDetail = () => {
  const { id } = useParams();
  const caseData = id ? casesData[id] : null;

  const currentIndex = id ? caseIds.indexOf(id) : -1;
  const prevId = currentIndex > 0 ? caseIds[currentIndex - 1] : null;
  const nextId = currentIndex < caseIds.length - 1 ? caseIds[currentIndex + 1] : null;

  if (!caseData) {
    return (
      <Layout>
        <div className="container py-32 text-center">
          <h1 className="font-display mb-4 text-3xl font-bold">Caso no encontrado</h1>
          <Button asChild>
            <Link to="/portfolio">Volver al portfolio</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <Link
            to="/portfolio"
            className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-1 h-4 w-4" /> Volver al portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {caseData.sector}
            </span>
            <h1 className="font-display mt-2 mb-8 text-3xl font-bold text-foreground md:text-4xl">
              {caseData.title}
            </h1>

            {/* Métricas */}
            <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {caseData.results.map((r) => (
                <div key={r.label} className="rounded-lg bg-primary/10 p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{r.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{r.label}</p>
                </div>
              ))}
            </div>

            {/* Secciones */}
            {[
              { title: "Contexto", content: caseData.context },
              { title: "El reto", content: caseData.problem },
              { title: "La solución", content: caseData.solution },
            ].map((section) => (
              <div key={section.title} className="mb-8">
                <h2 className="font-display mb-3 text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">{section.content}</p>
              </div>
            ))}

            {/* Tecnologías */}
            <div className="mb-10">
              <h2 className="font-display mb-3 text-xl font-semibold text-foreground">
                Tecnologías
              </h2>
              <div className="flex flex-wrap gap-2">
                {caseData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1 text-sm text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Navegación prev / next */}
            <div className="mb-8 flex items-center justify-between gap-4 border-t border-border py-6">
              {prevId ? (
                <Link
                  to={`/portfolio/${prevId}`}
                  className="group flex max-w-[45%] items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <ChevronLeft className="h-4 w-4 flex-shrink-0 transition-transform group-hover:-translate-x-0.5" />
                  <span className="truncate">{casesData[prevId].shortTitle}</span>
                </Link>
              ) : (
                <span />
              )}
              {nextId ? (
                <Link
                  to={`/portfolio/${nextId}`}
                  className="group ml-auto flex max-w-[45%] items-center gap-2 text-right text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="truncate">{casesData[nextId].shortTitle}</span>
                  <ChevronRight className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ) : (
                <span />
              )}
            </div>

            {/* CTA */}
            <div className="rounded-lg bg-foreground p-8 text-center">
              <h3 className="font-display mb-3 text-xl font-bold text-primary-foreground">
                ¿Quieres resultados similares?
              </h3>
              <p className="mb-6 text-primary-foreground/70">
                Cuéntanos tu reto y diseñamos la solución perfecta.
              </p>
              <Button variant="secondary" asChild>
                <Link to="/contacto">
                  Solicitar información <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default CaseDetail;
