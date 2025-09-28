'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface Product {
  id: number
  name: string
  description: string
  image: string
  category: string
  features: string[]
  pricing: {
    basic: { price: number; features: string[] }
    premium: { price: number; features: string[] }
    enterprise: { price: number; features: string[] }
  }
  demoUrl: string
}

interface ProductModalProps {
  product: Product
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeTab, setActiveTab] = useState<'demo' | 'pricing'>('demo')

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto"
        onClick={onClose}
      >
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white dark:bg-dark-800 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {product.category}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors duration-200"
              >
                <XMarkIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-dark-700">
              <button
                onClick={() => setActiveTab('demo')}
                className={`flex-1 px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'demo'
                    ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Interactive Demo
              </button>
              <button
                onClick={() => setActiveTab('pricing')}
                className={`flex-1 px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'pricing'
                    ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Pricing Plans
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {activeTab === 'demo' ? (
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-dark-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      {product.name} Demo
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Experience the power of {product.name} with our interactive demo. 
                      This is a simulated interface showing key features and functionality.
                    </p>
                    
                    {/* Mock Dashboard */}
                    <div className="bg-white dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-dark-600 p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Dashboard Overview
                        </h4>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {['Total Users', 'Active Sessions', 'Revenue'].map((metric, index) => (
                          <div key={metric} className="bg-gray-50 dark:bg-dark-700 rounded-lg p-4">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                              {metric}
                            </div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {index === 0 ? '12,345' : index === 1 ? '1,234' : '$45,678'}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="h-32 bg-gradient-to-r from-primary-500 to-accent rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold">
                          Interactive Chart Placeholder
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button className="btn-primary">
                      Start Free Trial
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(product.pricing).map(([plan, details]) => (
                      <div
                        key={plan}
                        className={`relative rounded-lg border-2 p-6 ${
                          plan === 'premium'
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/20'
                            : 'border-gray-200 dark:border-dark-700'
                        }`}
                      >
                        {plan === 'premium' && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                              Most Popular
                            </span>
                          </div>
                        )}
                        
                        <div className="text-center mb-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                            {plan}
                          </h3>
                          <div className="mt-2">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                              ${details.price}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400">/month</span>
                          </div>
                        </div>
                        
                        <ul className="space-y-2 mb-6">
                          {details.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <button
                          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                            plan === 'premium'
                              ? 'bg-primary-500 text-white hover:bg-primary-600'
                              : 'bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-600'
                          }`}
                        >
                          Choose {plan}
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      All plans include 24/7 support and 30-day money-back guarantee
                    </p>
                    <button className="btn-primary">
                      Contact Sales for Enterprise
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

