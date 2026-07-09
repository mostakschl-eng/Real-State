"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useReducedMotion, type MotionValue } from "motion/react";
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
      <div className="sticky top-0 h-[100dvh] flex flex-col justify-center px-6 md:px-12 py-24">
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
                  scrollYProgress={smoothProgress}
                  parallaxRange={CARD_PARALLAX_RANGE[index % CARD_PARALLAX_RANGE.length]}
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
  scrollYProgress,
  parallaxRange,
}: { 
  property: (typeof PROPERTIES)[0],
  scrollYProgress: MotionValue<number>,
  parallaxRange: [string, string],
}) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const cardImgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : parallaxRange);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[300px] md:w-[440px] select-none shrink-0"
    >
      {/* Double Bezel (Doppelrand) Enclosure - Dark Mode style surface */}
      <div className="double-bezel-outer transition-colors duration-500 hover:bg-accent/5 hover:border-accent/20">
        <div className="double-bezel-inner relative overflow-hidden bg-surface">
          {/* Card Link to Detail Page */}
          <Link
            href={`/projects/${property.slug}`}
            className="block relative aspect-4/3 overflow-hidden"
          >
            {/* Parallax inner image with safe container dimensions to prevent gaps */}
            <motion.div
              style={{ y: cardImgY }}
              className="absolute inset-0 w-full h-[130%] -top-[15%] origin-center overflow-hidden"
            >
              <Image
                src={property.image}
                alt={property.name}
                fill
                sizes="(max-width: 768px) 300px, 440px"
                className={`object-cover brightness-95 saturate-[0.8] transition-transform duration-700 ${isHovered ? 'scale-105' : ''}`}
              />
            </motion.div>

            {/* Hover overlay (Reveal Curtain card) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-text-primary/20 to-transparent flex flex-col justify-end p-6 z-10"
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
