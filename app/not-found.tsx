import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import NotFoundSection from "@/components/sections/NotFoundSection";
import PageTransition from "@/components/ui/PageTransition";

export default function NotFound() {
  return (
    <main className="bg-white flex flex-col min-h-screen">
      <Navbar />
      <PageTransition>
        <div className="flex-1">
          <NotFoundSection />
        </div>
      </PageTransition>
      <Footer />
    </main>
  );
}
