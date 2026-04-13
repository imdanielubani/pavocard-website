import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import HomeFAQ from "@/components/sections/HomeFAQ";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <ScrollReveal><StatsBar /></ScrollReveal>
      <ScrollReveal delay={0.05}><HowItWorks /></ScrollReveal>
      <ScrollReveal delay={0.05}><Testimonials /></ScrollReveal>
      <ScrollReveal delay={0.05}><HomeFAQ /></ScrollReveal>
    </main>
  );
}
