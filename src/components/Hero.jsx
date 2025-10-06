import React from 'react';
import { ArrowRight, Download, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import YoussefImage from '../images/Youssef_Profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-accent-600/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-sm font-medium text-primary-300">
                Software Engineering Student
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent animate-gradient">
                Youssef Mabrouk
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400"
            >
              Mobile & Web Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0"
            >
              I build cross-platform apps with <span className="text-primary-400 font-semibold">Flutter/React Native</span> and modern web experiences with <span className="text-accent-400 font-semibold">React & Firebase</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass glass-hover rounded-lg font-semibold"
              >
                Hire Me
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/youssef-mabrouk-279951271"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass glass-hover rounded-lg group"
              >
                <Linkedin className="w-6 h-6 text-primary-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/Youssef-Mabr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass glass-hover rounded-lg group"
              >
                <Github className="w-6 h-6 text-primary-400 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl blur-3xl opacity-30 animate-pulse-slow" />
              <div className="relative glass rounded-3xl p-8 border-2 border-primary-500/20">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src={YoussefImage}
                    alt="Youssef Mabrouk"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-500/20 rounded-full blur-3xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
