'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  RocketLaunchIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  StarIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

export function ProductsShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      id: 1,
      name: 'DataFlow Pro',
      category: 'Analytics Platform',
      description: 'Advanced analytics and business intelligence platform with real-time data processing and AI-powered insights.',
      icon: ChartBarIcon,
      color: 'from-blue-400 to-cyan-500',
      features: ['Real-time Analytics', 'AI Insights', 'Custom Dashboards', 'API Integration'],
      rating: 4.9,
      users: '10K+',
      price: '$99/month',
      image: '/api/placeholder/600/400',
      popular: true
    },
    {
      id: 2,
      name: 'CloudScale Enterprise',
      category: 'Cloud Management',
      description: 'Comprehensive cloud infrastructure management platform with automated scaling and cost optimization.',
      icon: BuildingOfficeIcon,
      color: 'from-green-400 to-emerald-500',
      features: ['Auto Scaling', 'Cost Optimization', 'Multi-Cloud', 'Security Monitoring'],
      rating: 4.8,
      users: '5K+',
      price: '$299/month',
      image: '/api/placeholder/600/400',
      popular: false
    },
    {
      id: 3,
      name: 'LaunchPad SaaS',
      category: 'Development Platform',
      description: 'Complete SaaS development platform with built-in authentication, payments, and deployment tools.',
      icon: RocketLaunchIcon,
      color: 'from-purple-400 to-violet-500',
      features: ['Rapid Development', 'Built-in Auth', 'Payment Processing', 'One-Click Deploy'],
      rating: 4.9,
      users: '15K+',
      price: '$199/month',
      image: '/api/placeholder/600/400',
      popular: true
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
            Featured
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our flagship products that are transforming businesses worldwide. 
            Built with cutting-edge technology and designed for scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group bg-white rounded-3xl overflow-hidden shadow-glass hover:shadow-glass-lg border border-white/20 transition-all duration-300 relative ${product.popular ? 'ring-2 ring-electric-blue' : ''}`}
            >
              {product.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Product Image */}
              <div className={`h-48 bg-gradient-to-br ${product.color} p-6 flex items-center justify-center`}>
                <product.icon className="w-16 h-16 text-white" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckIcon className="w-4 h-4 text-electric-blue mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{product.users}</div>
                    <div className="text-sm text-gray-500">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-electric-blue">{product.price}</div>
                    <div className="text-sm text-gray-500">Starting Price</div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Try Free Demo
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products CTA */}
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
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
