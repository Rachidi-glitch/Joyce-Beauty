import Image from "next/image";
import Header from "./_components/header/page";
import Hero from "./_components/hero/page";
import Services from "./_components/services/page";
import About from "./_components/about/page";
import Gallery from "./_components/gallery/page";
import Testimonials from "./_components/testimonials/page";
import Contact from "./_components/contact/page";
import Footer from "./_components/footer/page";

export default function Home() {
  return (
    <>
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
    </>
  );
}
