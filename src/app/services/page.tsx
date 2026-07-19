"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { SERVICES } from "@/lib/services-constant";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Corporate Alignment",
    description:
      "We host an introductory consultation at our Dhaka office in Purana Paltan to align on the client's project timeline, architectural preferences, and programmatic needs.",
  },
  {
    step: "02",
    title: "Geometric Sketching",
    description:
      "Our design partners draft initial massing models and site orientation sketches, ensuring perfect solar paths and geometric void clearances.",
  },
  {
    step: "03",
    title: "Material Sourcing",
    description:
      "We hand-select premium imported marble, seasoned teak wood, and certified high-grade reinforcement steel directly from leading suppliers to guarantee structural durability.",
  },
  {
    step: "04",
    title: "Precision Execution",
    description:
      "Our luxury construction atelier coordinates the build phase, maintaining strict tolerances of 1mm on exposed finishes and cast concrete joints.",
  },
];

const SERVICE_SCOPE: Record<string, string> = {
  architecture: "Massing models, custom casework design, site alignment",
  development: "General contracting, exposed concrete joints, tolerances",
  advisory: "Off-market acquisitions, viewing coordination, asset trust",
  investment: "Asset preservation, tenancy strategies, Joint Ventures",
};

const SERVICE_LEAD: Record<string, string> = {
  architecture: "Alexander Mercer",
  development: "Elena Rostova",
  advisory: "Marcus Thorne",
  investment: "Marcus Thorne",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-canvas pt-32 pb-24 z-10 relative text-text-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32">
          {/* Header Block */}
          <div className="max-w-3xl flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent"
            >
              Atelier Capabilities
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] uppercase"
            >
              Bespoke Solutions <br />
              <span className="italic font-light text-accent">
                for Collectors
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-xs md:text-sm leading-relaxed text-text-secondary max-w-[50ch] font-light"
            >
              We provide full-lifecycle craft, from the initial geometric sketch
              to portfolio asset advisory. Each service is structured around
              precision tolerances and absolute design confidentiality.
            </motion.p>
          </div>

          {/* Capabilities Grid (Alternating Editorial splits with dense details) */}
          <div className="flex flex-col gap-24 border-t border-black/5 pt-20">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
                >
                  {/* Image side - Double Bezel */}
                  <div
                    className={`lg:col-span-6 w-full aspect-16/10 rounded-4xl overflow-hidden double-bezel-outer ${isEven ? "" : "lg:order-2"}`}
                  >
                    <div className="double-bezel-inner relative w-full h-full">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover brightness-95 select-none"
                      />
                    </div>
                  </div>

                  {/* Text side */}
                  <div
                    className={`lg:col-span-6 flex flex-col gap-6 ${isEven ? "" : "lg:order-1"}`}
                  >
                    <span className="font-mono text-xs text-accent">
                      {service.number}
                    </span>
                    <h3 className="font-serif text-3xl uppercase tracking-wider">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Unique details list */}
                    <div className="border-t border-black/5 pt-6 grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent mb-2">
                          Scope of Craft
                        </h4>
                        <p className="text-[11px] text-text-secondary font-light">
                          {SERVICE_SCOPE[service.id]}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent mb-2">
                          Lead Partner
                        </h4>
                        <p className="text-[11px] text-text-secondary font-light">
                          {SERVICE_LEAD[service.id]}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Design Process Timeline Flow (Completely unique layout) */}
          <div className="border-t border-black/5 pt-20 flex flex-col gap-12">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
                The Journey
              </span>
              <h2 className="font-serif text-4xl uppercase tracking-tight leading-[1.05] mt-4">
                Our Four-Step{" "}
                <span className="italic font-light text-accent">
                  Acquisition Flow
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="double-bezel-outer"
                >
                  <div className="double-bezel-inner p-6 flex flex-col gap-6 justify-between h-[280px]">
                    <span className="font-mono text-xs text-accent">
                      {step.step}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-serif text-lg uppercase tracking-wider">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-text-secondary leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
