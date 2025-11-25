import { useEffect, useState } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Stats = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  const stats = [
    {
      icon: Users,
      end: 50,
      suffix: '+',
      label: 'Clientes Satisfechos',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      end: 100,
      suffix: '%',
      label: 'Satisfacción',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      end: 200,
      suffix: '%',
      label: 'ROI Promedio',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Clock,
      end: 24,
      suffix: '/7',
      label: 'Soporte',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float [animation-delay:2s]" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Números que{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Hablan por Sí Solos
            </span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ElementType;
  end: number;
  suffix: string;
  label: string;
  color: string;
  index: number;
  isVisible: boolean;
}

const StatCard = ({ icon: Icon, end, suffix, label, color, index, isVisible }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return (
    <div
      className={`group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 hover:border-primary/50 overflow-hidden ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      <div className="relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-lg">
          <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>

        <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
          {count}
          {suffix}
        </div>

        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {label}
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color} blur-xl opacity-30`} />
      </div>
    </div>
  );
};

export default Stats;
