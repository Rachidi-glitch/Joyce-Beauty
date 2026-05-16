import Image from 'next/image'

const images = ['/medias/gal1.png', '/medias/gal2.png', '/medias/gal3.png']

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-beauty-rose p-10">
      <div className="text-center">
        <h2 className="title text-3xl font-bold mb-4 lg:text-4xl">Galerie</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="gallery"
            width={400}
            height={500}
            className="rounded-[30px] object-cover h-[500px] w-full"
          />
        ))}
      </div>
    </section>
  )
}