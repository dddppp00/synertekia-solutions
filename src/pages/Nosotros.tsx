import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { title: "Innovación aplicada", desc: "No seguimos tendencias, creamos soluciones que generan impacto real y medible." },
  { title: "Cercanía", desc: "Entendemos el tejido empresarial gallego y español. Hablamos tu idioma, no solo el técnico." },
  { title: "Resultados", desc: "Cada proyecto se mide por sus KPIs. Si no genera valor, no lo proponemos." },
  { title: "Transparencia", desc: "Comunicación clara, plazos realistas y sin sorpresas. Confianza como base de cada relación." },
];

const Nosotros = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <SectionHeading
            tag="Quiénes somos"
            title="Transformación digital con raíces en Galicia"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed mb-16">
              <p>
                <strong className="text-foreground">SYNERTEKIA</strong> nace de la convicción de que la inteligencia artificial y la automatización no son privilegio de las grandes corporaciones. Nuestra misión es ayudar a empresas y autónomos a integrar estas tecnologías de forma estratégica y accesible.
              </p>
              <p>
                Nuestro enfoque combina visión estratégica con capacidad técnica. No vendemos tecnología por vender: analizamos, diseñamos e implementamos soluciones que resuelven problemas reales y generan retorno de inversión medible.
              </p>
              <p>
                Creemos en la <strong className="text-foreground">sinergia entre tecnología y negocio</strong> — de ahí nuestro nombre. Cada proyecto es una colaboración donde entendemos tu operativa, tus retos y tus objetivos antes de proponer una solución.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <SectionHeading
            tag="Valores"
            title="Lo que nos define"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">¿Hablamos?</h2>
          <p className="text-primary-foreground/70 mb-8">Descubre cómo podemos ayudar a tu empresa.</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contacto">Solicitar consultoría <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
