import React from 'react';
import { ExternalLink, Github, Shield, Heart, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'WorkSafe',
      icon: Shield,
      description: 'A comprehensive safety application designed for women, featuring real-time location sharing, emergency alerts, and safety network connections.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Real-time DB'],
      gradient: 'from-red-500 to-pink-500',
      status: 'Live',
      features: ['Real-time Location', 'Emergency Alerts', 'Safety Network', 'Instant Notifications'],
    },
    {
      title: 'HealthConnect',
      icon: Heart,
      description: 'Healthcare platform enabling appointment booking, doctor consultations via chat, medical document uploads, and nearby clinic discovery.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Cloud Storage'],
      gradient: 'from-blue-500 to-cyan-500',
      status: 'Live',
      features: ['Appointment Booking', 'Doctor Chat', 'Document Upload', 'Clinic Finder'],
    },
     {
      title: 'Formal',
      icon: Calendar,
      description: 'Event planning and scheduling application designed to streamline event management and coordination (Currently in development).',
      technologies: ['Flutter', 'Firebase', 'Cloud Functions'],
      gradient: 'from-purple-500 to-indigo-500',
      status: 'In Progress',
      features: ['Event Planning', 'Smart Scheduling', 'Team Collaboration', 'Reminders'],
    },
   
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Real-world applications solving real problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <project.icon className="w-24 h-24 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Live' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-gray-900'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        <span className="text-xs text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
