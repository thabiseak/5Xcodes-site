'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CodeBracketIcon,
  CloudIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Custom Development',
    description: 'Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.',
    features: ['Full-stack Development', 'API Integration', 'Microservices Architecture', 'Code Quality Assurance'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.',
    features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps & CI/CD', 'Auto-scaling Solutions'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: CpuChipIcon,
    title: 'AI Integration',
    description: 'Intelligent automation and machine learning solutions to transform your business processes.',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'Progressive Web Apps'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics & BI',
    description: 'Data-driven insights and business intelligence solutions to optimize your decision-making process.',
    features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Analytics', 'Custom Reports'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security solutions to protect your data and ensure regulatory compliance.',
    features: ['Security Audits', 'Penetration Testing', 'GDPR Compliance', 'Data Encryption'],
    color: 'from-teal-500 to-cyan-500',
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
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
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions designed to accelerate your digital transformation 
            and drive business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-glass hover:shadow-glass-lg border border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-electric-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: (index * 0.1) + 0.3 }}
                  className="mt-6"
                >
                  <a
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300`}
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 rounded-2xl p-8 border border-electric-blue/20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that accelerates your digital future.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 191, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-xl shadow-neon hover:shadow-neon-lg transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}