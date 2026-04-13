"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "What is Pavocard?",
    answer:
      "Pavocard is a platform that allows users in Nigeria 🇳🇬 and Ghana 🇬🇭 to sell gift cards quickly and receive cash at competitive rates.",
  },
  {
    question: "How does Pavocard work?",
    answer:
      "Simply download the app, select your country, choose the gift card you want to sell, enter the card details, and receive instant payment to your wallet.",
  },
  {
    question: "Is Pavocard safe to use?",
    answer:
      "Yes. Pavocard uses industry-standard encryption and secure payment processing to ensure every transaction is protected.",
  },
  {
    question: "How long does it take to get paid?",
    answer:
      "Payments are processed instantly. Most users receive their funds within minutes of a successful trade.",
  },
  {
    question: "What types of gift cards do you accept?",
    answer:
      "We accept a wide range of popular gift cards including Amazon, iTunes, Google Play, Steam, and many more. Check the app for the full list.",
  },
];

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      className={`flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1L8 8L15 1"
        stroke="#0A0A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-[12px] border overflow-hidden transition-colors duration-200 ${
        isOpen
          ? "bg-[#f8f8f8] border-[rgba(0,19,5,0.15)]"
          : "bg-white border-[rgba(0,19,5,0.15)]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 px-8 py-6 text-left"
      >
        <span
          className={`font-sans leading-[25px] tracking-[-0.54px] ${
            isOpen ? "text-[20px] font-medium text-black" : "text-[18px] font-medium text-black"
          }`}
        >
          {question}
        </span>
        <span className="mt-[2px]">
          <ChevronDown open={isOpen} />
        </span>
      </button>
      {isOpen && (
        <div className="px-8 pb-6">
          <div className="border-t border-[rgba(117,117,117,0.2)] pt-6">
            <p className="text-[#393939] text-[16px] font-sans leading-[24px] tracking-[-0.48px]">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomeFAQ() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section className="w-full bg-white py-[80px] md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left — header */}
          <div className="flex-shrink-0 lg:max-w-[445px] flex flex-col gap-4">
            <div className="badge-glow inline-flex items-center px-4 py-[6px] rounded-full bg-[#008236] w-fit">
              <span className="inline-flex items-center gap-1.5 text-white font-semibold text-[16px] font-sans leading-none">
                FAQs
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/star.png" alt="" width={16} height={16} className="inline-block" />
              </span>
            </div>
            <h2 className="text-[#1b1b1b] font-medium font-sans text-[36px] md:text-[50px] leading-[1.2] tracking-[-2px] capitalize">
              Frequently Asked Questions
            </h2>
            <p className="text-[#343434] text-[18px] font-sans leading-[27px] max-w-[417px]">
              Everything you need to know about using Pavocard for fast and
              secure gift card trading.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="flex-1 flex flex-col gap-[10px] w-full">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIdx === idx}
                onToggle={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
