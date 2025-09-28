'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRightIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  EyeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

export function BlogGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with Next.js 14',
      excerpt: 'Learn how to build high-performance React applications using Next.js 14 with the new App Router and server components.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Development',
      tags: ['React', 'Next.js', 'JavaScript'],
      image: '/api/placeholder/600/400',
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: 'The Future of Web Development: AI-Powered Coding',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way we write code and build applications.',
      author: 'Mike Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Technology',
      tags: ['AI', 'Machine Learning', 'Web Development'],
      image: '/api/placeholder/600/400',
      views: 2100,
      likes: 156,
      featured: false
    },
    {
      id: 3,
      title: 'Microservices Architecture: Best Practices and Patterns',
      excerpt: 'A comprehensive guide to designing and implementing microservices that scale with your business.',
      author: 'Alex Rodriguez',
      date: '2024-01-10',
      readTime: '15 min read',
      category: 'Development',
      tags: ['Microservices', 'Architecture', 'DevOps'],
      image: '/api/placeholder/600/400',
      views: 1800,
      likes: 134,
      featured: true
    },
    {
      id: 4,
      title: 'Cloud-Native Development with Kubernetes',
      excerpt: 'Learn how to build and deploy applications using Kubernetes and cloud-native technologies.',
      author: 'Emma Wilson',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'Technology',
      tags: ['Kubernetes', 'Docker', 'Cloud'],
      image: '/api/placeholder/600/400',
      views: 1650,
      likes: 98,
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Low-Code Development Platforms',
      excerpt: 'Understanding how low-code platforms are changing the software development landscape.',
      author: 'David Kim',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Industry',
      tags: ['Low-Code', 'No-Code', 'Development'],
      image: '/api/placeholder/600/400',
      views: 1420,
      likes: 76,
      featured: false
    },
    {
      id: 6,
      title: 'Building Secure APIs: Authentication and Authorization',
      excerpt: 'Best practices for securing your APIs with modern authentication and authorization techniques.',
      author: 'Lisa Zhang',
      date: '2024-01-03',
      readTime: '11 min read',
      category: 'Development',
      tags: ['API', 'Security', 'Authentication'],
      image: '/api/placeholder/600/400',
      views: 1980,
      likes: 145,
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group bg-white rounded-3xl overflow-hidden shadow-glass hover:shadow-glass-lg border transition-all duration-300 relative ${
                post.featured ? 'ring-2 ring-electric-blue' : 'border-white/20'
              }`}
            >
              {post.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Featured
                </div>
              )}

              {/* Article Image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-neon-purple/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <EyeIcon className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-semibold bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-white text-sm">
                      <HeartIcon className="w-4 h-4 mr-1" />
                      {post.likes}
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <UserIcon className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-electric-blue transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Article Excerpt */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 text-electric-blue text-xs font-semibold rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <EyeIcon className="w-4 h-4 mr-1" />
                    {post.views.toLocaleString()} views
                  </div>
                  <div className="text-gray-400">{post.date}</div>
                </div>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-electric-blue to-neon-purple text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Read Article
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/80 backdrop-blur-sm text-electric-blue font-semibold rounded-2xl border-2 border-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300"
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
