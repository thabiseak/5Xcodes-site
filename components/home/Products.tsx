'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  RocketLaunchIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const products = [
  {
    id: 'saas-tools',
    name: 'SaaS Tools',
    description: 'Comprehensive software-as-a-service solutions that scale with your business.',
    icon: RocketLaunchIcon,
    features: [
      'Multi-tenant Architecture',
      'Subscription Management',
      'API Integration',
      'Analytics Dashboard',
      'White-label Options',
      '24/7 Support'
    ],
    pricing: {
      starter: { price: '$99', period: '/month' },
      pro: { price: '$299', period: '/month' },
      enterprise: { price: 'Custom', period: '' }
    },
    color: 'from-blue-500 to-cyan-500',
    demo: 'https://demo.5xcodes.com/saas-tools'
  },
  {
    id: 'analytics',
    name: 'Analytics Platform',
    description: 'Advanced data analytics and business intelligence platform with real-time insights.',
    icon: ChartBarIcon,
    features: [
      'Real-time Data Processing',
      'Custom Dashboards',
      'Predictive Analytics',
      'Data Visualization',
      'Export Capabilities',
      'Team Collaboration'
    ],
    pricing: {
      starter: { price: '$149', period: '/month' },
      pro: { price: '$399', period: '/month' },
      enterprise: { price: 'Custom', period: '' }
    },
    color: 'from-purple-500 to-pink-500',
    demo: 'https://demo.5xcodes.com/analytics'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    description: 'Complete enterprise-grade solutions for large organizations with complex requirements.',
    icon: BuildingOfficeIcon,
    features: [
      'Custom Development',
      'Enterprise Security',
      'Scalable Infrastructure',
      'Dedicated Support',
      'Compliance & Governance',
      'Training & Onboarding'
    ],
    pricing: {
      starter: { price: '$999', period: '/month' },
      pro: { price: '$2,499', period: '/month' },
      enterprise: { price: 'Custom', period: '' }
    },
    color: 'from-green-500 to-emerald-500',
    demo: 'https://demo.5xcodes.com/enterprise'
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small teams and startups',
    features: [
      'Up to 5 users',
      'Basic analytics',
      'Email support',
      'Standard templates',
      'API access'
    ],
    color: 'from-gray-400 to-gray-500'
  },
  {
    name: 'Pro',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 users',
      'Advanced analytics',
      'Priority support',
      'Custom templates',
      'Full API access',
      'Team collaboration'
    ],
    color: 'from-electric-blue to-cyan-500',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Custom development',
      'White-label options',
      'On-premise deployment'
    ],
    color: 'from-neon-purple to-pink-500'
  }
];

export function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-deep-blue to-electric-blue bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative software products designed to solve complex business challenges 
            and drive digital transformation.
          </p>
        </motion.div>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedProduct === index
                  ? 'bg-gradient-to-r from-electric-blue to-neon-purple text-white shadow-neon'
                  : 'bg-white text-gray-600 hover:text-electric-blue border border-gray-200 hover:border-electric-blue'
              }`}
            >
              {product.name}
            </button>
          ))}
        </motion.div>

        {/* Product Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          >
            <div>
              <div className={`w-16 h-16 bg-gradient-to-br ${products[selectedProduct].color} rounded-2xl flex items-center justify-center mb-6`}>
                {React.createElement(products[selectedProduct].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {products[selectedProduct].name}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {products[selectedProduct].description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {products[selectedProduct].features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDemo(true)}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-xl shadow-neon hover:shadow-neon-lg transition-all duration-300"
                >
                  <PlayIcon className="w-5 h-5 mr-2" />
                  View Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-electric-blue transition-all duration-300"
                >
                  Learn More
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </motion.button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-glass">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    {pricingTiers.map((tier, index) => (
                      <div
                        key={tier.name}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                          tier.popular
                            ? 'border-electric-blue bg-electric-blue/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-gray-900">{tier.name}</h4>
                            <p className="text-sm text-gray-600">{tier.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              {products[selectedProduct].pricing[tier.name.toLowerCase() as keyof typeof products[0]['pricing']].price}
                            </div>
                            <div className="text-sm text-gray-600">
                              {products[selectedProduct].pricing[tier.name.toLowerCase() as keyof typeof products[0]['pricing']].period}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Demo Modal */}
        <AnimatePresence>
          {showDemo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
              onClick={() => setShowDemo(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {products[selectedProduct].name} Demo
                  </h3>
                  <button
                    onClick={() => setShowDemo(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="bg-gray-100 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-neon-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {React.createElement(products[selectedProduct].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Interactive Demo Coming Soon
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Experience the full power of {products[selectedProduct].name} with our interactive demo.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-xl shadow-neon"
                  >
                    Request Demo Access
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}