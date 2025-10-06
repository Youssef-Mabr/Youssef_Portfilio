import React from 'react';
import { FolderGit2, Trophy, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    {
      icon: FolderGit2,
      value: '3+',
      label: 'Projects Completed',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Trophy,
      value: '2',
      label: 'Hackathons Participated',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      value: '2',
      label: 'Certifications Earned',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-8 text-center group hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
