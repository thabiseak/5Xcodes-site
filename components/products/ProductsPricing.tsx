'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckIcon,
  XMarkIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export function ProductsPricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Email support',
        '5GB storage',
        'Standard templates'
      ],
      limitations: [
        'No API access',
        'Limited integrations',
        'Basic reporting'
      ],
      color: 'from-gray-400 to-gray-500',
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        '50GB storage',
        'Custom templates',
        'API access',
        'Advanced integrations',
        'Custom reporting'
      ],
      limitations: [],
      color: 'from-electric-blue to-neon-purple',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Enterprise analytics',
        '24/7 phone support',
        'Unlimited storage',
        'White-label options',
        'Full API access',
        'All integrations',
        'Custom dashboards',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      limitations: [],
      color: 'from-purple-400 to-violet-500',
      popular: false
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core features 
            with no hidden fees or setup costs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group bg-white rounded-3xl p-8 shadow-glass hover:shadow-glass-lg border transition-all duration-300 relative ${
                tier.popular 
                  ? 'border-electric-blue ring-2 ring-electric-blue/20' 
                  : 'border-white/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-electric-blue to-neon-purple text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <StarIcon className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-500 ml-1">{tier.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-700 mb-4">What's included:</h4>
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
                {tier.limitations.map((limitation, limitationIndex) => (
                  <div key={limitationIndex} className="flex items-center">
                    <XMarkIcon className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                    <span className="text-gray-400 line-through">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-electric-blue to-neon-purple text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tier.popular ? 'Start Free Trial' : 'Get Started'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-electric-blue mb-2">14-day</div>
                <div className="text-gray-600">Free Trial</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-electric-blue mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-electric-blue mb-2">99.9%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
            </div>
            <p className="text-gray-600 mt-6">
              No credit card required for free trial. Cancel anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
