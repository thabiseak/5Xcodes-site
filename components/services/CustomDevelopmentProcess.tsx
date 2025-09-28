'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  LightBulbIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

export function CustomDevelopmentProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a detailed roadmap.',
      icon: LightBulbIcon,
      color: 'from-yellow-400 to-orange-500',
      features: ['Requirements Analysis', 'Technical Architecture', 'Project Timeline']
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes to visualize your solution.',
      icon: DocumentTextIcon,
      color: 'from-blue-400 to-cyan-500',
      features: ['UI/UX Design', 'Wireframing', 'Interactive Prototypes']
    },
    {
      step: 3,
      title: 'Development',
      description: 'Build your application using modern technologies and best practices.',
      icon: CodeBracketIcon,
      color: 'from-green-400 to-emerald-500',
      features: ['Frontend Development', 'Backend Development', 'API Integration']
    },
    {
      step: 4,
      title: 'Testing & Quality',
      description: 'Comprehensive testing to ensure reliability, performance, and security.',
      icon: WrenchScrewdriverIcon,
      color: 'from-purple-400 to-violet-500',
      features: ['Unit Testing', 'Integration Testing', 'Security Audits']
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'Deploy your application to production with monitoring and support.',
      icon: RocketLaunchIcon,
      color: 'from-red-400 to-pink-500',
      features: ['Cloud Deployment', 'CI/CD Pipeline', 'Performance Monitoring']
    },
    {
      step: 6,
      title: 'Maintenance',
      description: 'Ongoing support, updates, and optimization for long-term success.',
      icon: ChartBarIcon,
      color: 'from-indigo-400 to-blue-500',
      features: ['24/7 Support', 'Regular Updates', 'Performance Optimization']
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
            Our Development
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology that ensures your project is delivered on time, 
            on budget, and exceeds your expectations.
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
              {/* Step Number */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-200">
                  {step.step.toString().padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {step.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full mr-3" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Line */}
              <div className="mt-6 h-1 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Agile Development Methodology
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We use agile methodologies with regular sprints, continuous integration, 
              and frequent client feedback to ensure your project stays on track.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Sprint Planning', 'Daily Standups', 'Code Reviews', 'Client Demos', 'Retrospectives'].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 border border-white/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
