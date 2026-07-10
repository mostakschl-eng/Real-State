"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "motion/react";

export function ResidencesTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth the scroll progress using spring physics for buttery animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const prefersReducedMotion = useReducedMotion();

  // Scale from a slightly letterboxed state to full scale using transform only (no width reflows)
  const scale = useTransform(smoothProgress, [0, 0.75], prefersReducedMotion ? [1, 1] : [0.75, 1]);
  
  // Vertical parallax drift for the inner image
  const imgY = useTransform(smoothProgress, [0, 0.75], prefersReducedMotion ? ["0%", "0%"] : ["-10%", "10%"]);

  // Editorial text reveal offsets
  const textY = useTransform(smoothProgress, [0.15, 0.65], prefersReducedMotion ? [0, 0] : [60, 0]);
  const textOpacity = useTransform(smoothProgress, [0.15, 0.55], prefersReducedMotion ? [1, 1] : [0, 1]);
  
  // Transition overlay color/opacity for smooth blending
  const overlayOpacity = useTransform(smoothProgress, [0.5, 0.9], [0.35, 0.75]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[300vh] bg-canvas z-20"
    >
      <div className="sticky top-0 h-dvh flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale }}
          className="relative h-[85vh] w-[90vw] md:w-[85vw] lg:w-[80vw] overflow-hidden rounded-4xl ring-1 ring-black/5 bg-black/3 p-2"
        >
          {/* Inner Core container with absolute cover */}
          <div 
            id="residences-transition-source"
            className="w-full h-full relative overflow-hidden rounded-3xl bg-zinc-950"
          >
            {/* Parallax inner image with safe dimensions */}
            <motion.div 
              style={{ y: imgY }} 
              className="absolute inset-0 w-full h-[130%] top-[-15%]"
            >
              <Image
                src="/images/properties/prop_luminary.png"
                alt="Entering Signature Residences"
                fill
                priority
                className="object-cover brightness-[0.7] saturate-[0.8]"
              />
            </motion.div>
            
            {/* Scrim Overlay */}
            <motion.div 
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-text-primary/45 pointer-events-none z-10" 
            />

            {/* Title mask reveal */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
              <div className="overflow-hidden pb-3">
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
                  className="font-serif text-[clamp(2.2rem,6vw,5rem)] tracking-tight leading-[1.05] text-white uppercase"
                >
                  Signature <br />
                  <span className="italic font-light text-accent">Estates</span>
                </motion.h2>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
