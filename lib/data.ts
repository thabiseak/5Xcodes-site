import { BlogPost, PortfolioItem, Testimonial, Product, Service, TeamMember, TimelineEvent } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    id: 'ai-future-2024',
    slug: 'future-of-ai-in-software-development',
    title: 'The Future of AI in Software Development',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we build, test, and deploy software applications.',
    content: `# The Future of AI in Software Development

Artificial Intelligence is transforming every aspect of software development, from code generation to testing and deployment. In this comprehensive guide, we explore the current state and future potential of AI in our industry.

## Current AI Applications

### Code Generation
AI-powered tools like GitHub Copilot and ChatGPT are already helping developers write code faster and more efficiently. These tools can:
- Generate boilerplate code
- Suggest function implementations
- Help with debugging
- Provide code explanations

### Automated Testing
AI is revolutionizing software testing by:
- Generating test cases automatically
- Identifying edge cases
- Performing visual regression testing
- Optimizing test coverage

### Code Review
AI-assisted code review tools can:
- Detect potential bugs and security vulnerabilities
- Enforce coding standards
- Suggest performance optimizations
- Identify code smells

## Future Possibilities

The future of AI in software development looks incredibly promising. We can expect to see:

1. **Autonomous Development**: AI systems that can build entire applications from natural language descriptions
2. **Intelligent Debugging**: AI that can not only find bugs but also fix them automatically
3. **Predictive Maintenance**: AI that can predict when systems will fail and prevent issues before they occur
4. **Personalized Development Environments**: AI that adapts to each developer's coding style and preferences

## Challenges and Considerations

While AI offers tremendous potential, there are important considerations:

- **Quality Control**: Ensuring AI-generated code meets quality standards
- **Security**: Protecting against AI-generated vulnerabilities
- **Ethics**: Addressing bias and fairness in AI systems
- **Human Oversight**: Maintaining human control and decision-making

## Conclusion

AI is not replacing developers—it's augmenting our capabilities and making us more productive. The future belongs to developers who can effectively collaborate with AI tools to build better software faster.

At 5Xcodes, we're already integrating AI into our development processes to deliver superior results for our clients. Contact us to learn how AI can accelerate your next project.`,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readingTime: 5,
    tags: ['AI', 'Development', 'Technology'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
  },
  {
    id: 'cloud-migration-enterprise',
    slug: 'cloud-migration-best-practices-enterprise',
    title: 'Cloud Migration Best Practices for Enterprise',
    excerpt: 'Learn the essential strategies and considerations for successfully migrating your enterprise applications to the cloud.',
    content: `# Cloud Migration Best Practices for Enterprise

Migrating enterprise applications to the cloud is a complex process that requires careful planning and execution. This guide covers the essential best practices for a successful cloud migration.

## Pre-Migration Planning

### Assessment Phase
Before starting your migration, conduct a comprehensive assessment:
- **Application Inventory**: Catalog all applications and their dependencies
- **Performance Baseline**: Establish current performance metrics
- **Security Requirements**: Identify compliance and security needs
- **Cost Analysis**: Compare current costs with projected cloud costs

### Strategy Selection
Choose the right migration strategy:
- **Rehost (Lift and Shift)**: Move applications without modification
- **Refactor**: Modify applications to take advantage of cloud features
- **Replatform**: Move to a managed platform service
- **Repurchase**: Replace with cloud-native solutions

## Migration Execution

### Phased Approach
Implement a phased migration strategy:
1. **Pilot Phase**: Start with non-critical applications
2. **Production Phase**: Migrate critical applications
3. **Optimization Phase**: Optimize for cloud-native features

### Data Migration
Ensure secure and efficient data migration:
- Use encryption in transit and at rest
- Implement data validation and integrity checks
- Plan for minimal downtime
- Have rollback procedures ready

## Post-Migration Optimization

### Performance Tuning
- Monitor application performance
- Optimize resource allocation
- Implement auto-scaling
- Use cloud-native services

### Cost Optimization
- Right-size instances
- Use reserved instances for predictable workloads
- Implement cost monitoring and alerts
- Regular cost reviews

## Common Pitfalls to Avoid

1. **Insufficient Planning**: Rushing into migration without proper assessment
2. **Ignoring Dependencies**: Not accounting for application interdependencies
3. **Security Oversights**: Failing to implement proper security controls
4. **Lack of Training**: Not preparing teams for cloud operations

## Conclusion

Successful cloud migration requires careful planning, execution, and ongoing optimization. By following these best practices, enterprises can achieve their cloud transformation goals while minimizing risks and maximizing benefits.`,
    author: 'Michael Chen',
    date: '2024-01-10',
    readingTime: 7,
    tags: ['Cloud', 'Enterprise', 'Migration'],
    featured: true,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
  },
  {
    id: 'scalable-mobile-apps',
    slug: 'building-scalable-mobile-applications',
    title: 'Building Scalable Mobile Applications',
    excerpt: 'Discover the key principles and technologies for creating mobile apps that can handle millions of users.',
    content: `# Building Scalable Mobile Applications

Creating mobile applications that can scale to millions of users requires careful architecture, performance optimization, and strategic technology choices. This guide covers the essential principles for building scalable mobile apps.

## Architecture Principles

### Microservices Architecture
Design your backend as a collection of microservices:
- **Independent Deployment**: Each service can be deployed independently
- **Technology Diversity**: Use the best technology for each service
- **Fault Isolation**: Failures in one service don't affect others
- **Scalability**: Scale services independently based on demand

### API Design
Create well-designed APIs that can handle high loads:
- **RESTful Design**: Follow REST principles for consistency
- **GraphQL**: Consider GraphQL for flexible data fetching
- **Rate Limiting**: Implement proper rate limiting
- **Caching**: Use appropriate caching strategies

## Performance Optimization

### Frontend Optimization
Optimize your mobile app for performance:
- **Lazy Loading**: Load content as needed
- **Image Optimization**: Compress and optimize images
- **Code Splitting**: Split code into smaller chunks
- **Caching**: Implement client-side caching

### Backend Optimization
Optimize your backend for scale:
- **Database Optimization**: Use proper indexing and query optimization
- **CDN**: Use Content Delivery Networks for static assets
- **Load Balancing**: Distribute traffic across multiple servers
- **Caching**: Implement Redis or similar caching solutions

## Technology Stack

### Frontend Technologies
Choose the right frontend technology:
- **React Native**: For cross-platform development
- **Flutter**: For high-performance cross-platform apps
- **Native Development**: For platform-specific optimizations

### Backend Technologies
Select scalable backend technologies:
- **Node.js**: For JavaScript-based backends
- **Python/Django**: For rapid development
- **Go**: For high-performance services
- **Kubernetes**: For container orchestration

## Monitoring and Analytics

### Performance Monitoring
Implement comprehensive monitoring:
- **APM Tools**: Use Application Performance Monitoring
- **Error Tracking**: Track and analyze errors
- **User Analytics**: Monitor user behavior
- **Performance Metrics**: Track key performance indicators

### Scalability Metrics
Monitor key scalability metrics:
- **Response Time**: Track API response times
- **Throughput**: Monitor requests per second
- **Error Rate**: Track error percentages
- **Resource Utilization**: Monitor server resources

## Conclusion

Building scalable mobile applications requires a holistic approach that considers architecture, performance, technology choices, and monitoring. By following these principles, you can create apps that can grow with your user base and handle millions of users effectively.`,
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    readingTime: 6,
    tags: ['Mobile', 'Scalability', 'Development'],
    featured: false,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
  },
]

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-Commerce Platform Modernization',
    description: 'Complete overhaul of legacy e-commerce system with modern cloud architecture',
    longDescription: 'We transformed a decade-old e-commerce platform serving 100,000+ customers into a modern, scalable cloud-based solution. The project involved migrating from monolithic architecture to microservices, implementing real-time inventory management, and creating a mobile-first shopping experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker', 'Kubernetes'],
    industry: 'E-Commerce',
    category: 'Web Development',
    client: 'RetailCorp',
    duration: '6 months',
    results: [
      { metric: 'Performance', value: '300%', description: 'Faster page load times' },
      { metric: 'Conversion', value: '45%', description: 'Increase in conversion rate' },
      { metric: 'Scalability', value: '10x', description: 'Improved handling capacity' },
    ],
    challenges: [
      'Legacy system integration',
      'Zero-downtime migration',
      'Data consistency across services',
      'Performance optimization',
    ],
    solution: 'Implemented a gradual migration strategy using microservices architecture, real-time data synchronization, and comprehensive testing to ensure seamless transition.',
    testimonial: {
      quote: '5Xcodes delivered exactly what we needed. The new platform is faster, more reliable, and has significantly improved our customer experience.',
      author: 'John Smith',
      position: 'CTO',
      company: 'RetailCorp',
    },
    featured: true,
    completed: '2023-12-15',
  },
  {
    id: '2',
    title: 'AI-Powered Customer Support System',
    description: 'Intelligent chatbot and support automation platform',
    longDescription: 'Developed a comprehensive AI-powered customer support system that handles 80% of customer inquiries automatically. The system includes natural language processing, sentiment analysis, and seamless handoff to human agents when needed.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    ],
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker', 'AWS'],
    industry: 'Technology',
    category: 'AI/ML',
    client: 'TechStartup',
    duration: '4 months',
    results: [
      { metric: 'Automation', value: '80%', description: 'Inquiries handled automatically' },
      { metric: 'Response Time', value: '90%', description: 'Faster response times' },
      { metric: 'Satisfaction', value: '95%', description: 'Customer satisfaction score' },
    ],
    challenges: [
      'Natural language understanding',
      'Context preservation',
      'Integration with existing systems',
      'Training data quality',
    ],
    solution: 'Built a custom NLP model with continuous learning capabilities, integrated with existing CRM systems, and implemented comprehensive monitoring and feedback loops.',
    featured: true,
    completed: '2023-11-20',
  },
  {
    id: '3',
    title: 'Healthcare Data Analytics Platform',
    description: 'Real-time analytics and reporting system for healthcare providers',
    longDescription: 'Created a comprehensive healthcare data analytics platform that processes patient data in real-time, provides predictive insights, and generates compliance reports. The system handles sensitive health data with full HIPAA compliance.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    ],
    technologies: ['Python', 'Apache Kafka', 'Elasticsearch', 'React', 'PostgreSQL', 'AWS'],
    industry: 'Healthcare',
    category: 'Data Analytics',
    client: 'HealthCare Plus',
    duration: '8 months',
    results: [
      { metric: 'Processing Speed', value: '500%', description: 'Faster data processing' },
      { metric: 'Accuracy', value: '99.9%', description: 'Data accuracy rate' },
      { metric: 'Compliance', value: '100%', description: 'HIPAA compliance score' },
    ],
    challenges: [
      'HIPAA compliance requirements',
      'Real-time data processing',
      'Data privacy and security',
      'Integration with legacy systems',
    ],
    solution: 'Implemented end-to-end encryption, role-based access controls, audit logging, and real-time data streaming with comprehensive security measures.',
    featured: false,
    completed: '2023-10-30',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp',
    content: '5Xcodes transformed our entire digital infrastructure. Their cloud solutions reduced our operational costs by 40% while improving performance significantly.',
    quote: '5Xcodes transformed our entire digital infrastructure. Their cloud solutions reduced our operational costs by 40% while improving performance significantly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    featured: true,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    position: 'Product Manager',
    company: 'InnovateLab',
    content: 'The AI integration they built for our customer support system has been a game-changer. Response times improved by 300% and customer satisfaction is at an all-time high.',
    quote: 'The AI integration they built for our customer support system has been a game-changer. Response times improved by 300% and customer satisfaction is at an all-time high.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    featured: true,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'CEO',
    position: 'CEO',
    company: 'DataFlow',
    content: 'Working with 5Xcodes was the best decision we made. Their custom software solution streamlined our operations and helped us scale 5x faster than expected.',
    quote: 'Working with 5Xcodes was the best decision we made. Their custom software solution streamlined our operations and helped us scale 5x faster than expected.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    featured: true,
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Head of Engineering',
    position: 'Head of Engineering',
    company: 'CloudSync',
    content: 'Their app development team delivered a flawless mobile application that exceeded our expectations. The user experience is outstanding.',
    quote: 'Their app development team delivered a flawless mobile application that exceeded our expectations. The user experience is outstanding.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    featured: false,
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'VP of Operations',
    position: 'VP of Operations',
    company: 'AI Solutions',
    content: '5Xcodes helped us modernize our legacy systems with their cloud solutions. The migration was seamless and our team productivity increased dramatically.',
    quote: '5Xcodes helped us modernize our legacy systems with their cloud solutions. The migration was seamless and our team productivity increased dramatically.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    featured: false,
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'Founder',
    position: 'Founder',
    company: 'FutureTech',
    content: 'The custom software they built for us is exactly what we needed. It\'s scalable, reliable, and has helped us grow our business exponentially.',
    quote: 'The custom software they built for us is exactly what we needed. It\'s scalable, reliable, and has helped us grow our business exponentially.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    featured: false,
  },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'CloudFlow',
    description: 'Enterprise workflow automation platform that streamlines business processes and increases productivity by 300%.',
    longDescription: 'CloudFlow is a comprehensive workflow automation platform designed for enterprise organizations. It provides intuitive drag-and-drop workflow builders, real-time analytics, and seamless integrations with popular business tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    ],
    features: ['Process Automation', 'Real-time Analytics', 'Custom Integrations', 'Scalable Infrastructure'],
    pricing: {
      basic: 99,
      premium: 299,
      enterprise: 999,
    },
    demo: '/demos/cloudflow',
    category: 'Workflow Automation',
    demoUrl: '/demos/cloudflow',
    documentationUrl: '/docs/cloudflow',
    featured: true,
  },
  {
    id: '2',
    name: 'DataViz Pro',
    description: 'Advanced data visualization and business intelligence platform that transforms complex data into actionable insights.',
    longDescription: 'DataViz Pro is a powerful business intelligence platform that helps organizations make data-driven decisions. It features interactive dashboards, real-time data connections, and advanced analytics capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    ],
    features: ['Interactive Dashboards', 'Real-time Data', 'Custom Reports', 'API Integration'],
    pricing: {
      basic: 149,
      premium: 399,
      enterprise: 1299,
    },
    demo: '/demos/dataviz',
    category: 'Business Intelligence',
    demoUrl: '/demos/dataviz',
    documentationUrl: '/docs/dataviz',
    featured: true,
  },
  {
    id: '3',
    name: 'AI Assistant',
    description: 'Intelligent virtual assistant powered by advanced AI that automates customer support and enhances user experience.',
    longDescription: 'AI Assistant is a sophisticated virtual assistant that uses natural language processing and machine learning to provide intelligent customer support. It can handle complex queries, learn from interactions, and seamlessly transfer to human agents when needed.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    ],
    features: ['Natural Language Processing', 'Multi-language Support', 'Custom Training', 'API Integration'],
    pricing: {
      basic: 199,
      premium: 499,
      enterprise: 1999,
    },
    demo: '/demos/ai-assistant',
    category: 'AI & Machine Learning',
    demoUrl: '/demos/ai-assistant',
    documentationUrl: '/docs/ai-assistant',
    featured: true,
  },
]

export const services: Service[] = [
  {
    id: '1',
    name: 'Custom Software Development',
    description: 'Tailored software solutions built to meet your unique business requirements and scale with your growth.',
    longDescription: 'Our custom software development service delivers bespoke solutions designed specifically for your business needs. We use modern technologies and agile methodologies to create scalable, maintainable, and high-performance applications.',
    icon: 'CodeBracketIcon',
    features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration'],
    process: [
      { step: 1, title: 'Discovery & Planning', description: 'We analyze your requirements and create a detailed project plan', icon: 'DocumentTextIcon' },
      { step: 2, title: 'Design & Architecture', description: 'We design the system architecture and user interface', icon: 'CogIcon' },
      { step: 3, title: 'Development', description: 'Our team builds your solution using agile methodologies', icon: 'CodeBracketIcon' },
      { step: 4, title: 'Testing & Quality Assurance', description: 'Comprehensive testing ensures your solution works perfectly', icon: 'CheckCircleIcon' },
      { step: 5, title: 'Deployment & Support', description: 'We deploy your solution and provide ongoing support', icon: 'RocketLaunchIcon' },
    ],
    benefits: ['Scalable Architecture', 'Modern Technology Stack', 'Agile Development Process', 'Ongoing Support & Maintenance'],
    caseStudies: ['E-Commerce Platform Modernization', 'Healthcare Data Analytics Platform'],
    featured: true,
  },
  {
    id: '2',
    name: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to modernize your business operations.',
    longDescription: 'Transform your business with our comprehensive cloud solutions. We help you migrate to the cloud, optimize your infrastructure, and implement DevOps practices for maximum efficiency and scalability.',
    icon: 'CloudIcon',
    features: ['Cloud Migration', 'DevOps & CI/CD', 'Microservices', 'Container Orchestration'],
    process: [
      { step: 1, title: 'Assessment', description: 'We evaluate your current infrastructure and requirements', icon: 'DocumentTextIcon' },
      { step: 2, title: 'Strategy Planning', description: 'We create a detailed cloud migration strategy', icon: 'CogIcon' },
      { step: 3, title: 'Migration', description: 'We migrate your applications and data to the cloud', icon: 'CloudIcon' },
      { step: 4, title: 'Optimization', description: 'We optimize your cloud infrastructure for performance', icon: 'CogIcon' },
      { step: 5, title: 'Monitoring', description: 'We set up monitoring and provide ongoing support', icon: 'ChartBarIcon' },
    ],
    benefits: ['Cost Reduction', 'Improved Scalability', 'Enhanced Security', 'Better Performance'],
    caseStudies: ['E-Commerce Platform Modernization', 'Healthcare Data Analytics Platform'],
    featured: true,
  },
  {
    id: '3',
    name: 'AI Integration',
    description: 'Intelligent automation and AI-powered solutions to enhance your business processes and decision-making.',
    longDescription: 'Leverage the power of artificial intelligence to automate processes, gain insights from data, and enhance customer experiences. Our AI solutions are tailored to your specific business needs and integrated seamlessly with your existing systems.',
    icon: 'CpuChipIcon',
    features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    process: [
      { step: 1, title: 'AI Strategy', description: 'We develop an AI strategy aligned with your business goals', icon: 'DocumentTextIcon' },
      { step: 2, title: 'Data Preparation', description: 'We prepare and clean your data for AI model training', icon: 'CogIcon' },
      { step: 3, title: 'Model Development', description: 'We develop and train custom AI models for your use case', icon: 'CpuChipIcon' },
      { step: 4, title: 'Integration', description: 'We integrate AI models into your existing systems', icon: 'CogIcon' },
      { step: 5, title: 'Monitoring', description: 'We monitor model performance and provide ongoing optimization', icon: 'ChartBarIcon' },
    ],
    benefits: ['Process Automation', 'Data-Driven Insights', 'Enhanced Customer Experience', 'Competitive Advantage'],
    caseStudies: ['AI-Powered Customer Support System', 'Healthcare Data Analytics Platform'],
    featured: true,
  },
  {
    id: '4',
    name: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    longDescription: 'Create powerful mobile applications that engage your users and drive business growth. We develop both native and cross-platform apps using the latest technologies and best practices.',
    icon: 'DevicePhoneMobileIcon',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    process: [
      { step: 1, title: 'UX/UI Design', description: 'We design intuitive and engaging user interfaces', icon: 'DocumentTextIcon' },
      { step: 2, title: 'Architecture', description: 'We design the app architecture and technical specifications', icon: 'CogIcon' },
      { step: 3, title: 'Development', description: 'We develop your app using modern frameworks and tools', icon: 'DevicePhoneMobileIcon' },
      { step: 4, title: 'Testing', description: 'We thoroughly test your app across different devices', icon: 'CheckCircleIcon' },
      { step: 5, title: 'Launch', description: 'We help you launch your app and provide ongoing support', icon: 'RocketLaunchIcon' },
    ],
    benefits: ['Cross-Platform Compatibility', 'Native Performance', 'Modern UI/UX', 'App Store Optimization'],
    caseStudies: ['E-Commerce Platform Modernization'],
    featured: true,
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Sarah is a visionary leader with over 15 years of experience in software development and business strategy. She founded 5Xcodes with the mission to accelerate digital transformation for businesses worldwide.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson',
    },
    skills: ['Leadership', 'Strategy', 'Software Development', 'Business Development'],
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Michael is a technology expert with deep expertise in cloud architecture, AI, and scalable systems. He leads our technical strategy and ensures we deliver cutting-edge solutions.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      github: 'https://github.com/michaelchen',
    },
    skills: ['Cloud Architecture', 'AI/ML', 'System Design', 'DevOps'],
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Emily is a creative leader who brings user-centered design principles to every project. She ensures our solutions are not only functional but also beautiful and intuitive.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      twitter: 'https://twitter.com/emilyrodriguez',
    },
    skills: ['UX/UI Design', 'User Research', 'Design Systems', 'Prototyping'],
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Lead Developer',
    bio: 'David is a full-stack developer with expertise in modern web technologies. He leads our development team and ensures code quality and best practices.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com/in/davidkim',
      github: 'https://github.com/davidkim',
    },
    skills: ['React', 'Node.js', 'Python', 'Database Design'],
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Project Manager',
    bio: 'Lisa ensures all projects are delivered on time and within budget. She coordinates between teams and clients to ensure smooth project execution.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com/in/lisathompson',
    },
    skills: ['Project Management', 'Agile', 'Client Relations', 'Risk Management'],
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'AI/ML Engineer',
    bio: 'James specializes in artificial intelligence and machine learning solutions. He develops custom AI models and integrates them into business applications.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    social: {
      linkedin: 'https://linkedin.com/in/jameswilson',
      github: 'https://github.com/jameswilson',
    },
    skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science'],
  },
]

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: '2020',
    title: 'Company Founded',
    description: '5Xcodes was founded with the vision to accelerate digital transformation for businesses worldwide.',
  },
  {
    id: '2',
    year: '2020',
    title: 'First Client Project',
    description: 'Successfully delivered our first custom software solution, establishing our reputation for quality.',
  },
  {
    id: '3',
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew our team to 10+ experts across development, design, and project management.',
  },
  {
    id: '4',
    year: '2021',
    title: 'Cloud Solutions Launch',
    description: 'Launched our cloud migration and DevOps services, helping clients modernize their infrastructure.',
  },
  {
    id: '5',
    year: '2022',
    title: 'AI Integration Services',
    description: 'Introduced AI and machine learning services, enabling clients to leverage cutting-edge technology.',
  },
  {
    id: '6',
    year: '2022',
    title: '100+ Projects Delivered',
    description: 'Reached the milestone of delivering 100+ successful projects across various industries.',
  },
  {
    id: '7',
    year: '2023',
    title: 'Product Suite Launch',
    description: 'Launched our first SaaS products: CloudFlow, DataViz Pro, and AI Assistant.',
  },
  {
    id: '8',
    year: '2023',
    title: 'Strategic Partnerships',
    description: 'Formed partnerships with major cloud providers and technology companies.',
  },
  {
    id: '9',
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanded our services globally, serving clients across North America, Europe, and Asia.',
  },
]
