"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { TEAM_MEMBERS, PROPERTIES } from "@/lib/constants";

export default function AboutPage() {
  const [alexander, elena, marcus] = TEAM_MEMBERS;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-canvas pt-32 pb-24 z-10 relative text-text-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32">
          {/* Asymmetric Editorial Hero Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent"
              >
                The Atelier Story
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] uppercase"
              >
                Architecture is a <br />
                <span className="italic font-light text-accent">
                  physical extension
                </span>{" "}
                <br />
                of the soul.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-xs md:text-sm leading-relaxed text-text-secondary max-w-[50ch] font-light"
              >
                Founded in Dubai in 2018, Avenue Construction Limited was born from a desire to
                escape the generic patterns of commercial real estate. We do not
                construct buildings; we orchestrate light, aggregate raw
                materials, and draft silence.
              </motion.p>
            </div>

            {/* Asymmetric side image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 double-bezel-outer w-full aspect-4/5 rounded-[2.5rem] overflow-hidden"
            >
              <div className="double-bezel-inner w-full h-full relative">
                <Image
                  src="/images/services/service_architecture.png"
                  alt="Architectural detailing at ACL Atelier"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover brightness-95"
                />
              </div>
            </motion.div>
          </div>

          {/* Heritage Timeline: Milestone Markers (Editorial Split - col-span-5 & col-span-7) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-black/5 pt-20">
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32">
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
                Our Timeline
              </span>
              <h2 className="font-serif text-4xl uppercase tracking-tight leading-[1.05]">
                Sculpting a <br />
                <span className="italic font-light text-accent">
                  Design Legacy
                </span>
              </h2>
              <p className="text-xs text-text-secondary leading-relaxed font-light max-w-[32ch]">
                Trace the design milestones and commissions that shaped our
                signature vocabulary.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-16 border-l border-black/5 pl-8 md:pl-12">
              {/* Year 2018 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-4 relative"
              >
                <div className="absolute left-[-41px] md:left-[-57px] w-4 h-4 rounded-full bg-accent border-4 border-canvas top-1" />
                <span className="font-mono text-lg font-semibold text-accent">
                  2018
                </span>
                <h3 className="font-serif text-xl uppercase tracking-wide">
                  Inception of the Atelier
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed font-light">
                  Established in Dubai with a singular studio in Al Barari. The
                  atelier began as a private partnership committed to custom
                  architectural monographs.
                </p>
              </motion.div>

              {/* Year 2020 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col gap-4 relative"
              >
                <div className="absolute left-[-41px] md:left-[-57px] w-4 h-4 rounded-full bg-accent border-4 border-canvas top-1" />
                <span className="font-mono text-lg font-semibold text-accent">
                  2020
                </span>
                <h3 className="font-serif text-xl uppercase tracking-wide">
                  The Obsidian Commission
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed font-light">
                  Commissioned to design the monolithic black marble villa on
                  Palm Jumeirah. This project defined our use of physical
                  density and material contrast.
                </p>
              </motion.div>

              {/* Year 2023 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-4 relative"
              >
                <div className="absolute left-[-41px] md:left-[-57px] w-4 h-4 rounded-full bg-accent border-4 border-canvas top-1" />
                <span className="font-mono text-lg font-semibold text-accent">
                  2023
                </span>
                <h3 className="font-serif text-xl uppercase tracking-wide">
                  Sky Residences Expansion
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed font-light">
                  Designed the double-height Aria Penthouse in Downtown Dubai,
                  introducing custom geometric cantilevers and floating
                  volumetric planes.
                </p>
              </motion.div>

              {/* Year 2026 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col gap-4 relative"
              >
                <div className="absolute left-[-41px] md:left-[-57px] w-4 h-4 rounded-full bg-accent border-4 border-canvas top-1" />
                <span className="font-mono text-lg font-semibold text-accent">
                  2026
                </span>
                <h3 className="font-serif text-xl uppercase tracking-wide">
                  Signature Portfolio Launch
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed font-light">
                  Consolidated our custom commissions into a signature
                  residential portfolio available to private collectors
                  worldwide.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Core Philosophy Section (Soft Structuralism - 3 pillars) */}
          <div className="border-t border-black/5 pt-20 flex flex-col gap-12">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
                Design Philosophy
              </span>
              <h2 className="font-serif text-4xl uppercase tracking-tight leading-[1.05] mt-4">
                Three Rules of{" "}
                <span className="italic font-light text-accent">
                  Atelier Craft
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="double-bezel-outer"
              >
                <div className="double-bezel-inner p-8 flex flex-col gap-4 min-h-[250px] justify-between">
                  <span className="font-mono text-xs text-accent">[01]</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-lg uppercase tracking-wider">
                      Material Honesty
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed font-light">
                      We select raw, natural materials that age gracefully.
                      Travertine, raw basalt, exposed aggregate concrete, and
                      brushed bronze are our lexicon.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.08,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="double-bezel-outer"
              >
                <div className="double-bezel-inner p-8 flex flex-col gap-4 min-h-[250px] justify-between">
                  <span className="font-mono text-xs text-accent">[02]</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-lg uppercase tracking-wider">
                      Geometric Integrity
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed font-light">
                      Our structures are derived from strict geometric grids,
                      balancing mass, cantilever projections, and negative void
                      space to achieve visual silence.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Pillar 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.16,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="double-bezel-outer"
              >
                <div className="double-bezel-inner p-8 flex flex-col gap-4 min-h-[250px] justify-between">
                  <span className="font-mono text-xs text-accent">[03]</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-lg uppercase tracking-wider">
                      Atmospheric Light
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed font-light">
                      We orchestrate the movement of solar paths throughout the
                      day, constructing deep overhangs and skylights that carve
                      volume with light and shadow.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Partners / Leadership Profile Splits (Detailed profiles) */}
          <div className="border-t border-black/5 pt-20 flex flex-col gap-16">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
                Founders
              </span>
              <h2 className="font-serif text-4xl uppercase tracking-tight leading-[1.05] mt-4">
                Atelier{" "}
                <span className="italic font-light text-accent">Partners</span>
              </h2>
            </div>

            <div className="flex flex-col gap-24">
              {/* Partner 1: Alexander Mercer */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                <div className="lg:col-span-5 double-bezel-outer aspect-square rounded-4xl overflow-hidden">
                  <div className="double-bezel-inner relative w-full h-full">
                    <Image
                      src={alexander.imageUrl}
                      alt={alexander.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-premium-in-out hover:scale-105"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent">
                    {alexander.role}
                  </span>
                  <h3 className="font-serif text-3xl uppercase tracking-wide">
                    {alexander.name}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light max-w-[55ch]">
                    {alexander.bio}
                  </p>
                  <blockquote className="border-l border-accent pl-4 italic text-xs text-text-secondary font-serif mt-2">
                    &ldquo;Architecture is the art of drafting light and
                    aggregate concrete so they become a single silent
                    monument.&rdquo;
                  </blockquote>
                </div>
              </motion.div>

              {/* Partner 2: Elena Rostova */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center lg:flex-row-reverse"
              >
                <div className="lg:col-span-5 lg:order-2 double-bezel-outer aspect-square rounded-4xl overflow-hidden">
                  <div className="double-bezel-inner relative w-full h-full">
                    <Image
                      src={elena.imageUrl}
                      alt={elena.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-premium-in-out hover:scale-105"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 lg:order-1 flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent">
                    {elena.role}
                  </span>
                  <h3 className="font-serif text-3xl uppercase tracking-wide">
                    {elena.name}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light max-w-[55ch]">
                    {elena.bio}
                  </p>
                  <blockquote className="border-l border-accent pl-4 italic text-xs text-text-secondary font-serif mt-2">
                    &ldquo;Space is not an empty volume; it is a weightless
                    texture waiting to be bounded by proportion and
                    stone.&rdquo;
                  </blockquote>
                </div>
              </motion.div>

              {/* Partner 3: Marcus Thorne */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                <div className="lg:col-span-5 double-bezel-outer aspect-square rounded-4xl overflow-hidden">
                  <div className="double-bezel-inner relative w-full h-full">
                    <Image
                      src={marcus.imageUrl}
                      alt={marcus.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-premium-in-out hover:scale-105"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent">
                    {marcus.role}
                  </span>
                  <h3 className="font-serif text-3xl uppercase tracking-wide">
                    {marcus.name}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light max-w-[55ch]">
                    {marcus.bio}
                  </p>
                  <blockquote className="border-l border-accent pl-4 italic text-xs text-text-secondary font-serif mt-2">
                    &ldquo;Luxury does not exist in ornament. It exists in the
                    perfect convergence of void, aggregate, and time.&rdquo;
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Featured Estates Teaser */}
          <div className="border-t border-black/5 pt-20 flex flex-col gap-12">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
                Signature Work
              </span>
              <h2 className="font-serif text-4xl uppercase tracking-tight leading-[1.05]">
                Selected{" "}
                <span className="italic font-light text-accent">
                  Commissions
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROPERTIES.map((property, index) => (
                <motion.div
                  key={property.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  <Link
                    href={`/projects/${property.slug}`}
                    className="group block"
                  >
                    <div className="double-bezel-outer transition-colors duration-400 group-hover:bg-accent/5 group-hover:border-accent/20 group-focus:bg-accent/5 group-focus:border-accent/20">
                      <div className="double-bezel-inner relative aspect-3/4 overflow-hidden">
                        <Image
                          src={property.image}
                          alt={property.name}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover brightness-90 group-hover:scale-105 group-hover:brightness-100 group-focus:scale-105 group-focus:brightness-100 transition-all duration-700 ease-premium-in-out"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-text-primary/80 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1">
                          <span className="text-[9px] uppercase tracking-[0.22em] text-white/80 font-mono">
                            {property.location}
                          </span>
                          <span className="font-serif text-base uppercase tracking-wide text-white leading-tight">
                            {property.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-medium text-accent hover:text-text-primary transition-colors"
              >
                View Full Portfolio <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
