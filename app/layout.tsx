import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdessalam Gherghouch',
  description:
    'Software engineer building AI-powered tools. Student at 1337. Systems thinker from C to multi-agent AI.',
  openGraph: {
    title: 'Abdessalam Gherghouch — Software Engineer',
    description:
      'Building tools at the intersection of systems programming and applied AI.',
    url: 'https://abdessalam.vercel.app',
  },
  twitter: {
    card: 'summary',
    creator: '@DDo__oS',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Nav />
        <main className="pt-14">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
