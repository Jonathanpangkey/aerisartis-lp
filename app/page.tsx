import {Hero} from "@/components/Hero";
import {Navbar} from "@/components/Navbar";
import {About} from "@/components/About";
import {Featured} from "@/components/Featured";
import {Gallery} from "@/components/Gallery";
import {Contact} from "@/components/Contact";
import {Footer} from "@/components/Footer";
import {Partnership} from "@/components/Partnership";
import {FAQ} from "@/components/FAQ";
import {HowToOrder} from "@/components/HowToOrder";

export default function Home() {
  return (
    <div className='min-h-screen bg-background-dark text-white'>
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <Gallery />
      <Partnership />
      <FAQ />
      <HowToOrder />
      <Contact />
      <Footer />
    </div>
  );
}
