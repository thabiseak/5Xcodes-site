'use client'

import Link from 'next/link'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <div
      className="feature-card group"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="p-4 bg-gradient-to-br from-electric-blue/20 to-cyan-400/20 rounded-2xl group-hover:from-electric-blue/30 group-hover:to-cyan-400/30 transition-all duration-300">
          {icon}
        </div>
        <div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <svg className="w-5 h-5 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-slate-400 mb-6 leading-relaxed">
        {description}
      </p>
      
      <Link
        href="/docs"
        className="inline-flex items-center text-electric-blue hover:text-cyan-400 font-semibold text-sm transition-colors duration-300 group/link"
      >
        Read More
        <svg
          className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Transactions",
      description: "Experience sub-second transaction finality with our optimized smart contract architecture. Built for high-frequency trading and instant settlements.",
      delay: 0.1
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Enterprise-Grade Security",
      description: "Multi-layered security with formal verification, bug bounty programs, and regular audits by leading security firms. Your assets are protected by design.",
      delay: 0.2
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 102 2v.5m0 0V21m-8.5-4.5h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Liquidity Network",
      description: "Access liquidity across 20+ markets with our cross-chain infrastructure. Seamlessly move assets between different blockchain networks.",
      delay: 0.3
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: "Advanced Analytics",
      description: "Real-time market data, yield optimization tools, and comprehensive analytics dashboard. Make informed decisions with institutional-grade insights.",
      delay: 0.4
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text mb-6">
            Built for the Future of DeFi
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Cutting-edge technology and innovative features that set the standard for decentralized finance
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of users already earning, borrowing, and trading on our protocol
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/app"
                className="btn-primary inline-flex items-center justify-center"
              >
                Start Earning Now
              </Link>
              <Link
                href="/docs"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Read Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
