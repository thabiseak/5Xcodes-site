'use client';

import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { FloatingCodeElements } from './FloatingCodeElements';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Elements */}
      <FloatingCodeElements />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 shadow-glass mb-8">
            <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse mr-3"></div>
            <span className="text-sm font-medium text-gray-700">
              Accelerating Digital Transformation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-deep-blue via-electric-blue to-neon-purple bg-clip-text text-transparent">
              Accelerate Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-purple via-electric-blue to-deep-blue bg-clip-text text-transparent">
              Digital Future
            </span>
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              5X Faster
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge software solutions, AI integration, 
            and cloud technologies. We build the future, today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-xl shadow-neon hover:shadow-neon-lg transition-all duration-300 overflow-hidden hover:scale-105">
              <span className="relative z-10 flex items-center">
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-white/20 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:scale-105">
              <PlayIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '99%', label: 'Client Satisfaction' },
              { number: '5X', label: 'Faster Development' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-electric-blue/60 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-electric-blue rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}