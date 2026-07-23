"use client";

import { motion } from "motion/react";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { ContactForm } from "@/app/_components/contact-form";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-canvas pt-32 pb-12 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
          {/* Header Block */}
          <div className="max-w-3xl flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[10px] uppercase tracking-[0.22em] font-mono text-accent"
            >
              Private Consultation
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-text-primary uppercase"
            >
              Connect with <br />
              <span className="italic font-light text-accent">
                Avenue Construction
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xs md:text-sm leading-relaxed text-text-secondary max-w-[48ch] font-light"
            >
              To coordinate a viewing of our signature residences or schedule a
              private consultation at our Dhaka office, please submit an inquiry
              below or contact our office directly.
            </motion.p>
          </div>

          {/* Contact Details & Interactive Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-black/5 pt-16">
            {/* Atelier Info Column (col-span-4) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 flex flex-col gap-8 text-xs text-text-secondary tracking-wide font-light"
            >
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent mb-3">
                  Corporate Headquarters
                </h4>
                <p>Avenue Constructions Limited</p>
                <p>Resourceful Paltan City</p>
                <p>51, 51/A (7th Floor), Purana Paltan, Dhaka-1000</p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent mb-3">
                  Corporate Communications
                </h4>
                <p>General inquiries: avenue902@gmail.com</p>
                <p>Direct Hotline: +880 1714 767 246, +880 1581 742 235</p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent mb-3">
                  Consultation Hours
                </h4>
                <p>Saturday &ndash; Thursday: 09:00 &ndash; 18:00 (GMT+6)</p>
                <p>Private viewings by advanced reservation only.</p>
              </div>
            </motion.div>

            {/* Embedded Form Column (col-span-8) */}
            <div className="lg:col-span-8 w-full">
              <ContactForm embedded />
            </div>
          </div>

          {/* Discretion band — contrasting dark block for premium close */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-text-primary text-canvas px-8 md:px-16 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2 flex flex-col gap-5">
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
                Absolute Discretion
              </span>
              <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-tight leading-[1.05]">
                Private viewings by{" "}
                <span className="italic font-light text-accent">
                  reservation only
                </span>
              </h2>
              <p className="text-sm text-canvas/70 leading-relaxed font-light max-w-[55ch]">
                Every inquiry is handled under strict confidentiality. Our
                advisory partners coordinate viewings, due diligence, and
                acquisitions with the discretion expected by family offices and
                institutional collectors.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <div className="flex flex-col gap-1 md:items-end">
                <span className="text-[9px] uppercase tracking-[0.22em] text-canvas/50">
                  Direct Hotline
                </span>
                <span className="font-mono text-xl text-canvas">
                  +880 1714 767 246
                </span>
              </div>
              <div className="flex flex-col gap-1 md:items-end">
                <span className="text-[9px] uppercase tracking-[0.22em] text-canvas/50">
                  Corporate Email
                </span>
                <span className="font-mono text-sm text-canvas/90">
                  avenue902@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
