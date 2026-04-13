interface BlogDetailHeroProps {
  title: string;
  excerpt: string;
}

export default function BlogDetailHero({ title, excerpt }: BlogDetailHeroProps) {
  return (
    <section className="w-full bg-white pt-[120px] sm:pt-[140px] md:pt-[160px] pb-[40px] md:pb-[56px] px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center gap-5">
        {/* Badge */}
        <div className="badge-glow inline-flex items-center px-4 py-[6px] rounded-full bg-[#008236]">
          <span className="inline-flex items-center gap-1.5 text-white font-semibold text-[16px] font-sans leading-none">
            Blog Details
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/star.png" alt="" width={16} height={16} className="inline-block" />
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-sans font-semibold text-black capitalize leading-[1.2] lg:leading-[84px] tracking-[-2px] sm:tracking-[-2.5px] lg:tracking-[-3px] max-w-[775px]"
          style={{ fontSize: "clamp(32px, 5vw, 70px)" }}
        >
          {title}
        </h1>

        {/* Excerpt */}
        <p className="font-sans font-normal text-[#343434] text-[16px] sm:text-[18px] tracking-[-0.6px] leading-[27px] max-w-[700px]">
          {excerpt}
        </p>
      </div>
    </section>
  );
}
