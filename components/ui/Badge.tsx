import { cn } from "@/lib/utils/cn";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "green" | "gray" | "blue";
  className?: string;
};

export default function Badge({ children, variant = "green", className }: BadgeProps) {
  const variants = {
    green: "bg-green-100 text-[#008236]",
    gray: "bg-gray-100 text-gray-600",
    blue: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
