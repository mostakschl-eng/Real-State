"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { TEAM_MEMBERS } from "@/lib/constants";

export function Team() {
  const containerRef = useRef<HTMLElement>(null);
  const [alexander, elena, marcus] = TEAM_MEMBERS;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const prefersReducedMotion = useReducedMotion();

  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-5%", "5%"],
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-8%", "8%"],
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-5%", "5%"],
  );

  return (
    <section
      ref={containerRef}
      id="team"
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-surface z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent">
            Our Leadership
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.05] text-text-primary uppercase">
            The Minds Behind <br />
            <span className="italic font-light text-accent">
              the Structures
            </span>
          </h2>
        </div>

        {/* Asymmetric Bento Grid (3 items, 3 cells - no empty tiles, no three-in-a-row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: Alexander Mercer (col-span-2) - Horizontal Split */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="md:col-span-2 double-bezel-outer"
          >
            <div className="double-bezel-inner h-full grid grid-cols-1 sm:grid-cols-2">
              {/* Image side */}
              <div className="relative aspect-4/3 sm:aspect-auto h-64 sm:h-full overflow-hidden">
                <motion.div
                  style={{ y: y1 }}
                  className="absolute w-full h-[125%] top-[-12.5%]"
                >
                  <Image
                    src={alexander.imageUrl}
                    alt={alexander.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-premium-in-out hover:scale-105"
                  />
                </motion.div>
              </div>
              {/* Text side */}
              <div className="p-8 flex flex-col justify-between gap-6 bg-surface">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                    {alexander.role}
                  </span>
                  <h3 className="font-serif text-2xl uppercase tracking-wider text-text-primary mt-2">
                    {alexander.name}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light mt-4">
                    {alexander.bio}
                  </p>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-text-secondary/40 font-mono">
                  Partner / 01
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Elena Rostova (col-span-1) - Vertical Layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="md:col-span-1 double-bezel-outer"
          >
            <div className="double-bezel-inner h-full flex flex-col justify-between bg-surface">
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <motion.div
                  style={{ y: y2 }}
                  className="absolute w-full h-[125%] top-[-12.5%]"
                >
                  <Image
                    src={elena.imageUrl}
                    alt={elena.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-premium-in-out hover:scale-105"
                  />
                </motion.div>
              </div>
              <div className="p-8 flex flex-col gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                    {elena.role}
                  </span>
                  <h3 className="font-serif text-2xl uppercase tracking-wider text-text-primary mt-2">
                    {elena.name}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-light mt-2">
                    {elena.bio}
                  </p>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-text-secondary/40 font-mono pt-4 border-t border-black/5">
                  Partner / 02
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Marcus Thorne (col-span-3) - Horizontal Reverse Split */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="md:col-span-3 double-bezel-outer"
          >
            <div className="double-bezel-inner h-full grid grid-cols-1 sm:grid-cols-3">
              {/* Text side (takes 2/3 of space on desktop) */}
              <div className="sm:col-span-2 p-8 flex flex-col justify-between gap-6 bg-surface order-2 sm:order-1">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                    {marcus.role}
                  </span>
                  <h3 className="font-serif text-2xl uppercase tracking-wider text-text-primary mt-2">
                    {marcus.name}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light mt-4">
                    {marcus.bio}
                  </p>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-text-secondary/40 font-mono">
                  Partner / 03
                </div>
              </div>
              {/* Image side (takes 1/3 of space on desktop) */}
              <div className="relative aspect-4/3 sm:aspect-auto h-64 sm:h-full overflow-hidden order-1 sm:order-2">
                <motion.div
                  style={{ y: y3 }}
                  className="absolute w-full h-[125%] top-[-12.5%]"
                >
                  <Image
                    src={marcus.imageUrl}
                    alt={marcus.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-premium-in-out hover:scale-105"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
