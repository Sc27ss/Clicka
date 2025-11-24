import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 transition-all duration-300 hover:bg-background/90 hover:backdrop-blur-xl hover:border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-primary/50">
              <span className="text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform duration-300">C</span>
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Clicka Studio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="relative text-foreground hover:text-primary transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="relative text-foreground hover:text-primary transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="relative text-foreground hover:text-primary transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('portafolio')}
              className="relative text-foreground hover:text-primary transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection('precios')}
              className="relative text-foreground hover:text-primary transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Precios
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-background/95 backdrop-blur-lg border-t border-border">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('portafolio')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection('precios')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Precios
            </button>
            <div className="px-4">
              <Button onClick={() => scrollToSection('contacto')} className="w-full">
                Contactar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
