import { Globe, Code, Palette, Rocket, ShoppingCart, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Services = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const services = [
    {
      icon: Globe,
      title: 'Diseño Web Profesional',
      description:
        'Creamos sitios web modernos, responsivos y optimizados que representan tu marca de manera profesional.',
      features: ['Diseño personalizado', 'SEO optimizado', 'Mobile-first'],
    },
    {
      icon: Code,
      title: 'Desarrollo Front-end',
      description:
        'Desarrollamos interfaces interactivas y funcionales con las últimas tecnologías web.',
      features: ['React & TypeScript', 'Optimización de rendimiento', 'Código limpio'],
    },
    {
      icon: Palette,
      title: 'Identidad Visual y Branding',
      description:
        'Diseñamos identidades visuales coherentes que comunican la esencia de tu marca.',
      features: ['Logotipos', 'Paletas de colores', 'Guías de estilo'],
    },
    {
      icon: Rocket,
      title: 'Landing Pages',
      description:
        'Páginas de aterrizaje diseñadas para convertir visitantes en clientes potenciales.',
      features: ['Alta conversión', 'CTA optimizados', 'A/B testing'],
    },
    {
      icon: ShoppingCart,
      title: 'Tiendas Online',
      description:
        'E-commerce completos con sistemas de pago integrados y gestión de productos.',
      features: ['Catálogo de productos', 'Carrito de compras', 'Pasarelas de pago'],
    },
    {
      icon: Image,
      title: 'Material Visual para Marcas',
      description:
        'Creamos contenido visual para redes sociales, publicidad y materiales de marketing.',
      features: ['Posts para RRSS', 'Banners publicitarios', 'Infografías'],
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Nuestros Servicios
          </h2>
          <div
            className={`w-20 h-1 bg-primary rounded-full mx-auto mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Soluciones completas de diseño y desarrollo web para impulsar tu presencia digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 hover:border-primary/50 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 group-hover:bg-primary/20 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/25">
                  <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 group-hover:scale-150 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg border-2 group-hover:border-primary"
                  onClick={() => scrollToSection('contacto')}
                >
                  Solicitar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
