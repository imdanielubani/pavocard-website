"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Background */}
          <Image
            src="/images/preloadbg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Logo */}
          <div className="relative flex flex-col items-center gap-8">
            <div className="flex items-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <Image
                  src="/images/Preloader icon.png"
                  alt="P"
                  width={60}
                  height={60}
                  className="block"
                  priority
                />
              </motion.div>

              <motion.span
                className="text-white"
                style={{ fontSize: "3rem", lineHeight: "60px", fontFamily: "var(--font-poppins)" }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span style={{ fontWeight: 600 }}>avo</span>
                <span style={{ fontWeight: 400 }}>card</span>
              </motion.span>
            </div>

            {/* Spinner */}
            <motion.div
              className="w-8 h-8 rounded-full border-[3px] border-white/30 border-t-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{
                opacity: { delay: 0.65, duration: 0.3 },
                rotate: { delay: 0.65, duration: 0.85, repeat: Infinity, ease: "linear" },
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
