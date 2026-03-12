import { Metadata } from 'next'

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://twoja-domena.vercel.app'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Aleksander Zadubiec | Portfolio',
    template: '%s | Aleksander Zadubiec',
  },
  description:
    'Portfolio Aleksandra Zadubca. Full-stack i Java: Spring Boot, Angular, aplikacje webowe. Projekty: UpDog, Manga Panel Downloader, Vocal2MIDI-Live, Media Player.',
  keywords: [
    'Aleksander Zadubiec',
    'Java',
    'Spring Boot',
    'Angular',
    'C++',
    'JUCE',
    'VST3',
    'Portfolio',
    'Full-stack',
  ],
  authors: [{ name: 'Aleksander Zadubiec', url: 'https://github.com/Alok2221' }],
  creator: 'Aleksander Zadubiec',
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: siteUrl,
    siteName: 'Aleksander Zadubiec - Portfolio',
    title: 'Aleksander Zadubiec | Full-stack & Java Developer',
    description: 'Portfolio: Spring Boot, Angular, C++/JUCE. Projekty: UpDog, Manga Panel Downloader, Vocal2MIDI-Live.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aleksander Zadubiec | Portfolio',
    description: 'Full-stack & Java Developer. Projekty: UpDog, Manga Panel Downloader, Vocal2MIDI-Live, Media Player.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(siteUrl),
}
