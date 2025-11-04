import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ferrariHero from '@/assets/ferrari-f1-hero.jpg';

export const Hero = () => {
  const [showCar, setShowCar] = useState(false);

  useEffect(() => {
    setShowCar(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${ferrariHero})`,
          filter: 'brightness(0.4) contrast(1.2)',
        }}
      />
      
      {/* Speed lines effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              left: '100%',
            }}
            animate={{
              x: [0, -window.innerWidth - 300],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

     
      {/* Glowing Number 7 Background */}
      <motion.div
        className="absolute text-[30rem] font-bold text-primary/10 select-none"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          textShadow: '0 0 100px rgba(220, 0, 0, 0.5)',
        }}
      >
        7
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Driver Number */}
          <motion.div 
            className="inline-block mb-6 px-6 py-2 bg-primary/20 border-2 border-primary rounded"
            animate={{ boxShadow: ['0 0 10px rgba(220,0,0,0.5)', '0 0 30px rgba(220,0,0,0.8)', '0 0 10px rgba(220,0,0,0.5)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-4xl font-bold text-primary">#7</span>
          </motion.div>

          {/* Greeting */}
          <p className="text-2xl md:text-3xl font-light mb-4 text-foreground">
            Hey there 
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-8xl font-black mb-4 neon-glow text-primary tracking-wider">
            TANISHA FONSECA
          </h1>
          
          <h2 className="text-xl md:text-3xl font-semibold mb-6 text-muted-foreground">
            Full-Stack Developer | Computer Science Master's Student
          </h2>

          {/* Bio */}
          <motion.p
            className="text-lg md:text-xl font-light text-foreground/90 mb-4 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            When I'm not shipping code, you'll find me watching Formula 1, doodling ideas that escape logic,  
            or filming one of my spontaneous YouTube rants.
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="text-2xl md:text-3xl font-bold text-primary mb-8 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            #7 on the grid. Fueled by coffee, curiosity, and chaos.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded border-2 border-primary relative overflow-hidden group"
              >
                <span className="relative z-10">VIEW PROJECTS</span>
                <motion.div
                  className="absolute inset-0 bg-accent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </a>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent hover:bg-primary/20 text-primary font-bold text-lg rounded border-2 border-primary"
              >
                CONTACT ME
              </motion.button>
            </a>
          </motion.div>

          {/* Racing Stripes */}
          <div className="mt-8 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-16 bg-gradient-to-b from-primary to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};