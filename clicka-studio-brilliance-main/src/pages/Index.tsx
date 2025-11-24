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
