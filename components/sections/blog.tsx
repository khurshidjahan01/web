"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Healthcare: Beyond Image Analysis",
      excerpt: "Exploring how artificial intelligence is revolutionizing healthcare beyond traditional computer vision applications, including predictive analytics and personalized medicine.",
      content: "Full article content here...",
      author: "Ahmed Faizul Haque Dhrubo",
      date: "2024-12-15",
      readTime: "8 min read",
      tags: ["AI", "Healthcare", "Machine Learning", "Future Tech"],
      slug: "future-ai-healthcare-beyond-image-analysis",
      featured: true
    },
    {
      id: 2,
      title: "Building Resilient IoT Systems: Lessons from Smart Cities",
      excerpt: "Key insights and best practices for developing IoT infrastructure that can withstand environmental challenges while maintaining connectivity and reliability.",
      content: "Full article content here...",
      author: "Ahmed Faizul Haque Dhrubo",
      date: "2024-11-28",
      readTime: "12 min read",
      tags: ["IoT", "Smart Cities", "Resilience", "Infrastructure"],
      slug: "building-resilient-iot-systems-smart-cities",
      featured: false
    },
    {
      id: 3,
      title: "Transformer Models in Medical Imaging: A Comprehensive Guide",
      excerpt: "A deep dive into how transformer architectures are being adapted and optimized for medical image analysis, with practical implementation examples.",
      content: "Full article content here...",
      author: "Ahmed Faizul Haque Dhrubo",
      date: "2024-11-10",
      readTime: "15 min read",
      tags: ["Transformers", "Medical Imaging", "Deep Learning", "Tutorial"],
      slug: "transformer-models-medical-imaging-guide",
      featured: false
    },
    {
      id: 4,
      title: "Ethical Considerations in AI Research: A Researcher's Perspective",
      excerpt: "Discussing the important ethical implications of AI research and how researchers can ensure their work contributes positively to society.",
      content: "Full article content here...",
      author: "Ahmed Faizul Haque Dhrubo",
      date: "2024-10-22",
      readTime: "10 min read",
      tags: ["AI Ethics", "Research", "Society", "Philosophy"],
      slug: "ethical-considerations-ai-research-perspective",
      featured: false
    },
    {
      id: 5,
      title: "From Research to Production: Deploying ML Models at Scale",
      excerpt: "Practical insights on transitioning machine learning models from research prototypes to production-ready systems that serve millions of users.",
      content: "Full article content here...",
      author: "Ahmed Faizul Haque Dhrubo",
      date: "2024-09-18",
      readTime: "14 min read",
      tags: ["MLOps", "Production", "Scaling", "Best Practices"],
      slug: "research-to-production-ml-models-scale",
      featured: false
    },
    {
      id: 6,
      title: "The Art of Scientific Writing: Tips for Research Papers",
      excerpt: "Essential guidelines and techniques for writing compelling research papers that effectively communicate complex ideas to the scientific community.",
      content: "Full article content here...",
      author: "Ahmed Faizul Haque Dhrubo",
      date: "2024-08-30",
      readTime: "7 min read",
      tags: ["Writing", "Research", "Academia", "Communication"],
      slug: "art-scientific-writing-research-papers",
      featured: false
    }
  ];

  const allTags = ['All', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
    <section id="blog" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-1000">
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
            Research Blog
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Insights, discoveries, and thoughts on the evolving landscape of AI, robotics, and technology
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass-card border-0 focus:glow-effect"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className={`glass-card ${selectedTag === tag ? 'glow-effect' : ''}`}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Featured Post */}
          {featuredPost && (searchTerm === '' || featuredPost.title.toLowerCase().includes(searchTerm.toLowerCase())) && (selectedTag === 'All' || featuredPost.tags.includes(selectedTag)) && (
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="relative">
                <Card className="glass-card p-8 hover:glow-effect transition-all duration-300 relative overflow-hidden">
                  {/* Featured Badge */}
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-gradient-to-r from-teal-400 to-blue-500 text-white">
                      Featured
                    </Badge>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {featuredPost.readTime}
                          </div>
                        </div>

                        <h3 className="font-space-grotesk font-bold text-2xl lg:text-3xl text-slate-800 dark:text-slate-200">
                          {featuredPost.title}
                        </h3>

                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                          {featuredPost.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {featuredPost.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button 
                        className="glass-card glow-effect hover:scale-105 transition-all duration-300"
                        onClick={() => {
                          // In a real implementation, this would navigate to the full article
                          console.log('Navigate to:', featuredPost.slug);
                        }}
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    {/* Placeholder for Featured Image */}
                    <div className="aspect-video bg-gradient-to-br from-teal-100 via-blue-100 to-purple-100 dark:from-teal-900/30 dark:via-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                          <ArrowRight className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Featured Article</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="cursor-pointer"
                onClick={() => {
                  // In a real implementation, this would navigate to the full article
                  console.log('Navigate to:', post.slug);
                }}
              >
                <Card className="glass-card p-6 h-full hover:glow-effect transition-all duration-300 flex flex-col">
                  {/* Article Header */}
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700">
                    <Button variant="ghost" size="sm" className="w-full justify-between group">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-slate-500 dark:text-slate-400">
                No articles found matching your criteria.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;