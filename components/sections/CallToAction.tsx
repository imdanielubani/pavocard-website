export default function CallToAction() {
  return (
    <section id="downloads" className="w-full bg-white px-6 pb-0">
      <div className="max-w-[1240px] mx-auto">

        {/*
          Single container = the card.
          Figma: card is overflow-clip + rounded-2xl + green bg.
          Ellipse & phone are siblings of the text, all clipped by this one boundary.
          Ellipse top: -22px (starts 22px above card top, clipped by overflow-hidden).
          Phone top: 16px, left: 59.3%, container 367×429px.
        */}
        <div className="relative overflow-hidden rounded-2xl bg-[#046f2b] min-h-[442px]">

          {/* Text + buttons — normal flow, drives card height, z-10 above ellipse */}
          <div className="relative z-10 pt-[80px] pl-[72px] pb-[80px] max-w-[630px]">
            <div className="flex flex-col gap-[10px] mb-8">
              <h2
                className="text-white text-[56px] leading-[1.2] tracking-[-2.5px]"
                style={{ fontWeight: 500 }}
              >
                Ready to Sell Your<br />Gift Cards
              </h2>
              <p className="text-[#ededed] text-[18px] tracking-[-0.6px] leading-[27px] font-normal">
                Join users in Nigeria and Ghana using Pavocard today.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              {/* Google Play */}
              <a
                href="#"
                className="inline-flex items-center gap-3.5 bg-[#ffe000] rounded-full px-5 py-2.5"
                style={{ boxShadow: "0 0 0 5px rgba(255,224,0,0.5)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/googleplay.png" alt="Google Play" width={29} height={29} style={{ objectFit: "contain" }} />
                <div className="flex flex-col" style={{ lineHeight: "19.5px" }}>
                  <span className="text-black text-xs font-normal">Download on the</span>
                  <span className="text-black text-[20px] font-semibold">Google Play</span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="inline-flex items-center gap-3.5 bg-white border-2 border-white rounded-full px-5 py-2.5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/apple-logo.png" alt="App Store" width={29} height={29} style={{ objectFit: "contain" }} />
                <div className="flex flex-col" style={{ lineHeight: "19.5px" }}>
                  <span className="text-[#272936] text-xs font-normal">Download on the</span>
                  <span className="text-[#272936] text-[20px] font-semibold">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* Ellipse — absolute sibling of text, clipped by card's overflow-hidden.
              Figma: 498×468px image inside 642×626px flex-center wrapper.
              Positioned 22px ABOVE card top (top:-22px) so overflow-hidden clips the tip. */}
          <div
            className="absolute hidden lg:flex items-center justify-center pointer-events-none"
            style={{
              left: "47.2%",
              top: "0px",
              width: "642px",
              height: "626px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Ellipse.png"
              alt=""
              style={{
                flexShrink: 0,
                width: "498px",
                height: "468px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Phone — absolute sibling of text, clipped by card's overflow-hidden.
              Figma: 367×429px container, image 179.47% tall × 108.99% wide,
              top: 16px from card top, left: 59.3% of card width. */}
          <div
            className="absolute hidden lg:block overflow-hidden pointer-events-none"
            style={{
              left: "59.3%",
              top: "45px",
              width: "367px",
              height: "429px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Calltoaction.png"
              alt="Pavocard App"
              style={{
                position: "absolute",
                height: "179.47%",
                width: "108.99%",
                top: "-0.11%",
                left: "-3%",
                maxWidth: "none",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
