import AboutHero from "@/components/sections/AboutHero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import StatsBar from "@/components/sections/StatsBar";
import PhoneMockup from "@/components/sections/PhoneMockup";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = {
  title: "About Us | Pavocard",
  description:
    "Learn about Pavocard — the fastest and most secure gift card trading platform for Nigeria and Ghana.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <WhoWeAre />
      <StatsBar />
      <PhoneMockup />
      <Testimonials />
    </main>
  );
}
