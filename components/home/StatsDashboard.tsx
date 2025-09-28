'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface StatCardProps {
  title: string
  value: string
  change: string
  isPositive: boolean
  icon: React.ReactNode
}

const StatCard = ({ title, value, change, isPositive, icon }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="stats-card group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-slate-700/50 rounded-xl group-hover:bg-slate-700/70 transition-colors duration-300">
          {icon}
        </div>
        <div className={`text-sm font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {change}
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        <p className="text-slate-400 text-sm">{title}</p>
      </div>
    </motion.div>
  )
}

const MarketCard = ({ name, percentage, amount }: { name: string; percentage: number; amount: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-xl p-4 hover:bg-slate-800/40 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-semibold">{name}</span>
        <span className="text-electric-blue font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-2 bg-gradient-to-r from-electric-blue to-cyan-400 rounded-full"
        />
      </div>
      <p className="text-slate-400 text-sm">{amount}</p>
    </motion.div>
  )
}

export default function StatsDashboard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      title: 'Total TVL',
      value: '$2.4B',
      change: '+12.5%',
      isPositive: true,
      icon: (
        <svg className="w-6 h-6 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: '24h Volume',
      value: '$156M',
      change: '+8.2%',
      isPositive: true,
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Active Suppliers',
      value: '12,847',
      change: '+5.1%',
      isPositive: true,
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Markets',
      value: '24',
      change: '+2',
      isPositive: true,
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ]

  const markets = [
    { name: 'WBTC', percentage: 20.6, amount: '$495M' },
    { name: 'ETH', percentage: 18.2, amount: '$437M' },
    { name: 'USDC', percentage: 15.8, amount: '$379M' },
    { name: 'USDT', percentage: 12.4, amount: '$298M' },
    { name: 'DAI', percentage: 8.9, amount: '$214M' },
    { name: 'Others', percentage: 24.1, amount: '$579M' }
  ]

  return (
    <section id="stats-section" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold cosmic-text mb-6">
            Protocol Statistics
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real-time metrics showcasing the strength and growth of our DeFi ecosystem
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              isPositive={stat.isPositive}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Market Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-8"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Top Markets</h3>
            <p className="text-slate-400">Distribution of total value locked across our supported assets</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {markets.map((market, index) => (
              <MarketCard
                key={market.name}
                name={market.name}
                percentage={market.percentage}
                amount={market.amount}
              />
            ))}
          </div>
        </motion.div>

        {/* Live Activity Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300 font-medium">Live Protocol Activity</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
