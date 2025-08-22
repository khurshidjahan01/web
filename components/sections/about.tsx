"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Brain, Cpu, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const researchAreas = [
    {
      icon: <Cpu className="h-8 w-8 text-teal-400" />,
      title: "Robotics & AI",
      description: "Advanced robotics systems and artificial intelligence applications"
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      title: "Healthcare AI",
      description: "Medical image analysis, diagnosis, and treatment optimization"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-400" />,
      title: "IoT Innovation",
      description: "Internet of Things solutions for smart cities and environments"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-purple-400" />,
      title: "ML Research",
      description: "Machine learning algorithms and deep learning architectures"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-1000">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Portrait */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="glass-card rounded-3xl p-2 glow-effect">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">AFD</span>
                  </div>
                </div>
              </div>
              
              {/* Floating decoration */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1] 
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
                className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-full flex items-center justify-center"
              >
                <Brain className="h-8 w-8 text-teal-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Bio */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                variants={itemVariants}
                className="font-space-grotesk font-bold text-4xl lg:text-5xl gradient-text"
              >
                About Me
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
              >
                <p>
                  I am a passionate <span className="neon-text font-semibold">Robotics & AI Researcher</span> dedicated to 
                  advancing the frontiers of artificial intelligence and robotics. With a strong foundation in 
                  computer science and engineering, I focus on creating innovative solutions that bridge the 
                  gap between cutting-edge research and real-world applications.
                </p>
                
                <p>
                  My research spans multiple domains including <strong>AI for Healthcare</strong>, <strong>IoT Innovation</strong>, 
                  <strong>Natural Language Processing for Legal Tech</strong>, and <strong>Environmental AI</strong>. 
                  I am particularly interested in developing intelligent systems that can make a meaningful 
                  impact on society and improve human lives.
                </p>
                
                <div className="flex items-center space-x-3 pt-4">
                  <GraduationCap className="h-6 w-6 text-teal-400" />
                  <span className="font-semibold">
                    B.Sc. in Computer Science & Engineering (Robotics & AI)<br />
                    North South University, Bangladesh
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Research Areas Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-4 rounded-xl hover:glow-effect transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {area.icon}
                    </motion.div>
                    <h3 className="font-semibold text-sm">{area.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;