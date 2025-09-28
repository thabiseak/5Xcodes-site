'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';
import { SocialIcons } from './icons/SocialIcons';

const footerNavigation = {
  services: [
    { name: 'Custom Development', href: '/services/custom-development' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'AI Integration', href: '/services/ai-integration' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
  ],
  products: [
    { name: 'SaaS Tools', href: '/products/saas-tools' },
    { name: 'Analytics Platform', href: '/products/analytics' },
    { name: 'Enterprise Solutions', href: '/products/enterprise' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-5"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-premium rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">5X</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-blue rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-2xl font-display font-bold bg-gradient-to-r from-deep-blue to-electric-blue bg-clip-text text-transparent">
                    5Xcodes
                  </span>
                </Link>
                
                <p className="text-gray-600 mb-6 max-w-md">
                  Accelerate your digital future 5X faster with cutting-edge software solutions, 
                  AI integration, and cloud technologies that transform businesses.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPinIcon className="w-5 h-5 text-electric-blue" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <PhoneIcon className="w-5 h-5 text-electric-blue" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <EnvelopeIcon className="w-5 h-5 text-electric-blue" />
                    <span>hello@5xcodes.com</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-electric-blue transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Products</h3>
              <ul className="space-y-3">
                {footerNavigation.products.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-electric-blue transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-electric-blue transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-electric-blue transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Stay Updated with 5Xcodes
              </h3>
              <p className="text-gray-600 mb-6">
                Get the latest insights on technology trends and industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none transition-all duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-medium rounded-lg shadow-neon hover:shadow-neon-lg transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-gray-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <p className="text-gray-400 text-sm">
                  © 2024 5Xcodes. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  {footerNavigation.legal.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <SocialIcons />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={scrollToTop}
                  className="p-2 bg-electric-blue/20 hover:bg-electric-blue/30 rounded-lg transition-colors duration-200"
                  aria-label="Scroll to top"
                >
                  <ArrowUpIcon className="w-5 h-5 text-electric-blue" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}