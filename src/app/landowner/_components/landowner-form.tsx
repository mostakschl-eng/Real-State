"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MagneticButton } from "@/components/shared/magnetic-button";

const DHAKA_LOCATIONS = [
  "Gulshan",
  "Banani",
  "Baridhara",
  "Dhanmondi",
  "Bashundhara R/A",
  "Uttara",
  "Aftabnagar",
  "Lalmatia & Wari",
  "Other / Outside Dhaka"
];

export function LandownerForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    size: "",
    facing: "",
    roadWidth: "",
  });

  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.location || !formData.size) {
      alert("Please fill in all required fields.");
      return;
    }
    // Simulate API request
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col gap-6 text-center py-12 px-6">
        <div className="size-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
          ✓
        </div>
        <h3 className="font-serif text-2xl uppercase tracking-wide text-text-primary">
          Inquiry Received
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed font-light max-w-sm mx-auto">
          Thank you for sharing your property details. Our Joint Venture Acquisitions Team will review your plot parameters and contact you within 24 hours.
        </p>
        <button
          onClick={() => {
            setFormData({
              name: "",
              phone: "",
              email: "",
              location: "",
              size: "",
              facing: "",
              roadWidth: "",
            });
            setStatus("idle");
          }}
          className="text-xs uppercase tracking-widest text-accent hover:underline font-mono"
        >
          Submit Another Plot
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-[9px] uppercase tracking-widest text-text-secondary font-mono">
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="e.g. Engr. Latifur Rahman"
          className="w-full bg-surface border border-black/5 rounded-lg px-4 py-3 text-xs text-text-primary placeholder:text-text-secondary/40 focus:outline-hidden focus:border-accent/40"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] uppercase tracking-widest text-text-secondary font-mono">
            Contact Number <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +880 17--"
            className="w-full bg-surface border border-black/5 rounded-lg px-4 py-3 text-xs text-text-primary placeholder:text-text-secondary/40 focus:outline-hidden focus:border-accent/40"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] uppercase tracking-widest text-text-secondary font-mono">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. latifur@example.com"
            className="w-full bg-surface border border-black/5 rounded-lg px-4 py-3 text-xs text-text-primary placeholder:text-text-secondary/40 focus:outline-hidden focus:border-accent/40"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] uppercase tracking-widest text-text-secondary font-mono">
            Plot Location <span className="text-accent">*</span>
          </label>
          <select
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full bg-surface border border-black/5 rounded-lg px-3 py-3 text-xs text-text-primary focus:outline-hidden focus:border-accent/40"
          >
            <option value="">Select Enclave</option>
            {DHAKA_LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] uppercase tracking-widest text-text-secondary font-mono">
            Plot Size (Kathas) <span className="text-accent">*</span>
          </label>
          <input
            type="number"
            step="0.1"
            required
            value={formData.size}
            onChange={(e) => setFormData({ ...formData, size: e.target.value })}
            placeholder="e.g. 5"
            className="w-full bg-surface border border-black/5 rounded-lg px-4 py-3 text-xs text-text-primary placeholder:text-text-secondary/40 focus:outline-hidden focus:border-accent/40"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] uppercase tracking-widest text-text-secondary font-mono">
            Plot Facing Direction
          </label>
          <select
            value={formData.facing}
            onChange={(e) => setFormData({ ...formData, facing: e.target.value })}
            className="w-full bg-surface border border-black/5 rounded-lg px-3 py-3 text-xs text-text-primary focus:outline-hidden focus:border-accent/40"
          >
            <option value="">Select Direction</option>
            <option value="South">South Facing (Wind Path)</option>
            <option value="North">North Facing</option>
            <option value="East">East Facing (Sunrise)</option>
            <option value="West">West Facing</option>
            <option value="Corner">Corner Plot (Dual Facade)</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] uppercase tracking-widest text-text-secondary font-mono">
            Front Road Width (Feet)
          </label>
          <input
            type="number"
            value={formData.roadWidth}
            onChange={(e) => setFormData({ ...formData, roadWidth: e.target.value })}
            placeholder="e.g. 30"
            className="w-full bg-surface border border-black/5 rounded-lg px-4 py-3 text-xs text-text-primary placeholder:text-text-secondary/40 focus:outline-hidden focus:border-accent/40"
          />
        </div>
      </div>

      <div className="pt-2">
        <MagneticButton
          strength={15}
          className="w-full text-center py-4 bg-accent text-white uppercase text-[10px] tracking-widest font-mono rounded-lg hover:bg-text-primary transition-colors"
        >
          Submit Inquiry Details
        </MagneticButton>
      </div>
    </form>
  );
}
