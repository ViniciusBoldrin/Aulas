import { Toaster } from '@/components/ui/toaster'
import '@/styles/globals.css'
import { type Metadata } from 'next'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Integração Day',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.className} snap-y snap-mandatory overflow-x-hidden`}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/oug3nct.css" />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden scroll-smooth font-allotrope">
        {children}
      </body>
      <Toaster />
    </html>
  )
}
