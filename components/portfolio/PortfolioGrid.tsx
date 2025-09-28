'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRightIcon,
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export function PortfolioGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      client: 'RetailTech Solutions',
      description: 'Scalable e-commerce platform with AI-powered recommendations and real-time inventory management.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      duration: '6 months',
      rating: 4.9,
      results: ['300% increase in conversion', '99.9% uptime', '50% cost reduction'],
      featured: true
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      client: 'FinanceCorp',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Docker'],
      duration: '8 months',
      rating: 4.8,
      results: ['1M+ downloads', '4.8 App Store rating', '99.99% security score'],
      featured: false
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      category: 'ai',
      client: 'DataInsights Inc',
      description: 'Advanced analytics platform with machine learning capabilities and predictive insights.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'React', 'Kubernetes'],
      duration: '10 months',
      rating: 4.9,
      results: ['80% faster insights', '95% accuracy', 'Real-time processing'],
      featured: true
    },
    {
      id: 4,
      title: 'Enterprise CRM',
      category: 'enterprise',
      client: 'TechStart Inc',
      description: 'Comprehensive CRM system with automated workflows and advanced reporting capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      duration: '12 months',
      rating: 4.7,
      results: ['200% lead conversion', '60% time savings', '40% efficiency gain'],
      featured: false
    },
    {
      id: 5,
      title: 'SaaS Development Platform',
      category: 'web',
      client: 'DevTools Co',
      description: 'Complete SaaS development platform with built-in authentication and deployment tools.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
      duration: '9 months',
      rating: 4.9,
      results: ['50% faster development', '10K+ developers', '99.9% uptime'],
      featured: true
    },
    {
      id: 6,
      title: 'IoT Monitoring System',
      category: 'enterprise',
      client: 'IndustrialTech',
      description: 'Real-time IoT monitoring system with predictive maintenance and alert systems.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'InfluxDB', 'MQTT'],
      duration: '7 months',
      rating: 4.8,
      results: ['30% maintenance reduction', 'Real-time monitoring', 'Predictive alerts'],
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group bg-white rounded-3xl overflow-hidden shadow-glass hover:shadow-glass-lg border border-white/20 transition-all duration-300 relative ${
                item.featured ? 'ring-2 ring-electric-blue' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-neon-purple/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <EyeIcon className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm ml-1">{item.rating}</span>
                    </div>
                    <div className="flex items-center text-white text-sm">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {item.duration}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.client}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-electric-blue transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 text-electric-blue text-xs font-semibold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">Key Results:</h4>
                  <div className="space-y-1">
                    {item.results.slice(0, 2).map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full mr-2" />
                        <span className="text-xs text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-electric-blue to-neon-purple text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    View Case Study
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/80 backdrop-blur-sm text-electric-blue font-semibold rounded-2xl border-2 border-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300"
          >
            Load More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
