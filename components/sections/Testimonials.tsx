import ScrollReveal from "@/components/ui/ScrollReveal";

const TESTIMONIALS = [
  {
    name: "Chinedu Adeleke",
    location: "Nigeria",
    quote:
      "Pavocard made it so easy to sell my gift cards. I got paid within minutes.",
  },
  {
    name: "Kwame Nkrumah",
    location: "Ghana",
    quote:
      "I've tried different platforms, but Pavocard gives the best value and quick payments.",
  },
  {
    name: "Fatima Susan",
    location: "Nigeria",
    quote:
      "The process is smooth, and the interface is easy to use. Highly recommended!",
  },
  {
    name: "Emmanuel Kelvin",
    location: "Ghana",
    quote: "I received my payment almost instantly. Very impressive.",
  },
  {
    name: "Grace Okafor",
    location: "Nigeria",
    quote: "I feel safe trading here. Everything is transparent.",
  },
  {
    name: "David Tyler",
    location: "Ghana",
    quote: "No delays, no issues. Just smooth transactions.",
  },
  {
    name: "Abena John",
    location: "Ghana",
    quote: "This is my go-to platform for selling gift cards.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#FFB545">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

interface CardProps {
  name: string;
  location: string;
  quote: string;
}

function Card({ name, location, quote }: CardProps) {
  return (
    <div className="w-[320px] md:w-[380px] flex-shrink-0 bg-white rounded-2xl p-6 flex flex-col gap-4 mx-3">
      <div className="flex items-center gap-3">
        <div className="size-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
          <span className="text-[#008236] font-semibold text-[17px] font-sans">
            {name[0]}
          </span>
        </div>
        <div>
          <p className="text-[#0a0a0a] font-medium text-[16px] leading-[22px] font-sans">
            {name}
          </p>
          <p className="text-[#848484] text-[14px] italic font-sans">
            {location}
          </p>
        </div>
      </div>
      <div
        className="border-t"
        style={{ borderColor: "rgba(218,220,221,0.8)" }}
      />
      <p className="text-[#383838] text-[15px] leading-[25px] font-sans">
        &ldquo;{quote}&rdquo;
      </p>
      <Stars />
    </div>
  );
}

export default function Testimonials() {
  // Duplicate arrays so CSS marquee loops seamlessly (CSS reads -50% of the track)
  const row1 = [...TESTIMONIALS, ...TESTIMONIALS];
  const row2 = [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(0, 3)];

  return (
    <section className="w-full bg-[#f8f8f8] py-[80px] overflow-hidden">
      {/* Header — staggered scroll reveal */}
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col items-center text-center gap-5 mb-[56px]">
        <ScrollReveal>
          <div className="badge-glow inline-flex items-center px-4 py-[6px] rounded-full bg-[#008236]">
            <span className="inline-flex items-center gap-1.5 text-white font-semibold text-[16px] leading-none font-sans">
              Testimonial
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/star.png" alt="" width={16} height={16} className="inline-block" />
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <h2 className="text-[#0a0a0a] font-semibold text-[36px] md:text-[48px] leading-[1.15] tracking-[-2px] font-sans">
            What Our Users Say
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.16}>
          <p className="text-[#383838] text-[17px] leading-[26px] max-w-[540px] font-sans">
            Trusted by thousands of users across Nigeria 🇳🇬 and Ghana 🇬🇭 for
            fast, secure, and reliable gift card trading.
          </p>
        </ScrollReveal>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="flex overflow-hidden mb-5">
        <div
          className="flex"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {row1.map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex overflow-hidden">
        <div
          className="flex"
          style={{ animation: "marquee-reverse 28s linear infinite" }}
        >
          {row2.map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
