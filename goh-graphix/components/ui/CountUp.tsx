"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CountUpProps {
  end: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ end, duration = 1400, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    const value = end.match(/^(\d+)([^\d]*)$/);
    if (!element || !value || duration <= 0 || typeof window.IntersectionObserver !== "function") return;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const numeric = Number(value[1]);
    const suffix = value[2];
    let animationFrame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = `${Math.round(eased * numeric)}${suffix}`;
          if (progress < 1) animationFrame = window.requestAnimationFrame(tick);
        };
        animationFrame = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );
    const finish = () => {
      if (!motionQuery.matches) return;
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      element.textContent = end;
    };

    observer.observe(element);
    motionQuery.addEventListener("change", finish);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      motionQuery.removeEventListener("change", finish);
      element.textContent = end;
    };
  }, [duration, end]);

  return <span className={cn("tabular-nums", className)}><span className="sr-only">{end}</span><span ref={ref} aria-hidden="true">{end}</span></span>;
}
