"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "motion/react";
import { PROPERTIES } from "@/lib/properties-constant";

export function PropertiesSlider() {
  const targetRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const xRange = useMotionValue(0);
  const [containerHeight, setContainerHeight] = useState("200vh");

  useEffect(() => {
    function calculateRange() {
      if (!sliderRef.current || !sliderRef.current.parentElement) return;

      const containerWidth = sliderRef.current.parentElement.offsetWidth;
      const lastChild = sliderRef.current.lastElementChild as HTMLElement;

      if (!lastChild) return;

      let range = 0;
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // Mobile: Center the last card on the screen
        const centerOfLastCard =
          lastChild.offsetLeft + lastChild.offsetWidth / 2;
        const centerOfContainer = containerWidth / 2;
        range = Math.max(0, centerOfLastCard - centerOfContainer);
      } else {
        // Desktop: Align the right edge of the last card with the right edge of the container
        const rightEdgeOfLastCard =
          lastChild.offsetLeft + lastChild.offsetWidth;
        range = Math.max(0, rightEdgeOfLastCard - containerWidth);
      }

      xRange.set(range);
      setContainerHeight(`calc(100vh + ${range}px)`);
    }

    calculateRange();
    window.addEventListener("resize", calculateRange);
    const timer = setTimeout(calculateRange, 100);

    return () => {
      window.removeEventListener("resize", calculateRange);
      clearTimeout(timer);
    };
  }, [xRange]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Spring-smoothed scroll progress for buttery slider motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
  });

  // Translate the slider horizontally
  const x = useTransform(smoothProgress, (v) => v * -xRange.get());

  return (
    <section
      ref={targetRef}
      id="residences"
      className="relative w-full bg-canvas z-30"
      style={{ height: containerHeight }}
    >
      <div className="sticky top-0 h-dvh w-full overflow-x-clip flex flex-col pt-16 md:pt-20 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent">
              Selected Estates
            </span>
            <div className="flex justify-between items-end">
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.05] text-text-primary uppercase">
                Signature <br />
                <span className="italic font-light text-accent">
                  Residences
                </span>
              </h2>
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-secondary hidden md:block">
                Scroll to explore portfolio
              </div>
            </div>
          </motion.div>

          {/* Scroll-Linked Slider Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-visible"
          >
            <motion.div
              ref={sliderRef}
              style={{ x }}
              className="flex gap-8 w-max pr-12 md:pr-32"
            >
              {PROPERTIES.map((property) => (
                <PropertyCard
                  key={property.slug}
                  property={property}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({
  property,
}: {
  property: (typeof PROPERTIES)[0];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const showOverlay = isHovered || isFocused;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[300px] md:w-[440px] select-none shrink-0 group"
    >
      {/* Double Bezel (Doppelrand) Enclosure - Dark Mode style surface */}
      <div
        className={`double-bezel-outer transition-colors duration-500 ${showOverlay ? "bg-accent/5 border-accent/20" : ""}`}
      >
        <div className="double-bezel-inner relative bg-surface overflow-hidden">
          {/* Card Link to Detail Page */}
          <Link
            suppressHydrationWarning
            href={`/projects/${property.slug}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="block relative aspect-4/3 overflow-hidden"
          >
            {/* Image container */}
            <div className="w-full h-full absolute inset-0 origin-center z-0 overflow-hidden rounded-t-[1.625rem]">
              <div className="w-full h-full relative">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  sizes="(max-width: 768px) 300px, 440px"
                  className="object-cover brightness-95 saturate-[0.8] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Hover overlay (Reveal Curtain card) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showOverlay ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-linear-to-t from-text-primary/80 via-text-primary/20 to-transparent flex flex-col justify-end p-6 z-10"
            >
              <motion.div
                animate={{
                  y: showOverlay ? 0 : 15,
                  opacity: showOverlay ? 1 : 0,
                }}
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

            {/* Status tag */}
            <div className="flex justify-between items-center pt-1">
              <span className="text-[9px] uppercase tracking-[0.25em] text-text-secondary">
                Project Status
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                {property.architecturalDetails.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
