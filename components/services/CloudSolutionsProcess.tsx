'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MagnifyingGlassIcon,
  DocumentTextIcon,
  CloudIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

export function CloudSolutionsProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'Analyze your current infrastructure and create a comprehensive cloud migration strategy.',
      icon: MagnifyingGlassIcon,
      color: 'from-yellow-400 to-orange-500',
      features: ['Infrastructure Audit', 'Cost Analysis', 'Migration Strategy']
    },
    {
      step: 2,
      title: 'Architecture Design',
      description: 'Design a scalable, secure, and cost-effective cloud architecture for your needs.',
      icon: DocumentTextIcon,
      color: 'from-blue-400 to-cyan-500',
      features: ['Cloud Architecture', 'Security Design', 'Scalability Planning']
    },
    {
      step: 3,
      title: 'Migration',
      description: 'Execute the migration with minimal downtime and zero data loss.',
      icon: CloudIcon,
      color: 'from-green-400 to-emerald-500',
      features: ['Data Migration', 'Application Migration', 'Testing & Validation']
    },
    {
      step: 4,
      title: 'Optimization',
      description: 'Optimize performance, costs, and security for maximum efficiency.',
      icon: WrenchScrewdriverIcon,
      color: 'from-purple-400 to-violet-500',
      features: ['Performance Tuning', 'Cost Optimization', 'Security Hardening']
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'Deploy your applications with CI/CD pipelines and monitoring.',
      icon: RocketLaunchIcon,
      color: 'from-red-400 to-pink-500',
      features: ['CI/CD Setup', 'Monitoring', 'Alerting Systems']
    },
    {
      step: 6,
      title: 'Management',
      description: 'Ongoing support, monitoring, and optimization of your cloud infrastructure.',
      icon: ChartBarIcon,
      color: 'from-indigo-400 to-blue-500',
      features: ['24/7 Monitoring', 'Regular Updates', 'Cost Management']
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
            Our Cloud
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology for successful cloud transformations that minimize risk and maximize value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-3xl p-8 shadow-glass hover:shadow-glass-lg border border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-200">
                  {step.step.toString().padStart(2, '0')}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {step.description}
              </p>

              <div className="space-y-2">
                {step.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full mr-3" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 h-1 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
