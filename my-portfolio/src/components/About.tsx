import { motion } from 'framer-motion';
import { User, Flag, Trophy, Zap } from 'lucide-react';
import carbonFiber from '@/assets/carbon-fiber.jpg';

export const About = () => {
  const stats = [
    { icon: Trophy, label: 'Projects Completed', value: '50+' },
    { icon: Zap, label: 'Cups of Coffee', value: '∞' },
    { icon: Flag, label: 'Favorite Circuit', value: 'Monaco' },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden" id="about">
      {/* Carbon Fiber Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${carbonFiber})`,
          backgroundSize: 'cover',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-primary mb-4 neon-glow">
            DRIVER PROFILE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Driver Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-card border-2 border-primary/50 rounded-lg p-8 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-transparent opacity-20" />
              
              {/* Driver info */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-orbitron font-bold text-primary">FONSECA</h3>
                    <p className="text-lg font-rajdhani text-muted-foreground">Driver #7</p>
                  </div>
                </div>

                <div className="space-y-4 font-rajdhani text-lg">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">TEAM</span>
                    <span className="text-primary font-bold">SCUDERIA TECH</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">NATIONALITY</span>
                    <span className="text-foreground font-semibold">Indian</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">SPECIALIZATION</span>
                    <span className="text-foreground font-semibold">Full Stack Development</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">RACING NUMBER</span>
                    <span className="text-primary font-black text-2xl">#7</span>
                  </div>
                </div>

                {/* LED indicators */}
                <div className="mt-6 flex gap-2">
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

          {/* Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card/50 border border-primary/30 rounded-lg p-6">
              <h4 className="text-2xl font-bold text-primary mb-4">BIO</h4>
              <p className="text-lg text-foreground leading-relaxed">
                I build experiences that blend code, design, and story.  
                As a developer, I love creating systems that actually <em>feel alive</em> fast, responsive, and a little dramatic.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                I'm currently pursuing my Master's in Computer Science, where I explore blockchain and work on building efficient decentralized applications.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Outside the code pit, I'm a panda who loves long naps 🐼,  
                doodles when inspiration hits, plays chess for strategy,  
                and chases sunsets through my camera lens.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4 font-semibold text-primary">
                If it's new tech, bold design, or something that breaks monotony  count me in.
              </p>
            </div>


            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card border border-primary/40 rounded-lg p-4 text-center hover:border-primary transition-colors group"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-orbitron font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-xs font-rajdhani text-muted-foreground uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
