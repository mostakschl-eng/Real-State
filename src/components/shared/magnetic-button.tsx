"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "motion/react";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  strength?: number;
}

export function MagneticButton({
  children,
  className = "",
  strength = 35,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Motion values for raw mouse coordinates relative to the button
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform coordinates to smaller displacement values (magnetic pull)
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const forceX = useSpring(mouseX, springConfig);
  const forceY = useSpring(mouseY, springConfig);

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (
      !ref.current ||
      prefersReducedMotion ||
      window.matchMedia("(pointer: coarse)").matches
    )
      return;
    const { clientX, clientY } = event;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    // Calculate cursor position relative to button center
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Apply strength limiting factor
    mouseX.set(x * (strength / (width / 2)));
    mouseY.set(y * (strength / (height / 2)));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: forceX,
        y: forceY,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}
