import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover the Power of VITIV: Elevate Your Artistic Vision
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-normal">
            Unlock the Secrets of AI-Powered Artistry: VITIV's innovative platform harnesses the power of artificial intelligence
          </p>
          <Button size="lg" className="font-semibold">Start Creating</Button>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/ai-face-illustration.png"
              alt="Abstract AI face illustration"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Transform Your Vision</h2>
            <p className="text-lg text-gray-600 font-normal">
              Experience a new way of artistic expression through AI-powered collaboration. VITIV helps you explore and expand your creative boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

