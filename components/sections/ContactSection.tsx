"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Spinner from "@/components/ui/Spinner";
import {
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/validations/contact";

const COUNTRIES = [
  { code: "+234", label: "Nigeria", flag: "🇳🇬" },
  { code: "+233", label: "Ghana", flag: "🇬🇭" },
];

const INITIAL: ContactFormData = { name: "", email: "", phone: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormData>(INITIAL);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload: ContactFormData = {
      ...form,
      phone: form.phone ? `${selectedCountry.code} ${form.phone}` : "",
    };
    const validationErrors = validateContactForm(payload);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json();
        setServerError(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm(INITIAL);
    } catch {
      setServerError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="w-full bg-white pb-[80px] md:pb-[120px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* ── Heading ── */}
        <div className="mb-8">
          <h2 className="font-sans font-bold text-[#1b1b1b] text-[24px] sm:text-[30px] leading-[1.2]">
            Send Us a Message
          </h2>
          <p className="mt-2 font-sans text-[#343434] text-[15px] sm:text-[18px] leading-[27px] tracking-[-0.6px] max-w-[491px]">
            Have a question or need assistance? Fill out the form below and our
            team will get back to you shortly.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            Two-column layout.
            The green panel is ABSOLUTELY positioned inside this wrapper,
            starting at left-[44%], extending -44px above and to the right
            edge — exactly as in Figma (BG node: inset[-44px 0 16px 44.15%]).
            The white form card sits ON TOP of it (z-[1]).
        ══════════════════════════════════════════════════════════════ */}
        <div className="relative">

          {/* ── Green background panel (desktop) ── */}
          {/* Figma: absolute bg-[#046f2b] inset-[-44px_0_16px_44.15%] rounded-tl-[16px] rounded-bl-[16px] */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute bg-[#046f2b] rounded-tl-[16px] rounded-bl-[16px]"
            style={{ top: "-44px", right: 0, bottom: "16px", left: "44.15%" }}
          />

          {/* ── Flex row — on top of the green bg ── */}
          <div className="relative z-[1] flex flex-col lg:flex-row lg:gap-12 items-start">

            {/* ════ LEFT: form (white card + button) ════ */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="w-full lg:w-[50%] flex flex-col gap-4"
            >
              {/* White card */}
              <div className="relative border-[1.5px] border-[rgba(0,0,0,0.15)] rounded-[16px] overflow-hidden bg-white px-4 sm:pl-[33px] sm:pr-[30px] pt-[24px] pb-[40px] flex flex-col gap-5">

                {/* Full Name — icon at left-[11.5px] top-[10.5px], placeholder at pl-[48.5px] */}
                <div className="flex flex-col gap-[3px]">
                  <label className="font-sans font-medium text-[#272936] text-[13px] leading-normal">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-[11.5px] top-[10.5px] pointer-events-none">
                      <Image src="/images/Profile 1.png" alt="" width={24} height={24} />
                    </span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jack Daniel"
                      className={`w-full h-[48px] rounded-[12px] border-[1.5px] bg-white pl-[48.5px] pr-3 outline-none font-sans text-[15px] text-[#1b1b1b] placeholder:text-[rgba(0,0,0,0.15)] ${
                        errors.name ? "border-red-400" : "border-[rgba(0,0,0,0.15)]"
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>

                {/* Email Address — icon at left-[14px], placeholder at pl-[48.5px] */}
                <div className="flex flex-col gap-[3px]">
                  <label className="font-sans font-medium text-[#272936] text-[13px] leading-normal">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute left-[14px] top-[12px] pointer-events-none">
                      <Image src="/images/Message 35.png" alt="" width={24} height={24} />
                    </span>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className={`w-full h-[48px] rounded-[12px] border-[1.5px] bg-white pl-[48.5px] pr-3 outline-none font-sans text-[15px] text-[#1b1b1b] placeholder:text-[rgba(0,0,0,0.15)] ${
                        errors.email ? "border-red-400" : "border-[rgba(0,0,0,0.15)]"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Phone — selector w-[82px] | input */}
                <div className="flex flex-col gap-[3px]">
                  <label className="font-sans font-medium text-[#272936] text-[13px] leading-normal">
                    Phone Number
                  </label>
                  <div className="flex gap-2">

                    {/* Country selector */}
                    <div className="relative shrink-0" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((o) => !o)}
                        className="flex items-center justify-between w-[76px] sm:w-[82px] h-[48px] px-2 sm:px-[9px] bg-white border-[1.5px] border-[rgba(0,0,0,0.15)] rounded-[12px] text-[#272936] font-medium text-[13px] sm:text-[14px] font-sans"
                      >
                        <span className="truncate">{selectedCountry.code}</span>
                        <Image
                          src="/images/dropdown.png"
                          alt=""
                          width={10}
                          height={10}
                          className={`shrink-0 ml-1 transition-transform duration-150 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {dropdownOpen && (
                        <div className="absolute top-[52px] left-0 z-50 bg-white border border-[rgba(0,0,0,0.12)] rounded-[12px] shadow-lg overflow-hidden min-w-[160px]">
                          {COUNTRIES.map((c) => (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(c);
                                setDropdownOpen(false);
                              }}
                              className={`flex items-center gap-2 w-full px-4 py-3 text-left font-sans text-[14px] hover:bg-gray-50 transition-colors ${
                                selectedCountry.code === c.code
                                  ? "text-[#046f2b] font-semibold"
                                  : "text-[#272936]"
                              }`}
                            >
                              <span>{c.flag}</span>
                              <span className="flex-1">{c.label}</span>
                              <span className="text-[#848484] text-[13px]">{c.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Phone number input */}
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="801 234 5678"
                      className={`flex-1 min-w-0 h-[48px] rounded-[12px] border-[1.5px] bg-white pl-3 sm:pl-4 pr-3 outline-none font-sans text-[15px] text-[#1b1b1b] placeholder:text-[rgba(0,0,0,0.15)] ${
                        errors.phone ? "border-red-400" : "border-[rgba(0,0,0,0.15)]"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>

                {/* Message — min-h-[110px] rounded-[10px], placeholder at pl-[16px] pt-[16px] */}
                <div className="flex flex-col gap-[3px]">
                  <label className="font-sans font-medium text-[#1b1b1b] text-[13px] tracking-[-0.5px] leading-[24px]">
                    Message
                  </label>
                  <div
                    className={`border-[1.5px] rounded-[10px] bg-white overflow-hidden ${
                      errors.message ? "border-red-400" : "border-[rgba(0,0,0,0.15)]"
                    }`}
                  >
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Type your message"
                      rows={5}
                      className="w-full min-h-[110px] bg-transparent outline-none resize-none pl-[16px] pr-3 pt-[16px] pb-3 font-sans text-[15px] text-[#1b1b1b] placeholder:text-[#848484] tracking-[-0.1px] leading-[24px]"
                    />
                  </div>
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>
              </div>

              {/* Status */}
              {status === "success" && (
                <p className="text-sm text-[#046f2b] font-medium font-sans">
                  Message sent! We&apos;ll get back to you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 font-medium font-sans">{serverError}</p>
              )}

              {/* Submit button — Figma: bg-[#046f2b] border-5 border-[rgba(80,194,122,0.5)] h-[56px] w-[327px] rounded-[16px] */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="h-[56px] w-full sm:w-[327px] bg-[#046f2b] border-[5px] border-[rgba(80,194,122,0.5)] rounded-[16px] text-white font-semibold font-sans text-[16px] flex items-center justify-center gap-2 disabled:opacity-70 transition-opacity"
              >
                {status === "loading" ? (
                  <>
                    <Spinner size="sm" className="border-white/30 border-t-white" />
                    Sending…
                  </>
                ) : (
                  "Send a Message"
                )}
              </button>
            </form>

            {/* ════ RIGHT: contact cards (float on top of the green absolute bg) ════ */}
            {/* Mobile: green bg via classes | Desktop: transparent (bg comes from absolute div) */}
            <div className="mt-6 lg:mt-0 w-full lg:flex-1 bg-[#046f2b] lg:bg-transparent rounded-[16px] lg:rounded-none p-4 sm:p-6 lg:p-0 lg:pt-[41px] lg:pb-[32px] lg:px-[25px] flex flex-col gap-[16px] sm:gap-[23px]">

              {/* Email card */}
              <div className="border-[1.5px] border-[rgba(255,255,255,0.15)] rounded-[16px] flex items-start sm:items-center py-4 sm:py-0 sm:min-h-[181px]">
                <div className="shrink-0 ml-3 sm:ml-[16px] mt-1 sm:mt-0 w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-white rounded-full flex items-center justify-center">
                  <Image src="/images/email.png" alt="" width={22} height={22} />
                </div>
                <div className="ml-3 sm:ml-5 mr-3 sm:mr-[16px] sm:py-[19px] flex flex-col gap-[6px]">
                  <p className="font-sans font-medium text-white text-[16px] sm:text-[20px] leading-[1.4] tracking-[-0.5px]">
                    Send us an email
                  </p>
                  <p className="font-sans text-white text-[13px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-[-0.4px]">
                    Email us for general queries, including difficulties and any other problem.
                  </p>
                  <p className="font-sans text-white text-[14px] sm:text-[18px] leading-[24px] tracking-[-0.4px] opacity-80 break-all sm:break-normal">
                    support@pavocard.com
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="border-[1.5px] border-[rgba(255,255,255,0.15)] rounded-[16px] flex items-start sm:items-center py-4 sm:py-0 sm:min-h-[181px]">
                <div className="shrink-0 ml-3 sm:ml-[16px] mt-1 sm:mt-0 w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-white rounded-full flex items-center justify-center">
                  <Image src="/images/phone.png" alt="" width={22} height={22} />
                </div>
                <div className="ml-3 sm:ml-5 mr-3 sm:mr-[16px] sm:py-[19px] flex flex-col gap-[6px]">
                  <p className="font-sans font-medium text-white text-[16px] sm:text-[20px] leading-[1.4] tracking-[-0.5px]">
                    Our official number
                  </p>
                  <p className="font-sans text-white text-[13px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-[-0.4px]">
                    Call us to speak to a member of our team. We are always happy to help.
                  </p>
                  <div className="flex flex-col gap-[5px] opacity-80">
                    <p className="font-sans text-white text-[14px] sm:text-[18px] leading-[24px] tracking-[-0.4px]">
                      + (234) 706-606-7425
                    </p>
                    <p className="font-sans text-white text-[14px] sm:text-[18px] leading-[24px] tracking-[-0.4px]">
                      + (234) 706-606-7425
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
