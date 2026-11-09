import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import TrainingSection from "@/components/sections/TrainingSection";
import FaqSection from "@/components/sections/FaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <TrainingSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
