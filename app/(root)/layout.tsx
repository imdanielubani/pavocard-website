import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CallToAction from "@/components/sections/CallToAction";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <CallToAction />
      <Footer />
    </>
  );
}
