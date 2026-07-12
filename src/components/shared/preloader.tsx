"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 800; // 800ms total loader time
    const intervalTime = 20; // 20ms steps
    const steps = duration / intervalTime;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const currentProgress = Math.min(
        Math.floor((stepCount / steps) * 100),
        100,
      );
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        // Let user see 100 for a brief moment before fading
        setTimeout(() => {
          setIsComplete(true);
        }, 150);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: "-100dvh",
            transition: { duration: 1.0, ease: [0.83, 0, 0.17, 1] },
          }}
          className="fixed inset-0 bg-canvas flex flex-col justify-between p-12 md:p-24 z-45"
        >
          {/* Top Brand Indicator */}
          <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-medium text-text-secondary">
            <div>ACL</div>
            <div>Construction Portfolio</div>
          </div>

          {/* Center Cinematic Title */}
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="overflow-hidden h-24 flex items-center justify-center">
              <motion.h1
                initial={{ y: "120%", rotateX: 20, opacity: 0 }}
                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.32, 0.72, 0, 1] }}
                className="font-serif text-2xl md:text-4xl tracking-[0.18em] uppercase text-text-primary text-center leading-none"
              >
                Avenue{" "}
                <span className="text-accent italic font-light">
                  Construction
                </span>{" "}
                Limited
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xs uppercase tracking-[0.4em] text-text-secondary mt-2"
            >
              Architectural Heritage
            </motion.p>
          </div>

          {/* Bottom Counter & Info */}
          <div className="flex justify-between items-end">
            <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-text-secondary max-w-[20ch] hidden md:block">
              Constructing signature landmarks in Dubai
            </div>

            <div className="font-mono text-7xl md:text-9xl tracking-tighter leading-none font-light text-accent">
              {progress.toString().padStart(3, "0")}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
