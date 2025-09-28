import type { Metadata } from 'next';
import { CloudSolutionsHero } from '@/components/services/CloudSolutionsHero';
import { CloudSolutionsProcess } from '@/components/services/CloudSolutionsProcess';
import { CloudSolutionsBenefits } from '@/components/services/CloudSolutionsBenefits';
import { CloudSolutionsCTA } from '@/components/services/CloudSolutionsCTA';

export const metadata: Metadata = {
  title: 'Cloud Solutions & Migration Services | 5Xcodes',
  description: 'Transform your infrastructure with our cloud solutions. AWS, Azure, GCP migration, cloud architecture, and DevOps services.',
  keywords: 'cloud solutions, cloud migration, AWS, Azure, GCP, DevOps, cloud architecture',
  openGraph: {
    title: 'Cloud Solutions & Migration Services | 5Xcodes',
    description: 'Transform your infrastructure with our cloud solutions and migration services.',
    type: 'website',
  },
};

export default function CloudSolutionsPage() {
  return (
    <main className="min-h-screen">
      <CloudSolutionsHero />
      <CloudSolutionsProcess />
      <CloudSolutionsBenefits />
      <CloudSolutionsCTA />
    </main>
  );
}
