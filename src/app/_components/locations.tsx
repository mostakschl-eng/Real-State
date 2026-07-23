"use client";

import { motion } from "motion/react";

const LOCATIONS = [
  {
    id: "gulshan-banani",
    number: "01",
    name: "Gulshan & Banani",
    theme: "Elite Urban Enclaves",
    description:
      "Dhaka's premier diplomatic and lifestyle centers, characterized by tree-lined lake paths, high-security profiles, and high-end commercial headquarters.",
    highlight: "Lakefront properties & Diplomatic proximity",
  },
  {
    id: "bashundhara",
    number: "02",
    name: "Bashundhara R/A",
    theme: "Structured Gated Retreats",
    description:
      "A meticulously planned gated residential area, hosting premium single-unit complexes like Avenue Ahsan Palace, close to Evercare Hospital and top academic hubs.",
    highlight: "Gated security & Institutional proximity",
  },
  {
    id: "baridhara",
    number: "03",
    name: "Baridhara",
    theme: "Diplomatic Sanctums",
    description:
      "The most exclusive residential zone in Bangladesh, offering absolute privacy, low-density living, and serene tree-shaded avenues.",
    highlight: "Diplomatic security & Elite neighborhood",
  },
  {
    id: "aftabnagar-rampura",
    number: "04",
    name: "Aftabnagar & Rampura",
    theme: "Urban Connectivity Hubs",
    description:
      "Modern planned zones with green parkways, lakeside vistas, and rapid transit access via Hatirjheel Expressway to Gulshan and Motijheel.",
    highlight: "Hatirjheel connectivity & Rapid growth",
  },
];

export function Locations() {
  return (
    <section
      suppressHydrationWarning
      className="relative z-10 px-6 py-24 md:px-12 md:py-32 bg-surface/30 border-t border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Title Block */}
        <div className="max-w-2xl flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
            Active Regions
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tight leading-[1.05] text-text-primary">
            Prime Geographic <br />
            <span className="italic font-light text-accent">Footprint</span>
          </h2>
          <p className="text-xs md:text-sm leading-relaxed text-text-secondary font-light">
            We focus exclusively on Dhaka&apos;s most prestigious and secure residential areas, 
            carefully selecting plots that offer natural cross-ventilation, scenic views, and structural durability.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LOCATIONS.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="group flex flex-col justify-between border-t border-black/10 pt-6 gap-6"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-accent font-semibold">
                    {loc.number}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-text-secondary/70">
                    {loc.theme}
                  </span>
                </div>
                <h3 className="font-serif text-xl uppercase tracking-wider text-text-primary group-hover:text-accent transition-colors duration-300">
                  {loc.name}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed font-light">
                  {loc.description}
                </p>
              </div>

              <div className="text-[9px] uppercase tracking-wider text-accent border border-accent/20 rounded-full px-3 py-1 bg-accent/5 self-start font-mono">
                {loc.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
