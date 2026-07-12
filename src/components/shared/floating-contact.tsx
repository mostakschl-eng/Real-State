"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export function FloatingContact() {
  const [hoveredButton, setHoveredButton] = useState<"whatsapp" | "phone" | null>(null);
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
        <svg viewBox="0 0 24 24" className="size-5 md:size-[30px]" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.012 14.07 1.01 11.999 1.01 6.562 1.01 2.138 5.38 2.134 10.81c-.001 1.761.464 3.478 1.349 5.025l-.946 3.454 3.538-.925zm11.758-6.848c-.322-.161-1.897-.937-2.19-1.041-.294-.104-.508-.156-.72.156-.213.313-.826 1.04-1.012 1.253-.187.213-.373.24-.692.08-.32-.16-1.347-.497-2.565-1.583-.949-.846-1.589-1.89-1.775-2.21-.187-.32-.02-.493.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.626-.523-.54-.72-.55-.186-.01-.4-.01-.613-.01-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666 0 1.574 1.146 3.094 1.306 3.307.16.213 2.253 3.44 5.453 4.826.762.329 1.356.526 1.82.673.765.243 1.462.209 2.012.127.613-.092 1.897-.774 2.164-1.522.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
        </svg>
      ),
    },
    {
      key: "phone" as const,
      href: "tel:+97145550199",
      external: false,
      label: "Call Atelier",
      delay: 0.3,
      icon: <Phone className="size-5 md:size-7" strokeWidth={1.6} />,
    },
  ];

  return (
    <div className="fixed z-9999 flex flex-col items-end gap-2 bottom-6 right-4 md:bottom-8 md:right-6">
      {items.map((item) => {
        const isHovered = hoveredButton === item.key;
        return (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
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
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0.9, marginRight: 0 }}
                  animate={{ opacity: 1, scale: 1, marginRight: 12 }}
                  exit={{ opacity: 0, scale: 0.9, marginRight: 0 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-11 items-center whitespace-nowrap rounded-full px-5"
                  style={{
                    border: "1px solid rgba(194, 159, 120, 0.35)",
                    backgroundColor: "#f8f7f5",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <span className="text-[11px] font-sans font-medium uppercase tracking-[0.12em] text-accent">
                    {item.label}
                  </span>
                </motion.a>
              )}
            </AnimatePresence>

            {/* Icon button — hover scale only, no idle motion */}
            <motion.a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex size-14 md:size-20 shrink-0 items-center justify-center rounded-full bg-accent text-canvas shadow-[0_10px_30px_rgba(202,138,4,0.35)]"
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
