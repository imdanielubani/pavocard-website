import PrivacyHero from "@/components/sections/PrivacyHero";
import PrivacyContent from "@/components/sections/PrivacyContent";

export const metadata = {
  title: "Privacy Policy | Pavocard",
  description:
    "Read the Privacy Policy for Pavocard — learn how we collect, use, and protect your information on the fastest and most secure gift card trading platform for Nigeria and Ghana.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <PrivacyHero />
      <PrivacyContent />
    </main>
  );
}
