'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ArticleCardProps {
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  delay: number
}

const ArticleCard = ({ title, excerpt, category, readTime, date, delay }: ArticleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-6 hover:bg-slate-800/40 hover:border-electric-blue/30 transition-all duration-300 group cursor-pointer"
    >
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-electric-blue/20 text-electric-blue text-sm font-semibold rounded-full">
            {category}
          </span>
          <span className="text-slate-500 text-sm">{readTime}</span>
        </div>
        <time className="text-slate-500 text-sm">{date}</time>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors duration-300">
        {title}
      </h3>

      <p className="text-slate-400 mb-6 leading-relaxed">
        {excerpt}
      </p>

      <Link
        href="/blog"
        className="inline-flex items-center text-electric-blue hover:text-cyan-400 font-semibold text-sm transition-colors duration-300 group/link"
      >
        Read Article
        <motion.svg
          className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </Link>
    </motion.article>
  )
}

export default function NewsArticles() {
  const articles = [
    {
      title: "Unlock Liquidity with Smart Crypto Borrowing",
      excerpt: "Discover how our innovative borrowing mechanisms allow you to access liquidity without selling your assets. Learn about collateral optimization and risk management strategies.",
      category: "Tutorial",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      delay: 0.1
    },
    {
      title: "The Future of Decentralized Lending",
      excerpt: "Explore the latest developments in DeFi lending protocols and how 5Xcodes Protocol is leading the charge in creating more efficient and secure lending markets.",
      category: "Analysis",
      readTime: "8 min read",
      date: "Dec 12, 2024",
      delay: 0.2
    },
    {
      title: "Maximizing Yield in Volatile Markets",
      excerpt: "Learn advanced strategies for earning optimal returns on your crypto assets while managing risk in today's dynamic DeFi landscape.",
      category: "Strategy",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      delay: 0.3
    },
    {
      title: "Security Best Practices for DeFi Users",
      excerpt: "Essential security tips and best practices to protect your assets when interacting with decentralized finance protocols and smart contracts.",
      category: "Security",
      readTime: "7 min read",
      date: "Dec 8, 2024",
      delay: 0.4
    },
    {
      title: "Cross-Chain Liquidity: Breaking Down Barriers",
      excerpt: "How our cross-chain infrastructure enables seamless asset movement and liquidity provision across multiple blockchain networks.",
      category: "Technology",
      readTime: "9 min read",
      date: "Dec 5, 2024",
      delay: 0.5
    },
    {
      title: "Governance Tokens and Protocol Evolution",
      excerpt: "Understanding the role of governance in decentralized protocols and how token holders shape the future direction of the ecosystem.",
      category: "Governance",
      readTime: "6 min read",
      date: "Dec 3, 2024",
      delay: 0.6
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
            Latest Insights & Updates
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Stay informed with the latest developments, tutorials, and insights from the 5Xcodes Protocol team
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.title}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              readTime={article.readTime}
              date={article.date}
              delay={article.delay}
            />
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Newsletter
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Get the latest protocol updates, market insights, and exclusive content delivered to your inbox
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-electric-blue transition-colors duration-300"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-3 text-center">
              No spam, unsubscribe at any time
            </p>
          </div>
        </motion.div>

        {/* View All Articles CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="btn-secondary inline-flex items-center"
          >
            View All Articles
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
