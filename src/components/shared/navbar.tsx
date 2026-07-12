"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "./magnetic-button";
import { Logo } from "./logo";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Floating Pill Nav */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 flex w-[calc(100%-1.5rem)] max-w-5xl items-center justify-between rounded-full border border-text-primary/10 bg-canvas/92 px-4 py-3 shadow-[0_8px_32px_rgba(28,27,24,0.12),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-xl md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <Logo />
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, index) => {
            const isActive =
              pathname === link.href || (pathname === "/" && link.href === "/");
            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.05,
                  ease: [0.32, 0.72, 0, 1],
                }}
              >
                <Link
                  suppressHydrationWarning
                  href={link.href}
                  className={`text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-accent ${
                    isActive ? "text-accent" : "text-text-primary/78"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.35,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="hidden md:block"
          >
            <Link suppressHydrationWarning href="/contact">
              <MagneticButton
                strength={20}
                className="rounded-full px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-medium border border-black/10 text-text-primary bg-black/5 hover:bg-accent hover:text-canvas hover:border-accent transition-all duration-300 active:scale-[0.98]"
              >
                Inquire
              </MagneticButton>
            </Link>
          </motion.div>

          <button
            onClick={toggleMenu}
            className="relative flex h-8 w-8 items-center justify-end text-text-primary transition-colors hover:text-accent md:hidden pr-1"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block size-1.5 rounded-full bg-current transition-transform duration-300 ease-premium-in-out ${
                isOpen ? "scale-150 bg-accent" : "scale-100"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Screen Takeover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-35 bg-canvas/98 backdrop-blur-3xl flex flex-col justify-center p-8 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.08,
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  <Link
                    suppressHydrationWarning
                    href={link.href}
                    onClick={closeMenu}
                    className="font-serif text-3xl tracking-widest uppercase text-text-primary hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + NAV_LINKS.length * 0.08,
                  duration: 0.5,
                }}
                className="mt-8"
              >
                <Link
                  suppressHydrationWarning
                  href="/contact"
                  onClick={closeMenu}
                >
                  <button className="rounded-full px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium border border-accent text-accent bg-accent/5 hover:bg-accent hover:text-canvas transition-all duration-300">
                    Inquire Now
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
