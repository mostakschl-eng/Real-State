"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="font-serif text-sm tracking-[0.15em] uppercase text-text-primary transition-colors duration-300 hover:text-accent md:text-base md:tracking-[0.18em] flex items-center gap-3 focus:outline-hidden"
    >
      {/* Brand Icon/Logo */}
      <div className="relative size-8 shrink-0 overflow-hidden rounded-md border border-black/5 bg-white flex items-center justify-center shadow-xs">
        <Image
          src="/images/site_logo.jpeg"
          alt="Avenue Constructions Logo"
          fill
          sizes="32px"
          priority
          className="object-contain p-0.5"
        />
      </div>

      {/* Mobile view: simple static ACL logo */}
      <span className="md:hidden tracking-[0.3em] ml-[0.15em] font-bold">
        A<span className="text-accent">C</span>L
      </span>

      {/* Desktop view: sliding text reveal */}
      <span className="hidden md:block relative overflow-hidden h-6 leading-6">
        <motion.span
          animate={{ y: isHovered ? "-100%" : "0%" }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          className="block whitespace-nowrap"
        >
          Avenue <span className="text-accent">Constructions</span> Limited
        </motion.span>

        {/* Hover duplicate that slides up from bottom */}
        <motion.span
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 block whitespace-nowrap text-accent"
        >
          Avenue <span className="text-text-primary">Constructions</span> Limited
        </motion.span>
      </span>
    </Link>
  );
}
