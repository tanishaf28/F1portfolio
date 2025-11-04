import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    let trailId = 0;
    
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add tire track trail
      setTrails(prev => {
        const newTrails = [...prev, { id: trailId++, x: e.clientX, y: e.clientY }];
        return newTrails.slice(-15); // Keep last 15 trails
      });
    };

    document.addEventListener('mousemove', updateCursor);
    document.body.classList.add('racing-cursor');

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.body.classList.remove('racing-cursor');
    };
  }, []);

  return (
    <>
      {/* Trail effects */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed w-2 h-2 bg-primary rounded-full pointer-events-none z-50"
          style={{
            left: trail.x,
            top: trail.y,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.5 }}
        />
      ))}
      
      {/* Main cursor */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x - 12,
          top: position.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-primary/30 rounded-full animate-pulseGlow" />
      </motion.div>
    </>
  );
};
