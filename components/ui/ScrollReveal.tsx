"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

const initialMap = {
  up:    { opacity: 0, y: 28 },
  left:  { opacity: 0, x: -28 },
  right: { opacity: 0, x: 28 },
  none:  { opacity: 0 },
};

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={initialMap[direction]}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
