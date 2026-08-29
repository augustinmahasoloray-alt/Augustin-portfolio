import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Tight spring for main inner dot (smooth real-time tracking)
  const dotSpringConfig = { damping: 28, stiffness: 700, mass: 0.2 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Soft spring with deliberate trailing/lag for outer halo ring
  const ringSpringConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Check if the device has a fine pointer (mouse/trackpad, not touch)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updatePointerSupport = () => {
      setIsEnabled(mediaQuery.matches);
    };

    updatePointerSupport();

    if (!mediaQuery.matches) {
      return;
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updatePointerSupport);
    } else {
      mediaQuery.addListener(updatePointerSupport);
    }

    // Enable custom cursor CSS class to hide standard desktop cursor
    document.documentElement.classList.add("has-custom-cursor");

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handlePointerOver = (e) => {
      const target = e.target;
      if (!target || !(target instanceof Element)) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, label, .cursor-pointer, [data-cursor-hover], summary'
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handlePointerOver, { passive: true });

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updatePointerSupport);
      } else {
        mediaQuery.removeListener(updatePointerSupport);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handlePointerOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      id="custom-cursor-container"
      className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Outer Halo Ring (36px base, trailing spring) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full border border-accent -accent-dark"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
        }}
        animate={{
          scale: isClicked ? 0.85 : isHovered ? 1.55 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered
            ? "rgba(var(--color-accent-rgb), 0.16)"
            : "rgba(var(--color-accent-rgb), 0.0)",
          borderColor: isHovered
            ? "var(--color-accent-hover)"
            : "rgba(var(--color-accent-rgb), 0.65)",
        }}
        transition={{
          scale: { type: "spring", stiffness: 450, damping: 25 },
          backgroundColor: { duration: 0.15 },
          borderColor: { duration: 0.15 },
          opacity: { duration: 0.2 },
        }}
      />

      {/* Inner Solid Dot (12px base, responsive real-time spring) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full bg-accent dark:bg-accent-dark shadow-sm"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 12,
          height: 12,
        }}
        animate={{
          scale: isClicked ? 0.7 : isHovered ? 0.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 600, damping: 30 },
          opacity: { duration: 0.15 },
        }}
      />
    </div>
  );
}