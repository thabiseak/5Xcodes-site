'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  LightBulbIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  GlobeAltIcon,
  StarIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const timeline = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'Founded with a vision to revolutionize software development through innovative approaches and cutting-edge technologies.',
    icon: LightBulbIcon,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    year: '2021',
    title: 'First Breakthrough',
    description: 'Delivered our first major project, establishing our reputation for quality and innovation in the industry.',
    icon: RocketLaunchIcon,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: '2022',
    title: 'Rapid Growth',
    description: 'Expanded our team and services, becoming a trusted partner for Fortune 500 companies worldwide.',
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-500'
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Opened offices in multiple countries, serving clients across different continents and time zones.',
    icon: GlobeAltIcon,
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: '2024',
    title: 'AI Revolution',
    description: 'Leading the industry in AI integration, helping businesses leverage artificial intelligence for competitive advantage.',
    icon: StarIcon,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    year: '2025',
    title: 'Future Vision',
    description: 'Continuing to push boundaries with quantum computing, advanced AI, and next-generation technologies.',
    icon: TrophyIcon,
    color: 'from-red-500 to-pink-500'
  }
];

export function CompanyStory() {
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
              Our Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup to a global leader in software innovation, 
            discover the milestones that shaped our success.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue via-neon-purple to-electric-blue"></div>

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-electric-blue rounded-full z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl p-8 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300"
                  >
                    {/* Year Badge */}
                    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} text-white font-semibold rounded-full text-sm mb-4`}>
                      {item.year}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 rounded-2xl p-12 border border-electric-blue/20">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              To accelerate digital transformation for businesses worldwide by delivering 
              innovative, scalable, and secure software solutions that drive growth, 
              efficiency, and competitive advantage in the digital age.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}