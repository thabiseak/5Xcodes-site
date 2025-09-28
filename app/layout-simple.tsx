import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '5Xcodes - Accelerate Your Digital Future 5X Faster',
  description: 'Premium software development company specializing in custom software, cloud solutions, AI integration, and app development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
