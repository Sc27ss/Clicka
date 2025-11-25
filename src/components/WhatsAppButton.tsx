import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 hover:scale-125 transition-all duration-300 animate-bounce-subtle hover:rotate-12"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
