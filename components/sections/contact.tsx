"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ExternalLink, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "ahmed.dhrubo@example.com",
      href: "mailto:ahmed.dhrubo@example.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: null,
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+880 XXX-XXXXXXX",
      href: "tel:+880XXXXXXXXX",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      name: "Google Scholar",
      icon: "🎓",
      href: "https://scholar.google.com",
      color: "from-blue-600 to-blue-400"
    },
    {
      name: "ResearchGate",
      icon: "📖",
      href: "https://researchgate.net",
      color: "from-teal-600 to-teal-400"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      color: "from-blue-700 to-blue-500"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      color: "from-gray-700 to-gray-500"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:ahmed.dhrubo@example.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
    <section id="contact" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-1000">
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
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Interested in collaboration, research opportunities, or just want to discuss AI and robotics? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <h3 className="font-space-grotesk font-bold text-2xl mb-4 text-slate-800 dark:text-slate-200">
                Send a Message
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="glass-card p-6 hover:glow-effect transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-0 focus:glow-effect"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-0 focus:glow-effect"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass-card border-0 focus:glow-effect"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="glass-card border-0 focus:glow-effect resize-none"
                    placeholder="Tell me about your project, collaboration idea, or question..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full glass-card glow-effect hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <h3 className="font-space-grotesk font-bold text-2xl mb-4 text-slate-800 dark:text-slate-200">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Reach out through any of these channels. I'm always excited to discuss new ideas and opportunities.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass-card p-4 rounded-xl hover:glow-effect transition-all duration-300"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center space-x-4 group"
                      target={info.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel={info.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          {info.label}
                        </p>
                        <p className="text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          {info.label}
                        </p>
                        <p className="text-slate-800 dark:text-slate-200">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200">
                Connect on Social
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-4 rounded-xl hover:glow-effect transition-all duration-300 text-center group"
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${social.color} text-white mb-2`}>
                      {typeof social.icon === 'string' ? (
                        <span className="text-xl">{social.icon}</span>
                      ) : (
                        social.icon
                      )}
                    </div>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {social.name}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 rounded-xl text-center hover:glow-effect transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Available for New Opportunities
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Currently open to research collaborations, consulting opportunities, 
                  and interesting projects. Let's build something amazing together!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-700"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-4">
            <p className="text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Ahmed Faizul Haque Dhrubo. All rights reserved.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500">
              Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;