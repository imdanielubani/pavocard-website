import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export default function NotFoundSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center text-center px-6 pt-[140px] pb-[80px] md:pt-[160px] md:pb-[100px]">

      {/* Robot illustration — floating animation */}
      <div
        className="w-full max-w-[549px]"
        style={{ animation: "float 4s ease-in-out infinite" }}
      >
        <Image
          src="/images/404-robot.png"
          alt="404 broken robot"
          width={549}
          height={447}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Oops heading */}
      <h1 className="mt-8 font-sans font-bold text-black text-[40px] sm:text-[50px] leading-[24px] tracking-[-0.4px]">
        Oops !
      </h1>

      {/* Subtitle */}
      <p className="mt-8 font-sans font-normal text-black text-[16px] sm:text-[20px] leading-[24px] tracking-[-0.4px]">
        Page not found, please try again or go back Home.
      </p>

      {/* Go to home button */}
      <Link
        href={ROUTES.HOME}
        className="mt-8 inline-flex items-center justify-center h-[48px] px-8 bg-[#046f2b] rounded-full font-sans font-normal text-white text-[16px] leading-[24px] tracking-[-0.4px] hover:scale-[1.05] hover:shadow-[0_0_24px_rgba(4,111,43,0.45)] active:scale-[0.97] transition-all duration-200 ease-out"
        style={{ border: "5px solid rgba(80,194,122,0.5)" }}
      >
        Go to home
      </Link>

    </section>
  );
}
