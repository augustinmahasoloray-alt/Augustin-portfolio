import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Hook for magnetic hover effect on CTA buttons / badges
 */
export function useGsapMagnetic(strength = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseMove = (e) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      gsap.to(node, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(node, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.4)"
      });
    };

    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
}

/**
 * Hook for smooth floating animation using GSAP
 */
export function useGsapFloating(yDistance = 10, duration = 3) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const tween = gsap.to(node, {
      y: `-=${yDistance}`,
      duration: duration,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      tween.kill();
    };
  }, [yDistance, duration]);

  return ref;
}
