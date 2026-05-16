import { Sparkles, Heart, Flower2, Brush } from 'lucide-react'

const services = [
  {
    title: 'Soins du visage',
    icon: Sparkles,
  },
  {
    title: 'Massage relaxant',
    icon: Heart,
  },
  {
    title: 'Spa & Bien-être',
    icon: Flower2,
  },
  {
    title: 'Maquillage',
    icon: Brush,
  },
]

export default function Services() {
  return (
    <section id="services" className="section bg-beauty-cream p-4">
      <div className="text-center">
        <h2 className="title text-3xl font-bold mb-4 lg:text-4xl">Nos prestations</h2>
        <p className="subtitle">
          Des soins premium adaptés à chaque cliente.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <div
              key={index}
              className="bg-beauty-rose rounded-3xl p-8 text-center hover:-translate-y-2 transition"
            >
              <div className="flex justify-center mb-5">
                <Icon className="w-10 h-10 text-primary" />
              </div>

              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}