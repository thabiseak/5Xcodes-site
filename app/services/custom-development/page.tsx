import type { Metadata } from 'next';
import { CustomDevelopmentHero } from '@/components/services/CustomDevelopmentHero';
import { CustomDevelopmentProcess } from '@/components/services/CustomDevelopmentProcess';
import { CustomDevelopmentBenefits } from '@/components/services/CustomDevelopmentBenefits';
import { CustomDevelopmentCaseStudies } from '@/components/services/CustomDevelopmentCaseStudies';
import { CustomDevelopmentCTA } from '@/components/services/CustomDevelopmentCTA';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | 5Xcodes',
  description: 'Transform your ideas into powerful software solutions with our custom development services. Full-stack development, API integration, and scalable applications.',
  keywords: 'custom software development, full-stack development, API integration, scalable applications, software solutions',
  openGraph: {
    title: 'Custom Software Development Services | 5Xcodes',
    description: 'Transform your ideas into powerful software solutions with our custom development services.',
    type: 'website',
  },
};

export default function CustomDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <CustomDevelopmentHero />
      <CustomDevelopmentProcess />
      <CustomDevelopmentBenefits />
      <CustomDevelopmentCaseStudies />
      <CustomDevelopmentCTA />
    </main>
  );
}
