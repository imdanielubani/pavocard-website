"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ease } from "@/lib/animations";

// Shared fade-up used for every hero element
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease, delay },
});

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

      {/* Decorative Nigeria flag */}
      <motion.div
        className="absolute z-10"
        style={{ left: "clamp(8px, 2.5vw, 174px)", top: "62%" }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.5 }}
      >
        <div style={{ animation: "float 3s ease-in-out infinite" }}>
          <Image
            src="/images/Nigeria.png"
            alt="Nigeria"
            width={99}
            height={72}
            priority
            className="rounded-[4px]"
            style={{ width: "clamp(56px, 8vw, 99px)", height: "auto" }}
          />
        </div>
      </motion.div>

      {/* Decorative Ghana flag */}
      <motion.div
        className="absolute z-10"
        style={{ right: "clamp(8px, 2.5vw, 91px)", top: "42%" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.55 }}
      >
        <div style={{ animation: "float 3.5s ease-in-out infinite 0.4s" }}>
          <Image
            src="/images/Ghana.png"
            alt="Ghana"
            width={107}
            height={78}
            priority
            className="rounded-[4px]"
            style={{ width: "clamp(60px, 8.5vw, 107px)", height: "auto" }}
          />
        </div>
      </motion.div>

      {/* Text content */}
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 flex flex-col items-center text-center gap-6 pt-[120px] sm:pt-[140px] md:pt-[164px] lg:pt-[180px]">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="badge-glow inline-flex items-center px-4 py-[6px] rounded-full bg-[#008236]">
          <span className="inline-flex items-center gap-1.5 text-white font-semibold text-[16px] font-sans leading-none">
            Trusted Payment Platform
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/star.png" alt="" width={16} height={16} className="inline-block" />
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-[#272936] font-semibold font-sans tracking-[-2.5px] leading-[1.05] max-w-[900px]"
          style={{ fontSize: "clamp(40px, 6.5vw, 88px)" }}
        >
          Where Gift Cards<br />Meet the Future
        </motion.h1>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.18)} className="text-[#272936] text-[18px] font-sans">
          Fast, secure, and built for Nigeria and Ghana.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.26)} className="flex items-center gap-4 flex-wrap justify-center mt-2">
          {/* Google Play */}
          <a
            href="#downloads"
            className="inline-flex items-center gap-3.5 bg-[#008236] rounded-full px-5 py-2.5 hover:scale-[1.04] hover:shadow-[0_0_22px_rgba(0,130,54,0.45)] active:scale-[0.97] transition-all duration-200 ease-out"
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
            className="inline-flex items-center gap-3.5 border-2 border-[#008236] bg-white rounded-full px-5 py-2.5 hover:scale-[1.04] hover:shadow-[0_0_18px_rgba(0,130,54,0.2)] active:scale-[0.97] transition-all duration-200 ease-out"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/apple-logo.png" alt="" width={29} height={29} style={{ objectFit: "contain" }} />
            <div className="flex flex-col leading-[19.5px]">
              <span className="text-[#272936] text-xs font-normal font-sans">Download on the</span>
              <span className="text-[#272936] text-[18px] font-semibold font-sans">App Store</span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Phone Mockup */}
      <motion.div
        className="relative z-10 flex justify-center mt-10"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease, delay: 0.36 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src="/images/phonemockup 1.png"
          alt="Pavocard App Preview"
          width={711}
          height={758}
          priority
          className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[680px] h-auto"
          style={{ animation: "float 4s ease-in-out infinite" }}
        />
      </motion.div>
    </section>
  );
}
