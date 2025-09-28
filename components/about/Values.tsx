'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  LightBulbIcon,
  HeartIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  UsersIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const values = [
  {
    icon: LightBulbIcon,
    title: 'Innovation',
    description: 'We constantly push the boundaries of what\'s possible, embracing cutting-edge technologies and creative solutions to solve complex challenges.',
    color: 'from-yellow-500 to-orange-500',
    principles: [
      'Embrace emerging technologies',
      'Think outside the box',
      'Continuous learning and growth',
      'Challenge the status quo'
    ]
  },
  {
    icon: HeartIcon,
    title: 'Passion',
    description: 'Our love for technology and commitment to excellence drives everything we do. We\'re passionate about creating solutions that make a real difference.',
    color: 'from-red-500 to-pink-500',
    principles: [
      'Love what we do',
      'Commitment to excellence',
      'Making a positive impact',
      'Enthusiasm for challenges'
    ]
  },
  {
    icon: ShieldCheckIcon,
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and ethical practices. Every decision we make is guided by our commitment to doing what\'s right.',
    color: 'from-green-500 to-emerald-500',
    principles: [
      'Transparent communication',
      'Ethical business practices',
      'Honest and reliable',
      'Accountable for our actions'
    ]
  },
  {
    icon: RocketLaunchIcon,
    title: 'Excellence',
    description: 'We strive for perfection in everything we deliver, maintaining the highest standards of quality and performance in all our projects.',
    color: 'from-blue-500 to-cyan-500',
    principles: [
      'Quality over quantity',
      'Attention to detail',
      'Continuous improvement',
      'Exceeding expectations'
    ]
  },
  {
    icon: UsersIcon,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and collaboration, both within our team and with our clients, to achieve extraordinary results.',
    color: 'from-purple-500 to-indigo-500',
    principles: [
      'Teamwork and unity',
      'Open communication',
      'Shared knowledge',
      'Mutual respect'
    ]
  },
  {
    icon: AcademicCapIcon,
    title: 'Learning',
    description: 'We foster a culture of continuous learning and development, staying ahead of industry trends and constantly improving our skills.',
    color: 'from-indigo-500 to-purple-500',
    principles: [
      'Continuous learning',
      'Knowledge sharing',
      'Professional development',
      'Staying current with trends'
    ]
  }
];

export function Values() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
              Our Values
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define our culture. 
            These values shape every decision we make and every solution we create.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white rounded-2xl p-8 shadow-glass hover:shadow-glass-lg border border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {value.description}
                </p>

                {/* Principles */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                    Key Principles
                  </h4>
                  <ul className="space-y-2">
                    {value.principles.map((principle, principleIndex) => (
                      <motion.li
                        key={principle}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (principleIndex * 0.05) }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${value.color} rounded-full mr-3 flex-shrink-0`}></div>
                        {principle}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culture Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 rounded-2xl p-12 border border-electric-blue/20">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Culture
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              At 5Xcodes, we believe that great software comes from great people. 
              We foster an environment where creativity, collaboration, and continuous 
              learning thrive, enabling our team to deliver exceptional results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-gray-600 font-medium">
                  Remote-First Culture
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-600 font-medium">
                  Team Members Worldwide
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent mb-2">
                  4.9★
                </div>
                <div className="text-gray-600 font-medium">
                  Employee Satisfaction
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}