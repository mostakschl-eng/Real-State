import type { Metadata } from "next";
import {
  Instrument_Serif,
  Plus_Jakarta_Sans,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider";
import { FloatingContact } from "@/components/shared/floating-contact";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title:
    "Avenue Construction Limited | Premium Architecture & Structural Design",
  description:
    "Experience museum-grade architectural design and bespoke residential portfolios in Dubai. Crafted by ACL Atelier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-canvas text-text-primary"
        suppressHydrationWarning
      >
        {/* Procedural Film Grain Overlay */}
        <div className="noise-overlay fixed inset-0 pointer-events-none z-50 opacity-[0.025]" />

        <SmoothScrollProvider>
          <div className="flex flex-col flex-1 relative min-h-dvh">
            {children}
          </div>
        </SmoothScrollProvider>
        <FloatingContact />
      </body>
    </html>
  );
}
