# 5Xcodes - Premium Software Development Website

A world-class, futuristic, premium Next.js website for 5Xcodes - a leading software development company specializing in custom solutions, AI integration, cloud technologies, and digital transformation.

## 🚀 Features

### Design & User Experience
- **Futuristic Premium Design** - Glassmorphism effects, neon glows, and premium aesthetics
- **Cinematic Animations** - Framer Motion powered smooth transitions and micro-interactions
- **Floating Code Particles** - Interactive hero section with animated code elements
- **Responsive Design** - Mobile-first approach with perfect scaling across all devices
- **Dark/Light Mode** - Theme switching with system preference detection

### Technical Excellence
- **Next.js 14** - App Router with Server Components for optimal SEO
- **TypeScript** - Full type safety and enhanced developer experience
- **Tailwind CSS** - Custom design system with premium utilities
- **Framer Motion** - Smooth animations and transitions
- **Performance Optimized** - Aiming for 100 Lighthouse score

### SEO & Marketing
- **Comprehensive SEO** - Metadata, structured data, sitemap, robots.txt
- **Open Graph** - Social media optimization
- **Analytics Ready** - Google Analytics integration
- **Accessibility** - WCAG 2.1 AA compliant

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom SCSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Fonts**: Inter (body), Poppins (headings)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
5Xcodes/
├── app/                          # Next.js App Router
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── privacy/                 # Privacy policy
│   ├── terms/                   # Terms of service
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── robots.txt               # SEO robots file
│   └── sitemap.ts               # Dynamic sitemap
├── components/                   # React components
│   ├── about/                   # About page components
│   ├── contact/                 # Contact page components
│   ├── home/                    # Home page components
│   ├── icons/                   # Icon components
│   ├── ui/                      # UI components
│   ├── Analytics.tsx            # Analytics component
│   ├── AIChatbot.tsx            # AI chatbot widget
│   ├── Footer.tsx               # Site footer
│   ├── Header.tsx               # Site header
│   ├── StructuredData.tsx       # SEO structured data
│   └── ThemeProvider.tsx        # Theme management
├── data/                        # Static data files
├── lib/                         # Utility functions
├── public/                      # Static assets
└── types/                       # TypeScript type definitions
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Navy (#001F3F)
- **Accent**: Electric Blue (#00BFFF)
- **Secondary**: Neon Purple (#8B5CF6)
- **Background**: White/Gray with glassmorphism
- **Gradients**: Premium gradient combinations

### Typography
- **Headings**: Poppins (300-800 weights)
- **Body**: Inter (300-800 weights)
- **Monospace**: JetBrains Mono, Fira Code

### Components
- **Glassmorphism Cards** - Frosted glass effects
- **Neon Glows** - Electric blue glow effects
- **Gradient Buttons** - Premium gradient buttons
- **Floating Elements** - Animated floating particles
- **Interactive Hover States** - Smooth hover animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/5xcodes/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Update the following variables:
   ```env
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_SITE_URL=https://5xcodes.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run type-check   # Run TypeScript type checking
```

## 🎯 Performance Optimization

### Lighthouse Score Target: 100/100

- **Performance**: Optimized images, lazy loading, code splitting
- **Accessibility**: WCAG 2.1 AA compliant
- **Best Practices**: Security headers, HTTPS, modern standards
- **SEO**: Comprehensive metadata, structured data, sitemap

### Optimization Features
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Analysis**: Optimized JavaScript bundles
- **Caching**: Strategic caching for static assets

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `app/`
2. Add `page.tsx` with your component
3. Update navigation in `components/Header.tsx`
4. Add to sitemap in `app/sitemap.ts`

### Modifying Styles
- **Global Styles**: `app/globals.css`
- **Component Styles**: Use Tailwind classes
- **Custom Utilities**: Add to `tailwind.config.js`
- **Animations**: Extend in `globals.css`

### Adding Content
- **Services**: Update `data/services.ts`
- **Products**: Update `data/products.ts`
- **Team**: Update `data/team.ts`
- **Testimonials**: Update `data/testimonials.ts`

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

### Mobile-First Approach
- All components designed mobile-first
- Progressive enhancement for larger screens
- Touch-friendly interactions
- Optimized performance on mobile devices

## 🎨 Animation System

### Framer Motion Integration
- **Page Transitions**: Smooth route transitions
- **Scroll Animations**: Reveal on scroll effects
- **Hover States**: Interactive micro-animations
- **Loading States**: Smooth loading animations
- **Gesture Support**: Touch and mouse gestures

### Animation Principles
- **Performance**: 60fps animations
- **Accessibility**: Respects `prefers-reduced-motion`
- **Consistency**: Unified animation language
- **Purpose**: Animations enhance UX, don't distract

## 🔍 SEO Features

### Technical SEO
- **Meta Tags**: Comprehensive meta tag system
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Prevent duplicate content

### Content SEO
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Descriptive image alt attributes
- **Internal Linking**: Strategic internal link structure
- **Page Speed**: Optimized for Core Web Vitals

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
# Build the project
npm run build

# Start production server
npm run start
```

### Environment Variables
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SITE_URL=https://5xcodes.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-api-key
```

## 🧪 Testing

### Test Setup
- **Jest**: Unit and integration testing
- **React Testing Library**: Component testing
- **Accessibility Testing**: Automated a11y tests
- **Visual Regression**: Screenshot testing

### Running Tests
```bash
npm run test              # Run all tests
npm run test:watch        # Watch mode
npm run test:coverage     # Coverage report
```

## 📊 Analytics & Monitoring

### Google Analytics
- Page view tracking
- Event tracking for interactions
- Conversion tracking
- User behavior analysis

### Performance Monitoring
- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Error tracking and reporting
- Performance budgets

## 🔒 Security

### Security Headers
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy

### Best Practices
- Input validation and sanitization
- Secure API endpoints
- HTTPS enforcement
- Regular dependency updates

## 🌐 Browser Support

### Modern Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Progressive Enhancement
- Core functionality works in all browsers
- Enhanced features for modern browsers
- Graceful degradation for older browsers

## 📈 Performance Metrics

### Target Metrics
- **Lighthouse Score**: 100/100
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Optimization Techniques
- Image optimization and lazy loading
- Code splitting and tree shaking
- CDN for static assets
- Service worker for caching

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

### Code Standards
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Conventional commits for git messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Getting Help
- Create an issue on GitHub
- Contact us at hello@5xcodes.com
- Join our Discord community

## 🎉 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Heroicons** - For beautiful icons
- **Vercel** - For seamless deployment

---

**Built with ❤️ by the 5Xcodes Team**

*Accelerating your digital future 5X faster*# 5Xcodes-site
