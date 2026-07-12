"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Logo } from "./logo";

const FOOTER_NAV = [
  { label: "Signature Residences", href: "/projects" },
  { label: "Our Manifesto", href: "/about" },
  { label: "Bespoke Services", href: "/services" },
  { label: "Private Consultation", href: "/contact" },
];

const FOOTER_SERVICES = [
  { label: "Architectural Design", href: "/services" },
  { label: "Luxury Development", href: "/services" },
  { label: "Property Advisory", href: "/services" },
  { label: "Portfolio Management", href: "/services" },
];

const FOOTER_REGIONS = [
  "Dubai Marina",
  "Palm Jumeirah",
  "Downtown Dubai",
  "Al Barari",
  "Jumeirah Golf Estates",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface border-t border-black/5 py-16 md:py-24 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Logo />
            <p className="text-text-secondary text-xs uppercase tracking-[0.2em] max-w-[28ch] leading-relaxed font-light">
              Constructing signature landmarks in Dubai. Every
              commission is a study in light, material, and precision.
            </p>
            {/* Social links */}
            <div className="flex gap-6 pt-2">
              {[
                { label: "Instagram", short: "IG" },
                { label: "LinkedIn", short: "LI" },
                { label: "Facebook", short: "FB" },
              ].map((social) => (
                <a
                  key={social.short}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-black/8 flex items-center justify-center text-[10px] uppercase tracking-[0.15em] text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  {social.short}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-text-primary text-[10px] uppercase tracking-[0.2em] font-medium mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-secondary hover:text-accent transition-colors tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-text-primary text-[10px] uppercase tracking-[0.2em] font-medium mb-6">
              Capabilities
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-secondary hover:text-accent transition-colors tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <h3 className="text-text-primary text-[10px] uppercase tracking-[0.2em] font-medium mb-0">
              Atelier
            </h3>
            <div className="flex flex-col gap-3 text-xs text-text-secondary tracking-wide font-light">
              <p>Avenue Construction Limited Atelier</p>
              <p>Al Barari, Studio 4A</p>
              <p>Dubai, United Arab Emirates</p>
            </div>
            <div className="flex flex-col gap-2 text-xs text-text-secondary tracking-wide font-light">
              <a
                href="mailto:inquire@avenueconstruction.com"
                className="hover:text-accent transition-colors"
              >
                inquire@avenueconstruction.com
              </a>
              <a
                href="tel:+97145550199"
                className="hover:text-accent transition-colors"
              >
                +971 4 555 0199
              </a>
            </div>
          </div>
        </div>

        {/* Regions strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-black/5 pt-10 pb-6"
        >
          <h3 className="text-[10px] uppercase tracking-[0.22em] font-mono text-text-secondary/60 mb-4">
            Active Regions
          </h3>
          <div className="flex flex-wrap gap-3">
            {FOOTER_REGIONS.map((region) => (
              <span
                key={region}
                className="text-[10px] uppercase tracking-[0.18em] text-text-secondary border border-black/8 rounded-full px-4 py-1.5 bg-canvas"
              >
                {region}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom: copyright */}
        <div className="border-t border-black/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] text-text-secondary tracking-widest uppercase">
            &copy; {currentYear} Avenue Construction Limited. All rights reserved.
          </span>
          <span className="text-[10px] text-text-secondary/50 tracking-widest uppercase font-light">
            Dubai, United Arab Emirates
          </span>
        </div>
      </div>
    </footer>
  );
}
