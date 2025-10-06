import React from 'react';
import { Smartphone, Globe, Server, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications built with Flutter and React Native for iOS and Android.',
      gradient: 'from-blue-500 to-cyan-500',
      technologies: ['Flutter', 'React Native', 'Firebase', 'REST APIs'],
    },
    {
      icon: Globe,
      title: 'Web App Development',
      description: 'Modern, responsive web applications using React, HTML, CSS, and JavaScript.',
      gradient: 'from-purple-500 to-pink-500',
      technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      description: 'Scalable backend solutions with Node.js and Firebase for authentication, databases, and cloud storage.',
      gradient: 'from-green-500 to-emerald-500',
      technologies: ['Node.js', 'Firebase', 'REST APIs', 'Cloud Functions'],
    },
    {
      icon: Wrench,
      title: 'Bug Fix & Optimization',
      description: 'Performance optimization, debugging, and maintenance for existing applications.',
      gradient: 'from-orange-500 to-red-500',
      technologies: ['Debugging', 'Performance', 'Code Review', 'Testing'],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group glass rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
