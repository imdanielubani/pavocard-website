const STATS = [
  { value: "2",     label: "Currencies supported" },
  { value: "24/7",  label: "Customer support" },
  { value: "0.1%",  label: "Lowest transaction fees" },
] as const;

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#f8f8f8] rounded-2xl p-6 flex flex-col gap-2">
      <span
        className="text-[#0a0a0a] text-[48px] leading-[57.6px] tracking-[-2.88px] font-medium"
        style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
      >
        {value}
      </span>
      <span className="text-[#383838] text-[18px] leading-[24px] tracking-[-0.48px] opacity-80 font-sans">
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="w-full bg-white py-[80px]">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row items-start gap-10 md:gap-16">

        {/* Left — heading + subtext */}
        <div className="md:max-w-[380px] flex flex-col gap-3 flex-shrink-0">
          <h2
            className="text-black font-semibold text-[48px] md:text-[50px] leading-[55px] font-sans"
          >
            100K+ users trust Pavocard
          </h2>
          <p className="text-black/50 text-[18px] leading-normal font-sans">
            Delivering trusted rates and fast payments consistently.
          </p>
        </div>

        {/* Right — staggered 2-col grid matching Figma */}
        {/* Row 1: box1 + box2  |  Row 2: empty + box3 */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          <StatBox value={STATS[0].value} label={STATS[0].label} />
          <StatBox value={STATS[1].value} label={STATS[1].label} />
          {/* 0.1% box spans both columns but is centered at one-column width */}
          <div className="col-span-2 flex justify-center">
            <div className="w-[calc(50%-8px)]">
              <StatBox value={STATS[2].value} label={STATS[2].label} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
