import Image from 'next/image'

export default function Explore() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Explore</h2>
            <p className="text-xl text-gray-600">
              Unleash Your Creativity with VITIV: Discover a New Era of AI-Driven Art
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-black pl-4">
                <h3 className="text-xl font-semibold mb-2">Capture Reality</h3>
                <p className="text-gray-600">Use your camera to capture moments and transform them into artistic expressions.</p>
              </div>
              <div className="border-l-2 border-black pl-4">
                <h3 className="text-xl font-semibold mb-2">AI Enhancement</h3>
                <p className="text-gray-600">Let our AI analyze and enhance your visual storytelling in real-time.</p>
              </div>
              <div className="border-l-2 border-black pl-4">
                <h3 className="text-xl font-semibold mb-2">Creative Dialogue</h3>
                <p className="text-gray-600">Engage in meaningful conversations about your art with our AI companion.</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/camera-circles.png"
              alt="Artistic black and white photo with geometric circles"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

