import type { Variants } from "framer-motion";

// Shared easing curve — same as PageTransition / ScrollReveal
export const ease = [0.22, 1, 0.36, 1] as const;

// Fade up (default reveal)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

// Fade in only (no movement)
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease },
  },
};

// Slide from left
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease },
  },
};

// Slide from right
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease },
  },
};

// Stagger container — wraps children that each use a child variant
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Scale up (for phone / illustration entry)
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
};

// Viewport options — trigger once element is 80px into viewport
export const viewport = { once: true, margin: "-80px" } as const;
