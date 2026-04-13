import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-[#008236] text-white hover:bg-[#006b2b] ring-2 ring-[#00c14d]",
    outline: "border-2 border-[#008236] text-[#008236] hover:bg-green-50",
    ghost: "text-[#008236] hover:bg-green-50",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-2.5",
    lg: "text-base px-8 py-3",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
