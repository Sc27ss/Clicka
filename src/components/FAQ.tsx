import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuánto tiempo toma desarrollar un sitio web?',
      answer:
        'El tiempo varía según la complejidad del proyecto. Una landing page simple puede estar lista en 1-2 semanas, mientras que un sitio web completo puede tomar de 3-6 semanas. Siempre definimos plazos claros desde el inicio.',
    },
    {
      question: '¿Ofrecen mantenimiento después de la entrega?',
      answer:
        'Sí, todos nuestros planes incluyen un período de soporte inicial. Además, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, seguridad, backups y cambios menores.',
    },
    {
      question: '¿El sitio web será responsive (adaptable a móviles)?',
      answer:
        'Absolutamente. Todos nuestros diseños son mobile-first, lo que significa que están optimizados primero para dispositivos móviles y luego para tablets y escritorio. Tu web se verá perfecta en cualquier pantalla.',
    },
    {
      question: '¿Puedo actualizar el contenido yo mismo después?',
      answer:
        'Sí, desarrollamos sitios con sistemas de gestión de contenido fáciles de usar. Te capacitamos para que puedas hacer cambios de texto, imágenes y contenido sin necesidad de conocimientos técnicos.',
    },
    {
      question: '¿Qué incluye el SEO básico/avanzado?',
      answer:
        'El SEO básico incluye optimización de velocidad, meta tags, estructura de URLs y sitemap. El SEO avanzado añade investigación de keywords, optimización de contenido, estrategia de enlaces y análisis de competencia.',
    },
    {
      question: '¿Trabajan con clientes internacionales?',
      answer:
        'Sí, trabajamos de forma 100% remota con clientes en todo el mundo. Nos adaptamos a diferentes zonas horarias y ofrecemos comunicación fluida por WhatsApp, email y videollamadas.',
    },
  ];

  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-20 md:py-32 bg-accent/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full backdrop-blur-sm mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-primary animate-glow" />
            <span className="text-sm font-medium text-primary">Preguntas Frecuentes</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            ¿Tienes{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Dudas?
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
            Resolvemos las preguntas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{
                transitionDelay: `${400 + index * 100}ms`,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground pr-8 group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 scale-110' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
