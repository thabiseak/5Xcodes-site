'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

export function BlogSearch() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Articles', count: 24 },
    { id: 'development', label: 'Development', count: 12 },
    { id: 'technology', label: 'Technology', count: 8 },
    { id: 'industry', label: 'Industry', count: 6 },
    { id: 'tutorials', label: 'Tutorials', count: 10 },
  ];

  const tags = [
    'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'AWS', 'Docker', 'Kubernetes'
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Find Your
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Perfect Article
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search through our extensive library of articles and tutorials to find exactly what you need.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-glass border border-white/20 mb-8"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles, topics, or technologies..."
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
              <FunnelIcon className="w-5 h-5 mr-2" />
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-electric-blue to-neon-purple text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-electric-blue/10 hover:text-electric-blue'
                  }`}
                >
                  {category.label}
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 text-electric-blue text-sm font-semibold rounded-full hover:from-electric-blue/20 hover:to-neon-purple/20 transition-all duration-300"
                >
                  #{tag}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Search Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 rounded-2xl p-6 border border-white/20 inline-block">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-electric-blue">
                {categories.find(c => c.id === selectedCategory)?.count || 0} articles
              </span> in{' '}
              <span className="font-semibold text-gray-900">
                {categories.find(c => c.id === selectedCategory)?.label || 'All Articles'}
              </span>
              {searchTerm && (
                <span> matching "<span className="font-semibold text-gray-900">{searchTerm}</span>"</span>
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
