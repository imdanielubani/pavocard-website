import FaqHero from "@/components/sections/FaqHero";
import FaqList from "@/components/sections/FaqList";

export const metadata = {
  title: "FAQs | Pavocard",
  description:
    "Find answers to frequently asked questions about Pavocard — the fastest and most secure gift card trading platform for Nigeria and Ghana.",
};

export default function FaqPage() {
  return (
    <main className="bg-white">
      <FaqHero />
      <FaqList />
    </main>
  );
}
