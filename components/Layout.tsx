import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { ProgressBar } from '@/components/ProgressBar'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar />
      <Header />
      <main className="min-h-screen">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
          {children}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
