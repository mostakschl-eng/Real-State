"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";

// Depth-scaled parallax per pillar — matches the z-axis cascade (mt-10, mt-20):
// the visually "further back" pillar travels further, so motion reinforces layout.
const PILLAR_PARALLAX_RANGE: [string, string][] = [
  ["-5%", "5%"],
  ["-8%", "8%"],
  ["-10%", "10%"],
];

function PillarImage({
  scrollYProgress,
  index,
  image,
  label,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  image: string;
  label: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const imgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : PILLAR_PARALLAX_RANGE[index]);

  return (
    <motion.div style={{ y: imgY }} className="absolute inset-0 w-full h-[130%] top-[-15%]">
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </motion.div>
  );
}

const PILLARS = [
  {
    num: "01",
    label: "Material Honesty",
    detail:
      "Raw travertine, exposed basalt, and aggregate concrete age into monuments.",
    image: "/images/properties/prop_luminary.png",
  },
  {
    num: "02",
    label: "Geometric Silence",
    detail:
      "Strict structural grids balance mass, cantilever, and negative void.",
    image: "/images/properties/prop_obsidian.png",
  },
  {
    num: "03",
    label: "Atmospheric Light",
    detail:
      "Solar paths sculpted into deep overhangs, skylights, and shadow planes.",
    image: "/images/properties/prop_aria.png",
  },
];

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
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
            <h2 className="font-serif text-[clamp(2rem,5vw,3.8rem)] tracking-tight leading-[1.02] text-text-primary uppercase max-w-[16ch]">
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className="block"
                >
                  A legacy written
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
                  className="block"
                >
                  in concrete
                </motion.span>
              </span>
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: 0.16, ease: [0.32, 0.72, 0, 1] }}
                  className="block italic font-light text-accent"
                >
                  and light
                </motion.span>
              </span>
            </h2>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 md:relative">
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
                index === 1 ? "md:mt-10" : ""
              } ${index === 2 ? "md:mt-20" : ""}`}
            >
              <div className="double-bezel-inner flex flex-col min-h-[380px] overflow-hidden group">
                <div
                  id={index === 2 ? "about-morph-source" : undefined}
                  className="relative aspect-4/3 w-full overflow-hidden"
                >
                  <PillarImage
                    scrollYProgress={scrollYProgress}
                    index={index}
                    image={pillar.image}
                    label={pillar.label}
                  />
                </div>
                <div className="p-7 md:p-8 flex flex-col justify-between grow bg-canvas">
                  <span className="font-mono text-[10px] text-accent">
                    [{pillar.num}]
                  </span>
                  <div className="flex flex-col gap-2 mt-4">
                    <h3 className="font-serif text-xl md:text-2xl uppercase tracking-wider text-text-primary">
                      {pillar.label}
                    </h3>
                    <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed font-light">
                      {pillar.detail}
                    </p>
                  </div>
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
