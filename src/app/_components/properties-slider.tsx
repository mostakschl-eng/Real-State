"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, useMotionValue, type MotionValue } from "motion/react";
import { PROPERTIES } from "@/lib/constants";

export function PropertiesSlider() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  
  // Spring-smoothed scroll progress for buttery slider motion
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });
  
  // Translate the slider horizontally
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-55%"]);

  // Unified safe vertical parallax limits for all slider cards
  const CARD_PARALLAX_RANGE: [string, string][] = [
    ["-8%", "8%"],
    ["-8%", "8%"],
    ["-8%", "8%"],
    ["-8%", "8%"],
  ];

  return (
    <section
      ref={targetRef}
      id="residences"
      className="relative w-full h-[300vh] bg-canvas z-30"
    >
      <div className="sticky top-0 h-dvh flex flex-col justify-center px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent">
              Selected Estates
            </span>
            <div className="flex justify-between items-end">
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.05] text-text-primary uppercase">
                Signature <br />
                <span className="italic font-light text-accent">Residences</span>
              </h2>
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-secondary hidden md:block">
                Scroll to explore portfolio
              </div>
            </div>
          </div>

          {/* Scroll-Linked Slider Container */}
          <div className="overflow-visible">
            <motion.div
              style={{ x }}
              className="flex gap-8 w-max pr-12 md:pr-32"
            >
              {PROPERTIES.map((property, index) => (
                <PropertyCard 
                  key={property.slug} 
                  property={property} 
                  isFirst={index === 0}
                  containerRef={targetRef}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ 
  property, 
  isFirst = false,
  containerRef 
}: { 
  property: (typeof PROPERTIES)[0],
  isFirst?: boolean,
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  const [isHovered, setIsHovered] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  // Entry morph progress (as the slider scrolls into view)
  const { scrollYProgress: enterProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"], 
  });

  // Spring-smoothed progress to sync with Section 3's scroll-linked animations
  const smoothEnterProgress = useSpring(enterProgress, { stiffness: 80, damping: 25 });

  // MotionValues for real-time visual coordinate bridging
  const entryDeltaX = useMotionValue(0);
  const entryDeltaY = useMotionValue(-600);
  const entryScaleX = useMotionValue(3.5);
  const entryScaleY = useMotionValue(2.6);

  useEffect(() => {
    if (!isFirst) return;

    function measure() {
      // Lock measurements during transition to prevent scroll jitter and race conditions
      const v = enterProgress.get();
      if (v >= 0.4 && v < 1.0) {
        if (entryDeltaX.get() !== 0 || entryDeltaY.get() !== -600) {
          return;
        }
      }

      const linkEl = linkRef.current;
      if (!linkEl) return;
      const targetRect = linkEl.getBoundingClientRect();
      if (targetRect.width === 0) return;

      const source = document.getElementById("residences-transition-source");
      if (source) {
        const s = source.getBoundingClientRect();
        entryDeltaX.set(s.left + s.width / 2 - (targetRect.left + targetRect.width / 2));
        entryDeltaY.set(s.top + s.height / 2 - (targetRect.top + targetRect.height / 2));
        entryScaleX.set(s.width / targetRect.width);
        entryScaleY.set(s.height / targetRect.height);
      }
    }

    measure();
    window.addEventListener("resize", measure);

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        measure();
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isFirst]);

  // Horizontal parallax for standard cards
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const imgX = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  // Delay the morph start to 40% of the entry scroll so the source image is fully shown first
  const startProgress = 0.4;

  const morphX = useTransform(smoothEnterProgress, (v) => {
    if (v < startProgress) return entryDeltaX.get();
    const p = (v - startProgress) / (1 - startProgress);
    return (1 - p) * entryDeltaX.get();
  });

  const morphY = useTransform(smoothEnterProgress, (v) => {
    if (v < startProgress) return entryDeltaY.get();
    const p = (v - startProgress) / (1 - startProgress);
    return (1 - p) * entryDeltaY.get();
  });

  const morphScaleX = useTransform(smoothEnterProgress, (v) => {
    if (v < startProgress) return entryScaleX.get();
    const p = (v - startProgress) / (1 - startProgress);
    return p + (1 - p) * entryScaleX.get();
  });

  const morphScaleY = useTransform(smoothEnterProgress, (v) => {
    if (v < startProgress) return entryScaleY.get();
    const p = (v - startProgress) / (1 - startProgress);
    return p + (1 - p) * entryScaleY.get();
  });

  // Fade in the morphing copy just as the morph starts moving (between 0.35 and 0.45)
  const morphOpacity = useTransform(smoothEnterProgress, [0, 0.35, 0.45, 1], [0, 0, 1, 1]);
  
  // Calculate border radius dynamically to keep all four corners visually rounded at 24px
  const cardRadius = useTransform(smoothEnterProgress, (v) => {
    const clamped = Math.max(0, Math.min(1.0, v));
    const p = clamped < startProgress ? 0 : (clamped - startProgress) / (1 - startProgress);
    const currentScale = p + (1 - p) * entryScaleX.get();
    const r = 24 / (currentScale || 1);
    return `${r}px`;
  });

  // Uniform child image scaling to prevent aspect ratio distortion during non-uniform morph scale
  const imgScaleX = useTransform(smoothEnterProgress, (v) => {
    const sx = morphScaleX.get();
    const sy = morphScaleY.get();
    return sx === 0 ? 1 : sy / sx;
  });

  // Dynamically offset the image vertically to match Section 3's ending parallax shift (10%), landing at 0%
  const imgYOffset = useTransform(smoothEnterProgress, (v) => {
    if (v < startProgress) return "10%";
    const p = (v - startProgress) / (1 - startProgress);
    return `${(1 - p) * 10}%`;
  });

  const styleObj = isFirst 
    ? { 
        x: morphX, 
        y: morphY, 
        scaleX: morphScaleX, 
        scaleY: morphScaleY, 
        opacity: morphOpacity,
        borderRadius: cardRadius
      } 
    : { x: imgX };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[300px] md:w-[440px] select-none shrink-0"
    >
      {/* Double Bezel (Doppelrand) Enclosure - Dark Mode style surface */}
      <div className="double-bezel-outer transition-colors duration-500 hover:bg-accent/5 hover:border-accent/20">
        <div className={`double-bezel-inner relative bg-surface ${isFirst ? 'overflow-visible!' : 'overflow-hidden'}`}>
          {/* Card Link to Detail Page */}
          <Link
            ref={linkRef}
            href={`/projects/${property.slug}`}
            className={`block relative aspect-4/3 ${isFirst ? 'overflow-visible' : 'overflow-hidden'}`}
          >
            {/* Image with morph/parallax effect */}
            <motion.div
              style={isFirst ? styleObj : { x: imgX }}
              animate={!isFirst ? { scale: isHovered ? 1.05 : 1 } : {}}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className={`w-full h-full absolute inset-0 origin-center ${isFirst ? 'z-50 overflow-hidden' : 'z-0 overflow-hidden rounded-t-[1.625rem]'}`}
            >
              <motion.div
                style={isFirst ? { scaleX: imgScaleX, y: imgYOffset, originX: 0.5, originY: 0.5 } : {}}
                className="w-full h-full relative"
              >
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  sizes="(max-width: 768px) 300px, 440px"
                  className={`object-cover brightness-95 saturate-[0.8] transition-transform duration-700 ${isHovered ? 'scale-105' : ''}`}
                />
              </motion.div>
            </motion.div>

            {/* Hover overlay (Reveal Curtain card) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-linear-to-t from-text-primary/80 via-text-primary/20 to-transparent flex flex-col justify-end p-6 z-10"
            >
              <motion.div
                animate={{ y: isHovered ? 0 : 15, opacity: isHovered ? 1 : 0 }}
                transition={{
                  delay: 0.05,
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="flex justify-between items-end"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">
                  View Residence Detail
                </div>
                <div className="text-accent text-lg font-light">&rarr;</div>
              </motion.div>
            </motion.div>
          </Link>

          {/* Card Info Section */}
          <div className="p-6 flex flex-col gap-5 bg-canvas">
            {/* Location & Title */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-text-secondary">
                {property.location}
              </span>
              <h3 className="font-serif text-xl md:text-2xl uppercase tracking-wider text-text-primary">
                {property.name}
              </h3>
              <p className="font-serif italic text-xs text-text-secondary/80 leading-snug">
                {property.tagline}
              </p>
            </div>

            {/* Clean Data Grid (Sobha Style with thin lines & Geist Mono numbers) */}
            <div className="grid grid-cols-2 gap-px bg-black/5 border border-black/5 rounded-lg overflow-hidden">
              {property.specs.slice(0, 4).map((spec) => (
                <div
                  key={spec.label}
                  className="bg-surface p-3 flex flex-col gap-1"
                >
                  <span className="text-[9px] uppercase tracking-[0.25em] text-text-secondary">
                    {spec.label}
                  </span>
                  <span className="font-mono text-xs text-text-primary tracking-wide">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Price tag */}
            <div className="flex justify-between items-center pt-1">
              <span className="text-[9px] uppercase tracking-[0.25em] text-text-secondary">
                Acquisition Value
              </span>
              <span className="font-mono text-sm font-medium text-accent">
                {property.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
