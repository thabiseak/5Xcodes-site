'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp Inc.',
    avatar: '/images/testimonials/sarah-johnson.jpg',
    rating: 5,
    text: '5Xcodes transformed our entire digital infrastructure. Their AI integration solutions increased our operational efficiency by 300%. The team\'s expertise and dedication are unmatched.',
    project: 'AI-Powered Analytics Platform',
    results: '300% efficiency increase'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'StartupXYZ',
    avatar: '/images/testimonials/michael-chen.jpg',
    rating: 5,
    text: 'Working with 5Xcodes was a game-changer for our startup. They delivered our MVP 5x faster than expected, and the quality exceeded our expectations. Highly recommended!',
    project: 'SaaS Platform Development',
    results: '5x faster delivery'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'VP of Engineering',
    company: 'Enterprise Solutions Ltd.',
    avatar: '/images/testimonials/emily-rodriguez.jpg',
    rating: 5,
    text: 'The cloud migration project was executed flawlessly. 5Xcodes not only met our requirements but also provided valuable insights that improved our overall architecture.',
    project: 'Cloud Migration & DevOps',
    results: 'Zero downtime migration'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Product Manager',
    company: 'Innovation Labs',
    avatar: '/images/testimonials/david-kim.jpg',
    rating: 5,
    text: 'Their mobile app development expertise is outstanding. The app they built for us has over 1M downloads and maintains a 4.9-star rating. Exceptional work!',
    project: 'Mobile App Development',
    results: '1M+ downloads, 4.9★ rating'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Head of Digital',
    company: 'Global Retail Corp',
    avatar: '/images/testimonials/lisa-thompson.jpg',
    rating: 5,
    text: '5Xcodes helped us modernize our legacy systems and implement cutting-edge analytics. Our revenue increased by 150% within the first year of implementation.',
    project: 'Digital Transformation',
    results: '150% revenue increase'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'IT Director',
    company: 'Financial Services Inc.',
    avatar: '/images/testimonials/james-wilson.jpg',
    rating: 5,
    text: 'Security and compliance were our top priorities. 5Xcodes delivered a solution that not only met all regulatory requirements but also improved our system performance.',
    project: 'Security & Compliance',
    results: '100% compliance achieved'
  }
];

const clientLogos = [
  { name: 'TechCorp', logo: '/images/clients/techcorp.svg' },
  { name: 'StartupXYZ', logo: '/images/clients/startupxyz.svg' },
  { name: 'Enterprise Solutions', logo: '/images/clients/enterprise.svg' },
  { name: 'Innovation Labs', logo: '/images/clients/innovation.svg' },
  { name: 'Global Retail', logo: '/images/clients/global-retail.svg' },
  { name: 'Financial Services', logo: '/images/clients/financial.svg' },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-deep-blue to-electric-blue bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            working with 5Xcodes.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-glass border border-white/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Testimonial Content */}
                  <div>
                    <div className="flex items-center mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-neon-purple rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-gray-600">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Project Highlights</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Project</div>
                        <div className="font-medium text-gray-900">
                          {testimonials[currentIndex].project}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Results</div>
                        <div className="font-medium text-electric-blue">
                          {testimonials[currentIndex].results}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={goToPrevious}
              className="p-3 bg-white rounded-full shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-electric-blue to-neon-purple scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 bg-white rounded-full shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-gray-600 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-sm font-medium text-gray-600">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}