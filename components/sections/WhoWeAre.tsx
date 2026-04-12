import Image from "next/image";

export default function WhoWeAre() {
  return (
    <>
      {/* ── Who We Are ─────────────────────────────────────── */}
      <section className="w-full bg-white py-[40px]">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Rounded card — matches Figma: bg-[#f8f8f8] rounded-[30px] h-[334px] */}
          <div className="bg-[#f8f8f8] rounded-[30px] px-[64px] py-[60px] flex flex-col gap-6">
            <h2 className="text-black font-semibold text-[50px] leading-normal font-sans">
              Who We Are
            </h2>
            <div className="flex flex-col gap-[25px]">
              <p className="text-black/50 text-[18px] leading-normal font-sans">
                Pavocard is a modern digital platform built to make gift card
                trading simple, fast, and secure. We help users in Nigeria 🇳🇬 and
                Ghana 🇬🇭 turn unused gift cards into cash without stress.
              </p>
              <p className="text-black/50 text-[18px] leading-normal font-sans">
                Our mission is to remove the common challenges people face when
                trying to sell gift cards by providing a platform they can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Purpose Meets Innovation ────────────────────────── */}
      <section className="w-full bg-white py-[80px]">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Phone mockup */}
          <div className="w-full md:w-[440px] flex-shrink-0">
            <Image
              src="/images/abt.png"
              alt="Pavocard App"
              width={440}
              height={480}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[#0a0a0a] font-semibold text-[32px] md:text-[42px] leading-[1.15] tracking-[-1.5px] font-sans">
              Purpose Meets Innovation
            </h2>
            <p className="text-[#383838] text-[17px] leading-[28px] font-sans">
              We combine thoughtful design with powerful technology to deliver a
              seamless digital trading experience.
            </p>

            {/* Mission + Vision cards */}
            <div className="flex flex-col sm:flex-row gap-5">
              {/* Mission */}
              <div className="flex-1 flex flex-col gap-3 p-5 rounded-2xl border border-gray-100 shadow-sm">
                <Image src="/images/Icon.png" alt="Mission" width={40} height={40} className="object-contain" />
                <h3 className="text-[#0a0a0a] font-semibold text-[17px] font-sans">
                  Our mission
                </h3>
                <p className="text-[#848484] text-[15px] leading-[24px] font-sans">
                  To create a seamless and secure experience where anyone can
                  easily convert gift cards into cash anytime, anywhere.
                </p>
              </div>

              {/* Vision */}
              <div className="flex-1 flex flex-col gap-3 p-5 rounded-2xl border border-gray-100 shadow-sm">
                <Image src="/images/Icon2.png" alt="Vision" width={40} height={40} className="object-contain" />
                <h3 className="text-[#0a0a0a] font-semibold text-[17px] font-sans">
                  Our vision
                </h3>
                <p className="text-[#848484] text-[15px] leading-[24px] font-sans">
                  To become the leading gift card trading platform in Africa,
                  known for speed, trust, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
