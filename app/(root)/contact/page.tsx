import ContactHero from "@/components/sections/ContactHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Us | Pavocard",
  description:
    "Get in touch with the Pavocard team. We're here to help with any questions about gift card trading.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <ContactSection />
    </main>
  );
}
