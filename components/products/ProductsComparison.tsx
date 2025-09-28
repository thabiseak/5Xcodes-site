'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

export function ProductsComparison() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const comparisonData = [
    {
      feature: 'Users',
      starter: 'Up to 5',
      professional: 'Up to 25',
      enterprise: 'Unlimited'
    },
    {
      feature: 'Storage',
      starter: '5GB',
      professional: '50GB',
      enterprise: 'Unlimited'
    },
    {
      feature: 'API Access',
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      feature: 'Custom Integrations',
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      feature: 'Advanced Analytics',
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      feature: 'Priority Support',
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      feature: 'Dedicated Account Manager',
      starter: false,
      professional: false,
      enterprise: true
    },
    {
      feature: 'SLA Guarantee',
      starter: false,
      professional: false,
      enterprise: true
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
            Compare
            <span className="block bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              Plans
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly what's included in each plan and choose the one that fits your needs.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-glass-lg border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-electric-blue/10 to-neon-purple/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Features</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Professional</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XMarkIcon className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{row.starter}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.professional === 'boolean' ? (
                        row.professional ? (
                          <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XMarkIcon className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{row.professional}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XMarkIcon className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{row.enterprise}</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Not Sure Which Plan to Choose?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can help you find the perfect plan for your business needs. 
              Get a personalized recommendation based on your requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Personalized Recommendation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
