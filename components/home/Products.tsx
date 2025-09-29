'use client';

import React, { useState } from 'react';
import { 
  RocketLaunchIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const products = [
  {
    id: 'saas-tools',
    name: 'SaaS Tools',
    description: 'Comprehensive software-as-a-service solutions that scale with your business.',
    icon: RocketLaunchIcon,
    features: ['Scalable Architecture', 'Multi-tenant Support', 'API Integration', 'Analytics Dashboard'],
    pricing: 'Starting at $99/month',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'analytics-platform',
    name: 'Analytics Platform',
    description: 'Advanced data analytics and business intelligence tools for data-driven decisions.',
    icon: ChartBarIcon,
    features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Predictive Insights'],
    pricing: 'Starting at $199/month',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'enterprise-suite',
    name: 'Enterprise Suite',
    description: 'Complete enterprise solution with advanced security and compliance features.',
    icon: BuildingOfficeIcon,
    features: ['Enterprise Security', 'Compliance Management', 'Advanced Analytics', '24/7 Support'],
    pricing: 'Starting at $499/month',
    color: 'from-green-500 to-emerald-500',
  },
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful software solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Product Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedProduct.id === product.id
                  ? 'bg-gradient-to-r from-electric-blue to-neon-purple text-white shadow-neon'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Selected Product */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-glass border border-white/20 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Info */}
            <div>
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${selectedProduct.color} mb-6`}>
                <selectedProduct.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedProduct.name}
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {selectedProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="text-2xl font-bold text-gray-900 mb-8">
                {selectedProduct.pricing}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-xl shadow-neon hover:shadow-neon-lg transition-all duration-300 overflow-hidden hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-white/20 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:scale-105">
                  <PlayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Product Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${selectedProduct.color} flex items-center justify-center`}>
                    <selectedProduct.icon className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h4>
                  <p className="text-gray-600">
                    Advanced features and capabilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${product.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <product.icon className="w-6 h-6 text-white" />
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-electric-blue transition-colors duration-300">
                {product.name}
              </h4>
              
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
              
              <div className="text-lg font-semibold text-gray-900">
                {product.pricing}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}