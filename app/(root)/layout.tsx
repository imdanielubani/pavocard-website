import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CallToAction from "@/components/sections/CallToAction";
import PageTransition from "@/components/ui/PageTransition";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <CallToAction />
      <Footer />
    </>
  );
}
