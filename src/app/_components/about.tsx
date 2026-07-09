"use client";

import { motion } from "motion/react";

const PILLARS = [
  {
    num: "01",
    label: "Material Honesty",
    detail:
      "Raw travertine, exposed basalt, and aggregate concrete age into monuments.",
  },
  {
    num: "02",
    label: "Geometric Silence",
    detail:
      "Strict structural grids balance mass, cantilever, and negative void.",
  },
  {
    num: "03",
    label: "Atmospheric Light",
    detail:
      "Solar paths sculpted into deep overhangs, skylights, and shadow planes.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative w-full py-28 md:py-40 px-4 sm:px-6 md:px-12 bg-canvas z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header — asymmetric left alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-20 md:mb-28">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-[9px] uppercase tracking-[0.25em] font-mono text-accent"
            >
              Manifesto
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
              className="font-serif text-[clamp(2rem,5vw,3.8rem)] tracking-tight leading-[1.02] text-text-primary uppercase max-w-[16ch]"
            >
              A legacy written <br />
              in concrete{" "}
              <span className="italic font-light text-accent">and light</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <p className="text-sm md:text-base leading-relaxed text-text-secondary font-light">
              Founded in Dubai in 2018, J&S Estate was born from a desire to
              escape the patterns of commercial real estate. We do not construct
              buildings; we orchestrate light, aggregate raw materials, and
              draft silence into form.
            </p>
            <p className="text-xs leading-relaxed text-text-secondary/70 font-light">
              Every commission begins with a site analysis and solar orientation
              study. We believe that natural light is the true building
              material, and that architecture at its highest is an act of
              spatial poetry.
            </p>
          </motion.div>
        </div>

        {/* Three Pillars — Z-Axis Cascade on desktop, stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:relative">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.32, 0.72, 0, 1],
              }}
              className={`double-bezel-outer md:relative ${
                index === 1 ? "md:mt-6" : ""
              } ${index === 2 ? "md:mt-3" : ""}`}
            >
              <div className="double-bezel-inner p-7 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[280px]">
                <span className="font-mono text-[10px] text-accent">
                  [{pillar.num}]
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl uppercase tracking-wider text-text-primary">
                    {pillar.label}
                  </h3>
                  <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed font-light">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hairline divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.4, ease: [0.32, 0.72, 0, 1] }}
          className="w-16 h-px bg-accent/30 mt-20 origin-left"
        />
      </div>
    </section>
  );
}
