import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://bagustri.dev'),
  title: {
    default: 'Bagus Tri Prasetyo — Fullstack Developer & Software Engineer',
    template: '%s | Bagus Tri Prasetyo',
  },
  description: 'Bagus Tri Prasetyo is a Fullstack Developer and Software Engineer in Bandung, Indonesia, building reliable, accessible, and thoughtful digital products.',
  keywords: ['Bagus Tri Prasetyo', 'Fullstack Developer', 'Software Engineer', 'Frontend Developer', 'React Developer', 'Next.js Developer', 'TypeScript', 'Bandung Developer', 'Indonesia'],
  authors: [{ name: 'Bagus Tri Prasetyo', url: 'https://bagustri3.github.io' }],
  creator: 'Bagus Tri Prasetyo',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Bagus Tri Prasetyo — Fullstack Developer & Software Engineer',
    description: 'Portfolio of Bagus Tri Prasetyo, a Fullstack Developer and Software Engineer building thoughtful digital experiences.',
    url: 'https://bagustri3.github.io',
    siteName: 'Bagus Tri Prasetyo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bagus Tri Prasetyo — Fullstack Developer & Software Engineer',
    description: 'Fullstack Developer and Software Engineer building thoughtful digital products.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
