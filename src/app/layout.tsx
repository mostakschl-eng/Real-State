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
    "Avenue Constructions | Luxury Apartments & Real Estate Developer in Dhaka",
  description:
    "Avenue Constructions Limited is a premier real estate developer in Bangladesh. Explore luxury residential apartments and joint ventures in Gulshan, Banani, Baridhara, and Bashundhara R/A, Dhaka.",
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
