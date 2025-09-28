import type { Metadata } from 'next';
import { ProductsHero } from '@/components/products/ProductsHero';
import { ProductsShowcase } from '@/components/products/ProductsShowcase';
import { ProductsPricing } from '@/components/products/ProductsPricing';
import { ProductsComparison } from '@/components/products/ProductsComparison';
import { ProductsCTA } from '@/components/products/ProductsCTA';

export const metadata: Metadata = {
  title: 'Software Products & Solutions | 5Xcodes',
  description: 'Discover our innovative software products: SaaS tools, analytics platforms, and enterprise solutions designed to accelerate your business growth.',
  keywords: 'software products, SaaS tools, analytics platforms, enterprise solutions, business software',
  openGraph: {
    title: 'Software Products & Solutions | 5Xcodes',
    description: 'Discover our innovative software products designed to accelerate your business growth.',
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <ProductsHero />
      <ProductsShowcase />
      <ProductsPricing />
      <ProductsComparison />
      <ProductsCTA />
    </main>
  );
}
