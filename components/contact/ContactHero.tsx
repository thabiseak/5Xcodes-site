'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    description: 'Mon-Fri 9AM-6PM PST',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    value: 'hello@5xcodes.com',
    description: 'We respond within 24 hours',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: MapPinIcon,
    title: 'Office',
    value: 'San Francisco, CA',
    description: '123 Innovation Street',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: ClockIcon,
    title: 'Hours',
    value: '24/7 Support',
    description: 'Always here to help',
    color: 'from-orange-500 to-red-500'
  }
];

export function ContactHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 shadow-glass mb-8"
          >
            <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-medium text-gray-700">
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-deep-blue to-electric-blue bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to accelerate your digital transformation? Let's discuss your project 
            and create a solution that drives real business results.
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              
              <p className="text-gray-700 font-medium mb-1">
                {info.value}
              </p>
              
              <p className="text-sm text-gray-600">
                {info.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}