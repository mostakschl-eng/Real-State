"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { HERO_STATS } from "@/lib/constants";

export function Hero() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const backgroundY = useTransform(
    scrollY,
    [0, 700],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "-14%"],
  );

  return (
    <section className="relative z-10 flex min-h-dvh w-full flex-col justify-between overflow-hidden px-4 pb-8 pt-24 sm:px-6 md:px-12">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="relative top-[-3.5%] h-[122%] w-full"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={prefersReducedMotion ? undefined : { scale: 1.06 }}
            transition={{
              duration: 22,
              ease: [0.32, 0.72, 0, 1],
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="relative h-full w-full"
          >
            <Image
              src="/hero_villa.png"
              alt="Luxury modern villa rendering at dusk"
              fill
              priority
              sizes="100vw"
              className="object-cover brightness-[0.62] saturate-[0.78]"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-t from-[#1C1B18]/90 via-[#1C1B18]/20 to-[#1C1B18]/50" />
        <div className="absolute inset-0 bg-linear-to-r from-[#1C1B18]/62 via-[#1C1B18]/12 to-[#1C1B18]/40" />
      </div>

      <div />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-2 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mb-5 rounded-full border border-canvas/25 bg-canvas/12 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.22em] text-canvas/82 backdrop-blur-sm"
        >
          Signature Portfolio, Dubai
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.15, duration: 1.1, ease: [0.32, 0.72, 0, 1] }}
          className="font-serif text-[clamp(2.7rem,8vw,6rem)] uppercase tracking-tight leading-[0.95] text-canvas"
        >
          Sculpting Light <br />
          <span className="italic font-light leading-[1.1] text-accent">
            and Space
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-5 max-w-[42ch] text-sm font-light leading-relaxed tracking-wide text-canvas/88 md:text-base"
        >
          Bespoke residential estates crafted for those who view architecture as
          living art.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link suppressHydrationWarning href="#residences">
            <MagneticButton
              strength={22}
              className="group flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-canvas transition-all duration-500 hover:bg-canvas hover:text-text-primary active:scale-[0.97]"
            >
              Explore Residences
              <span className="flex size-5 items-center justify-center rounded-full bg-text-primary/10 text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                &rarr;
              </span>
            </MagneticButton>
          </Link>
          <Link
            suppressHydrationWarning
            href="/about"
            className="text-[10px] uppercase tracking-[0.2em] text-canvas/86 transition-colors duration-300 hover:text-canvas"
          >
            Our Manifesto
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-5xl"
      >
        <div className="grid grid-cols-2 gap-4 border-t border-canvas/24 pt-6 md:grid-cols-4 md:gap-0">
          {HERO_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1 px-4 ${index > 0 ? "md:border-l md:border-canvas/24" : ""}`}
            >
              <span className="font-mono text-lg tracking-tight text-canvas md:text-xl">
                {stat.value}
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-canvas/78">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
