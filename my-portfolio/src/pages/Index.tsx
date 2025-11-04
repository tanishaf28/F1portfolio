import { CustomCursor } from '@/components/CustomCursor';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Photography } from '@/components/Photography';
import { Articles } from '@/components/Articles';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Speedometer } from '@/components/Speedometer';
import { ScrollEffects } from '@/components/ScrollEffects';
import '@/components/ui/racer-headings.css';
const Index = () => {
  return (
     <div className="relative min-h-screen racer-scope">
      <CustomCursor />
      <ThemeToggle />
      <Speedometer />
      <ScrollEffects />
      <Hero />
      <About />
      <Projects />
      <Photography />
      <Articles />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
