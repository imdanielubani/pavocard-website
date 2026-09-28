import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="w-full bg-white pt-[120px] sm:pt-[130px] pb-[60px] md:pt-[164px] md:pb-[80px]">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center gap-5">
        <div className="badge-glow inline-flex items-center px-4 py-[6px] rounded-full bg-[#008236]">
          <span className="inline-flex items-center gap-1.5 text-white font-semibold text-[16px] font-sans leading-none">
            Contact Us
            <Image
              src="/images/star.png"
              alt=""
              width={16}
              height={16}
              className="inline-block"
            />
          </span>
        </div>
        <h1 className="text-[#1b1b1b] font-semibold font-sans text-[40px] md:text-[70px] leading-[1.2] md:leading-[84px] tracking-[-2px] md:tracking-[-3.5px] capitalize">
          Contact Information
        </h1>
        <p className="text-[#343434] text-[16px] md:text-[18px] font-sans leading-[27px] tracking-[-0.6px] max-w-[680px]">
          We&apos;re here to help. Reach out to us anytime and we&apos;ll get
          back to you as soon as possible.
        </p>
      </div>
    </section>
  );
}
