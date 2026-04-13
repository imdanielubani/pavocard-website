import TermsHero from "@/components/sections/TermsHero";
import TermsContent from "@/components/sections/TermsContent";

export const metadata = {
  title: "Terms & Conditions | Pavocard",
  description:
    "Read the Terms & Conditions for using Pavocard — the fastest and most secure gift card trading platform for Nigeria and Ghana.",
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <TermsHero />
      <TermsContent />
    </main>
  );
}
