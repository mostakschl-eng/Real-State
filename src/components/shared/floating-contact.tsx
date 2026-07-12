// @ts-check
"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export function FloatingContact() {
  const [hoveredButton, setHoveredButton] = useState<
    "whatsapp" | "phone" | null
  >(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) return null;

  const items = [
    {
      key: "whatsapp" as const,
      href: "https://wa.me/97145550199",
      external: true,
      label: "WhatsApp Chat",
      delay: 0.2,
      icon: (
        <svg
          viewBox="0 0 448 512"
          className="size-5 md:size-6"
          fill="currentColor"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 438.1c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.1 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.5-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      ),
    },
    {
      key: "phone" as const,
      href: "tel:+97145550199",
      external: false,
      label: "Call Atelier",
      delay: 0.3,
      icon: <Phone className="size-6 md:size-7" strokeWidth={1.6} />,
    },
  ];

  return (
    <div
      className="flex flex-col items-end gap-2"
      style={{
        position: "fixed",
        zIndex: 9999,
        bottom: "1.5rem",
        right: "1rem",
      }}
    >
      {items.map((item) => {
        const isHovered = hoveredButton === item.key;
        return (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: item.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center"
            onMouseEnter={() => setHoveredButton(item.key)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {/*
              Label lives in normal flex flow (not absolute) so it physically
              pushes space for itself — it can never overlap the icon.
              Mounts/unmounts cleanly since flexbox reflows the sibling icon.
            */}
            <AnimatePresence>
              {isHovered && (
                <motion.a
                  suppressHydrationWarning
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0.9, marginRight: 0 }}
                  animate={{ opacity: 1, scale: 1, marginRight: 12 }}
                  exit={{ opacity: 0, scale: 0.9, marginRight: 0 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-10 md:h-11 items-center whitespace-nowrap rounded-full px-4 md:px-5"
                  style={{
                    border: "1px solid rgba(194, 159, 120, 0.35)",
                    backgroundColor: "#f8f7f5",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <span className="text-[10px] md:text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-accent">
                    {item.label}
                  </span>
                </motion.a>
              )}
            </AnimatePresence>

            {/* Icon button — hover scale only, no idle motion */}
            <motion.a
              suppressHydrationWarning
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex size-14 md:size-16 shrink-0 items-center justify-center rounded-full bg-accent text-canvas shadow-xl shadow-black/10"
              aria-label={item.label}
            >
              {item.icon}
            </motion.a>
          </motion.div>
        );
      })}
    </div>
  );
}
