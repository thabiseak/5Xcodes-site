'use client';

import { 
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const ctaOptions = [
  {
    icon: PhoneIcon,
    title: 'Schedule a Call',
    description: 'Book a free consultation with our experts',
    action: 'Book Now',
    href: '/contact',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: EnvelopeIcon,
    title: 'Send an Email',
    description: 'Get in touch via email for detailed discussions',
    action: 'Send Email',
    href: 'mailto:hello@5xcodes.com',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Live Chat',
    description: 'Chat with our team in real-time',
    action: 'Start Chat',
    href: '#chat',
    color: 'from-green-500 to-emerald-500',
  },
];

const benefits = [
  {
    icon: RocketLaunchIcon,
    title: 'Fast Delivery',
    description: 'Get your project delivered 5X faster than traditional development',
  },
  {
    icon: SparklesIcon,
    title: 'Premium Quality',
    description: 'Enterprise-grade solutions with cutting-edge technology',
  },
  {
    icon: ArrowRightIcon,
    title: 'Scalable Solutions',
    description: 'Built to grow with your business needs',
  },
];

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-deep-blue via-electric-blue to-neon-purple relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Accelerate</span> Your Digital Future?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of successful businesses that have transformed their operations with our cutting-edge solutions. Let's build something extraordinary together.
          </p>
        </div>

        {/* CTA Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <div
              key={option.title}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${option.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <option.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {option.title}
              </h3>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                {option.description}
              </p>
              
              <a
                href={option.href}
                className="group/btn inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                {option.action}
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="text-center">
              <div className="inline-flex p-4 rounded-xl bg-white/20 backdrop-blur-sm mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h4>
              
              <p className="text-white/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Start Your Digital Transformation Today
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Get a free consultation and discover how we can accelerate your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105">
                <span className="relative z-10 flex items-center">
                  Get Free Consultation
                  <RocketLaunchIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <PhoneIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Call Now: +1 (555) 123-4567
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <p className="text-white/60 text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-white/40 font-semibold">TechCorp</div>
            <div className="text-white/40 font-semibold">InnovateLabs</div>
            <div className="text-white/40 font-semibold">DataFlow</div>
            <div className="text-white/40 font-semibold">StartupHub</div>
            <div className="text-white/40 font-semibold">RetailMax</div>
          </div>
        </div>
      </div>
    </section>
  );
}