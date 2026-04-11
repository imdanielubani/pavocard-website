import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/common/Preloader";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "block",
});

export const metadata: Metadata = {
  title: "Pavocard — Sell Gift Cards for Cash in Nigeria & Ghana",
  description:
    "Pavocard lets you sell gift cards instantly and receive cash in Nigeria and Ghana. Fast, secure, and reliable.",
  keywords: ["gift cards", "sell gift cards", "Nigeria", "Ghana", "fintech", "Pavocard"],
  openGraph: {
    title: "Pavocard — Sell Gift Cards for Cash",
    description:
      "Sell gift cards instantly and receive cash in Nigeria and Ghana.",
    url: "https://pavocard.com",
    siteName: "Pavocard",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-poppins)]">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
