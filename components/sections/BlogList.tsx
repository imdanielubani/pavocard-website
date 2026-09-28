import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants/blog";

const posts = BLOG_POSTS.map((p) => ({
  date: p.date,
  title: p.title,
  excerpt: p.excerpt,
  image: p.listImage,
  href: `/blogs/${p.slug}`,
}));

export default function BlogList() {
  return (
    <section className="w-full bg-white px-6 pb-[80px] md:pb-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-6">
        {posts.map((post, i) => (
          <article
            key={i}
            className="bg-[#f8f8f8] rounded-[24px] sm:rounded-[30px] overflow-hidden flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-[76px] p-6 sm:p-8 lg:p-[30px]"
          >
            {/* Image */}
            <div className="w-full lg:w-[52%] flex-shrink-0 rounded-[16px] sm:rounded-[20px] overflow-hidden aspect-[639/418]">
              <Image
                src={post.image}
                alt={post.title}
                width={640}
                height={418}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5 flex-1">
              {/* Date */}
              <p className="font-sans text-[#6b7280] text-[14px] sm:text-[16px] leading-[24px]">
                {post.date}
              </p>

              {/* Title */}
              <h2
                className="font-sans font-semibold text-black leading-[1.15] sm:leading-[57px] tracking-[-1.5px] sm:tracking-[-2px]"
                style={{ fontSize: "clamp(26px, 3.5vw, 50px)" }}
              >
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="font-sans font-normal text-black/50 text-[15px] sm:text-[18px] leading-relaxed max-w-[442px]">
                {post.excerpt}
              </p>

              {/* Read More */}
              <Link
                href={post.href}
                className="inline-flex items-center justify-center h-[48px] w-[122px] rounded-full bg-[#046f2b] text-white font-sans text-[16px] tracking-[-0.4px] hover:scale-[1.04] hover:shadow-[0_0_18px_rgba(4,111,43,0.45)] active:scale-[0.97] transition-all duration-200 ease-out"
                style={{ border: "5px solid rgba(80,194,122,0.5)" }}
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
