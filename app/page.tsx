import {Hero} from "@/components/Hero";
import {Navbar} from "@/components/Navbar";
import {About} from "@/components/About";
import {Featured} from "@/components/Featured";
import {Gallery} from "@/components/Gallery";
import {Contact} from "@/components/Contact";
import {Footer} from "@/components/Footer";
import {Partnership} from "@/components/Partnership";

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-white'>
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <Gallery />
      <Partnership />
      <Contact />
      <Footer />
    </div>
  );
}
