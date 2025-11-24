import { Code2, Palette, Zap, Shield, Smartphone, Globe } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TechStack = () => {
  const technologies = [
    {
      icon: Code2,
      name: 'React & TypeScript',
      description: 'Desarrollo moderno y escalable',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Palette,
      name: 'Tailwind CSS',
      description: 'Diseño responsive y personalizado',
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Zap,
      name: 'Optimización',
      description: 'Velocidad y rendimiento superior',
      color: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: Shield,
      name: 'Seguridad',
      description: 'Protección de datos garantizada',
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: Smartphone,
      name: 'Mobile First',
      description: 'Adaptado a todos los dispositivos',
      color: 'from-red-500/20 to-pink-500/20',
    },
    {
      icon: Globe,
      name: 'SEO Avanzado',
      description: 'Posicionamiento en buscadores',
      color: 'from-indigo-500/20 to-blue-500/20',
    },
  ];

  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float [animation-delay:2s]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full backdrop-blur-sm mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Zap className="w-4 h-4 text-primary animate-glow" />
            <span className="text-sm font-medium text-primary">Tecnología de Vanguardia</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Stack Tecnológico{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Profesional
            </span>
          </h2>
          <div
            className={`w-20 h-1 bg-primary rounded-full mx-auto mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Utilizamos las tecnologías más avanzadas para crear experiencias web de última generación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group bg-card border border-border rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${400 + index * 100}ms`,
              }}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-lg">
                  <tech.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.description}
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
