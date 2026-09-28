import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPost } from "@/lib/constants/blog";
import BlogDetailHero from "@/components/sections/BlogDetailHero";
import BlogDetailContent from "@/components/sections/BlogDetailContent";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPost(slug);

  return (
    <main className="bg-white min-h-screen">
      <BlogDetailHero title={post.title} excerpt={post.excerpt} />
      <ScrollReveal delay={0.05}>
        <BlogDetailContent post={post} related={related} />
      </ScrollReveal>
    </main>
  );
}
