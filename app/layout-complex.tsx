import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@/components/Analytics'
import { Toaster } from '@/components/ui/Toaster'
import { AIChatbot } from '@/components/AIChatbot'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: '5Xcodes - Accelerate Your Digital Future 5X Faster',
    template: '%s | 5Xcodes',
  },
  description:
    'Premium software development company specializing in custom software, cloud solutions, AI integration, and app development. Transform your business with cutting-edge technology.',
  keywords: [
    'software development',
    'custom software',
    'cloud solutions',
    'AI integration',
    'app development',
    'digital transformation',
    'enterprise software',
    'web development',
    'mobile development',
  ],
  authors: [{ name: '5Xcodes Team' }],
  creator: '5Xcodes',
  publisher: '5Xcodes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://5xcodes.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://5xcodes.vercel.app',
    title: '5Xcodes - Accelerate Your Digital Future 5X Faster',
    description:
      'Premium software development company specializing in custom software, cloud solutions, AI integration, and app development.',
    siteName: '5Xcodes',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '5Xcodes - Premium Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5Xcodes - Accelerate Your Digital Future 5X Faster',
    description:
      'Premium software development company specializing in custom software, cloud solutions, AI integration, and app development.',
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
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#001F3F" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
        <AIChatbot />
      </body>
    </html>
  )
}

