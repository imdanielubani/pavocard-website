import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import HomeFAQ from "@/components/sections/HomeFAQ";
import CallToAction from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Testimonials />
      <HomeFAQ />
    </main>
  );
}
