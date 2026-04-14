import Image from "next/image";

export default function CallToAction() {
  return (
    <section id="downloads" className="w-full bg-white px-6 pb-0">
      <div className="max-w-[1240px] mx-auto">

        {/*
          Breakpoints:
          — < lg (< 1024px): phones + ALL tablets/iPads → centred text, in-flow phone
          — lg+ (≥ 1024px): desktop only → left text, phone + ellipse absolutely positioned
        */}
        <div className="relative overflow-hidden rounded-2xl bg-[#008236]">

          {/* ── Text + buttons ── */}
          <div className="relative z-10 pt-10 px-6 pb-6 lg:pt-[80px] lg:pl-[72px] lg:pb-[80px] lg:pr-0 lg:max-w-[54%] xl:max-w-[630px] flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col gap-[10px] mb-8 w-full">
              <h2
                className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] tracking-[-2px] lg:tracking-[-2.5px]"
                style={{ fontWeight: 500 }}
              >
                Ready to Sell Your<br />Gift Cards
              </h2>
              <p className="text-[#ededed] text-[16px] sm:text-[18px] tracking-[-0.6px] leading-[27px] font-normal">
                Join users in Nigeria and Ghana using Pavocard today.
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap">
              {/* Google Play */}
              <a
                href="#"
                className="inline-flex items-center gap-2.5 sm:gap-3.5 bg-[#ffe000] rounded-full px-4 sm:px-5 py-2.5 hover:scale-[1.04] hover:shadow-[0_0_22px_rgba(255,224,0,0.55)] active:scale-[0.97] transition-all duration-200 ease-out"
                style={{ boxShadow: "0 0 0 5px rgba(255,224,0,0.5)" }}
              >
                <Image src="/images/googleplay.png" alt="Google Play" width={26} height={26} style={{ objectFit: "contain" }} priority />
                <div className="flex flex-col" style={{ lineHeight: "19.5px" }}>
                  <span className="text-black text-[10px] sm:text-xs font-normal">Download on the</span>
                  <span className="text-black text-[16px] sm:text-[20px] font-semibold">Google Play</span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="inline-flex items-center gap-2.5 sm:gap-3.5 bg-white border-2 border-white rounded-full px-4 sm:px-5 py-2.5 hover:scale-[1.04] hover:shadow-[0_0_18px_rgba(255,255,255,0.3)] active:scale-[0.97] transition-all duration-200 ease-out"
              >
                <Image src="/images/apple-logo.png" alt="App Store" width={26} height={26} style={{ objectFit: "contain" }} priority />
                <div className="flex flex-col" style={{ lineHeight: "19.5px" }}>
                  <span className="text-[#272936] text-[10px] sm:text-xs font-normal">Download on the</span>
                  <span className="text-[#272936] text-[16px] sm:text-[20px] font-semibold">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* ── Phone + Ellipse — in-flow, visible on all phones + tablets/iPads (< lg) ── */}
          <div
            className="flex lg:hidden justify-center items-end mt-4 relative w-full overflow-hidden"
            style={{ height: "clamp(220px, 67vw, 420px)" }}
          >
            {/* Ellipse */}
            <Image
              src="/images/Ellipse.png"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain pointer-events-none select-none"
            />
            {/* Phone */}
            <Image
              src="/images/Calltoaction 1.png"
              alt="Pavocard App"
              width={400}
              height={800}
              priority
              className="relative z-10 object-contain object-bottom"
              style={{ height: "100%", width: "auto" }}
            />
          </div>

          {/* ── Ellipse — desktop only (lg+), absolutely positioned ── */}
          <div
            className="absolute hidden lg:flex items-center justify-center pointer-events-none"
            style={{
              left: "47.2%",
              top: "0px",
              width: "642px",
              height: "626px",
            }}
          >
            <Image
              src="/images/Ellipse.png"
              alt=""
              width={498}
              height={468}
              style={{ flexShrink: 0, objectFit: "contain" }}
            />
          </div>

          {/* ── Phone mockup — desktop only (lg+), absolutely positioned ── */}
          <div
            className="absolute hidden lg:block overflow-hidden pointer-events-none"
            style={{
              left: "59.3%",
              top: "45px",
              width: "367px",
              height: "429px",
            }}
          >
            <Image
              src="/images/Calltoaction.png"
              alt="Pavocard App"
              width={400}
              height={770}
              priority
              style={{
                position: "absolute",
                height: "179.47%",
                width: "108.99%",
                top: "-0.11%",
                left: "-3%",
                maxWidth: "none",
                objectFit: "cover",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
