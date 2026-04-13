import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ zIndex: 0 }}
      />

      {/* Decorative Nigeria flag — Figma: x=174, y=871 */}
      <div
        className="hidden xl:block absolute z-10"
        style={{ left: "174px", top: "871px", animation: "float 3s ease-in-out infinite" }}
      >
        <Image src="/images/Nigeria.png" alt="Nigeria" width={99} height={72} className="rounded-[4px]" />
      </div>

      {/* Decorative Ghana flag — Figma: x=1189, y=648 */}
      <div
        className="hidden xl:block absolute z-10"
        style={{ left: "1189px", top: "648px", animation: "float 3.5s ease-in-out infinite 0.4s" }}
      >
        <Image src="/images/Ghana.png" alt="Ghana" width={107} height={78} className="rounded-[4px]" />
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 flex flex-col items-center text-center gap-6 pt-[164px] md:pt-[180px]">
        {/* Badge */}
        <div className="badge-glow inline-flex items-center px-4 py-[6px] rounded-full bg-[#008236]">
          <span className="inline-flex items-center gap-1.5 text-white font-semibold text-[16px] font-sans leading-none">
            Trusted Payment Platform
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/star.png" alt="" width={16} height={16} className="inline-block" />
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-[#272936] font-semibold font-sans tracking-[-2.5px] leading-[1.05] max-w-[900px]"
          style={{ fontSize: "clamp(40px, 6.5vw, 88px)" }}
        >
          Where Gift Cards<br />Meet the Future
        </h1>

        {/* Subtitle */}
        <p className="text-[#272936] text-[18px] font-sans">
          Fast, secure, and built for Nigeria and Ghana.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 flex-wrap justify-center mt-2">
          {/* Google Play */}
          <a
            href="#downloads"
            className="inline-flex items-center gap-3.5 bg-[#008236] rounded-full px-5 py-2.5"
            style={{ boxShadow: "0 0 0 2.5px rgba(0,130,54,0.3)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/google-play.png" alt="" width={29} height={29} style={{ objectFit: "contain" }} />
            <div className="flex flex-col leading-[19.5px]">
              <span className="text-white text-xs font-normal font-sans">Download on the</span>
              <span className="text-white text-[18px] font-semibold font-sans">Google Play</span>
            </div>
          </a>

          {/* App Store */}
          <a
            href="#downloads"
            className="inline-flex items-center gap-3.5 border-2 border-[#008236] bg-white rounded-full px-5 py-2.5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/apple-logo.png" alt="" width={29} height={29} style={{ objectFit: "contain" }} />
            <div className="flex flex-col leading-[19.5px]">
              <span className="text-[#272936] text-xs font-normal font-sans">Download on the</span>
              <span className="text-[#272936] text-[18px] font-semibold font-sans">App Store</span>
            </div>
          </a>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="relative z-10 flex justify-center mt-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/phonemockup 1.png"
          alt="Pavocard App Preview"
          width={711}
          height={758}
          className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[680px] h-auto"
          style={{ animation: "float 4s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
