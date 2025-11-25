import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CTA = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float [animation-delay:2s]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full backdrop-blur-sm border border-primary/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary animate-glow" />
            <span className="text-sm font-medium text-primary">¿Listo para Empezar?</span>
          </div>

          <h2
            className={`text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Transforma tu{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Presencia Digital
            </span>{' '}
            Hoy
          </h2>

          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Únete a más de 50 empresas que ya confiaron en nosotros para crear su éxito digital.
            Tu proyecto puede ser el siguiente.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden px-8 py-6 text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/40"
              onClick={() => scrollToSection('contacto')}
            >
              <span className="relative z-10 flex items-center">
                Solicitar Cotización Gratis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-primary/50 hover:border-primary px-8 py-6 text-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-primary/5"
              onClick={() => scrollToSection('portafolio')}
            >
              <Rocket className="mr-2 w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              Ver Casos de Éxito
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className={`mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center group cursor-default">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Satisfacción Garantizada
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                24h
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Respuesta Inicial
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                0€
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Consulta y Cotización
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default CTA;
