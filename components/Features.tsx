import { Camera, Eye, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: <Camera className="w-12 h-12 mb-4" />,
    title: 'Capture',
    description: 'Use internal or external cameras to capture videos of the world around you.'
  },
  {
    icon: <Eye className="w-12 h-12 mb-4" />,
    title: 'Perceive',
    description: 'Our AI analyzes the visual content and provides unique insights.'
  },
  {
    icon: <MessageSquare className="w-12 h-12 mb-4" />,
    title: 'Exchange',
    description: 'Engage in a dialogue with our AI about your perceptions and creations.'
  }
]

export default function Features() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">How VITIV Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

