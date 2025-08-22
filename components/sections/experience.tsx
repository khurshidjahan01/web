"use client";

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const experiences = [
    {
      title: "Senior Research Associate",
      organization: "AI Research Lab",
      location: "North South University",
      period: "2024 - Present",
      description: "Leading research initiatives in robotics and AI applications for healthcare and smart cities.",
      highlights: [
        "Published 15+ peer-reviewed papers in top-tier conferences",
        "Led a team of 8 researchers on multi-disciplinary projects",
        "Secured $200K in research funding for IoT resilience projects",
        "Collaborated with international research institutions"
      ],
      type: "research"
    },
    {
      title: "AI/ML Engineer",
      organization: "TechCorp Solutions",
      location: "Dhaka, Bangladesh",
      period: "2023 - 2024",
      description: "Developed and deployed machine learning models for healthcare and automotive industries.",
      highlights: [
        "Built CarKoto: AI system for used car price prediction",
        "Developed MedDose: IoT-based medication compliance system",
        "Achieved 95%+ accuracy in medical image classification models",
        "Optimized ML pipelines reducing inference time by 60%"
      ],
      type: "industry"
    },
    {
      title: "Research Assistant",
      organization: "Computer Vision Lab",
      location: "North South University",
      period: "2022 - 2023",
      description: "Focused on computer vision applications in medical imaging and satellite analysis.",
      highlights: [
        "Developed CerevianNet for brain tumor classification",
        "Created multi-model fusion systems for chest X-ray analysis",
        "Won Best Session Paper award at IPAS 2025",
        "Mentored 20+ undergraduate students on research projects"
      ],
      type: "research"
    },
    {
      title: "Software Engineering Intern",
      organization: "Digital Health Innovations",
      location: "Dhaka, Bangladesh",
      period: "2021 - 2022",
      description: "Worked on healthcare technology solutions and mobile application development.",
      highlights: [
        "Developed mobile health apps serving 10K+ users",
        "Implemented real-time data processing for patient monitoring",
        "Created automated testing frameworks improving code quality",
        "Contributed to open-source healthcare software projects"
      ],
      type: "industry"
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
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-1000">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-space-grotesk font-bold text-4xl lg:text-5xl gradient-text mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A journey through research excellence and industry innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 via-blue-500 to-purple-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full glass-card flex items-center justify-center ${
                    exp.type === 'research' ? 'glow-effect' : 'pulse-glow'
                  }`}
                >
                  <Briefcase className={`w-8 h-8 ${
                    exp.type === 'research' ? 'text-teal-400' : 'text-blue-400'
                  }`} />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1"
                >
                  <Card className="glass-card p-6 hover:glow-effect transition-all duration-300">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <h3 className="font-space-grotesk font-bold text-xl text-slate-800 dark:text-slate-200">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                          <span className="font-medium text-teal-600 dark:text-teal-400">
                            {exp.organization}
                          </span>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300">
                        {exp.description}
                      </p>

                      {/* Expandable Highlights */}
                      <div className="space-y-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                          className="flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                        >
                          Key Achievements
                          {expandedItem === index ? (
                            <ChevronUp className="w-4 h-4 ml-1" />
                          ) : (
                            <ChevronDown className="w-4 h-4 ml-1" />
                          )}
                        </Button>

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: expandedItem === index ? 'auto' : 0,
                            opacity: expandedItem === index ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-2 pl-4">
                            {exp.highlights.map((highlight, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-sm text-slate-600 dark:text-slate-300 flex items-start"
                              >
                                <span className="text-teal-400 mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;