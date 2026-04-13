"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants/nav";
import { ROUTES } from "@/lib/constants/routes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function handleDownloadsClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById("downloads")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4"
      style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
    >
      {/* Floating pill */}
      <nav
        className="w-full max-w-5xl bg-white border border-gray-200 rounded-full px-6 py-3 flex items-center justify-between shadow-sm"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        {/* Logo */}
        <Link href={ROUTES.HOME} className="flex-shrink-0">
          <Image
            src="/images/Pavocardlogo.png"
            alt="Pavocard"
            width={130}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav Links — desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isDownloads = link.label === "Downloads";
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={isDownloads ? handleDownloadsClick : undefined}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#008236] border-b-2 border-[#00c14d] pb-0.5"
                      : "text-gray-700 hover:text-[#008236]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Get In Touch / Contact */}
        <Link
          href={ROUTES.CONTACT}
          className="hidden md:inline-flex items-center rounded-full bg-[#008236] text-white text-sm font-semibold px-6 py-2.5 ring-2 ring-[#00c14d] hover:scale-[1.04] hover:shadow-[0_0_18px_rgba(0,130,54,0.45)] active:scale-[0.97] transition-all duration-200 ease-out"
        >
          Get In Touch
        </Link>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="mt-2 w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-md py-5 px-6 flex flex-col gap-4 md:hidden"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {NAV_LINKS.map((link) => {
            const isDownloads = link.label === "Downloads";
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={isDownloads ? handleDownloadsClick : () => setOpen(false)}
                className={`text-sm font-medium ${pathname === link.href ? "text-[#008236]" : "text-gray-700"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={ROUTES.CONTACT}
            onClick={() => setOpen(false)}
            className="mt-1 text-center rounded-full bg-[#008236] text-white text-sm font-semibold px-6 py-2.5 ring-2 ring-[#00c14d]"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}
