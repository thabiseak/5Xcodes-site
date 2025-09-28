'use client';

import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { Products } from '@/components/home/Products';
import { Testimonials } from '@/components/home/Testimonials';
import { CTA } from '@/components/home/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Products />
      <Testimonials />
      <CTA />
    </main>
  );
}