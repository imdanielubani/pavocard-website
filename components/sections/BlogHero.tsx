import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="w-full bg-white pt-[120px] sm:pt-[140px] md:pt-[160px] pb-[60px] md:pb-[80px] px-6">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center text-center gap-5">
        {/* Badge */}
        <div className="badge-glow inline-flex items-center px-4 py-[6px] rounded-full bg-[#008236]">
          <span className="inline-flex items-center gap-1.5 text-white font-semibold text-[16px] font-sans leading-none">
            Blog
            <Image src="/images/star.png" alt="" width={16} height={16} className="inline-block" />
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-sans capitalize text-[#1b1b1b] tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-3.5px] leading-[1.2] lg:leading-[84px]"
          style={{ fontWeight: 500, fontSize: "clamp(40px, 6vw, 70px)" }}
        >
          Insights &amp; Resources
        </h1>

        {/* Description */}
        <p className="font-sans font-normal text-[#343434] text-[16px] sm:text-[18px] tracking-[-0.6px] leading-[27px] max-w-[700px]">
          Explore the latest insights, tips, and updates on gift card trading, digital payments,
          <br className="hidden sm:block" />
          and financial trends in Nigeria and Ghana.
        </p>
      </div>
    </section>
  );
}
