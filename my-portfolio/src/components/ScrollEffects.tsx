import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ScrollEffects = () => {
  const { scrollYProgress } = useScroll();
  const [tireMarks, setTireMarks] = useState<Array<{ id: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    let markId = 0;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Add tire marks on scroll
      if (scrollY > 0 && Math.random() > 0.95) {
        setTireMarks(prev => {
          const newMarks = [...prev, { 
            id: markId++, 
            y: scrollY + window.innerHeight / 2,
            opacity: 1 
          }];
          return newMarks.slice(-10); // Keep last 10 marks
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade out tire marks over time
  useEffect(() => {
    const interval = setInterval(() => {
      setTireMarks(prev => 
        prev.map(mark => ({ 
          ...mark, 
          opacity: Math.max(0, mark.opacity - 0.05) 
        })).filter(mark => mark.opacity > 0)
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Tire marks */}
      {tireMarks.map(mark => (
        <motion.div
          key={mark.id}
          className="fixed left-4 w-8 h-16 pointer-events-none z-30"
          style={{
            top: `${mark.y}px`,
            opacity: mark.opacity,
          }}
          initial={{ opacity: 1, scaleY: 0 }}
          animate={{ opacity: mark.opacity, scaleY: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Tire tread pattern */}
          <div className="w-full h-full bg-primary/20 rounded" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(220,0,0,0.3) 3px, rgba(220,0,0,0.3) 6px)',
          }} />
        </motion.div>
      ))}

      {/* Parallax sparks on scroll */}
      <motion.div
        className="fixed bottom-20 right-20 pointer-events-none z-30"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${i * 20}px`,
              top: `${i * 10}px`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              y: [0, -30, -60],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </>
  );
};