import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/tanishaf28', label: 'GitHub' },
    { icon: Linkedin, href: 'https://in.linkedin.com/in/tanisha-fonseca-0748a5193', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/snap_elixir/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:tanisha.fonseca2807@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-12 px-4 border-t border-primary/30 overflow-hidden">
      {/* Animated checkered flag */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            repeating-conic-gradient(
              from 45deg,
              transparent 0deg 90deg,
              rgba(220, 0, 0, 0.3) 90deg 180deg
            )
          `,
          backgroundSize: '40px 40px',
        }}
        animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center">
          {/* Racing number */}
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-8xl font-orbitron font-black text-primary/20">7</div>
          </motion.div>

          {/* Name */}
          <h3 className="text-3xl font-orbitron font-bold text-primary mb-2">
            TANISHA FONSECA
          </h3>
          
          <p className="font-rajdhani text-muted-foreground mb-6">
            Full Stack Developer • Performance Engineer
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-card border-2 border-primary/50 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/20 transition-all group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />

          {/* Copyright */}
          <p className="font-rajdhani text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {new Date().getFullYear()} • Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.span>
            and
            <span className="text-primary font-semibold">Maximum Performance</span>
          </p>

          {/* LED indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
