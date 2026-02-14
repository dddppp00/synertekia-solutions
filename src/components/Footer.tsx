import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">SYNERTEKIA</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Consultoría en Inteligencia Artificial y automatización empresarial. Transformamos negocios en Galicia y España.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Navegación</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Inicio", path: "/" },
                { label: "Servicios", path: "/servicios" },
                { label: "Casos de Éxito", path: "/portfolio" },
                { label: "Quiénes Somos", path: "/nosotros" },
                { label: "Contacto", path: "/contacto" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Contacto</h4>
            <div className="text-sm text-primary-foreground/70 space-y-2">
              <p>Galicia, España</p>
              <p>info@expertosenia.gal</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Synertekia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
