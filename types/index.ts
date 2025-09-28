export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  industry: string;
  category?: string;
  client: string;
  duration?: string;
  solution?: string;
  challenges?: string[];
  completed?: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  featured: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  features: string[];
  pricing: {
    basic: number;
    premium: number;
    enterprise: number;
  };
  image: string;
  demo: string;
  category: string;
  featured: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  position?: string;
  company: string;
  content: string;
  quote?: string;
  rating: number;
  image: string;
  avatar?: string;
  featured: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
}