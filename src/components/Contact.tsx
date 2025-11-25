import { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Contact = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: 'web',
    budget: 'basico',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hola! Me gustaría solicitar información sobre:\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTipo de Proyecto: ${formData.project}\nPresupuesto: ${formData.budget}\nMensaje: ${formData.message}`
    );
    window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');

    toast({
      title: 'Mensaje enviado',
      description: 'Te contactaremos pronto por WhatsApp',
    });

    setFormData({
      name: '',
      email: '',
      project: 'web',
      budget: 'basico',
      message: '',
    });
  };

  const handleGmailClick = () => {
    const subject = encodeURIComponent('Consulta sobre servicios - Clicka Studio');
    const body = encodeURIComponent(
      `Hola Clicka Studio,\n\nMe gustaría obtener más información sobre sus servicios.\n\nSaludos,\n${formData.name}`
    );
    window.open(`mailto:contacto@clickastudio.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            ¿Listo para Comenzar?
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
            Hablemos sobre tu proyecto y llevémoslo al siguiente nivel
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <a
                      href="mailto:contacto@clickastudio.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contacto@clickastudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Ubicación</div>
                    <p className="text-muted-foreground">
                      Trabajo remoto para clientes en todo el mundo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h4 className="font-semibold text-foreground mb-4">
                ¿Prefieres contactarnos directamente?
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                  <MessageSquare className="mr-2 w-4 h-4" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="flex-1" onClick={handleGmailClick}>
                  <Mail className="mr-2 w-4 h-4" />
                  Gmail
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`bg-card border border-border rounded-2xl p-8 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Nombre Completo *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10 focus:border-primary"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Email *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10 focus:border-primary"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Tipo de Proyecto *
                </label>
                <select
                  required
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10 focus:border-primary focus:outline-none hover:border-primary/50"
                >
                  <option value="web">Diseño Web</option>
                  <option value="ecommerce">Tienda Online</option>
                  <option value="landing">Landing Page</option>
                  <option value="branding">Branding</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Presupuesto Estimado *
                </label>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10 focus:border-primary focus:outline-none hover:border-primary/50"
                >
                  <option value="basico">Básico ($500 - $1,000)</option>
                  <option value="intermedio">Intermedio ($1,000 - $2,000)</option>
                  <option value="premium">Premium ($2,000+)</option>
                  <option value="consultar">Prefiero consultar</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Mensaje *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                  className="transition-all duration-300 focus:scale-[1.01] focus:shadow-lg focus:shadow-primary/10 focus:border-primary hover:border-primary/50"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30" 
                size="lg"
              >
                <span className="relative z-10">Enviar Mensaje</span>
                <Send className="ml-2 w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
