import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { MapSection } from '@/components/contact/MapSection';

export const metadata = {
  title: 'Contact Us - 5Xcodes',
  description: 'Get in touch with 5Xcodes for your software development needs. Free consultation, transparent pricing, and 24/7 support available.',
  keywords: [
    'contact 5xcodes',
    'software development consultation',
    'get quote',
    'project inquiry',
    'free consultation',
    'contact form'
  ],
  openGraph: {
    title: 'Contact Us - 5Xcodes',
    description: 'Get in touch with 5Xcodes for your software development needs. Free consultation, transparent pricing, and 24/7 support available.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <MapSection />
    </main>
  );
}