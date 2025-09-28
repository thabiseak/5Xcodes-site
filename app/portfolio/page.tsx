import type { Metadata } from 'next';
import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { PortfolioFilter } from '@/components/portfolio/PortfolioFilter';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { PortfolioCTA } from '@/components/portfolio/PortfolioCTA';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | 5Xcodes',
  description: 'Explore our portfolio of successful projects and case studies. See how we\'ve helped businesses transform with custom software solutions.',
  keywords: 'portfolio, case studies, projects, software development, success stories',
  openGraph: {
    title: 'Portfolio & Case Studies | 5Xcodes',
    description: 'Explore our portfolio of successful projects and case studies.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <PortfolioHero />
      <PortfolioFilter />
      <PortfolioGrid />
      <PortfolioCTA />
    </main>
  );
}
