import type { Metadata } from 'next'
import { Fugaz_One, Mona_Sans } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Muafar',
  description: 'A platform for good food',
  generator: 'Muafar',
  icons: {
    icon: '/favicon.ico',
  },
}

const monaSans = Mona_Sans({
  subsets: ['latin'],
  variable: '--font-mona-sans',
  weight: ['400', '500', '600', '700'],
})

const fugazOne = Fugaz_One({
  subsets: ['latin'],
  variable: '--font-fugaz-one',
  weight: ['400'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${monaSans.variable} ${fugazOne.variable}`} suppressHydrationWarning>
      <body className={`${monaSans.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
