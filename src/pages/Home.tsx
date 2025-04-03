import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
    </main>
  );
} 