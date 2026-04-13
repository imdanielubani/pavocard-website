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
  {
    question: "How are rates determined?",
    answer:
      "Gift card rates are updated in real-time based on current market conditions. You can always check the latest rates directly in the app before initiating a trade.",
  },
  {
    question: "Do I need an account to use Pavocard?",
    answer:
      "Yes, you need to create a free account to use Pavocard. Registration takes less than two minutes and only requires your basic details.",
  },
  {
    question: "How do I keep my account secure?",
    answer:
      "Use a strong, unique password and enable two-factor authentication (2FA) in your account settings. Never share your login credentials with anyone.",
  },
  {
    question: "Can I delete my account?",
    answer:
      "Yes, you can request account deletion by contacting our support team at support@pavocard.com. All your data will be permanently removed in accordance with our privacy policy.",
  },
  {
    question: "How will I receive my payment?",
    answer:
      "Payments are credited directly to your Pavocard wallet. You can then withdraw to your local bank account or mobile money at any time.",
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
      className={`rounded-[12px] border border-[rgba(0,19,5,0.15)] overflow-hidden transition-colors duration-200 ${
        isOpen ? "bg-[#f8f8f8]" : "bg-white"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 px-8 py-6 text-left"
      >
        <span
          className={`font-sans leading-[25.2px] tracking-[-0.54px] text-black font-medium ${
            isOpen ? "text-[20px]" : "text-[18px]"
          }`}
        >
          {question}
        </span>
        <span className="mt-[3px]">
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

export default function FaqList() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section className="w-full bg-white pb-[80px] md:pb-[120px]">
      <div className="max-w-[836px] mx-auto px-6 flex flex-col gap-[10px]">
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
    </section>
  );
}
