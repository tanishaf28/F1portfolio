import { motion } from 'framer-motion';
import { Instagram, Youtube, Camera, Video } from 'lucide-react';

export const Photography = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden" id="photography">
      {/* Cinematic background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-primary mb-4 neon-glow">
            CREATIVE GARAGE
          </h2>
          <p className="text-xl font-rajdhani text-muted-foreground">PHOTOGRAPHY • VIDEO • CREATIVE CHAOS</p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Instagram Photography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative bg-card border-2 border-primary/40 rounded-lg p-8 hover:border-primary transition-all overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Camera className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-orbitron font-bold text-primary">SNAP ELIXIR</h3>
                    <p className="font-rajdhani text-muted-foreground">Photography Portfolio</p>
                  </div>
                </div>

                <p className="font-rajdhani text-lg text-foreground mb-6">
                  Capturing moments through the lens. From street photography to creative compositions, 
                  exploring the world one snap at a time.
                </p>

                {/* Instagram CTA */}
                <motion.a
                  href="https://www.instagram.com/snap_elixir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block"
                >
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-orbitron font-bold text-lg rounded flex items-center justify-center gap-3 relative overflow-hidden group">
                    <Instagram className="w-6 h-6" />
                    VIEW INSTAGRAM
                    <motion.div
                      className="absolute inset-0 bg-accent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </motion.a>

                {/* LED indicators */}
                <div className="flex gap-2 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-primary rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* YouTube Channel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative bg-card border-2 border-primary/40 rounded-lg p-8 hover:border-primary transition-all overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-bl from-accent/20 to-transparent opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                    <Video className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-orbitron font-bold text-primary">YOUTUBE</h3>
                    <p className="font-rajdhani text-muted-foreground">Creative Chaos Channel</p>
                  </div>
                </div>

                <p className="font-rajdhani text-lg text-foreground mb-6">
                  Making creative chaos on YouTube. From tech tutorials to creative experiments, 
                  join the journey of learning and creating.
                </p>

                {/* YouTube CTA */}
                <motion.a
                  href="https://www.youtube.com/channel/UCupfpoB_Uu8H1FASH1VGr7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block"
                >
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-accent to-primary hover:opacity-90 text-primary-foreground font-orbitron font-bold text-lg rounded flex items-center justify-center gap-3 relative overflow-hidden group">
                    <Youtube className="w-6 h-6" />
                    WATCH CHANNEL
                    <motion.div
                      className="absolute inset-0 bg-primary"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </motion.a>

                {/* LED indicators */}
                <div className="flex gap-2 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-3 bg-accent rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};