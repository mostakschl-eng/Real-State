"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

export function ResidencesTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const prefersReducedMotion = useReducedMotion();

  // Scale from a slightly letterboxed state to full scale using transform only (no width reflows)
  const scale = useTransform(scrollYProgress, [0, 0.8], prefersReducedMotion ? [1, 1] : [0.8, 1]);
  
  // Editorial text reveal offsets
  const textY = useTransform(scrollYProgress, [0, 0.6], prefersReducedMotion ? [0, 0] : [80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], prefersReducedMotion ? [1, 1] : [0, 1]);
  
  // Transition overlay color/opacity for smooth blending
  const overlayOpacity = useTransform(scrollYProgress, [0.7, 0.95], [0.3, 0.75]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[150vh] bg-canvas z-20"
    >
      <div className="sticky top-0 h-[100dvh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale }}
          className="relative h-[85vh] w-[90vw] md:w-[85vw] lg:w-[80vw] overflow-hidden rounded-[2rem] ring-1 ring-black/5 bg-black/[0.03] p-2"
        >
          {/* Inner Core container with absolute cover */}
          <div className="w-full h-full relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-zinc-950">
            {/* Parallax inner image */}
            <div className="absolute inset-0 w-full h-[130%] -top-[15%]">
              <Image
                src="/images/properties/prop_luminary.png"
                alt="Entering Signature Residences"
                fill
                priority
                className="object-cover brightness-[0.7] saturate-[0.8]"
              />
            </div>
            
            {/* Scrim Overlay */}
            <motion.div 
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-text-primary/45 pointer-events-none" 
            />

            {/* Title mask reveal */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
              <div className="overflow-hidden pb-2">
                <motion.span
                  style={{ y: textY, opacity: textOpacity }}
                  className="block text-[9px] uppercase tracking-[0.25em] font-mono text-accent"
                >
                  Entering the Realm
                </motion.span>
              </div>
              <div className="overflow-hidden pb-1">
                <motion.h2
                  style={{ y: textY, opacity: textOpacity }}
                  className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none text-white uppercase"
                >
                  Signature <span className="italic font-light text-accent">Estates</span>
                </motion.h2>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
