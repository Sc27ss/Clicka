import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 animate-fade-in-down backdrop-blur-sm hover:bg-primary/15 transition-all duration-300 hover:scale-105">
            <Sparkles className="w-4 h-4 text-primary animate-glow" />
            <span className="text-sm font-medium text-primary">
              Agencia de Diseño Web Profesional
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:backwards]">
            Diseñamos lo que
            <br />
            <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              te diferencia.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:backwards]">
            Transformamos ideas en experiencias digitales únicas. Diseño web profesional
            para marcas que quieren destacar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up [animation-delay:600ms] [animation-fill-mode:backwards]">
            <Button
              size="lg"
              className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              onClick={() => scrollToSection('contacto')}
            >
              <span className="relative z-10">Solicitar Cotización</span>
              <ArrowRight className="ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('portafolio')}
              className="group border-2 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
            >
              Ver Proyectos
              <div className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="space-y-2 group cursor-default animate-fade-in-up [animation-delay:800ms] [animation-fill-mode:backwards] hover:scale-110 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm text-muted-foreground">Proyectos Exitosos</div>
            </div>
            <div className="space-y-2 group cursor-default animate-fade-in-up [animation-delay:900ms] [animation-fill-mode:backwards] hover:scale-110 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-sm text-muted-foreground">Satisfacción</div>
            </div>
            <div className="space-y-2 group cursor-default animate-fade-in-up [animation-delay:1000ms] [animation-fill-mode:backwards] hover:scale-110 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float [animation-delay:2s]" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse [animation-delay:1s]" />
      </div>
    </section>
  );
};

export default Hero;
