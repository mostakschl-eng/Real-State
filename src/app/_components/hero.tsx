"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { HERO_STATS } from "@/lib/constants";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const yBg = useTransform(scrollY, [0, 700], prefersReducedMotion ? ["0%", "0%"] : ["0%", "-14%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 md:px-12 overflow-hidden z-10"
    >
      {/* Background with Parallax + Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: yBg }}
          className="relative w-full h-[122%] top-[-3.5%]"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-full h-full relative"
          >
            <Image
              src="/hero_villa.png"
              alt="Luxury modern villa rendering at dusk"
              fill
              priority
              sizes="100vw"
              className="object-cover brightness-[0.68] saturate-[0.8]"
            />
          </motion.div>
        </motion.div>
        {/* Layered scrims for guaranteed text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/85 via-[#1C1B18]/15 to-[#1C1B18]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1B18]/55 via-[#1C1B18]/10 to-[#1C1B18]/35" />
      </div>

      {/* Vertical nav — desktop only */}
      <div className="hidden xl:flex flex-col gap-8 fixed left-10 top-1/2 -translate-y-1/2 z-20">
        {["Residences", "Manifesto", "Services", "Team", "Contact"].map(
          (item, i) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[9px] uppercase tracking-[0.28em] font-mono text-white/70 hover:text-accent transition-colors duration-300 flex items-center gap-2"
            >
              <span className="text-accent">[0{i + 1}]</span> {item}
            </Link>
          ),
        )}
      </div>

      {/* Spacer */}
      <div />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center px-2">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.22em] font-medium border border-white/20 bg-white/10 text-white/70 mb-5 backdrop-blur-sm"
        >
          Signature Portfolio, Dubai
        </motion.div>

        {/* H1 — blur-in entry, max 2 lines */}
        <motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.15, duration: 1.1, ease: [0.32, 0.72, 0, 1] }}
          className="font-serif text-[clamp(2.8rem,8vw,6rem)] tracking-tight leading-[0.93] text-white uppercase"
        >
          Sculpting Light <br />
          <span className="italic font-light text-accent">and Space</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="text-sm md:text-base leading-relaxed text-white/85 max-w-[42ch] mt-5 tracking-wide font-light"
        >
          Bespoke residential estates crafted for those who view architecture as
          living art.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="#residences">
            <MagneticButton
              strength={22}
              className="group rounded-full bg-accent text-white px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] font-medium flex items-center gap-3 transition-all duration-500 hover:bg-white hover:text-text-primary active:scale-[0.97]"
            >
              Explore Residences
              <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105">
                &rarr;
              </span>
            </MagneticButton>
          </Link>
          <Link
            href="/about"
            className="text-[10px] uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors duration-300"
          >
            Our Manifesto
          </Link>
        </motion.div>
      </div>

      {/* Bottom strip — stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl mx-auto"
      >
        <div className="border-t border-white/20 pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1 px-4 ${i > 0 ? "md:border-l md:border-white/20" : ""}`}
            >
              <span className="font-mono text-lg md:text-xl text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/75">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
