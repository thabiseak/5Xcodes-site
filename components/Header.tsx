'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    children: [
      { name: 'Custom Development', href: '/services/custom-development' },
      { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
      { name: 'AI Integration', href: '/services/ai-integration' },
      { name: 'Mobile Apps', href: '/services/mobile-apps' },
    ]
  },
  { 
    name: 'Products', 
    href: '/products',
    children: [
      { name: 'SaaS Tools', href: '/products/saas-tools' },
      { name: 'Analytics Platform', href: '/products/analytics' },
      { name: 'Enterprise Solutions', href: '/products/enterprise' },
    ]
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-transparent' 
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex h-16 items-center justify-between transition-all duration-300 ${
          scrolled 
            ? 'mx-2 sm:mx-4 rounded-full bg-white/90 backdrop-blur-xl border border-white/20 shadow-glass px-4 sm:px-6' 
            : ''
        }`}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
              <div className="relative">
                <div className={`bg-gradient-premium rounded-lg flex items-center justify-center ${
                  scrolled ? 'w-6 h-6' : 'w-7 h-7 sm:w-8 sm:h-8'
                }`}>
                  <span className={`text-white font-bold ${
                    scrolled ? 'text-sm' : 'text-base sm:text-lg'
                  }`}>5X</span>
                </div>
                <div className={`absolute -top-0.5 -right-0.5 bg-neon-blue rounded-full animate-pulse ${
                  scrolled ? 'w-2 h-2' : 'w-2.5 h-2.5 sm:w-3 sm:h-3'
                }`}></div>
              </div>
              <span className={`font-display font-bold bg-gradient-to-r from-deep-blue to-electric-blue bg-clip-text text-transparent ${
                scrolled ? 'text-lg' : 'text-lg sm:text-xl'
              }`}>
                5Xcodes
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:items-center lg:space-x-3 xl:space-x-4 lg:flex-1 lg:justify-center">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`relative px-2 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-electric-blue'
                      : 'text-gray-700 hover:text-electric-blue'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-neon-purple"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-xl rounded-xl shadow-glass border border-white/20 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/50 hover:text-electric-blue transition-colors duration-200"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className={`hidden sm:inline-flex items-center font-medium rounded-lg shadow-neon hover:shadow-neon-lg transition-all duration-300 bg-gradient-to-r from-electric-blue to-neon-purple text-white ${
                  scrolled 
                    ? 'px-3 py-1.5 text-xs' 
                    : 'px-4 py-2 text-sm'
                }`}
              >
                Get Started
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-white/10 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/90 backdrop-blur-xl rounded-xl mt-2 sm:mt-4 border border-white/20 shadow-glass"
            >
              <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-sm sm:text-base font-medium rounded-lg transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-electric-blue bg-electric-blue/10'
                          : 'text-gray-700 hover:text-electric-blue hover:bg-white/50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-3 sm:ml-4 mt-1 sm:mt-2 space-y-1 sm:space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-electric-blue hover:bg-white/50 rounded-lg transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-3 sm:pt-4 border-t border-white/20">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-medium rounded-lg shadow-neon text-sm sm:text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </>
      </nav>
    </motion.header>
  );
}