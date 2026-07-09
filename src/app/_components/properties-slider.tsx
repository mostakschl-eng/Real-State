"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PROPERTIES } from "@/lib/constants";

export function PropertiesSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;
      // Calculate how far we can drag left (always negative or zero)
      setDragConstraints({
        left: -Math.max(0, scrollWidth - clientWidth - 48), // Add padding margin
        right: 0,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="residences"
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-canvas z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
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
              Drag to explore portfolio
            </div>
          </div>
        </div>

        {/* Draggable Slider Container */}
        <div className="overflow-visible cursor-grab active:cursor-grabbing">
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.15}
            className="flex gap-8 w-max pr-12"
          >
            {PROPERTIES.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: (typeof PROPERTIES)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[300px] md:w-[440px] select-none shrink-0"
    >
      {/* Double Bezel (Doppelrand) Enclosure - Dark Mode */}
      <div className="double-bezel-outer transition-colors duration-500 hover:bg-accent/5 hover:border-accent/20">
        <div className="double-bezel-inner relative">
          {/* Card Link to Detail Page */}
          <Link
            href={`/projects/${property.slug}`}
            className="block relative aspect-4/3 overflow-hidden"
          >
            {/* Image with slow-zoom hover effect */}
            <motion.div
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="w-full h-full relative"
            >
              <Image
                src={property.image}
                alt={property.name}
                fill
                sizes="(max-width: 768px) 300px, 440px"
                className="object-cover brightness-90 saturate-[0.8]"
              />
            </motion.div>

            {/* Hover overlay (Reveal Curtain card) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-text-primary/20 to-transparent flex flex-col justify-end p-6"
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
          <div className="p-6 flex flex-col gap-5">
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
