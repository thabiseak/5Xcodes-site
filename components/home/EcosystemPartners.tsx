'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface PartnerLogoProps {
  name: string
  logo: string
  delay: number
}

const PartnerLogo = ({ name, logo, delay }: PartnerLogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.1 }}
      className="flex-shrink-0 w-48 h-24 bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-xl flex items-center justify-center hover:bg-slate-800/50 hover:border-electric-blue/30 transition-all duration-300 group"
    >
      <div className="text-slate-400 font-semibold text-lg group-hover:text-electric-blue transition-colors duration-300">
        {name}
      </div>
    </motion.div>
  )
}

export default function EcosystemPartners() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const partners = [
    { name: 'Mises', logo: '/logos/mises.png' },
    { name: 'Piena', logo: '/logos/piena.png' },
    { name: 'Bitizen', logo: '/logos/bitizen.png' },
    { name: 'Upbit', logo: '/logos/upbit.png' },
    { name: 'KuCoin', logo: '/logos/kucoin.png' },
    { name: 'Binance', logo: '/logos/binance.png' },
    { name: 'Coinbase', logo: '/logos/coinbase.png' },
    { name: 'Chainlink', logo: '/logos/chainlink.png' },
    { name: 'Polygon', logo: '/logos/polygon.png' },
    { name: 'Arbitrum', logo: '/logos/arbitrum.png' }
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const animate = () => {
      scrollPosition += 0.5
      scrollContainer.scrollLeft = scrollPosition

      // Reset scroll position when it reaches the end
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text mb-6">
            Powering Innovation Together
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Meet our valued partners and ecosystem collaborators building the future of decentralized finance
          </p>
        </motion.div>

        {/* Partners Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <PartnerLogo
                key={`first-${partner.name}`}
                name={partner.name}
                logo={partner.logo}
                delay={index * 0.1}
              />
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <PartnerLogo
                key={`second-${partner.name}`}
                name={partner.name}
                logo={partner.logo}
                delay={0}
              />
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10" />
        </div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-electric-blue/20 to-cyan-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Enhanced Liquidity</h3>
            <p className="text-slate-400">Access deeper liquidity pools through our strategic partnerships</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
            <p className="text-slate-400">Audited by industry-leading security firms and partners</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-purple-400/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 102 2v.5m0 0V21m-8.5-4.5h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
            <p className="text-slate-400">Expanding DeFi access across multiple continents and markets</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Partner With Us?
            </h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Join our growing ecosystem and help shape the future of decentralized finance
            </p>
            <a
              href="mailto:partnerships@5xcodes.com"
              className="btn-primary inline-flex items-center justify-center"
            >
              Become a Partner
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
