import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      // Dark theme (night mode - matte black & deep red)
      root.style.setProperty('--background', '0 0% 8%');
      root.style.setProperty('--foreground', '0 0% 98%');
      root.style.setProperty('--card', '0 0% 12%');
      root.style.setProperty('--primary', '0 100% 43%');
      root.style.setProperty('--accent', '0 100% 50%');
    } else {
      // Light theme (day mode - glossy red & silver)
      root.style.setProperty('--background', '0 0% 95%');
      root.style.setProperty('--foreground', '0 0% 10%');
      root.style.setProperty('--card', '0 0% 98%');
      root.style.setProperty('--primary', '0 85% 50%');
      root.style.setProperty('--accent', '0 90% 45%');
    }
  }, [isDark]);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 z-50 w-14 h-14 bg-card border-2 border-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
        ) : (
          <Sun className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 blur-xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
};