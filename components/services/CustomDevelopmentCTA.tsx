'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export function CustomDevelopmentCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: PhoneIcon,
      title: 'Call Us',
      description: 'Speak directly with our development team',
      action: '+1 (555) 123-4567',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      description: 'Send us your project requirements',
      action: 'hello@5xcodes.com',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      description: 'Get instant answers to your questions',
      action: 'Start Chat',
      color: 'from-purple-400 to-violet-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
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
            Ready to Build Something
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Amazing?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's turn your vision into reality with custom software that drives results. 
            Get started with a free consultation today.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {method.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {method.description}
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                {method.action}
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
            Start Your Custom Development Project
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and project estimate. No obligations, just expert advice 
            on how to bring your software vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              View Our Portfolio
            </motion.button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free consultation & project estimate</p>
            <p>✓ No long-term contracts required</p>
            <p>✓ 30-day money-back guarantee</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
