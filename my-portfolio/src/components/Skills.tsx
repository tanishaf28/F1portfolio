import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'FRONTEND',
      icon: Layout,
      color: 'from-primary to-accent',
      skills: [
        { name: 'React/Next.js', power: 98 },
        { name: 'TypeScript', power: 90 },
        { name: 'Tailwind CSS', power: 85 },
        { name: 'Framer Motion', power: 90 },
      ],
    },
    {
      title: 'BACKEND',
      icon: Server,
      color: 'from-accent to-primary',
      skills: [
        { name: 'Node.js', power: 90 },
        { name: 'Python/Django', power: 90 },
        { name: 'GraphQL', power: 88 },
        { name: 'REST APIs', power: 97 },
      ],
    },
    {
      title: 'DATABASE',
      icon: Database,
      color: 'from-primary to-secondary',
      skills: [
        { name: 'PostgreSQL', power: 60 },
        { name: 'MongoDB', power: 70 },
        { name: 'Sql', power: 90 },
        { name: 'Oracle', power: 80 },
      ],
    },
    {
      title: 'DEVOPS',
      icon: Wrench,
      color: 'from-secondary to-primary',
      skills: [
        { name: 'Docker', power: 70 },
        { name: 'AWS', power: 90 },
        { name: 'CI/CD', power: 80 },
        { name: 'Kubernetes', power: 60 },
      ],
    },
    {
      title: 'MOBILE',
      icon: Smartphone,
      color: 'from-accent to-secondary',
      skills: [
        { name: 'React Native', power: 60 },
        { name: 'Flutter', power: 60 },
        { name: 'iOS/Android', power: 60 },
        { name: 'Progressive Web Apps', power: 60 },
      ],
    },
    {
      title: 'LANGUAGES',
      icon: Code,
      color: 'from-primary to-accent',
      skills: [
        { name: 'C/C++', power: 90 },
        { name: 'Python', power: 90 },
        { name: 'Go', power: 92 },
        { name: 'Java', power: 95 },
      ],
    },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden" id="skills">
      {/* Background racing lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-primary"
            style={{
              top: `${(i * 100) / 30}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-black text-primary mb-4 neon-glow">
            PERFORMANCE METRICS
          </h2>
          <p className="text-xl font-rajdhani text-muted-foreground">TECHNICAL SPECIFICATIONS • POWER UNITS</p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card border border-primary/40 rounded-lg p-6 hover:border-primary transition-all group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-primary">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-rajdhani text-foreground font-semibold">{skill.name}</span>
                      <span className="text-xs font-orbitron text-primary font-bold">{skill.power} HP</span>
                    </div>
                    
                    {/* Power Bar */}
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.power}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />
                      </motion.div>
                      
                      {/* RPM marks */}
                      <div className="absolute inset-0 flex justify-around items-center">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="w-px h-full bg-background/50" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status LED */}
              <div className="mt-4 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Performance Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-card border-2 border-primary rounded-lg p-6">
            <p className="font-rajdhani text-muted-foreground mb-2">OVERALL PERFORMANCE</p>
            <motion.div
              className="text-6xl font-orbitron font-black text-primary neon-glow"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              A+
            </motion.div>
            <div className="flex gap-1 mt-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-primary rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
