'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const clients = [
  { name: 'Microsoft', logo: '/images/clients/microsoft.png' },
  { name: 'Google', logo: '/images/clients/google.png' },
  { name: 'Amazon', logo: '/images/clients/amazon.png' },
  { name: 'IBM', logo: '/images/clients/ibm.png' },
  { name: 'Oracle', logo: '/images/clients/oracle.png' },
  { name: 'Salesforce', logo: '/images/clients/salesforce.png' },
  { name: 'Adobe', logo: '/images/clients/adobe.png' },
  { name: 'Netflix', logo: '/images/clients/netflix.png' },
];

export function ClientLogos() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-poppins mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-slate-900 dark:text-white">Trusted by</span>{' '}
            <span className="gradient-text">Industry Leaders</span>
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're proud to partner with some of the world's most innovative companies
          </motion.p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group flex items-center justify-center p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <div className="relative w-24 h-12 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {/* Placeholder for client logos */}
                <div className="w-full h-full bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center">
                  <span className="text-slate-500 dark:text-slate-400 font-semibold text-sm">
                    {client.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-2">
            <motion.div
              className="text-4xl font-bold text-primary"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              200+
            </motion.div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">
              Happy Clients
            </div>
          </div>
          
          <div className="space-y-2">
            <motion.div
              className="text-4xl font-bold text-primary"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              500+
            </motion.div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">
              Projects Completed
            </div>
          </div>
          
          <div className="space-y-2">
            <motion.div
              className="text-4xl font-bold text-primary"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              99.9%
            </motion.div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">
              Client Satisfaction
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}