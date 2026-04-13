const STEPS = [
  {
    step: "Step 1",
    title: "Get Started",
    description: "Download the app and begin your journey with Pavocard.",
    image: "/images/image1.png",
    connector: "/images/Vector.png",
    connectorW: 308,
    connectorH: 520,
    // Figma: absolute in Step-1 div. left=575.59px / 1007px = 57.15%, top=494px / 821px = 60.17%
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
    // Figma: connector absolute in Step-2 wrapper (1280px). left=562.8px.
    // Step-2 content (1007px) starts at 1280-1007=273px from wrapper left.
    // Offset within our 1007px div: (562.8-273)/1007 = 289.8/1007 = 28.78%
    // top=479px / 821px (phone height) = 58.34%
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

        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-5 mb-[80px]">
          <div className="badge-glow inline-flex items-center px-4 py-[6px] rounded-full bg-[#008236]">
            <span className="inline-flex items-center gap-1.5 text-white font-semibold text-[16px] font-sans leading-none">
              How It Works
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/star.png" alt="" width={16} height={16} className="inline-block" />
            </span>
          </div>
          <h2 className="text-[#282828] font-bold font-sans text-[36px] md:text-[50px] leading-[1.24] tracking-[-2.5px]">
            Get Started in Minutes
          </h2>
          <p className="text-[#444] text-[18px] md:text-[20px] font-sans leading-[30px] max-w-[570px]">
            A simple and seamless process to start trading your gift cards.
          </p>
        </div>

        {/* Steps — gap-[64px] matches Figma */}
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
              {/* Phone figure
                  Figma: aspect-[616/821], width = 61.2% of 1007px
                  Phone image is absolute inside, covering the full figure.
              */}
              <div
                className="relative flex-shrink-0 w-[280px] md:w-[61.2%]"
                style={{ aspectRatio: "616 / 821" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{
                    filter: "drop-shadow(0px 10px 6px rgba(0,0,0,0.3))",
                    animation: "float 4s ease-in-out infinite",
                    animationDelay: s.animDelay,
                  }}
                />
              </div>

              {/* Text card
                  Figma: absolute, top=129px, width=463px (46% of 1007px)
                  Step 1 & 3: left=543.77px = 54% of 1007px
                  Step 2:     left=0 (card on left of right-aligned content)
                  px-[70px] py-[61px], rounded-[20px], shadow
              */}
              <div
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
              </div>

              {/* Connector SVG
                  MUST be a direct child of the step div (relative, 1007px wide)
                  so that absolute % is relative to the full 1007px content width,
                  NOT just the phone figure (61.2%).
                  Step 1: left=575.59/1007=57.15%, top=494/821=60.17%  (Vector.png)
                  Step 2: left=562.8/1007=55.89%,  top=479/821=58.34%  (Vector1.png)
              */}
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.connector}
                    alt=""
                    style={{ width: `${s.connectorW}px`, height: `${s.connectorH}px` }}
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
