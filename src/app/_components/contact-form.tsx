"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "motion/react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Check } from "lucide-react";

interface FormFields {
  fullName: string;
  email: string;
  residence: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

interface ContactFormProps {
  embedded?: boolean;
}

export function ContactForm({ embedded = false }: ContactFormProps) {
  const [fields, setFields] = useState<FormFields>({
    fullName: "",
    email: "",
    residence: "Avenue Ahsan Palace",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    if (
      name !== "fullName" &&
      name !== "email" &&
      name !== "residence" &&
      name !== "message"
    ) {
      return;
    }

    setFields((prev) => ({ ...prev, [name]: value }));
    if (name === "fullName" || name === "email" || name === "message") {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!fields.fullName.trim()) tempErrors.fullName = "Full name is required";
    if (!fields.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!fields.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFields({
        fullName: "",
        email: "",
        residence: "Avenue Ahsan Palace",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const formBox = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
      className="w-full bg-surface border border-black/5 p-6 md:p-10 rounded-3xl shadow-[0_24px_80px_rgba(28,27,24,0.08)]"
    >
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-12"
        >
          <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent text-xl mb-6">
            <Check className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl uppercase tracking-wider text-text-primary">
            Inquiry Received
          </h3>
          <p className="text-xs text-text-secondary max-w-[30ch] leading-relaxed mt-3 font-light">
            A private advisor from Avenue Constructions Limited will contact you
            shortly to discuss your request.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-[10px] uppercase tracking-[0.2em] font-medium text-accent mt-8 hover:underline"
          >
            Submit another inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="text-[10px] uppercase tracking-[0.2em] font-medium text-text-secondary"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={fields.fullName}
              onChange={handleChange}
              placeholder="e.g. Christopher Harrison"
              className="w-full pb-2 bg-transparent border-b border-black/15 text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-accent transition-colors"
            />
            {errors.fullName && (
              <span className="text-[10px] text-red-500 tracking-wide mt-1">
                {errors.fullName}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[10px] uppercase tracking-[0.2em] font-medium text-text-secondary"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              placeholder="e.g. christopher@harrison.com"
              className="w-full pb-2 bg-transparent border-b border-black/15 text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-accent transition-colors"
            />
            {errors.email && (
              <span className="text-[10px] text-red-500 tracking-wide mt-1">
                {errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="residence"
              className="text-[10px] uppercase tracking-[0.2em] font-medium text-text-secondary"
            >
              Residence of Interest
            </label>
            <select
              id="residence"
              name="residence"
              value={fields.residence}
              onChange={handleChange}
              className="w-full pb-2 bg-transparent border-b border-black/15 text-sm text-text-primary focus:outline-none focus:border-accent transition-colors cursor-pointer appearance-none rounded-none"
            >
              <option value="Avenue Ahsan Palace" className="bg-surface text-text-primary">
                Avenue Ahsan Palace
              </option>
              <option value="Avenue MD Heights" className="bg-surface text-text-primary">
                Avenue MD. Heights
              </option>
              <option value="Avenue Dream" className="bg-surface text-text-primary">
                Avenue Dream
              </option>
              <option value="Avenue Castle" className="bg-surface text-text-primary">
                Avenue Castle
              </option>
              <option value="Avenue Crest" className="bg-surface text-text-primary">
                Avenue Crest
              </option>
              <option value="Avenue Serenade" className="bg-surface text-text-primary">
                Avenue Serenade
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[10px] uppercase tracking-[0.2em] font-medium text-text-secondary"
            >
              Inquiry Message
            </label>
            <textarea
              id="message"
              name="message"
              value={fields.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your acquisition timeline or preferences..."
              className="w-full pb-2 bg-transparent border-b border-black/15 text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-accent transition-colors resize-none"
            />
            {errors.message && (
              <span className="text-[10px] text-red-500 tracking-wide mt-1">
                {errors.message}
              </span>
            )}
          </div>

          <div className="mt-2">
            <MagneticButton
              strength={15}
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-accent hover:bg-text-primary text-canvas py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 active:scale-[0.98] disabled:opacity-50"
            >
              {status === "submitting" ? "Submitting Inquiry" : "Submit Inquiry"}
            </MagneticButton>
          </div>

          {status === "error" && (
            <div className="text-[10px] text-red-500 tracking-wide text-center mt-2">
              An error occurred. Please try again.
            </div>
          )}
        </form>
      )}
    </motion.div>
  );

  if (embedded) {
    return formBox;
  }

  return (
    <section
      id="contact"
      suppressHydrationWarning
      className="relative w-full flex flex-col justify-center py-20 md:py-28 px-6 md:px-12 bg-canvas z-10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent">
            Inquiries
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-[1.05] text-text-primary uppercase">
            Begin Your <br />
            <span className="italic font-light text-accent">Journey</span>
          </h2>
          <p className="text-xs md:text-sm leading-relaxed text-text-secondary max-w-[30ch] font-light">
            Contact our private advisory team to coordinate a viewing or
            consultation.
          </p>
          <div className="text-xs text-text-secondary tracking-wide mt-6 space-y-2 font-mono">
            <div>Hotline: +880 1714 767 246</div>
            <div>Email: avenue902@gmail.com</div>
          </div>
        </motion.div>

        <div className="lg:col-span-7 w-full">{formBox}</div>
      </div>
    </section>
  );
}
