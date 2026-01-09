import {Hero} from "@/components/Hero";
import {Navbar} from "@/components/Navbar";
import {About} from "@/components/About";
import {Products} from "@/components/Products";
import {Gallery} from "@/components/Gallery";
import {Contact} from "@/components/Contact";
import {Footer} from "@/components/Footer";
import {Partnership} from "@/components/Partnership";
import {FAQ} from "@/components/FAQ";
import {HowToOrder} from "@/components/HowToOrder";
import { WhatsAppFloating } from "@/components/FloatingIcons";

export default function Home() {
  return (
    <div className='min-h-screen bg-background-dark text-white'>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Partnership />
      <FAQ />
      <HowToOrder />
      <Contact />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloating />
    </div>
  );
}