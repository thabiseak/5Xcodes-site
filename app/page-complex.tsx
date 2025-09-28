import { Hero } from '@/components/home/Hero'
import { Services } from '@/components/home/Services'
import { Products } from '@/components/home/Products'
import { ClientLogos } from '@/components/home/ClientLogos'
import { Testimonials } from '@/components/home/Testimonials'
import { Blog } from '@/components/home/Blog'
import { CTA } from '@/components/home/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <ClientLogos />
      <Testimonials />
      <Blog />
      <CTA />
    </>
  )
}

