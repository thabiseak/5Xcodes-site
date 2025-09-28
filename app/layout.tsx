import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@/components/Analytics';
import { AIChatbot } from '@/components/AIChatbot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: '5Xcodes - Accelerate Your Digital Future 5X Faster',
    template: '%s | 5Xcodes',
  },
  description: 'Leading software development company specializing in custom solutions, AI integration, cloud technologies, and digital transformation. Accelerate your business with cutting-edge technology.',
  keywords: [
    'software development',
    'AI integration',
    'cloud solutions',
    'digital transformation',
    'custom software',
    'machine learning',
    'web development',
    'mobile apps',
  ],
  authors: [{ name: '5Xcodes Team' }],
  creator: '5Xcodes',
  publisher: '5Xcodes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://5xcodes.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://5xcodes.com',
    title: '5Xcodes - Accelerate Your Digital Future 5X Faster',
    description: 'Leading software development company specializing in custom solutions, AI integration, cloud technologies, and digital transformation.',
    siteName: '5Xcodes',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '5Xcodes - Accelerate Your Digital Future 5X Faster',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5Xcodes - Accelerate Your Digital Future 5X Faster',
    description: 'Leading software development company specializing in custom solutions, AI integration, cloud technologies, and digital transformation.',
    images: ['/images/og-image.jpg'],
    creator: '@5xcodes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#001F3F" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="5xcodes-theme">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
          <AIChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}