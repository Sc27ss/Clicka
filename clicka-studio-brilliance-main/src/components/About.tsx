import { Target, Zap, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import workspaceImage from '@/assets/workspace.jpg';

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Target,
      title: 'Enfoque al Cliente',
      description: 'Cada proyecto es único. Escuchamos tus necesidades y diseñamos soluciones a medida.',
    },
    {
      icon: Zap,
      title: 'Innovación Constante',
      description: 'Utilizamos las últimas tecnologías y tendencias de diseño para crear experiencias modernas.',
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Colaboramos contigo en cada etapa del proyecto para garantizar resultados excepcionales.',
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Entregamos diseños profesionales que impulsan el crecimiento de tu negocio.',
    },
  ];

  return (
    <section id="nosotros" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:scale-[1.02]">
              <img
                src={workspaceImage}
                alt="Workspace"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-primary/15 transition-all duration-300 hover:scale-105 animate-fade-in-right">
              <Users className="w-4 h-4 text-primary animate-glow" />
              <span className="text-sm font-medium text-primary">Sobre Nosotros</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:backwards]">
              Creamos experiencias digitales que{' '}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">destacan</span>
            </h2>

            <p className="text-lg text-muted-foreground animate-fade-in-up [animation-delay:400ms] [animation-fill-mode:backwards]">
              En Clicka Studio, combinamos creatividad y tecnología para transformar ideas en
              sitios web excepcionales. Nuestro enfoque está en entender tu negocio y crear
              soluciones que no solo se vean increíbles, sino que también generen resultados
              reales.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group space-y-2 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default"
                  style={{
                    animation: `fade-in-right 0.6s ease-out ${(index * 0.1) + 0.6}s backwards`
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <value.icon className="w-5 h-5 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{value.description}</p>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              onClick={() => scrollToSection('contacto')}
              className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 animate-fade-in-up [animation-delay:1s] [animation-fill-mode:backwards]"
            >
              <span className="relative z-10">Trabajemos Juntos</span>
              <ArrowRight className="ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
