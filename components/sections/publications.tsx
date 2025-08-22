"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ExternalLink, FileText, Star, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import publicationsData from '@/data/publications.json';

type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: string;
  link: string;
  pdf: string;
  doi: string;
  thumbnail: string;
  abstract: string;
  tags: string[];
  featured: boolean;
};

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const publications = publicationsData as Publication[];

  const filteredPublications = useMemo(() => {
    return publications.filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pub.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesType = selectedType === 'All' || pub.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  const types = ['All', 'Conference', 'Journal', 'Preprint'];

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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="publications" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-1000">
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
            Research & Publications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Exploring the frontiers of AI, robotics, and machine learning through rigorous research and innovation
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search publications, tags, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-card border-0 focus:glow-effect"
            />
          </div>
          
          <div className="flex gap-2">
            {types.map(type => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
                className={`glass-card ${selectedType === type ? 'glow-effect' : ''}`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {type}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPublications.map((publication) => (
              <motion.div
                key={publication.id}
                variants={cardVariants}
                layout
                className="relative group perspective-1000"
              >
                <motion.div
                  className={`relative w-full h-96 transform-style-preserve-3d transition-transform duration-700 ${
                    flippedCard === publication.id ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front of Card */}
                  <Card className="absolute inset-0 glass-card p-6 hover:glow-effect transition-all duration-300 backface-hidden">
                    {publication.featured && (
                      <div className="absolute -top-2 -right-2">
                        <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col h-full">
                      {/* Thumbnail */}
                      <div className="aspect-video bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                          <FileText className="w-12 h-12 text-slate-400" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {publication.type} • {publication.year}
                          </Badge>
                          <Calendar className="w-4 h-4 text-slate-400 mt-0.5" />
                        </div>

                        <h3 className="font-semibold text-lg leading-tight line-clamp-2">
                          {publication.title}
                        </h3>

                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">
                          {publication.authors.join(', ')}
                        </p>

                        <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                          {publication.venue}
                        </p>

                        <div className="flex flex-wrap gap-1">
                          {publication.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {publication.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{publication.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Flip Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setFlippedCard(publication.id)}
                        className="mt-4 w-full"
                      >
                        View Details
                      </Button>
                    </div>
                  </Card>

                  {/* Back of Card */}
                  <Card className="absolute inset-0 glass-card p-6 rotate-y-180 backface-hidden">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg line-clamp-2">
                          {publication.title}
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setFlippedCard(null)}
                          className="text-xs"
                        >
                          ✕
                        </Button>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="text-sm text-slate-600 dark:text-slate-400 line-clamp-6">
                          {publication.abstract}
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {publication.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex flex-col gap-2 pt-4">
                        {publication.link && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="glass-card hover:glow-effect"
                            onClick={() => window.open(publication.link, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Publication
                          </Button>
                        )}
                        {publication.pdf && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="glass-card hover:glow-effect"
                            onClick={() => window.open(publication.pdf, '_blank')}
                          >
                            <FileText className="w-4 h-4 mr-2" />
                            Download PDF
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPublications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-slate-500 dark:text-slate-400">
              No publications found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Publications;