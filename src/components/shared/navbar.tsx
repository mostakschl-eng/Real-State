"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { MagneticButton } from "./magnetic-button";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Residences", href: "/#residences" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
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
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-5xl rounded-full px-6 py-3 bg-canvas/80 backdrop-blur-xl border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.2em] uppercase text-text-primary hover:text-accent transition-colors duration-300"
        >
          J&S <span className="text-accent">Estate</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 hover:text-accent ${
                  isActive ? "text-accent" : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button / Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link href="/contact">
              <MagneticButton
                strength={20}
                className="rounded-full px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-medium border border-black/10 text-text-primary bg-black/5 hover:bg-accent hover:text-canvas hover:border-accent transition-all duration-300 active:scale-[0.98]"
              >
                Inquire
              </MagneticButton>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center p-2 text-text-primary hover:text-accent transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Screen Takeover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
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
                <Link href="/contact" onClick={closeMenu}>
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
