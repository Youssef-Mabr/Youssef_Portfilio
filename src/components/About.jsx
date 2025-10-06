import React from 'react';
import { Code2, Palette, Terminal, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      category: 'Languages',
      icon: Code2,
      items: ['Dart', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Frameworks',
      icon: Palette,
      items: ['Flutter', 'React Native', 'React', 'Node.js'],
    },
    {
      category: 'Backend & Cloud',
      icon: Database,
      items: ['Firebase Auth', 'Firestore', 'Cloud Storage', 'Real-time DB'],
    },
    {
      category: 'Tools',
      icon: Terminal,
      items: ['VS Code', 'IntelliJ IDEA', 'GitHub', 'Git'],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-400">Software Engineering Student</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm currently pursuing my degree in <span className="text-white font-semibold">Software Engineering</span> at <span className="text-white font-semibold">City University Malaysia</span>, set to graduate in <span className="text-primary-400 font-semibold">September 2026</span>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a motivated developer, I'm passionate about creating <span className="text-accent-400 font-semibold">user-friendly, scalable solutions</span> that make a real impact. My expertise spans across mobile and web development, where I combine creativity with technical skills to build exceptional digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building cross-platform mobile applications using <span className="text-primary-400 font-semibold">Flutter</span> and <span className="text-primary-400 font-semibold">React Native</span>, while also crafting modern, responsive web applications with <span className="text-accent-400 font-semibold">React</span>, complemented by robust backend solutions powered by <span className="text-accent-400 font-semibold">Firebase</span> and <span className="text-accent-400 font-semibold">Node.js</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass glass-hover rounded-xl p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg">
                    <skill.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h4 className="font-semibold text-lg">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-primary-500/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
