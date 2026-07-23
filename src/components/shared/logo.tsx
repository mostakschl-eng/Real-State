"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Avenue Constructions Limited Logo"
      className="inline-flex items-center focus:outline-hidden group"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
        className="relative h-11 md:h-12 w-auto shrink-0 flex items-center"
      >
        <Image
          src="/images/site_logo_v2.png"
          alt="Avenue Constructions Limited"
          width={180}
          height={60}
          priority
          className="h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
        />
      </motion.div>
    </Link>
  );
}






