"use client";

import { motion } from "motion/react";

const CREDENTIALS = [
  {
    id: "rajuk",
    category: "Building Permit",
    title: "RAJUK Construction Approval",
    subtitle: "Development Control Section",
    details: [
      { label: "Permit Number", value: "D-0006453-10-25" },
      { label: "Occupancy Class", value: "A-3 (Flats or Apartments)" },
      { label: "Jurisdiction", value: "Sub Zone-01 (Zone-04), Dhaka" },
      { label: "Authorized Authority", value: "Rajdhani Unnayan Kartripakkha" },
    ],
  },
  {
    id: "nbr",
    category: "Tax Compliance",
    title: "NBR Taxpayer Registration",
    subtitle: "National Board of Revenue",
    details: [
      { label: "TIN Number", value: "162947654103" },
      { label: "Registered Status", value: "Incorporated Company" },
      { label: "Tax Jurisdiction", value: "Taxes Circle-021, Taxes Zone 01" },
      { label: "Tax Office", value: "Segunbagicha, Dhaka" },
    ],
  },
  {
    id: "incorporation",
    category: "Corporate Structure",
    title: "Legal Incorporation",
    subtitle: "Registrar of Joint Stock Companies",
    details: [
      { label: "Governing Act", value: "Companies Act, 1994" },
      { label: "Memorandum Date", value: "05 September 2024" },
      { label: "Registration Type", value: "Private Limited Company" },
      { label: "Registered Address", value: "Purana Paltan, Dhaka" },
    ],
  },
  {
    id: "accreditation",
    category: "Industry Badges",
    title: "REHAB & ISO Accreditation",
    subtitle: "Standards & Affiliations",
    details: [
      { label: "REHAB Member", value: "Member No. 1532" },
      { label: "Quality Standard", value: "ISO 9001:2015" },
      { label: "Affiliated Body", value: "Real Estate Association" },
      { label: "Accredited Scope", value: "Premium Design & Build" },
    ],
  },
];

export function Credentials() {
  return (
    <section
      suppressHydrationWarning
      className="relative z-10 px-6 py-24 md:px-12 md:py-32 bg-canvas"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Title Block */}
        <div className="max-w-2xl flex flex-col gap-4">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
            Regulatory Compliance
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tight leading-[1.05] text-text-primary">
            Corporate Credentials <br />
            <span className="italic font-light text-accent">& Compliance</span>
          </h2>
          <p className="text-xs md:text-sm leading-relaxed text-text-secondary font-light">
            Avenue Constructions Limited operates under complete regulatory transparency. 
            All structural builds satisfy the rigorous standards of Dhaka Metropolitan building guidelines.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CREDENTIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="double-bezel-outer h-full"
            >
              <div className="double-bezel-inner p-6 md:p-8 flex flex-col justify-between h-full bg-surface/30 min-h-85">
                <div className="flex flex-col gap-5">
                  <span className="text-[9px] uppercase tracking-[0.22em] font-mono text-accent">
                    {item.category}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl uppercase tracking-wide text-text-primary">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-text-secondary uppercase tracking-wider font-light mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-black/5 pt-4">
                  {item.details.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex justify-between items-center text-xs gap-2"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-text-secondary/70">
                        {detail.label}
                      </span>
                      <span className="font-mono text-[11px] text-text-primary font-medium text-right">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
