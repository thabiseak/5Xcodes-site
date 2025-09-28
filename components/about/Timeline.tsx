'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  RocketLaunchIcon,
  TrophyIcon,
  UsersIcon,
  GlobeAltIcon,
  LightBulbIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const timelineEvents = [
  {
    year: '2019',
    title: 'The Foundation',
    description: '5Xcodes was founded with a vision to democratize access to cutting-edge technology and accelerate digital transformation.',
    icon: RocketLaunchIcon,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2020',
    title: 'First Major Success',
    description: 'Delivered our first enterprise solution, helping a Fortune 500 company reduce operational costs by 40%.',
    icon: TrophyIcon,
    color: 'from-green-500 to-emerald-500',
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew our team to 25+ experts and expanded our service offerings to include AI and machine learning solutions.',
    icon: UsersIcon,
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2022',
    title: 'Global Reach',
    description: 'Expanded internationally, serving clients across 10 countries and establishing partnerships with leading tech companies.',
    icon: GlobeAltIcon,
    color: 'from-orange-500 to-red-500',
  },
  {
    year: '2023',
    title: 'AI Innovation',
    description: 'Pioneered breakthrough AI solutions that revolutionized how businesses approach data analysis and automation.',
    icon: LightBulbIcon,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    year: '2024',
    title: 'Future Vision',
    description: 'Continuing to push boundaries with cutting-edge technologies and expanding our impact on global digital transformation.',
    icon: HeartIcon,
    color: 'from-pink-500 to-rose-500',
  },
];

export function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-poppins mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-slate-900 dark:text-white">Our</span>{' '}
            <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From humble beginnings to becoming a global leader in digital transformation. 
            Discover the milestones that shaped our journey.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-xl flex items-center justify-center text-white`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{event.year}</div>
                          <div className="text-lg font-semibold text-slate-900 dark:text-white">
                            {event.title}
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Node */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                  
                  <div className="w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              The Future is Bright
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8">
              As we look ahead, we're excited about the possibilities that emerging technologies 
              bring. Our commitment to innovation and excellence remains unwavering as we continue 
              to shape the future of digital transformation.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-slate-600 dark:text-slate-400">Projects by 2025</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-slate-600 dark:text-slate-400">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-slate-600 dark:text-slate-400">Team Members</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}