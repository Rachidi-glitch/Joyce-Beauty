import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-beauty-rose pt-28 section">
      <div className="flex-1 text-center lg:text-left m-10">
        <h1 className="title leading-tight text-4xl md:text-5xl lg:text-6xl">
          Révélez 
          <br /> <span>votre beauté,</span> 
          <br /> <span className="font-signature text-red-500">naturellement</span>
        </h1>

        <p className="subtitle max-w-xl text-justify break-words overflow-wrap-anywhere">
          Des soins sur mesure pour sublimer votre peau et vous offrir une expérience beauté unique.
        </p>

        <Button className="btn mt-8 px-8" size="lg">
          Prendre rendez-vous
        </Button>
      </div>

      <div className="flex-1 mt-14 lg:mt-0 flex justify-center">
        <Image
          src="/medias/hero5.png"
          alt="beauty"
          width={500}
          height={650}
          className="rounded-[76%_24%_55%_45%_/_55%_70%_30%_45%] object-cover shadow-2xl"
        />
      </div>
    </section>
  )
}