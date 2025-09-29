'use client';

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
    description: 'Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.',
    features: ['Cloud Migration', 'Infrastructure Setup', 'Auto-scaling', 'Cost Optimization'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: CpuChipIcon,
    title: 'AI Integration',
    description: 'Intelligent automation and AI-powered solutions to enhance productivity and drive innovation.',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: ChartBarIcon,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
    features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Custom Dashboards'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security Solutions',
    description: 'Comprehensive security measures to protect your digital assets and ensure compliance.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Threat Monitoring'],
    color: 'from-red-500 to-pink-500',
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-electric-blue rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-neon-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-xl shadow-neon hover:shadow-neon-lg transition-all duration-300 overflow-hidden hover:scale-105">
            <span className="relative z-10">Explore All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}