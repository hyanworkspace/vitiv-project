import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Explore from '@/components/Explore'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Explore />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

