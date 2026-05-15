import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <section
      id="about"
      className="section bg-secondary flex flex-col lg:flex-row items-center gap-8 px-6 md:px-16 w-full mx-auto p-10"
    >
      <div className="flex-1 flex justify-center items-center w-full">
        <Image
          src="/medias/spa1.png"
          alt="spa"
          width={500}
          height={400}
          className="rounded-[30px] object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col items-center text-left w-full">
        <h2 className="title text-3xl font-bold mb-4 lg:text-4xl">À propos</h2>

        <p className="subtitle w-2/3">
          Joyce Beauy est un cabinet esthétique moderne spécialisé dans les soins de beauté et de bien-être.
          Notre mission est d'offrir des expériences relaxantes et haut de gamme.
        </p>

        <Button className="btn mt-8 w-40 rounded-full bg-primary text-white hover:bg-primary/90">
          Découvrir
        </Button>
      </div>
    </section>
  )
}