import { PortfolioItem } from '@/types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'fintech-mobile-app',
    title: 'FinTech Mobile Banking App',
    description: 'A comprehensive mobile banking application with advanced security features, real-time transactions, and AI-powered financial insights.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    industry: 'Financial Services',
    results: [
      { metric: 'User Growth', value: '+250%', description: 'Increase in active users' },
      { metric: 'Transaction Volume', value: '+180%', description: 'Growth in daily transactions' },
      { metric: 'Customer Satisfaction', value: '4.8/5', description: 'Average user rating' },
      { metric: 'Security Score', value: '99.9%', description: 'Uptime and security compliance' },
    ],
    client: 'Global Finance Corp',
    testimonial: {
      quote: '5Xcodes delivered an exceptional mobile banking solution that exceeded our expectations. The security features and user experience are outstanding.',
      author: 'Sarah Johnson',
      position: 'CEO',
      company: 'Global Finance Corp'
    },
    featured: true,
  },
  {
    id: 'ecommerce-platform',
    title: 'Enterprise E-commerce Platform',
    description: 'A scalable e-commerce platform handling millions of transactions with advanced analytics, AI recommendations, and multi-currency support.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'MongoDB', 'Docker'],
    industry: 'E-commerce',
    results: [
      { metric: 'Conversion Rate', value: '+35%', description: 'Improvement in conversion rate' },
      { metric: 'Page Load Speed', value: '1.2s', description: 'Average page load time' },
      { metric: 'Revenue Growth', value: '+200%', description: 'Increase in online revenue' },
      { metric: 'Uptime', value: '99.99%', description: 'Platform availability' },
    ],
    client: 'RetailMax Solutions',
    testimonial: {
      quote: 'The platform has transformed our online business. The performance improvements and user experience enhancements are remarkable.',
      author: 'Michael Chen',
      position: 'CTO',
      company: 'RetailMax Solutions'
    },
    featured: true,
  },
  {
    id: 'healthcare-management',
    title: 'Healthcare Management System',
    description: 'A comprehensive healthcare management system with patient records, appointment scheduling, telemedicine capabilities, and compliance features.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Azure'],
    industry: 'Healthcare',
    results: [
      { metric: 'Patient Satisfaction', value: '4.9/5', description: 'Average patient rating' },
      { metric: 'Appointment Efficiency', value: '+40%', description: 'Improvement in scheduling efficiency' },
      { metric: 'Data Accuracy', value: '99.8%', description: 'Medical record accuracy' },
      { metric: 'Compliance Score', value: '100%', description: 'HIPAA compliance rating' },
    ],
    client: 'MediCare Plus',
    testimonial: {
      quote: 'This system has revolutionized our patient care. The efficiency gains and improved patient experience are incredible.',
      author: 'Dr. Emily Rodriguez',
      position: 'Medical Director',
      company: 'MediCare Plus'
    },
    featured: true,
  },
  {
    id: 'iot-manufacturing',
    title: 'IoT Manufacturing Analytics',
    description: 'An IoT-powered manufacturing analytics platform that monitors equipment health, predicts maintenance needs, and optimizes production processes.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    technologies: ['React', 'Python', 'TensorFlow', 'InfluxDB', 'Kubernetes'],
    industry: 'Manufacturing',
    results: [
      { metric: 'Equipment Downtime', value: '-60%', description: 'Reduction in unplanned downtime' },
      { metric: 'Maintenance Costs', value: '-45%', description: 'Decrease in maintenance expenses' },
      { metric: 'Production Efficiency', value: '+25%', description: 'Improvement in production output' },
      { metric: 'Predictive Accuracy', value: '94%', description: 'AI prediction accuracy rate' },
    ],
    client: 'Industrial Solutions Inc',
    testimonial: {
      quote: 'The predictive maintenance capabilities have saved us millions in downtime costs. The ROI has been exceptional.',
      author: 'David Kim',
      position: 'Operations Director',
      company: 'Industrial Solutions Inc'
    },
    featured: false,
  },
  {
    id: 'education-platform',
    title: 'Online Learning Platform',
    description: 'A comprehensive online learning platform with video streaming, interactive assessments, progress tracking, and AI-powered personalized learning paths.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
    industry: 'Education',
    results: [
      { metric: 'Student Engagement', value: '+80%', description: 'Increase in student participation' },
      { metric: 'Course Completion', value: '+65%', description: 'Improvement in completion rates' },
      { metric: 'Learning Outcomes', value: '+45%', description: 'Better learning results' },
      { metric: 'Platform Uptime', value: '99.95%', description: 'System availability' },
    ],
    client: 'EduTech Academy',
    testimonial: {
      quote: 'The platform has transformed how we deliver education. Students love the interactive features and personalized learning experience.',
      author: 'Lisa Thompson',
      position: 'Academic Director',
      company: 'EduTech Academy'
    },
    featured: false,
  },
  {
    id: 'real-estate-crm',
    title: 'Real Estate CRM System',
    description: 'A sophisticated CRM system for real estate agencies with lead management, property listings, virtual tours, and automated marketing campaigns.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    technologies: ['React', 'Express.js', 'MySQL', 'Redis', 'Google Maps API'],
    industry: 'Real Estate',
    results: [
      { metric: 'Lead Conversion', value: '+55%', description: 'Improvement in lead conversion rate' },
      { metric: 'Sales Efficiency', value: '+70%', description: 'Increase in sales team productivity' },
      { metric: 'Customer Retention', value: '+40%', description: 'Better customer retention rate' },
      { metric: 'Revenue Growth', value: '+120%', description: 'Overall revenue increase' },
    ],
    client: 'Premier Realty Group',
    testimonial: {
      quote: 'This CRM has revolutionized our sales process. The lead management and automation features are game-changers.',
      author: 'Robert Martinez',
      position: 'Sales Director',
      company: 'Premier Realty Group'
    },
    featured: false,
  },
];
