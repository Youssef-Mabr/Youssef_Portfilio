import React from 'react';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-gray-900/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
              Youssef Mabrouk
            </h3>
            <p className="text-gray-400 mb-4">
              Software Engineering student passionate about building innovative mobile and web applications.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/youssef-mabrouk-279951271"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass glass-hover rounded-lg group"
              >
                <Linkedin className="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/Youssef-Mabr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass glass-hover rounded-lg group"
              >
                <Github className="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:asrarhakaik@gmail.com"
                className="p-3 glass glass-hover rounded-lg group"
              >
                <Mail className="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Education</h4>
            <div className="glass rounded-lg p-4">
              <p className="font-semibold text-primary-400">Software Engineering</p>
              <p className="text-sm text-gray-400 mt-1">City University Malaysia</p>
              <p className="text-xs text-gray-500 mt-2">Expected Graduation: September 2026</p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Youssef Mabrouk © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
