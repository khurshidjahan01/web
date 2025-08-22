"use client";

import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Database, 
  Cpu, 
  Zap, 
  Globe, 
  Camera, 
  BarChart3,
  GitBranch,
  Cloud,
  Shield,
  Smartphone
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Artificial Intelligence",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Computer Vision", "NLP"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "JavaScript", "C++", "Java", "R", "MATLAB"]
    },
    {
      title: "Data & Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"]
    },
    {
      title: "Robotics & IoT",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      skills: ["ROS", "Arduino", "Raspberry Pi", "Sensors", "Actuators", "Embedded Systems"]
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      skills: ["AWS", "Docker", "Kubernetes", "MLOps", "CI/CD", "Monitoring"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-blue-500",
      skills: ["React", "Next.js", "Node.js", "FastAPI", "REST APIs", "GraphQL"]
    },
    {
      title: "Computer Vision",
      icon: <Camera className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      skills: ["OpenCV", "Image Processing", "Object Detection", "Segmentation", "Medical Imaging"]
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="w-8 h-8" />,
      color: "from-gray-500 to-slate-500",
      skills: ["Git", "Jupyter", "VS Code", "Linux", "Bash", "Docker"]
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-1000">
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
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI, robotics, software engineering, and research methodologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Card */}
              <div className="glass-card p-6 rounded-2xl h-full hover:glow-effect transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                  >
                    {category.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-space-grotesk font-bold text-lg text-slate-800 dark:text-slate-200">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.1) + (skillIndex * 0.05)
                        }}
                        className="flex items-center space-x-2"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: (index * 0.2) + (skillIndex * 0.1)
                          }}
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Particles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  whileHover={{
                    background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 245, 212, 0.1) 0%, transparent 50%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Proficiency Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="font-space-grotesk font-bold text-2xl mb-6 gradient-text">
              Technical Proficiency
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-left">Research & Development</h4>
                <div className="space-y-3">
                  {[
                    { skill: "Machine Learning", level: 95 },
                    { skill: "Computer Vision", level: 90 },
                    { skill: "Research Writing", level: 95 },
                    { skill: "Data Analysis", level: 92 }
                  ].map((item, index) => (
                    <div key={item.skill}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.skill}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-left">Software Engineering</h4>
                <div className="space-y-3">
                  {[
                    { skill: "Python Development", level: 95 },
                    { skill: "Web Technologies", level: 88 },
                    { skill: "Cloud Deployment", level: 85 },
                    { skill: "System Design", level: 90 }
                  ].map((item, index) => (
                    <div key={item.skill}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.skill}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;