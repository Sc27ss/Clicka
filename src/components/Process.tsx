import { MessageSquare, Lightbulb, Code2, Eye, Rocket, Settings } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Process = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const steps = [
    {
      icon: MessageSquare,
      title: 'Brief con el Cliente',
      description:
        'Comenzamos con una conversación para entender tu negocio, objetivos y visión.',
    },
    {
      icon: Lightbulb,
      title: 'Diseño Inicial',
      description:
        'Creamos mockups y propuestas de diseño que reflejan tu identidad de marca.',
    },
    {
      icon: Code2,
      title: 'Desarrollo',
      description:
        'Transformamos el diseño en un sitio web funcional con código limpio y optimizado.',
    },
    {
      icon: Eye,
      title: 'Revisión',
      description:
        'Revisamos juntos el proyecto y realizamos los ajustes necesarios hasta tu satisfacción.',
    },
    {
      icon: Rocket,
      title: 'Publicación',
      description:
        'Lanzamos tu sitio web al mundo con todas las optimizaciones técnicas necesarias.',
    },
    {
      icon: Settings,
      title: 'Mantenimiento',
      description:
        'Ofrecemos soporte continuo y actualizaciones para mantener tu web siempre al día.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Nuestro Proceso de Trabajo
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
            Un proceso estructurado y transparente que garantiza resultados excepcionales
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div
                    className={`group/card bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 relative overflow-hidden ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                    style={{
                      animation: `${index % 2 === 0 ? 'fade-in-right' : 'fade-in-left'} 0.6s ease-out ${index * 0.15}s backwards`
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover/card:scale-110 group-hover/card:rotate-6 group-hover/card:bg-primary/20 transition-all duration-500 group-hover/card:shadow-lg ${
                          index % 2 === 0 ? 'md:ml-auto' : ''
                        }`}
                      >
                        <step.icon className="w-6 h-6 text-primary group-hover/card:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover/card:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground group-hover/card:text-foreground transition-colors duration-300">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Center Circle */}
                <div 
                  className="relative flex-shrink-0"
                  style={{
                    animation: `scale-in 0.5s ease-out ${index * 0.15 + 0.3}s backwards`
                  }}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 relative z-10 hover:scale-125 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 group cursor-default">
                    <span className="text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary rounded-full animate-glow opacity-30" />
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
