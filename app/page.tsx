import AboutUs from "./components/pages/home/AboutUs";
import FormSection from "./components/pages/home/FormSection";
import Gallery from "./components/pages/home/Gallery";
import HeroSection from "./components/pages/home/HeroSection";
import MarqueeLoop from "./components/pages/home/MarqueeLoop";
import OutProducts from "./components/pages/home/OutProducts";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <MarqueeLoop />
      <OutProducts />
      <AboutUs />
      <Gallery />
      <FormSection />
    </div>
  );
}
