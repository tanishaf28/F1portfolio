import { motion } from 'framer-motion';
import { Activity, Gauge, Zap, TrendingUp } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'ML Sleep Apnea Predictor',
      type: 'MACHINE LEARNING',
      speed: 96,
      performance: 94,
      reliability: 97,
      description: 'Machine learning model to predict sleep apnea using advanced algorithms and data analysis',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
      link: 'https://github.com/tanishaf28/ML',
    },
    {
      title: 'Food Supply Chain',
      type: 'BLOCKCHAIN',
      speed: 95,
      performance: 93,
      reliability: 98,
      description: 'Blockchain-based food supply chain management system using Hyperledger and Java',
      tech: ['Hyperledger', 'Java', 'Blockchain', 'Smart Contracts'],
      link: 'https://medium.com/@tanisha.fonseca2807/ai-ml-and-dl-because-humans-got-bored-of-doing-everything-themselves-f9b4f572e766',
    },
  ];

  return (
    <section className="relative py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-primary mb-4 neon-glow">
            RACE STATS
          </h2>
          <p className="text-xl font-rajdhani text-muted-foreground">TELEMETRY DATA • PROJECT PERFORMANCE</p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-card border-2 border-primary/40 rounded-lg p-6 hover:border-primary transition-all duration-300 relative overflow-hidden">
                {/* Background grid pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(rgba(220,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220,0,0,0.3) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }} />
                </div>

                {/* Header */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-5 h-5 text-primary animate-pulse" />
                        <span className="text-xs font-rajdhani text-primary font-bold">{project.type}</span>
                      </div>
                      <h3 className="text-2xl font-orbitron font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 bg-primary/20 border border-primary rounded flex items-center justify-center">
                      <Gauge className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <p className="font-rajdhani text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  {/* Performance Gauges */}
                  <div className="space-y-3 mb-6">
                    <PerformanceBar label="SPEED" value={project.speed} icon={Zap} />
                    <PerformanceBar label="PERFORMANCE" value={project.performance} icon={TrendingUp} />
                    <PerformanceBar label="RELIABILITY" value={project.reliability} icon={Activity} />
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-rajdhani text-primary font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 block"
                  >
                    <button className="w-full px-4 py-3 bg-primary/20 hover:bg-primary border border-primary hover:text-primary-foreground font-orbitron font-bold rounded transition-all">
                      VIEW PROJECT
                    </button>
                  </motion.a>

                  {/* LED Status Indicators */}
                  <div className="flex gap-2 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PerformanceBar = ({ label, value, icon: Icon }: { label: string; value: number; icon: any }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-primary" />
          <span className="text-xs font-rajdhani text-muted-foreground font-semibold">{label}</span>
        </div>
        <span className="text-sm font-orbitron font-bold text-primary">{value}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
