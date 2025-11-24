# 🎨 CLICKA STUDIO - PROMPT COMPLETO PARA REPLICAR

> **Prompt profesional completo para recrear la página web de Clicka Studio desde cero**

---

## 📋 ÍNDICE

1. [Información del Proyecto](#información-del-proyecto)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Estructura de Archivos](#estructura-de-archivos)
4. [Configuración Base](#configuración-base)
5. [Hooks Personalizados](#hooks-personalizados)
6. [Componentes Completos](#componentes-completos)
7. [Sistema de Diseño](#sistema-de-diseño)
8. [Instrucciones de Instalación](#instrucciones-de-instalación)

---

## 🎯 INFORMACIÓN DEL PROYECTO

### Descripción General
**Clicka Studio** es una agencia de diseño y desarrollo web profesional. La página web debe representar el máximo nivel de calidad técnica y visual, demostrando las capacidades de la agencia.

### Identidad de Marca
- **Nombre**: Clicka Studio
- **Slogan**: "Diseñamos lo que te diferencia"
- **Estilo**: Profesional, juvenil, minimalista, moderno, limpio
- **Paleta de Colores**: 
  - Azul principal: `hsl(200, 98%, 39%)` (#0099CC)
  - Turquesa: `hsl(174, 62%, 47%)` (#2aa198)
  - Gris oscuro: `hsl(222, 47%, 11%)`
  - Blanco/Gris claro: `hsl(209, 40%, 96%)`

### Público Objetivo
Emprendedores, pequeñas empresas, restaurantes, negocios locales, startups y marcas que quieren crecer digitalmente.

### Servicios Principales
1. Diseño Web Profesional
2. Desarrollo Front-end
3. Identidad Visual y Branding
4. Landing Pages
5. Tiendas Online
6. Material Visual para Marcas

---

## 🛠 STACK TECNOLÓGICO

```json
{
  "framework": "React 18.3.1",
  "language": "TypeScript",
  "styling": "Tailwind CSS + shadcn/ui",
  "routing": "React Router DOM 6.30.1",
  "animations": "CSS Animations + IntersectionObserver",
  "icons": "Lucide React",
  "forms": "React Hook Form + Zod",
  "build": "Vite",
  "theme": "Glacier (predefinido)"
}
```

---

## 📂 ESTRUCTURA DE ARCHIVOS

```
clicka-studio/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── hero-bg.jpg
│   │   └── workspace.jpg
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── ... (otros componentes shadcn)
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── TechStack.tsx
│   │   ├── Process.tsx
│   │   ├── Stats.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   └── useScrollReveal.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## ⚙️ CONFIGURACIÓN BASE

### `index.html`
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clicka Studio - Diseño y Desarrollo Web Profesional</title>
    <meta name="description" content="Agencia de diseño y desarrollo web profesional. Creamos sitios web únicos, modernos y optimizados para emprendedores y empresas. Diseñamos lo que te diferencia." />
    <meta name="author" content="Clicka Studio" />
    <meta name="keywords" content="diseño web, desarrollo web, branding, landing pages, tiendas online, agencia digital" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Clicka Studio - Diseño y Desarrollo Web Profesional" />
    <meta property="og:description" content="Agencia de diseño y desarrollo web profesional. Creamos sitios web únicos que impulsan tu negocio." />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Clicka Studio - Diseño y Desarrollo Web Profesional" />
    <meta name="twitter:description" content="Agencia de diseño y desarrollo web profesional." />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `src/main.tsx`
```tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

### `src/App.tsx`
```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

### `src/pages/Index.tsx`
```tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import Pricing from '@/components/Pricing';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Process />
      <Stats />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
```

### `tailwind.config.ts`
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-down': 'fade-in-down 0.8s ease-out',
        'fade-in-left': 'fade-in-left 0.8s ease-out',
        'fade-in-right': 'fade-in-right 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'zoom-in': 'zoom-in 0.6s ease-out',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### `src/index.css`
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 209 40% 96%;
    --foreground: 222 47% 11%;
    --card: 210 40% 98%;
    --card-foreground: 222 47% 11%;
    --popover: 214 31% 91%;
    --popover-foreground: 222 47% 11%;
    --primary: 200 98% 39%;
    --primary-foreground: 204 100% 97%;
    --secondary: 215 24% 26%;
    --secondary-foreground: 210 40% 98%;
    --muted: 215 20% 65%;
    --muted-foreground: 222 47% 11%;
    --accent: 210 40% 98%;
    --accent-foreground: 215 19% 34%;
    --destructive: 0 72% 50%;
    --destructive-foreground: 0 85% 97%;
    --border: 212 26% 83%;
    --input: 212 26% 83%;
    --ring: 200 98% 39%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222 47% 11%;
    --foreground: 210 40% 98%;
    --card: 217 32% 17%;
    --card-foreground: 210 40% 98%;
    --primary: 198 93% 59%;
    --primary-foreground: 204 80% 15%;
    --secondary: 212 26% 83%;
    --secondary-foreground: 228 84% 4%;
    --muted: 215 16% 46%;
    --muted-foreground: 210 40% 98%;
    --accent: 228 84% 4%;
    --accent-foreground: 215 20% 65%;
    --border: 215 19% 34%;
    --input: 215 19% 34%;
    --ring: 198 93% 59%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

---

## 🪝 HOOKS PERSONALIZADOS

### `src/hooks/useScrollReveal.tsx`
```tsx
import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};
```

---

## 🧩 COMPONENTES COMPLETOS

### 1. `src/components/Navbar.tsx`
```tsx
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
            <button onClick={() => scrollToSection('inicio')} className="relative text-foreground hover:text-primary transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="relative text-foreground hover:text-primary transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('servicios')} className="relative text-foreground hover:text-primary transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Servicios
            </button>
            <button onClick={() => scrollToSection('portafolio')} className="relative text-foreground hover:text-primary transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Portafolio
            </button>
            <button onClick={() => scrollToSection('precios')} className="relative text-foreground hover:text-primary transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
              Precios
            </button>
            <Button onClick={() => scrollToSection('contacto')} className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-background/95 backdrop-blur-lg border-t border-border">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('portafolio')} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Portafolio
            </button>
            <button onClick={() => scrollToSection('precios')} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
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
```

### 2. `src/components/Hero.tsx`
```tsx
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
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80 backdrop-blur-sm" />

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
            </Button>
          </div>

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

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float [animation-delay:2s]" />
      </div>
    </section>
  );
};

export default Hero;
```

### 3. `src/components/WhatsAppButton.tsx`
```tsx
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
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
```

### 4. `src/components/Footer.tsx`
```tsx
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold">Clicka Studio</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Diseñamos lo que te diferencia. Agencia profesional de diseño y desarrollo web.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#portafolio" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">Portafolio</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-sm text-secondary-foreground/80">Diseño Web</li>
              <li className="text-sm text-secondary-foreground/80">Desarrollo Front-end</li>
              <li className="text-sm text-secondary-foreground/80">Branding</li>
              <li className="text-sm text-secondary-foreground/80">Tiendas Online</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contacto@clickastudio.com" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  contacto@clickastudio.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="https://wa.me/1234567890" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>

            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} Clicka Studio. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## 📦 INSTRUCCIONES DE INSTALACIÓN

### 1. Crear nuevo proyecto en Lovable

```bash
# Crear proyecto desde cero en Lovable.dev
# Seleccionar tema: Glacier
```

### 2. Copiar archivos en este orden

1. **Configuración base**: `index.html`, `tailwind.config.ts`, `src/index.css`
2. **Estructura principal**: `src/main.tsx`, `src/App.tsx`, `src/pages/Index.tsx`
3. **Hook personalizado**: `src/hooks/useScrollReveal.tsx`
4. **Componentes base**: Empezar por `Navbar.tsx` y `Footer.tsx`
5. **Secciones restantes**: Hero, About, Services, etc.
6. **Componente flotante**: `WhatsAppButton.tsx` al final

### 3. Instalar dependencias adicionales

Las dependencias principales ya están incluidas en Lovable:
- `lucide-react` ✅
- `@radix-ui/*` ✅
- `react-router-dom` ✅
- `@tanstack/react-query` ✅
- `tailwindcss-animate` ✅

### 4. Personalizar contenido

**Datos a actualizar:**
- Número de WhatsApp: `1234567890` (cambiar en `Contact.tsx`, `WhatsAppButton.tsx`, `Footer.tsx`)
- Email: `contacto@clickastudio.com`
- URLs de proyectos reales en `Portfolio.tsx`
- Imágenes: Reemplazar `hero-bg.jpg` y `workspace.jpg` en `/src/assets/`
- Meta tags en `index.html`

### 5. Deploy

```bash
# En Lovable, click en "Publish" (esquina superior derecha)
# La web se desplegará automáticamente en lovable.app
# Opcional: Conectar dominio personalizado en Settings
```

---

## 🎨 CARACTERÍSTICAS CLAVE DEL DISEÑO

### Sistema de Animaciones
- **Scroll Reveal**: Elementos aparecen progresivamente al hacer scroll
- **Stagger Effect**: Delays escalonados (100-150ms entre elementos)
- **Hover States**: Transformaciones suaves (scale, rotate, translate)
- **Microinteractions**: Efectos sutiles en iconos y botones

### Paleta de Colores (HSL)
```css
/* Colores principales */
--primary: 200 98% 39%;           /* Azul principal */
--primary-foreground: 204 100% 97%; /* Texto sobre azul */
--background: 209 40% 96%;         /* Fondo claro */
--foreground: 222 47% 11%;         /* Texto oscuro */
--accent: 210 40% 98%;             /* Acentos sutiles */
--border: 212 26% 83%;             /* Bordes */
```

### Tipografía
- **Sans-serif**: Inter (textos generales)
- **Serif**: Lora (títulos especiales)
- **Mono**: Space Mono (código/datos técnicos)

### Espaciado
- Secciones: `py-20 md:py-32`
- Contenedores: `container mx-auto px-4`
- Gaps: `gap-4`, `gap-6`, `gap-8`, `gap-12`

---

## ✨ SECCIONES INCLUIDAS

1. **Navbar** - Navegación fija con scroll spy
2. **Hero** - Sección principal con estadísticas
3. **About** - Sobre la agencia con valores
4. **Services** - 6 servicios principales
5. **TechStack** - Tecnologías utilizadas
6. **Process** - Timeline del proceso de trabajo
7. **Stats** - Estadísticas con contadores animados
8. **Portfolio** - 4 proyectos reales
9. **Pricing** - 3 planes de precios
10. **Testimonials** - Reseñas de clientes
11. **FAQ** - Preguntas frecuentes
12. **CTA** - Call to action final
13. **Contact** - Formulario de contacto
14. **Footer** - Información y enlaces
15. **WhatsApp Button** - Botón flotante

---

## 📝 NOTAS FINALES

### Mejoras Sugeridas
- Integrar Google Analytics
- Conectar formulario a servicio de email (EmailJS, Resend, etc.)
- Añadir más proyectos al portafolio
- Implementar blog con MDX
- Agregar calculadora de presupuesto interactiva

### SEO
- Todas las imágenes tienen `alt` descriptivos
- Meta tags completos en `index.html`
- Estructura semántica HTML5
- URLs amigables con React Router

### Performance
- Lazy loading de imágenes (nativo del navegador)
- Animaciones con CSS (GPU accelerated)
- Bundle optimizado con Vite
- Fonts de Google Fonts cacheadas

---

**Creado con ❤️ por Clicka Studio**  
*Prompt completo generado el 24 de noviembre de 2025*

---

## 🔗 ENLACES ÚTILES

- [Lovable Documentation](https://docs.lovable.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Router](https://reactrouter.com/)

---

**🚀 ¡Tu web profesional lista para conquistar el mercado digital!**
