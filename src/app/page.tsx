import Image from "next/image";
import Header from "./components/Header/page";
import Hero from "./components/Hero/page";
import Services from "./components/Services/page";
import About from "./components/About/page";
import Gallery from "./components/Gallery/page";
import Testimonials from "./components/Testimonials/page";
import Contact from "./components/Contact/page";
import Footer from "./components/Footer/page";

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
