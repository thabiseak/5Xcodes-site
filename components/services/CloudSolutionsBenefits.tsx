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

export function CloudSolutionsBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: CheckCircleIcon,
      title: 'Scalability',
      description: 'Scale your infrastructure up or down based on demand without hardware limitations.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: ClockIcon,
      title: 'Faster Deployment',
      description: 'Deploy applications faster with automated CI/CD pipelines and cloud-native tools.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs with pay-as-you-go pricing and resource optimization.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with built-in compliance and advanced threat protection.',
      color: 'from-purple-400 to-violet-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Better Performance',
      description: 'Improved application performance with global CDN and optimized cloud resources.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: CogIcon,
      title: 'Automation',
      description: 'Automate infrastructure management with DevOps practices and cloud-native tools.',
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
            Cloud
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with cloud solutions that deliver measurable results and competitive advantages.
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
      </div>
    </section>
  );
}
