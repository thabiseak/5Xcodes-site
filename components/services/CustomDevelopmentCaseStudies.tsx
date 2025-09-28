'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BuildingOfficeIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export function CustomDevelopmentCaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      company: 'RetailTech Solutions',
      industry: 'E-Commerce',
      icon: ShoppingCartIcon,
      challenge: 'Needed a scalable e-commerce platform to handle 10x traffic growth during peak seasons.',
      solution: 'Built a custom platform with microservices architecture, real-time inventory management, and AI-powered recommendations.',
      results: [
        '300% increase in conversion rate',
        '99.9% uptime during peak traffic',
        '50% reduction in cart abandonment'
      ],
      image: '/api/placeholder/600/400',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 2,
      title: 'Enterprise Dashboard',
      company: 'FinanceCorp',
      industry: 'Financial Services',
      icon: ChartBarIcon,
      challenge: 'Required a comprehensive dashboard to visualize complex financial data and analytics.',
      solution: 'Developed a real-time dashboard with interactive charts, automated reporting, and secure data integration.',
      results: [
        '80% faster decision making',
        'Real-time data visualization',
        '50% reduction in manual reporting'
      ],
      image: '/api/placeholder/600/400',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 3,
      title: 'CRM System',
      company: 'TechStart Inc',
      industry: 'Technology',
      icon: BuildingOfficeIcon,
      challenge: 'Needed a custom CRM system to manage complex sales processes and customer relationships.',
      solution: 'Created a comprehensive CRM with automated workflows, lead scoring, and integration with existing tools.',
      results: [
        '200% increase in lead conversion',
        '60% reduction in manual data entry',
        '40% improvement in sales efficiency'
      ],
      image: '/api/placeholder/600/400',
      color: 'from-purple-400 to-violet-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses transform their operations with custom software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-glass hover:shadow-glass-lg border border-white/20 transition-all duration-300"
            >
              {/* Header */}
              <div className={`h-48 bg-gradient-to-br ${study.color} p-6 flex items-center justify-center`}>
                <study.icon className="w-16 h-16 text-white" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {study.industry}
                  </span>
                  <span className="text-sm text-gray-500">{study.company}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {study.title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Results:</h4>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full mr-3" />
                        <span className="text-sm text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  View Case Study
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution that drives your business forward.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
