'use client';

import { useState, useEffect } from 'react';
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
    role: 'CEO',
    company: 'InnovateLabs',
    avatar: '/images/testimonials/michael-chen.jpg',
    rating: 5,
    text: 'The mobile application they developed for us exceeded all expectations. The user experience is flawless, and the performance is outstanding. We\'ve seen a 250% increase in user engagement.',
    project: 'Mobile Banking App',
    results: '250% user engagement increase'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'VP of Technology',
    company: 'DataFlow Systems',
    avatar: '/images/testimonials/emily-rodriguez.jpg',
    rating: 5,
    text: 'Their cloud migration services saved us thousands of dollars in infrastructure costs while improving our system performance by 400%. Highly recommend their expertise.',
    project: 'Cloud Infrastructure Migration',
    results: '400% performance improvement'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Founder',
    company: 'StartupHub',
    avatar: '/images/testimonials/david-kim.jpg',
    rating: 5,
    text: '5Xcodes helped us build our MVP in record time. Their agile development approach and technical expertise were crucial to our success. We couldn\'t have done it without them.',
    project: 'SaaS Platform MVP',
    results: '50% faster time to market'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Head of Digital',
    company: 'RetailMax',
    avatar: '/images/testimonials/lisa-thompson.jpg',
    rating: 5,
    text: 'The e-commerce platform they built for us is absolutely phenomenal. Sales have increased by 180% since launch, and the customer experience is seamless.',
    project: 'E-commerce Platform',
    results: '180% sales increase'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with 5Xcodes.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-glass border border-white/20 p-8 lg:p-12 text-center">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <div className="text-lg font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-600">
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </div>
              <div className="text-sm text-electric-blue font-medium mt-2">
                {testimonials[currentIndex].project} • {testimonials[currentIndex].results}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-electric-blue to-neon-purple scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '99%', label: 'Satisfaction Rate' },
            { number: '5X', label: 'Faster Delivery' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
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
    </section>
  );
}