import type { Metadata } from 'next'
import { Roboto, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { defaultMetadata } from '@/app/metadata'
import { ThemeProvider } from '@/app/providers'
import { LanguageProvider } from '@/app/LanguageProvider'
import { Layout as LayoutComponent } from '@/components/Layout'

const inter = Roboto({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-geist-sans',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <LayoutComponent>{children}</LayoutComponent>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
