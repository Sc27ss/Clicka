import { ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Portfolio = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const projects = [
    {
      title: 'Sapore di Casa',
      category: 'Restaurante',
      description:
        'Sitio web elegante y moderno para restaurante italiano, con menú interactivo y sistema de reservas.',
      url: 'https://sapore-di-casa3.vercel.app/',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      tags: ['Restaurante', 'E-commerce', 'Responsive'],
    },
    {
      title: 'Nevada Heladería - Versión A',
      category: 'Heladería',
      description:
        'Diseño fresco y colorido para heladería artesanal, destacando sus productos premium.',
      url: 'https://sc27ss.github.io/NevadaH/',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop',
      tags: ['Heladería', 'Landing Page', 'Visual'],
    },
    {
      title: 'Nevada Heladería - Versión B',
      category: 'Heladería',
      description:
        'Versión alternativa con enfoque en experiencia de usuario y catálogo de productos.',
      url: 'https://heladeria-delta.vercel.app/',
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&h=600&fit=crop',
      tags: ['Heladería', 'Catálogo', 'Moderno'],
    },
    {
      title: 'Cardinals Consulting',
      category: 'Corporativo',
      description:
        'Sitio corporativo profesional para consultoría empresarial, con diseño limpio y moderno.',
      url: '#',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      tags: ['Corporativo', 'Profesional', 'B2B'],
    },
  ];

  return (
    <section id="portafolio" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Nuestro Portafolio
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
            Proyectos reales que demuestran nuestra experiencia y dedicación
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 hover:border-primary/50 relative ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{
                transitionDelay: `${300 + index * 150}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                  <Button
                    variant="default"
                    size="lg"
                    className="shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110"
                    onClick={() => window.open(project.url, '_blank')}
                    disabled={project.url === '#'}
                  >
                    Ver Proyecto
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {project.category}
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-default border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1 group-hover:scale-125 transition-transform duration-300 [transition-delay:50ms] group-hover:rotate-12" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1 group-hover:scale-125 transition-transform duration-300 [transition-delay:100ms] group-hover:rotate-12" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1 group-hover:scale-125 transition-transform duration-300 [transition-delay:150ms] group-hover:rotate-12" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-2 group-hover:scale-125 transition-transform duration-300 [transition-delay:200ms] group-hover:rotate-12" />
                  <span>Cliente Satisfecho</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
