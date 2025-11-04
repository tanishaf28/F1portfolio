import { motion, useScroll, useTransform } from 'framer-motion';
import { Gauge } from 'lucide-react';

export const Speedometer = () => {
  const { scrollYProgress } = useScroll();
  const rpm = useTransform(scrollYProgress, [0, 1], [0, 9000]);
  const rotation = useTransform(scrollYProgress, [0, 1], [-90, 90]);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="relative w-32 h-32 bg-card/90 backdrop-blur-sm border-2 border-primary/50 rounded-full flex items-center justify-center group hover:border-primary transition-all">
        {/* Background gauge marks */}
        <div className="absolute inset-0">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-3 bg-primary/30 origin-bottom"
              style={{
                left: '50%',
                bottom: '50%',
                transform: `translateX(-50%) rotate(${-90 + i * 20}deg) translateY(-50px)`,
              }}
            />
          ))}
        </div>

        {/* Needle */}
        <motion.div
          className="absolute w-1 h-12 bg-primary origin-bottom"
          style={{
            left: '50%',
            bottom: '50%',
            rotate: rotation,
            transformOrigin: 'bottom center',
          }}
        >
          <div className="absolute -top-2 -left-1 w-3 h-3 bg-accent rounded-full" />
        </motion.div>

        {/* Center */}
        <div className="relative z-10 text-center">
          <Gauge className="w-6 h-6 text-primary mx-auto mb-1" />
          <motion.div className="text-lg font-orbitron font-black text-primary">
            {rpm.get().toFixed(0)}
          </motion.div>
          <div className="text-[8px] font-rajdhani text-muted-foreground font-semibold">
            PORTFOLIO RPM
          </div>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* LED indicators */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};