"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { MagneticButton } from "@/components/shared/magnetic-button";

const JV_POINTS = [
  {
    title: "100% Legal & RAJUK Compliance",
    description: "Every joint venture is secured with complete RAJUK approval letters and strict municipal clearance before any excavation begins."
  },
  {
    title: "IEB Certified Engineering",
    description: "Our structural drafts are verified and stamped by registered structural engineers from the Institution of Engineers, Bangladesh (IEB)."
  },
  {
    title: "Financial Strength & Handover Guarantee",
    description: "We back our schedules with strict bank-guaranteed cash flows to eliminate delivery delays and assure project handover on schedule."
  },
  {
    title: "Bespoke Architectural Splendor",
    description: "We offer single-unit configurations with tropical landscaping, high ceilings, and vertical timber louvers to maximize your land value."
  }
];

export function JointVenture() {
  return (
    <section className="relative z-10 px-6 py-24 md:px-12 md:py-32 bg-text-primary text-canvas">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Call to Action */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
            Landowner Partnerships
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tight leading-[1.05] text-canvas">
            Joint Venture <br />
            <span className="italic font-light text-accent">Land Share</span>
          </h2>
          <p className="text-xs md:text-sm leading-relaxed text-canvas/78 font-light max-w-md">
            Do you own a prime plot in Gulshan, Banani, Baridhara, or Bashundhara? 
            Partner with Avenue Constructions to convert your land into an iconic residential landmark that commands premium valuation.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <MagneticButton
                strength={22}
                className="group flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-canvas transition-all duration-500 hover:bg-canvas hover:text-text-primary active:scale-[0.97]"
              >
                Inquire JV Partnership
                <span className="flex size-5 items-center justify-center rounded-full bg-canvas/10 text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  &rarr;
                </span>
              </MagneticButton>
            </Link>
          </div>
        </div>

        {/* Right Column: JV Advantages Grid */}
        <div className="lg:col-span-7 flex flex-col gap-10 border-l border-canvas/12 pl-8 md:pl-12">
          {JV_POINTS.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.32, 0.72, 0, 1]
              }}
              className="flex flex-col gap-3"
            >
              <h3 className="font-serif text-xl uppercase tracking-wide text-canvas">
                {point.title}
              </h3>
              <p className="text-xs text-canvas/70 leading-relaxed font-light">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
