'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ActionCardProps {
  title: string
  description: string
  icon: React.ReactNode
  cta: string
  href: string
  delay: number
}

const ActionCard = ({ title, description, icon, cta, href, delay }: ActionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-8 hover:bg-slate-800/40 hover:border-electric-blue/30 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="p-4 bg-gradient-to-br from-electric-blue/20 to-cyan-400/20 rounded-2xl group-hover:from-electric-blue/30 group-hover:to-cyan-400/30 transition-all duration-300">
          {icon}
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <svg className="w-6 h-6 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
        {title}
      </h3>

      <p className="text-slate-400 mb-8 leading-relaxed">
        {description}
      </p>

      <Link
        href={href}
        className="btn-primary inline-flex items-center justify-center w-full group/link"
      >
        {cta}
        <motion.svg
          className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </Link>
    </motion.div>
  )
}

const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-3 bg-electric-blue/20 rounded-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  )
}

export default function EarnBorrow() {
  const actions = [
    {
      title: "Earn Variable Rates",
      description: "Supply your assets to earn competitive variable interest rates. Your assets remain in your control while generating passive income.",
      icon: (
        <svg className="w-8 h-8 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      cta: "Start Earning",
      href: "/app/earn",
      delay: 0.1
    },
    {
      title: "Borrow Against Collateral",
      description: "Access liquidity without selling your assets. Use your crypto holdings as collateral to borrow stablecoins and other supported assets.",
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      cta: "Start Borrowing",
      href: "/app/borrow",
      delay: 0.2
    }
  ]

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Non-Custodial",
      description: "You maintain full control of your assets. No centralized custody, no counterparty risk."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Instant Settlement",
      description: "Transactions are processed instantly with sub-second finality on our optimized network."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Competitive Rates",
      description: "Earn market-leading yields and borrow at competitive rates with our efficient liquidity pools."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 102 2v.5m0 0V21m-8.5-4.5h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Access",
      description: "Access our protocol from anywhere in the world with just an internet connection."
    }
  ]

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
            Earn and Borrow Assets with 5Xcodes Protocol
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Take control of your financial future with our non-custodial lending and borrowing platform
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {actions.map((action, index) => (
            <ActionCard
              key={action.title}
              title={action.title}
              description={action.description}
              icon={action.icon}
              cta={action.cta}
              href={action.href}
              delay={action.delay}
            />
          ))}
        </div>

        {/* Visual Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-8 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Visualize Your DeFi Journey
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                See how your assets work for you with our intuitive dashboard. Track your earnings, 
                monitor your borrowing positions, and optimize your portfolio in real-time.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <BenefitItem
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Mock Dashboard Visual */}
              <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Total Portfolio Value</span>
                    <span className="text-2xl font-bold text-electric-blue">$12,847.32</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Earning APY</span>
                      <span className="text-green-400 font-semibold">8.4%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Borrowing APR</span>
                      <span className="text-red-400 font-semibold">3.2%</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400">24h Earnings</span>
                      <span className="text-green-400 font-semibold">+$47.23</span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div className="h-2 bg-gradient-to-r from-electric-blue to-cyan-400 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-electric-blue/10 to-cyan-400/10 border border-electric-blue/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your DeFi Journey?
            </h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of users already earning and borrowing on our protocol. 
              Start with as little as $100 and scale your operations as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/app"
                className="btn-primary"
              >
                Launch App
              </Link>
              <Link
                href="/docs"
                className="btn-secondary"
              >
                Read Documentation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
