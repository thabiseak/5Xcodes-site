'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RocketLaunchIcon, UsersIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    icon: RocketLaunchIcon,
    number: '500+',
    label: 'Projects Delivered',
    description: 'Successfully completed projects across various industries'
  },
  {
    icon: UsersIcon,
    number: '200+',
    label: 'Happy Clients',
    description: 'Satisfied clients who trust us with their digital transformation'
  },
  {
    icon: LightBulbIcon,
    number: '5X',
    label: 'Faster Innovation',
    description: 'Accelerated development cycles with cutting-edge technologies'
  }
];

export function AboutHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 shadow-glass mb-8"
            >
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-medium text-gray-700">
                About 5Xcodes
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-deep-blue to-electric-blue bg-clip-text text-transparent">
                Accelerating
              </span>
              <br />
              <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a team of passionate technologists, designers, and innovators 
              dedicated to transforming businesses through cutting-edge software solutions. 
              Our mission is to accelerate your digital future 5X faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 191, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-xl shadow-neon hover:shadow-neon-lg transition-all duration-300"
              >
                Our Story
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-white/20 shadow-glass hover:shadow-glass-lg transition-all duration-300"
              >
                Meet the Team
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-neon-purple rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-deep-blue to-electric-blue bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}