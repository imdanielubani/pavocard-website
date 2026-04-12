export default function AboutHero() {
  return (
    <section className="w-full bg-white pt-[164px] pb-[80px]">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col items-center text-center gap-6">
        {/* Badge */}
        <div className="badge-glow inline-flex items-center px-4 py-[6px] rounded-full bg-[#046f2b]">
          <span className="inline-flex items-center gap-1.5 text-white font-semibold text-[16px] leading-none font-sans">
            About Us
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/star.png" alt="" width={16} height={16} className="inline-block" />
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-[#0a0a0a] font-semibold text-[44px] md:text-[60px] leading-[1.1] tracking-[-2.5px] max-w-[700px] font-sans"
        >
          Building the Future of Gift Card Trading
        </h1>

        {/* Subtext */}
        <p className="text-[#383838] text-[17px] md:text-[18px] leading-[27px] tracking-[-0.4px] max-w-[580px] font-sans">
          At Pavocard, we&apos;re creating a faster, safer, and more reliable
          way for people in Nigeria 🇳🇬 and Ghana 🇬🇭 to turn gift cards into
          real value.
        </p>
      </div>
    </section>
  );
}
