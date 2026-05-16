const testimonials = [
  {
    name: 'Sarah',
    text: 'Service exceptionnel et ambiance relaxante.',
  },
  {
    name: 'Emma',
    text: 'Le meilleur cabinet esthétique que j’ai testé.',
  },
  {
    name: 'Laura',
    text: 'Personnel très professionnel et chaleureux.',
  },
]

export default function Testimonials() {
  return (
    <section className="section bg-beauty-cream p-10">
      <div className="text-center">
        <h2 className="title text-3xl font-bold mb-4 lg:text-4xl">Avis clientes</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-beauty-rose rounded-3xl p-8 shadow-lg"
          >
            <p className="text-gray-600 leading-7">
              “{item.text}”
            </p>

            <h3 className="mt-5 font-bold text-lg">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}