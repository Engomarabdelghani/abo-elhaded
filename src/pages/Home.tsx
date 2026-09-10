import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OffersSection from "../components/OffersSection";
import VideoSection from "../components/VideoSection";
import MenuSection from "../components/MenuSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { menu } from "../data/menu";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OffersSection categories={menu} />
        <VideoSection />
        <MenuSection categories={menu} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
