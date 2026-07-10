"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { PROPERTIES } from "@/lib/constants";

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-canvas pt-32 pb-24 px-6 md:px-12 z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* Page Heading */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent">
              Portfolio Archive
            </span>
            <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.05] text-text-primary uppercase">
              Selected <br />
              <span className="italic font-light text-accent">
                Signature Estates
              </span>
            </h1>
            <p className="text-xs md:text-sm leading-relaxed text-text-secondary mt-2 font-light">
              Explore our collection of private residential landmarks in Dubai.
              Each structure is an individual study in light, space, and
              materials.
            </p>
          </div>

          {/* Asymmetric Staggered Grid (Masonry Vibe) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {PROPERTIES.map((property, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={property.slug}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className={`flex flex-col gap-6 w-full ${
                    isEven ? "md:translate-y-0" : "md:translate-y-16"
                  }`}
                >
                  {/* Double Bezel Enclosure */}
                  <div className="double-bezel-outer transition-colors duration-500 hover:bg-accent/5 hover:border-accent/20">
                    <div className="double-bezel-inner relative">
                      {/* Image Frame */}
                      <Link
                        href={`/projects/${property.slug}`}
                        className="block relative aspect-4/3 overflow-hidden"
                      >
                        <motion.div
                          animate={{
                            scale: isHovered ? 1.05 : 1,
                          }}
                          transition={{
                            duration: 0.7,
                            ease: [0.32, 0.72, 0, 1],
                          }}
                          className="w-full h-full relative"
                        >
                          <Image
                            src={property.image}
                            alt={property.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover brightness-90 saturate-[0.8]"
                          />
                        </motion.div>

                        {/* Reveal Curtain Card */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 bg-linear-to-t from-text-primary/85 via-text-primary/25 to-transparent flex flex-col justify-between p-6"
                        >
                          <span className="self-start text-[9px] uppercase tracking-[0.25em] font-medium text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                            {property.architecturalDetails.status}
                          </span>
                          <div className="flex justify-between items-end">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white">
                              View Details
                            </span>
                            <span className="text-accent text-lg font-light">
                              &rarr;
                            </span>
                          </div>
                        </motion.div>
                      </Link>

                      {/* Card Content */}
                      <div className="p-6 md:p-8 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-text-secondary font-mono">
                            {property.location}
                          </span>
                          <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-text-primary">
                            {property.name}
                          </h2>
                          <p className="font-serif italic text-sm text-text-secondary/80 leading-snug">
                            {property.tagline}
                          </p>
                          <p className="text-xs text-text-secondary leading-relaxed font-light mt-2">
                            {property.description}
                          </p>
                        </div>

                        {/* Fine Lined Grid */}
                        <div className="grid grid-cols-3 gap-px bg-black/5 border border-black/5 rounded-lg overflow-hidden">
                          {property.specs.slice(0, 3).map((spec) => (
                            <div
                              key={spec.label}
                              className="bg-surface p-3 flex flex-col gap-1"
                            >
                              <span className="text-[9px] uppercase tracking-[0.22em] text-text-secondary">
                                {spec.label}
                              </span>
                              <span className="font-mono text-xs text-text-primary tracking-wide">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Footing */}
                        <div className="flex justify-between items-center pt-1">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-text-secondary font-mono">
                            Acquisition Value
                          </span>
                          <span className="font-mono text-base font-semibold text-accent">
                            {property.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
