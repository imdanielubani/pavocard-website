import BlogHero from "@/components/sections/BlogHero";
import BlogList from "@/components/sections/BlogList";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BlogsPage() {
  return (
    <main className="bg-white min-h-screen">
      <BlogHero />
      <ScrollReveal delay={0.05}>
        <BlogList />
      </ScrollReveal>
    </main>
  );
}
