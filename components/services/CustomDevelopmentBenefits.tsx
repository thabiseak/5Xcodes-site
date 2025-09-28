'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export function CustomDevelopmentBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: CheckCircleIcon,
      title: 'Tailored Solutions',
      description: 'Custom-built applications designed specifically for your business needs and workflows.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: ClockIcon,
      title: 'Faster Time to Market',
      description: 'Rapid development cycles with modern tools and methodologies to get you to market quickly.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Cost Effective',
      description: 'Long-term cost savings with scalable solutions that grow with your business.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Built-in security features and compliance with industry standards and regulations.',
      color: 'from-purple-400 to-violet-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Scalable Architecture',
      description: 'Future-proof solutions that can handle growth and changing requirements.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: CogIcon,
      title: 'Ongoing Support',
      description: 'Continuous maintenance, updates, and support to keep your application running smoothly.',
      color: 'from-indigo-400 to-blue-500'
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
            Why Choose Custom
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Development?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom software development offers unique advantages that off-the-shelf solutions simply cannot provide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-3xl p-8 shadow-glass hover:shadow-glass-lg border border-white/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              <div className="mt-6 h-1 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 rounded-3xl p-8 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-electric-blue mb-2">100+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-electric-blue mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-electric-blue mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-electric-blue mb-2">5★</div>
              <div className="text-gray-600">Client Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
