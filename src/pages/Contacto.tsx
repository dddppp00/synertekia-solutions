import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  empresa: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Email no válido").max(255),
  telefono: z.string().trim().max(20).optional(),
  mensaje: z.string().trim().min(1, "Describe tus necesidades").max(2000),
});

type FormData = z.infer<typeof contactSchema>;

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
      toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto contigo pronto." });
    } catch {
      toast({ title: "Error", description: "Hubo un problema al enviar el formulario. Inténtalo de nuevo.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <SectionHeading
            tag="Contacto"
            title="Solicitar consultoría"
            description="Cuéntanos tus necesidades y te responderemos en menos de 24 horas."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/10 rounded-lg p-12 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">¡Gracias por contactarnos!</h3>
                  <p className="text-muted-foreground">Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo en menos de 24 horas.</p>
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
                      <Label htmlFor="nombre">Nombre *</Label>
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
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleChange("telefono", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Descripción de necesidades *</Label>
                    <Textarea
                      id="mensaje"
                      rows={5}
                      value={formData.mensaje}
                      onChange={(e) => handleChange("mensaje", e.target.value)}
                      className={errors.mensaje ? "border-destructive" : ""}
                      placeholder="Cuéntanos brevemente qué reto quieres resolver o qué objetivos tienes..."
                    />
                    {errors.mensaje && <p className="text-destructive text-xs mt-1">{errors.mensaje}</p>}
                  </div>

                  <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
                    {loading ? "Enviando..." : "Enviar solicitud"}
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
