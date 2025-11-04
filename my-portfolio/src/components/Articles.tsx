import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, TrendingUp } from 'lucide-react';

export const Articles = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden" id="articles">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(220,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220,0,0,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
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
            TECH INSIGHTS
          </h2>
          <p className="text-xl font-rajdhani text-muted-foreground">ARTICLES • RESEARCH • THOUGHTS</p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Scrolling headline ticker */}
        <motion.div
          className="mb-12 overflow-hidden bg-primary/10 border-y border-primary/30 py-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(3)].map((_, i) => (
              <span key={i} className="text-2xl font-orbitron font-bold text-primary inline-flex items-center gap-4">
                AI, ML & DL — because humans got bored of doing everything themselves
                <TrendingUp className="w-6 h-6" />
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Article Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border-2 border-primary/40 rounded-lg p-8 hover:border-primary transition-all group relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/20 border border-primary/50 rounded text-xs font-rajdhani text-primary font-bold">
                      FEATURED
                    </span>
                    <span className="text-sm font-rajdhani text-muted-foreground">Latest Article</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                    AI, ML & DL — because humans got bored of doing everything themselves
                  </h3>
                  <p className="font-rajdhani text-lg text-muted-foreground leading-relaxed">
                    Exploring the fascinating world of artificial intelligence, machine learning, and deep learning. 
                    A deep dive into how technology is reshaping our future.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://medium.com/@tanisha.fonseca2807"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <button className="w-full px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-orbitron font-bold rounded flex items-center justify-center gap-2 relative overflow-hidden group">
                    <span className="relative z-10">READ MORE</span>
                    <ExternalLink className="w-5 h-5 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-accent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </motion.a>
                
                <motion.a
                  href="https://medium.com/@tanisha.fonseca2807"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <button className="w-full px-6 py-4 bg-transparent hover:bg-primary/20 text-primary border-2 border-primary font-orbitron font-bold rounded">
                    VIEW ALL ARTICLES
                  </button>
                </motion.a>
              </div>

              {/* LED Status */}
              <div className="flex gap-2 mt-6">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};