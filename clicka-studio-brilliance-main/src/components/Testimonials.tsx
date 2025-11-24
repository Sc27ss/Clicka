import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const testimonials = [
    {
      name: 'María González',
      role: 'Propietaria, Sapore di Casa',
      content:
        'Clicka Studio transformó completamente nuestra presencia digital. El diseño es elegante y funcional, nuestras reservas aumentaron un 60% desde el lanzamiento.',
      rating: 5,
      avatar: 'MG',
    },
    {
      name: 'Carlos Ramírez',
      role: 'Director, Cardinals Consulting',
      content:
        'Profesionales de primer nivel. Entendieron perfectamente nuestra visión corporativa y entregaron un sitio web que refleja la calidad de nuestros servicios.',
      rating: 5,
      avatar: 'CR',
    },
    {
      name: 'Andrea Martínez',
      role: 'Fundadora, Nevada Heladería',
      content:
        'El equipo de Clicka Studio es increíble. Crearon dos versiones de nuestra web y ambas son espectaculares. La atención al detalle y la creatividad son excepcionales.',
      rating: 5,
      avatar: 'AM',
    },
    {
      name: 'Roberto Silva',
      role: 'Emprendedor Digital',
      content:
        'Trabajar con Clicka Studio fue una experiencia fluida de principio a fin. Cumplieron con los plazos, el presupuesto y superaron nuestras expectativas.',
      rating: 5,
      avatar: 'RS',
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Lo Que Dicen Nuestros Clientes
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
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${300 + index * 150}ms`
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-500 fill-current group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" 
                      style={{
                        transitionDelay: `${i * 50}ms`
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic group-hover:text-foreground transition-colors duration-300">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md group-hover:shadow-lg group-hover:shadow-primary/30">
                    <span className="text-primary-foreground font-bold group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
