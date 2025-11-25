import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold">Clicka Studio</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Diseñamos lo que te diferencia. Agencia profesional de diseño y desarrollo web.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#portafolio"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Portafolio
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-sm text-secondary-foreground/80">Diseño Web</li>
              <li className="text-sm text-secondary-foreground/80">Desarrollo Front-end</li>
              <li className="text-sm text-secondary-foreground/80">Branding</li>
              <li className="text-sm text-secondary-foreground/80">Tiendas Online</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:contacto@clickastudio.com"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  contacto@clickastudio.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="https://wa.me/1234567890"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="#"
                className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} Clicka Studio. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
            >
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
