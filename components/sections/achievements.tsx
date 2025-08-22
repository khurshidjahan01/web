"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, Medal, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const achievements = [
    {
      title: "Best Session Paper Award",
      event: "IPAS 2025",
      year: "2025",
      description: "Multi-Model AI-Driven Satellite Segmentation research recognized as the best paper in the session",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      type: "Research Excellence"
    },
    {
      title: "Outstanding Research Contribution",
      event: "IEEE Computer Society",
      year: "2024",
      description: "Recognized for significant contributions to AI and healthcare applications",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-blue-500",
      type: "Professional Recognition"
    },
    {
      title: "Top 1% Reviewer",
      event: "Multiple Conferences",
      year: "2024",
      description: "Consistently rated among top reviewers for quality and timeliness",
      icon: <Star className="w-8 h-8" />,
      color: "from-teal-500 to-green-500",
      type: "Peer Recognition"
    },
    {
      title: "Research Excellence Award",
      event: "North South University",
      year: "2024",
      description: "University-wide recognition for outstanding research achievements and publications",
      icon: <Medal className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      type: "Institutional Award"
    },
    {
      title: "Innovation in Healthcare AI",
      event: "National Science Foundation",
      year: "2023",
      description: "Recognition for innovative applications of AI in medical image analysis",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      type: "Innovation Award"
    },
    {
      title: "Best Mentor Award",
      event: "Computer Science Department",
      year: "2023",
      description: "Awarded for exceptional mentorship and guidance to undergraduate students",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      type: "Teaching Excellence"
    }
  ];

  const nextAchievement = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === achievements.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevAchievement = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? achievements.length - 1 : prevIndex - 1
    );
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-1000">
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
            Achievements & Awards
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Recognition for excellence in research, innovation, and academic contribution
          </p>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Carousel Container */}
          <div className="relative h-96 mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Card className="h-full glass-card p-8 glow-effect relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievements[currentIndex].color} opacity-5`} />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-center space-y-6">
                    {/* Icon */}
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity
                      }}
                      className={`p-6 rounded-full bg-gradient-to-br ${achievements[currentIndex].color} text-white shadow-2xl`}
                    >
                      {achievements[currentIndex].icon}
                    </motion.div>

                    {/* Award Type */}
                    <div className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium">
                      {achievements[currentIndex].type}
                    </div>

                    {/* Title */}
                    <h3 className="font-space-grotesk font-bold text-3xl gradient-text">
                      {achievements[currentIndex].title}
                    </h3>

                    {/* Event and Year */}
                    <div className="flex items-center space-x-4 text-lg text-slate-600 dark:text-slate-300">
                      <span className="font-semibold text-teal-600 dark:text-teal-400">
                        {achievements[currentIndex].event}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        {achievements[currentIndex].year}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                      {achievements[currentIndex].description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevAchievement}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card hover:glow-effect z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextAchievement}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card hover:glow-effect z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {achievements.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-teal-400 to-blue-500 scale-125' 
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* Achievement Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => setCurrentIndex(index)}
                className={`cursor-pointer glass-card p-4 rounded-xl transition-all duration-300 ${
                  index === currentIndex ? 'glow-effect ring-2 ring-teal-400' : 'hover:glow-effect'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${achievement.color} text-white flex-shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-200 truncate">
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {achievement.event} • {achievement.year}
                    </p>
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

export default Achievements;