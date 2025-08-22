"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/particle-background';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { 
      name: 'Google Scholar', 
      href: 'https://scholar.google.com', 
      icon: '🎓' 
    },
    { 
      name: 'ResearchGate', 
      href: 'https://researchgate.net', 
      icon: '📖' 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com', 
      icon: '💼' 
    },
    { 
      name: 'Email', 
      href: 'mailto:ahmed@example.com', 
      icon: '📧' 
    }
  ];

  const taglines = [
    "Robotics & AI Researcher",
    "IoT Innovator", 
    "Machine Learning Enthusiast"
  ];

  if (!mounted) return null;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 transition-colors duration-1000" />
      <ParticleBackground />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-space-grotesk font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight"
          >
            <span className="gradient-text">Ahmed Faizul</span>
            <br />
            <span className="text-slate-800 dark:text-slate-200">Haque Dhrubo</span>
          </motion.h1>

          {/* Animated Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-2"
          >
            {taglines.map((tagline, index) => (
              <motion.p
                key={tagline}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium"
              >
                {tagline}
              </motion.p>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Button 
              size="lg" 
              className="glass-card glow-effect hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Research
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Connect with Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Floating Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex justify-center space-x-6 mt-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="glass-card p-4 rounded-full glow-effect float-animation"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <span className="text-2xl">{link.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="h-6 w-6 text-slate-400 hover:text-teal-400 transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;