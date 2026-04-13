import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/constants/blog";

interface BlogDetailContentProps {
  post: BlogPost;
  related: BlogPost | undefined;
}

export default function BlogDetailContent({ post, related }: BlogDetailContentProps) {
  return (
    <section className="w-full bg-white px-6 pb-[80px] md:pb-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10 md:gap-14">

        {/* ── Cover image card ── */}
        <div className="bg-[#f8f8f8] rounded-[24px] sm:rounded-[30px] p-4 sm:p-6 md:p-[43px]">
          <div className="relative w-full rounded-[16px] sm:rounded-[24px] overflow-hidden aspect-[1150/602]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* ── Date + Body content ── */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-[60px] items-start">
          {/* Date sidebar */}
          <div className="shrink-0 md:w-[120px] lg:w-[160px]">
            <p className="font-sans text-[#171717] text-[16px] sm:text-[18px] leading-[28px]">
              {post.date.split(", ").join(",\n")}
            </p>
          </div>

          {/* Article body */}
          <div className="flex-1 flex flex-col gap-6">
            {post.body.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans font-normal text-[#171717] text-[16px] sm:text-[18px] leading-[32px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* ── Related Article ── */}
        {related && (
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Badge */}
            <div className="badge-glow inline-flex items-center px-4 py-[6px] rounded-full bg-[#008236] w-fit">
              <span className="inline-flex items-center gap-1.5 text-white font-semibold text-[16px] font-sans leading-none">
                Related Article
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/star.png" alt="" width={16} height={16} className="inline-block" />
              </span>
            </div>

            {/* Related card */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
              {/* Image card */}
              <div className="bg-[#f8f8f8] rounded-[24px] sm:rounded-[30px] p-5 sm:p-[30px] w-full sm:max-w-[554px] shrink-0">
                <div className="relative w-full rounded-[16px] sm:rounded-[20px] overflow-hidden aspect-[488/318]">
                  <Image
                    src={related.listImage}
                    alt={related.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Related content */}
              <div className="flex flex-col gap-5">
                <p className="font-sans text-[#6b7280] text-[14px] sm:text-[16px] leading-[24px]">
                  {related.date}
                </p>
                <h3
                  className="font-sans font-semibold text-black leading-[1.3] sm:leading-[29px] tracking-[-0.5px]"
                  style={{ fontSize: "clamp(18px, 1.8vw, 20px)" }}
                >
                  {related.title}
                </h3>
                <p className="font-sans font-normal text-black/50 text-[15px] sm:text-[18px] leading-relaxed max-w-[442px]">
                  {related.excerpt}
                </p>
                <Link
                  href={`/blogs/${related.slug}`}
                  className="inline-flex items-center justify-center h-[48px] w-[122px] rounded-full bg-[#046f2b] text-white font-sans text-[16px] tracking-[-0.4px] hover:scale-[1.04] hover:shadow-[0_0_18px_rgba(4,111,43,0.45)] active:scale-[0.97] transition-all duration-200 ease-out"
                  style={{ border: "5px solid rgba(80,194,122,0.5)" }}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
