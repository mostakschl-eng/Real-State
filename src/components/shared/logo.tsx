"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

export function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="font-serif text-sm tracking-[0.15em] uppercase text-text-primary transition-colors duration-300 hover:text-accent md:text-base md:tracking-[0.18em] flex items-center focus:outline-hidden"
    >
      {/* Mobile view: simple static ACL logo */}
      <span className="md:hidden">
        A<span className="text-accent">C</span>L
      </span>

      {/* Desktop view: sliding text reveal */}
      <span className="hidden md:block relative overflow-hidden h-6 leading-6">
        <motion.span
          animate={{ y: isHovered ? "-100%" : "0%" }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          className="block whitespace-nowrap"
        >
          Avenue <span className="text-accent">Construction</span> Limited
        </motion.span>
        
        {/* Hover duplicate that slides up from bottom */}
        <motion.span
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 block whitespace-nowrap text-accent"
        >
          Avenue <span className="text-text-primary">Construction</span> Limited
        </motion.span>
      </span>
    </Link>
  );
}
