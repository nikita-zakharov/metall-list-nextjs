import AboutUs from "./components/AboutUs";
import BaseLayout from "./components/BaseLayout";
import FormSection from "./components/FormSection";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import MarqueeLoop from "./components/MarqueeLoop";
import OurProducts from "./components/OutProducts";

export default function Home() {
  return (
    <BaseLayout>
      <>
        <HeroSection />
        <MarqueeLoop />
        <OurProducts />
        <Gallery />
        <AboutUs />
        <FormSection />
      </>
    </BaseLayout>
  );
}
