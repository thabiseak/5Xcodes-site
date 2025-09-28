import type { Metadata } from 'next';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogNewsletter } from '@/components/blog/BlogNewsletter';

export const metadata: Metadata = {
  title: 'Blog & Insights | 5Xcodes',
  description: 'Stay updated with the latest insights on software development, technology trends, and industry best practices from our expert team.',
  keywords: 'blog, software development, technology insights, programming, web development, mobile development',
  openGraph: {
    title: 'Blog & Insights | 5Xcodes',
    description: 'Stay updated with the latest insights on software development and technology trends.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <BlogSearch />
      <BlogGrid />
      <BlogNewsletter />
    </main>
  );
}
