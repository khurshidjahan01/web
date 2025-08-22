"use client";

import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, BookOpen, Target, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Mentorship = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "200+",
      label: "Students Mentored",
      description: "Undergraduate and graduate students guided through research projects",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "60+",
      label: "Thesis Projects",
      description: "Supervised thesis and capstone projects across multiple domains",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Award Winners",
      description: "Students who won awards under mentorship and guidance",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      number: "95%",
      label: "Success Rate",
      description: "Students successfully completing their research projects",
      color: "from-orange-500 to-red-500"
    }
  ];

  const mentorshipAreas = [
    {
      title: "Research Methodology",
      description: "Guiding students through the research process, from problem identification to publication",
      topics: ["Literature Review", "Experimental Design", "Data Collection", "Statistical Analysis"]
    },
    {
      title: "Technical Skills Development",
      description: "Hands-on training in cutting-edge technologies and programming",
      topics: ["Machine Learning", "Deep Learning", "Computer Vision", "IoT Development"]
    },
    {
      title: "Academic Writing & Publication",
      description: "Supporting students in writing and publishing their research work",
      topics: ["Paper Writing", "Conference Presentations", "Peer Review", "Citation Management"]
    },
    {
      title: "Career Development",
      description: "Preparing students for successful careers in academia and industry",
      topics: ["Career Planning", "Industry Connections", "Interview Preparation", "Portfolio Development"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "PhD Student, MIT",
      quote: "Dr. Dhrubo's mentorship was transformative. His guidance helped me secure admission to MIT and shaped my research approach.",
      project: "Medical Image Analysis"
    },
    {
      name: "Md. Karim Rahman",
      role: "Software Engineer, Google",
      quote: "The research experience under his supervision gave me the confidence to tackle complex problems in industry.",
      project: "IoT Systems"
    },
    {
      name: "Fatima Khan",
      role: "Research Scientist, Meta",
      quote: "His emphasis on rigorous methodology and innovation prepared me for a successful career in AI research.",
      project: "Computer Vision"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="mentorship" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-1000">
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
            Mentorship & Teaching
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Empowering the next generation of researchers and innovators through dedicated mentorship and guidance
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <Card className="glass-card p-6 text-center hover:glow-effect transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative space-y-4">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className={`inline-flex p-3 rounded-full bg-gradient-to-br ${stat.color} text-white mx-auto`}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="font-space-grotesk font-bold text-3xl gradient-text"
                  >
                    {stat.number}
                  </motion.div>
                  
                  <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mentorship Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="font-space-grotesk font-bold text-3xl text-center mb-12 gradient-text"
          >
            Mentorship Focus Areas
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mentorshipAreas.map((area, index) => (
              <motion.div
                key={area.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 rounded-xl hover:glow-effect transition-all duration-300"
              >
                <h4 className="font-semibold text-xl mb-3 text-slate-800 dark:text-slate-200">
                  {area.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.topics.map((topic, topicIndex) => (
                    <motion.span
                      key={topic}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: topicIndex * 0.1 }}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm rounded-full"
                    >
                      {topic}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            variants={itemVariants}
            className="font-space-grotesk font-bold text-3xl text-center mb-12 gradient-text"
          >
            Student Success Stories
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl hover:glow-effect transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="text-4xl text-teal-400 font-bold">"</div>
                  <p className="text-slate-600 dark:text-slate-300 italic">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-teal-600 dark:text-teal-400">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Project: {testimonial.project}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mentorship;