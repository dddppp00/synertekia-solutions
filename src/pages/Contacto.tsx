import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { PostgrestError } from "@supabase/supabase-js";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  empresa: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Email no válido").max(255),
  telefono: z.string().trim().max(20).optional(),
  mensaje: z.string().trim().min(1, "Describe tus necesidades").max(2000),
});

type FormData = z.infer<typeof contactSchema>;

const getContactErrorMessage = (error: unknown) => {
  const pgError = error as PostgrestError | null;
  const message = typeof pgError?.message === "string" ? pgError.message : "";

  if (pgError?.code === "42501") {
    return "Permisos insuficientes en Supabase. Revisa la policy RLS para insertar en contacts.";
  }

  if (pgError?.code === "42P01") {
    return "La tabla contacts no existe en Supabase.";
  }

  if (message.toLowerCase().includes("invalid api key")) {
    return "La API key de Supabase no es válida. Revisa VITE_SUPABASE_PUBLISHABLE_KEY.";
  }

  if (message.toLowerCase().includes("failed to fetch")) {
    return "No se pudo conectar con Supabase. Verifica VITE_SUPABASE_URL y tu conexión.";
  }

  const code = pgError?.code ? `Codigo: ${pgError.code}. ` : "";
  const details = pgError?.details ? `Detalle: ${pgError.details}. ` : "";
  const hint = pgError?.hint ? `Hint: ${pgError.hint}. ` : "";
  const rawMessage = message || "Error desconocido";

  return `${code}${details}${hint}Mensaje: ${rawMessage}`;
};

const Contacto = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from("contacts").insert({
        nombre: result.data.nombre,
        empresa: result.data.empresa || null,
        email: result.data.email,
        telefono: result.data.telefono || null,
        mensaje: result.data.mensaje,
      });
      if (error) throw error;
      setSubmitted(true);
      toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto contigo pronto." });
    } catch (error: unknown) {
      console.error("Error enviando contacto a Supabase:", error);
      toast({ title: "Error", description: getContactErrorMessage(error), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden md:min-h-[75vh] md:flex md:items-center">
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block absolute inset-y-0 right-0 md:w-[65%] lg:w-[60%] xl:w-[56%]">
            <img
              src={heroBg}
              alt=""
              className="w-full h-full object-cover object-center"
              style={{
                WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.42) 14%, rgba(0,0,0,0.82) 28%, rgba(0,0,0,1) 46%)",
                maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.42) 14%, rgba(0,0,0,0.82) 28%, rgba(0,0,0,1) 46%)",
              }}
            />
          </div>
          <div className="hidden md:block absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background)/0.72)_0%,hsl(var(--background)/0.46)_34%,hsl(var(--background)/0.24)_56%,hsl(var(--background)/0.14)_74%,hsl(var(--background)/0.18)_100%)]" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-background/12 via-transparent to-background/18" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(var(--primary)/0.08),transparent_52%)]" />
          <div className="md:hidden absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/40" />
        </div>

        <div className="container relative z-10 pt-14 pb-0 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/8 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Contacto
            </span>
            <h1 className="font-display mb-5 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Soluciones de IA reales para problemas empresariales reales.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Solo implementamos lo que nosotros mismos usamos y hemos validado previamente. Déjanos tus datos y un breve resumen de tu mayor cuello de botella administrativo o directivo.
            </p>
          </motion.div>

          <div className="md:hidden mt-10 overflow-hidden rounded-t-2xl h-64 relative">
            <img src={heroBg} alt="" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/10 rounded-lg p-12 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Gracias por contactarnos</h3>
                  <p className="text-muted-foreground">Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo en breve.</p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre">Nombre / Persona de contacto *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                        className={errors.nombre ? "border-destructive" : ""}
                      />
                      {errors.nombre && <p className="text-destructive text-xs mt-1">{errors.nombre}</p>}
                    </div>
                    <div>
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input
                        id="empresa"
                        value={formData.empresa}
                        onChange={(e) => handleChange("empresa", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="telefono">Teléfono (Opcional)</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleChange("telefono", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mensaje">¿Cuál es el mayor cuello de botella o proceso manual que te gustaría solucionar? *</Label>
                    <Textarea
                      id="mensaje"
                      rows={5}
                      value={formData.mensaje}
                      onChange={(e) => handleChange("mensaje", e.target.value)}
                      className={errors.mensaje ? "border-destructive" : ""}
                      placeholder="Describe brevemente el proceso manual o cuello de botella principal de tu negocio..."
                    />
                    {errors.mensaje && <p className="text-destructive text-xs mt-1">{errors.mensaje}</p>}
                  </div>

                  <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
                    {loading ? "Enviando..." : "Hablemos de tu negocio"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </motion.form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <MapPin className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-display font-semibold text-foreground mb-1">Ubicación</h4>
                <p className="text-muted-foreground text-sm">Galicia, España</p>
                <p className="text-muted-foreground text-sm">Servicio en toda España</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <Mail className="h-6 w-6 text-primary mb-3" />
                <h4 className="font-display font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">info@expertosenia.gal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
