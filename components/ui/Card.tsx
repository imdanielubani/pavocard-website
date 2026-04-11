import { cn } from "@/lib/utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn("bg-white rounded-2xl border border-gray-100 shadow-sm p-6", className)}>
      {children}
    </div>
  );
}
