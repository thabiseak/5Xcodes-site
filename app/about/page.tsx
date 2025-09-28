import { AboutHero } from '@/components/about/AboutHero';
import { CompanyStory } from '@/components/about/CompanyStory';
import { Values } from '@/components/about/Values';
import { TeamSection } from '@/components/about/TeamSection';

export const metadata = {
  title: 'About Us - 5Xcodes',
  description: 'Learn about 5Xcodes - our mission, values, team, and journey in accelerating digital transformation for businesses worldwide.',
  keywords: [
    'about 5xcodes',
    'company story',
    'team members',
    'company values',
    'mission statement',
    'leadership team'
  ],
  openGraph: {
    title: 'About Us - 5Xcodes',
    description: 'Learn about 5Xcodes - our mission, values, team, and journey in accelerating digital transformation for businesses worldwide.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <Values />
      <TeamSection />
    </main>
  );
}