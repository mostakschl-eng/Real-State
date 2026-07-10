"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { GalleryImage } from "@/lib/constants";

interface ImageGalleryProps {
  images: GalleryImage[];
  /** Accessible label for the gallery region. */
  label?: string;
}

export function ImageGallery({ images, label }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = images.length;

  const goTo = useCallback(
    (next: number) => {
      const wrapped = (next + total) % total;
      setDirection(next > activeIndex ? 1 : -1);
      setActiveIndex(wrapped);
    },
    [activeIndex, total],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext]);

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, scale: 1.04, x: dir * 24 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, scale: 1.02, x: dir * -24 }),
  };

  return (
    <div
      className="flex flex-col gap-5"
      aria-label={label ?? "Project gallery"}
    >
      {/* Main stage */}
      <div className="double-bezel-outer">
        <div className="double-bezel-inner relative aspect-16/10 w-full overflow-hidden">
          <AnimatePresence custom={direction} mode="wait" initial={false}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                priority={activeIndex === 0}
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-text-primary/70 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 md:p-8">
                <span className="text-[10px] uppercase tracking-[0.22em] text-white/90 font-light max-w-[60ch]">
                  {images[activeIndex].caption}
                </span>
                <span className="font-mono text-xs text-white/80 tracking-wider">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next controls */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="group absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-text-primary transition-all duration-300"
              >
                <span aria-hidden className="text-lg">
                  &larr;
                </span>
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="group absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-text-primary transition-all duration-300"
              >
                <span aria-hidden className="text-lg">
                  &rarr;
                </span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Thumbnail strip */}
      {total > 1 && (
        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={image.src + index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`View image ${index + 1}: ${image.alt}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative aspect-4/3 rounded-xl overflow-hidden border transition-all duration-400 ${
                  isActive
                    ? "border-accent ring-1 ring-accent/40"
                    : "border-black/5 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 25vw, 220px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
