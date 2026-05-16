import Image from "next/image";
import Header from "./components/header/page";
import Hero from "./components/hero/page";
import Services from "./components/services/page";
import About from "./components/about/page";
import Gallery from "./components/gallery/page";
import Testimonials from "./components/testimonials/page";
import Contact from "./components/contact/page";
import Footer from "./components/footer/page";

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
