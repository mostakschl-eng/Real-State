"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { SERVICES } from "@/lib/constants";

const SERVICE_DELIVERABLES: string[][] = [
  ["Massing Models", "Solar Studies", "Site Orientation", "Material Schedules"],
  ["Master Contracting", "Exposed Concrete", "1mm Tolerances", "Stonemasonry"],
  [
    "Off-Market Acquisitions",
    "Viewing Coordination",
    "Asset Trusts",
    "Confidentiality",
  ],
  ["Valuations", "Tenancy Strategy", "Restoration", "JV Capital"],
];

export function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-surface z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Sticky Info (Editorial Split - col-span-5) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-6">
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent">
            Capabilities
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.05] text-text-primary uppercase max-w-[12ch]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={prefersReducedMotion ? false : { y: "110%" }}
                whileInView={prefersReducedMotion ? undefined : { y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className="block"
              >
                Bespoke Solutions
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={prefersReducedMotion ? false : { y: "110%" }}
                whileInView={prefersReducedMotion ? undefined : { y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.08,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="block italic font-light text-accent leading-[1.1]"
              >
                for Collectors
              </motion.span>
            </span>
          </h2>
          <p className="text-xs md:text-sm leading-relaxed text-text-secondary max-w-[32ch] font-light">
            We provide full-lifecycle craftsmanship, from the initial sketch to
            portfolio advisory.
          </p>

          {/* Active Service Image Display */}
          <div className="relative mt-8 aspect-4/3 rounded-2xl overflow-hidden border border-black/5 bg-black/5 w-full max-w-sm hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="w-full h-full relative"
              >
                <Image
                  src={SERVICES[activeTab].imageUrl}
                  alt={SERVICES[activeTab].title}
                  fill
                  sizes="384px"
                  className="object-cover brightness-75"
                />
              </motion.div>
            </AnimatePresence>
            {/* Corner Bezel Ring Effect */}
            <div className="absolute inset-0 ring-1 ring-black/5 rounded-2xl pointer-events-none" />
          </div>
        </div>

        {/* Right Column - Interactive List (Editorial Split - col-span-7) */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-black/5">
          {SERVICES.map((service, index) => {
            const isActive = activeTab === index;
            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveTab(index)}
                onClick={() => setActiveTab(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="py-8 first:pt-0 last:pb-0 cursor-pointer group flex flex-col gap-4 transition-colors duration-300"
              >
                {/* Number & Title */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-accent">
                      {service.number}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl uppercase tracking-wider text-text-primary group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  {/* Hover kinetic indicator */}
                  <motion.div
                    animate={{ x: isActive ? 6 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-accent text-lg hidden md:block"
                  >
                    &rarr;
                  </motion.div>
                </div>

                {/* Mobile Specific Image (Only shown when active on mobile) */}
                <div
                  className={`relative aspect-video w-full rounded-xl overflow-hidden mt-2 lg:hidden ${
                    isActive ? "block" : "hidden"
                  }`}
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    sizes="100vw"
                    className="object-cover brightness-75"
                  />
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-[50ch] font-light pl-10">
                  {service.description}
                </p>

                {/* Active service deliverables */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    height: isActive ? "auto" : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="overflow-hidden hidden lg:block"
                >
                  <div className="flex flex-wrap gap-2 pl-10 pt-2">
                    {SERVICE_DELIVERABLES[index].map((item) => (
                      <span
                        key={item}
                        className="text-[10px] uppercase tracking-[0.18em] text-text-secondary border border-black/10 rounded-full px-3 py-1 bg-surface/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
