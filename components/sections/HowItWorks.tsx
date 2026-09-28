"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ease, viewport } from "@/lib/animations";

const STEPS = [
  {
    step: "Step 1",
    title: "Get Started",
    description: "Download the app and begin your journey with Pavocard.",
    image: "/images/image1.png",
    connector: "/images/Vector.png",
    connectorW: 308,
    connectorH: 520,
    connectorLeft: "57.15%",
    connectorTop: "60.17%",
    flip: false,
    animDelay: "0s",
  },
  {
    step: "Step 2",
    title: "Select Your Country",
    description:
      "Choose your location to access services tailored for Nigeria 🇳🇬 or Ghana 🇬🇭.",
    image: "/images/country.png",
    connector: "/images/Vector1.png",
    connectorW: 308,
    connectorH: 519,
    connectorLeft: "28.78%",
    connectorTop: "58.34%",
    flip: true,
    animDelay: "0.3s",
  },
  {
    step: "Step 3",
    title: "Start Trading",
    description:
      "Sell your gift cards and receive payment quickly and securely.",
    image: "/images/start-tracking.png",
    connector: null,
    connectorW: 0,
    connectorH: 0,
    connectorLeft: "",
    connectorTop: "",
    flip: false,
    animDelay: "0.6s",
  },
] as const;

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-[80px] md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Section header — staggered */}
        <motion.div
          className="flex flex-col items-center text-center gap-5 mb-[80px]"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
            className="badge-glow inline-flex items-center px-4 py-[6px] rounded-full bg-[#008236]"
          >
            <span className="inline-flex items-center gap-1.5 text-white font-semibold text-[16px] font-sans leading-none">
              How It Works
              <Image src="/images/star.png" alt="" width={16} height={16} className="inline-block" />
            </span>
          </motion.div>

          <motion.h2
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
            className="text-[#282828] font-bold font-sans text-[36px] md:text-[50px] leading-[1.24] tracking-[-2.5px]"
          >
            Get Started in Minutes
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
            className="text-[#444] text-[18px] md:text-[20px] font-sans leading-[30px] max-w-[570px]"
          >
            A simple and seamless process to start trading your gift cards.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-16 md:gap-[64px]">
          {STEPS.map((s, idx) => (
            <div
              key={idx}
              className={`
                relative flex flex-col items-center gap-8
                md:flex-row md:items-start
                md:w-full md:max-w-[1007px]
                ${s.flip ? "md:flex-row-reverse md:ml-auto" : ""}
              `}
            >
              {/* Phone — slides in from the phone side */}
              <motion.div
                className="relative flex-shrink-0 w-[280px] md:w-[61.2%]"
                style={{ aspectRatio: "616 / 821" }}
                initial={{ opacity: 0, x: s.flip ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease }}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-contain"
                  priority={idx === 0}
                  style={{
                    filter: "drop-shadow(0px 10px 6px rgba(0,0,0,0.3))",
                    animation: "float 4s ease-in-out infinite",
                    animationDelay: s.animDelay,
                  }}
                />
              </motion.div>

              {/* Text card — slides from opposite side + hover lift */}
              <motion.div
                className={`
                  flex-shrink-0 w-full max-w-[380px]
                  bg-white rounded-[20px] overflow-hidden
                  shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)]
                  flex flex-col items-center text-center gap-6
                  px-8 py-10
                  md:px-[70px] md:py-[61px]
                  md:max-w-none md:w-[46%]
                  md:absolute md:top-[129px]
                  ${s.flip ? "md:left-0" : "md:left-[54%]"}
                `}
                initial={{ opacity: 0, x: s.flip ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0px 16px 40px rgba(0,0,0,0.14)",
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
              >
                <p className="text-[#008236] text-[20px] font-medium font-sans leading-[30px]">
                  {s.step}
                </p>
                <div className="flex flex-col gap-2 items-center">
                  <h3 className="text-[#282828] text-[28px] md:text-[30px] font-bold font-sans leading-[34px]">
                    {s.title}
                  </h3>
                  <p className="text-[#444] text-[16px] font-sans leading-[26px] tracking-[0.02px] max-w-[310px]">
                    {s.description}
                  </p>
                </div>
              </motion.div>

              {/* Connector SVG */}
              {s.connector && (
                <div
                  className="hidden md:block absolute pointer-events-none"
                  style={{
                    left: s.connectorLeft,
                    top: s.connectorTop,
                    width: `${s.connectorW}px`,
                    height: `${s.connectorH}px`,
                  }}
                >
                  <Image
                    src={s.connector as string}
                    alt=""
                    width={s.connectorW}
                    height={s.connectorH}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
