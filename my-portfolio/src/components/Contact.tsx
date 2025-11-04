import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/text-area';
import { useState } from 'react';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! I\'ll get back to you at race speed! 🏎️');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/tanishaf28', color: 'hover:text-primary' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://in.linkedin.com/in/tanisha-fonseca-0748a5193', color: 'hover:text-primary' },
    { icon: Mail, label: 'Email', href: 'mailto:tanisha.fonseca2807@gmail.com', color: 'hover:text-primary' },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden" id="contact">
      {/* Checkered flag pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(220,0,0,0.3) 20px, rgba(220,0,0,0.3) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(220,0,0,0.3) 20px, rgba(220,0,0,0.3) 40px)
          `,
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-primary mb-4 neon-glow">
            PIT STOP
          </h2>
          <p className="text-xl font-rajdhani text-muted-foreground">REFUEL • RECONNECT • RACE FORWARD</p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-card border-2 border-primary/40 rounded-lg p-8">
              <h3 className="text-3xl font-orbitron font-bold text-primary mb-6">
                LET'S CONNECT
              </h3>
              
              <p className="font-rajdhani text-lg text-foreground mb-8">
                Ready to build something extraordinary? Drop me a message and let's accelerate your project to the finish line.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 border border-primary rounded flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-rajdhani text-muted-foreground">EMAIL</p>
                    <a href="mailto:tanisha.fonseca2807@gmail.com" className="font-rajdhani font-semibold text-foreground hover:text-primary transition-colors">
                      tanisha.fonseca2807@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 border border-primary rounded flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-rajdhani text-muted-foreground">LOCATION</p>
                    <p className="font-rajdhani font-semibold text-foreground">Global • Remote</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <p className="text-sm font-rajdhani text-muted-foreground font-semibold">FOLLOW THE RACE</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-primary/10 border border-primary/50 rounded flex items-center justify-center transition-all ${social.color} hover:border-primary group`}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Racing LEDs */}
              <div className="flex gap-2 mt-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-primary rounded-full"
                    animate={{ 
                      opacity: [0.2, 1, 0.2],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card border-2 border-primary/40 rounded-lg p-8 space-y-6">
              <div>
                <label className="block text-sm font-rajdhani font-semibold text-muted-foreground mb-2">
                  DRIVER NAME
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-primary/50 focus:border-primary font-rajdhani"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-rajdhani font-semibold text-muted-foreground mb-2">
                  EMAIL FREQUENCY
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-primary/50 focus:border-primary font-rajdhani"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-rajdhani font-semibold text-muted-foreground mb-2">
                  RACE BRIEFING
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-primary/50 focus:border-primary font-rajdhani min-h-[150px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron font-bold text-lg py-6 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    LAUNCH MESSAGE
                    <Send className="w-5 h-5" />
                  </span>
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>

              {/* Status indicators */}
              <div className="flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
