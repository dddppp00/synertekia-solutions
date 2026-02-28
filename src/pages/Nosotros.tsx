import { Link } from "react-router-dom";
import {
  ArrowRight,
  Compass,
  Eye,
  Goal,
  Users,
  ShieldCheck,
  Handshake,
  HeartHandshake,
  Clock,
  Linkedin,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-bg.jpg";

const values = [
  {
    icon: ShieldCheck,
    title: "Transparencia Técnica",
    desc: "Hablamos claro, sin tecnicismos innecesarios.",
  },
  {
    icon: Handshake,
    title: "Sinergia Real",
    desc: "Tu negocio y nuestra tecnología, trabajando en la misma dirección.",
  },
  {
    icon: HeartHandshake,
    title: "Empatía Operativa",
    desc: "Venimos de la empresa; entendemos tu carga de trabajo y tus urgencias.",
  },
  {
    icon: Clock,
    title: "Compromiso de Durabilidad",
    desc: "Formamos y hacemos un seguimiento continuo de las implantaciones para que la IA perdure en el tiempo.",
  },
];

const workModel = [
  {
    step: "01",
    title: "Formación directiva",
    desc: "Comenzamos formando a directivos y mandos intermedios para alinear tecnología y estrategia.",
  },
  {
    step: "02",
    title: "Implantación testeada",
    desc: "Aplicamos tecnologías previamente probadas y validadas internamente en nuestra empresa.",
  },
  {
    step: "03",
    title: "Formación de equipos",
    desc: "Capacitamos al resto de equipos y revisamos periódicamente los flujos para máxima eficiencia.",
  },
];

const team = [
  {
    name: "Carlos Figueroa",
    initials: "CF",
    role: "Estrategia y Negocio",
    bio: "Economista con más de 25 años de trayectoria profesional. Profesor Asociado en la Universidad de Santiago de Compostela (USC) desde 2017. Especialista en Inteligencia Artificial desde 2023 y Máster en Inteligencia Artificial (2025). Su perfil aporta la visión estructural, estratégica y analítica necesaria para alinear la tecnología con la rentabilidad del negocio.",
    linkedin: "https://www.linkedin.com/in/carlos-figueroa-herrero-93659397/",
  },
  {
    name: "David Pardo",
    initials: "DP",
    role: "Tecnología y Desarrollo",
    bio: "Graduado en Empresa y Tecnología por la USC (2023). Especialista en Inteligencia Artificial desde 2023 y Máster en Desarrollo con Inteligencia Artificial (2026). Su perfil representa la integración nativa entre los procesos empresariales y el desarrollo técnico, garantizando implementaciones de IA robustas y adaptadas a la realidad operativa.",
    linkedin: "https://www.linkedin.com/in/david-pardo",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.09 },
  }),
};

const Nosotros = () => {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden md:min-h-[75vh] md:flex md:items-center">
        <div className="absolute inset-0 z-0">
          {/* Imagen de fondo — solo visible en desktop */}
          <div className="hidden md:block absolute inset-y-0 right-0 md:w-[65%] lg:w-[60%] xl:w-[56%]">
            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover object-center"
              style={{
                WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.42) 14%, rgba(0,0,0,0.82) 28%, rgba(0,0,0,1) 46%)",
                maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.42) 14%, rgba(0,0,0,0.82) 28%, rgba(0,0,0,1) 46%)",
              }}
            />
          </div>
          {/* Gradientes desktop */}
          <div className="hidden md:block absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background)/0.72)_0%,hsl(var(--background)/0.46)_34%,hsl(var(--background)/0.24)_56%,hsl(var(--background)/0.14)_74%,hsl(var(--background)/0.18)_100%)]" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-background/12 via-transparent to-background/18" />
          {/* Gradiente decorativo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.08),transparent_52%)]" />
          {/* Gradiente mobile */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/40" />
        </div>

        <div className="container relative z-10 pt-14 pb-0 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl"
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/8 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Quiénes somos
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Transformación digital{" "}
              <span className="text-gradient">con raíces en Galicia</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Aportamos visión de negocio y capacidad técnica para implantar
              Inteligencia Artificial con impacto real en la operativa diaria.
            </p>
          </motion.div>

          {/* Imagen visible solo en mobile, debajo del texto */}
          <div className="md:hidden mt-10 overflow-hidden rounded-t-2xl h-64 relative">
            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Orígenes + Modelo 3 fases ── */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* Texto */}
            <div className="space-y-6 lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
                  Nuestros orígenes
                </span>
                <h3 className="font-display mb-4 text-xl font-semibold text-foreground">
                  La IA no es solo para las grandes corporaciones
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  SYNERTEKIA nace de una convicción firme: la inteligencia
                  artificial y la automatización no son, ni deben ser, un
                  privilegio exclusivo de las grandes corporaciones. Nuestro
                  propósito es ayudar a las empresas y profesionales a integrar
                  estas tecnologías de forma estratégica, accesible y honesta.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
                  Nuestra propuesta de valor
                </span>
                <h3 className="font-display mb-4 text-xl font-semibold text-foreground">
                  Hablamos el idioma de los negocios
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Venimos de la auditoría y la consultoría corporativa, lo que
                  nos permite entender tus procesos desde dentro. Aportamos
                  conocimiento estructural, instalamos soluciones que usamos en
                  nuestro día a día y aseguramos su éxito mediante formación
                  profunda y continua.
                </p>
                <ul className="mt-5 space-y-2">
                  {[
                    "Tecnologías validadas internamente antes de implantarlas",
                    "Visión de negocio antes que visión tecnológica",
                    "Formación continua garantizada",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Modelo 3 fases */}
            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.5}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/8 via-card to-card p-8">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  Modelo de adopción
                </p>
                <h3 className="font-display mb-8 text-2xl font-bold text-foreground">
                  Método en 3 fases
                </h3>
                <div className="relative space-y-0">
                  {workModel.map((item, i) => (
                    <div key={item.title} className="flex gap-5">
                      {/* Línea + número */}
                      <div className="flex flex-col items-center">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                          {item.step}
                        </div>
                        {i < workModel.length - 1 && (
                          <div className="mt-1 w-px flex-1 bg-primary/20" style={{ minHeight: "2.5rem" }} />
                        )}
                      </div>
                      {/* Contenido */}
                      <div className={i < workModel.length - 1 ? "pb-8" : ""}>
                        <p className="font-display font-semibold text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── Misión, Visión y Valores ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <SectionHeading tag="Identidad" title="Misión, Visión y Valores" />

          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Misión */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/12 via-card to-card p-8"
            >
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-primary/8" />
              <Compass className="mb-4 h-9 w-9 text-primary" />
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                Misión
              </p>
              <p className="leading-relaxed text-foreground">
                Dotar a las empresas de las herramientas y el conocimiento
                necesarios para adoptar la Inteligencia Artificial con seguridad
                y criterio. Transformamos la complejidad tecnológica en
                soluciones prácticas que hacen a los equipos más autónomos y
                eficientes.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <Eye className="mb-4 h-9 w-9 text-primary" />
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                Visión
              </p>
              <p className="leading-relaxed text-foreground">
                Aspiramos a un tejido empresarial donde la Inteligencia
                Artificial sea una infraestructura accesible, segura y
                normalizada en todas las Pymes, eliminando definitivamente las
                ineficiencias y devolviendo a las personas el tiempo para pensar
                y crear valor.
              </p>
            </motion.div>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="flex gap-5 rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display mb-1 font-semibold text-foreground">
                      {v.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Equipo ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading tag="Equipo" title="Conoce al equipo" />

          <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                {/* Avatar + nombre */}
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-xl font-bold text-primary">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>

                <p className="flex-1 leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-70"
                >
                  <Linkedin className="h-4 w-4" />
                  Ver perfil en LinkedIn
                </a>
              </motion.div>
            ))}
          </div>

          {/* Equipo extendido */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-6 rounded-2xl border border-border bg-gradient-to-r from-secondary to-card p-8"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display mb-2 text-lg font-semibold text-foreground">
                  Nuestro equipo extendido
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Para garantizar la excelencia en cada proyecto, contamos con
                  una red de profesionales y técnicos expertos en Inteligencia
                  Artificial que complementan nuestro staff central.
                  Seleccionamos a los especialistas más adecuados para cada
                  solución a implantar, adaptándonos milimétricamente a las
                  necesidades técnicas, sectoriales y operativas de cada
                  cliente.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Objetivos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="rounded-2xl border border-primary/20 bg-primary/8 p-8"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <Goal className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display mb-2 text-lg font-semibold text-foreground">
                  Nuestros Objetivos
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Nuestro objetivo principal es acelerar la adopción digital
                  segura en las Pymes. Nos enfocamos en estandarizar el modelo
                  en 3 fases, reducir drásticamente los tiempos de gestión
                  interna y mantener el portfolio de soluciones actualizado con
                  herramientas de IA estables.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Hablemos
            </h2>
            <p className="mb-8 text-primary-foreground/70 md:text-lg">
              Descubre cómo podemos ayudarte a implantar IA real con impacto medible.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacto">
                Solicitar información <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
