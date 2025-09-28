'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRightIcon,
  PlayIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export function ProductsCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ctaOptions = [
    {
      icon: PlayIcon,
      title: 'Watch Demo',
      description: 'See our products in action with a live demonstration',
      action: 'Start Demo',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Talk to Sales',
      description: 'Speak with our product experts about your needs',
      action: 'Schedule Call',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float-fast" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Started?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of businesses already using our products to accelerate their growth. 
            Start your free trial today.
          </p>
        </motion.div>

        {/* CTA Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <option.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {option.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {option.description}
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                {option.action}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Start Your Free Trial Today
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No credit card required. Get full access to all features for 14 days. 
            Cancel anytime with no questions asked.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              View Pricing
            </motion.button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial</p>
            <p>✓ No credit card required</p>
            <p>✓ Cancel anytime</p>
            <p>✓ 24/7 support included</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
