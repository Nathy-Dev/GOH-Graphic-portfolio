"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  threshold?: number;
}

export default function FadeIn({ children, className, delay = 0, direction = "up", threshold = 0.1 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof element.animate !== "function" || typeof window.IntersectionObserver !== "function") return;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const transform = {
      up: "translate3d(0, 20px, 0)",
      left: "translate3d(20px, 0, 0)",
      right: "translate3d(-20px, 0, 0)",
      none: "none",
    }[direction];
    let animation: Animation | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animation = element.animate(
          [{ opacity: 0, transform }, { opacity: 1, transform: "none" }],
          { duration: 600, delay: Math.max(delay, 0), easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" }
        );
        observer.disconnect();
      },
      { threshold: Math.min(Math.max(threshold, 0), 1) }
    );
    const handleMotionChange = () => {
      if (!motionQuery.matches) return;
      observer.disconnect();
      animation?.cancel();
    };

    observer.observe(element);
    motionQuery.addEventListener("change", handleMotionChange);
    return () => {
      observer.disconnect();
      animation?.cancel();
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [delay, direction, threshold]);

  return <div ref={ref} className={className}>{children}</div>;
}
