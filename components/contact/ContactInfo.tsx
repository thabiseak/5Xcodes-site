'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: 'Email',
    description: 'Send us an email anytime',
    primary: 'hello@5xcodes.com',
    secondary: 'support@5xcodes.com',
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    description: 'Call us during business hours',
    primary: '+1 (555) 123-4567',
    secondary: '+1 (555) 987-6543',
  },
  {
    icon: MapPinIcon,
    title: 'Office',
    description: 'Visit us at our headquarters',
    primary: '123 Innovation Street',
    secondary: 'San Francisco, CA 94105',
  },
  {
    icon: ClockIcon,
    title: 'Hours',
    description: 'We\'re here to help',
    primary: 'Monday - Friday',
    secondary: '9:00 AM - 6:00 PM PST',
  },
  {
    icon: GlobeAltIcon,
    title: 'Global',
    description: 'We serve clients worldwide',
    primary: '15+ Countries',
    secondary: '24/7 Remote Support',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Response',
    description: 'We respond quickly',
    primary: 'Within 24 hours',
    secondary: 'Emergency: 2 hours',
  },
];

export function ContactInfo() {
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
            <span className="text-slate-900 dark:text-white">Contact</span>{' '}
            <span className="gradient-text">Information</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Multiple ways to reach us. Choose the method that works best for you.
          </motion.p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                {/* Icon */}
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {info.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {info.description}
                </p>

                <div className="space-y-2">
                  <div className="text-slate-900 dark:text-white font-semibold">
                    {info.primary}
                  </div>
                  <div className="text-slate-500 dark:text-slate-500 text-sm">
                    {info.secondary}
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose 5Xcodes?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-slate-600 dark:text-slate-400">Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-slate-600 dark:text-slate-400">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-slate-600 dark:text-slate-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}