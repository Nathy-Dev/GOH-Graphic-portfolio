"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  return (
    <section className="section-pad bg-[#FAF9F6] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Big statement + inline testimonials ── */}
          <FadeIn direction="right">
            <span className="eyebrow mb-6 inline-flex">Client Stories</span>
            <h2 className="display-lg text-[--ink] mt-4 mb-6">
              Don't take<br />
              our word<br />
              <span className="text-gradient">for it.</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Real feedback from brands who trusted GOH Graphix with their most
              important visual asset — their identity.
            </p>

            {/* Testimonial dots nav */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={cn(
                    "rounded-full transition-all duration-250",
                    i === idx
                      ? "w-8 h-2.5 bg-[--blue]"
                      : "w-2.5 h-2.5 bg-gray-300 hover:bg-[--orange]"
                  )}
                />
              ))}
              <div className="ml-auto flex gap-2">
                <button
                  onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[--blue] hover:text-[--blue] transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-[--blue] text-white flex items-center justify-center hover:bg-[--blue-dark] transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* ── Right: Active testimonial card ── */}
          <FadeIn delay={150} direction="left">
            <div className="relative">
              {/* Background card offset */}
              <div className="absolute inset-0 bg-[--blue]/10 rounded-3xl translate-x-3 translate-y-3" />

              <div
                key={idx}
                className="relative bg-white rounded-3xl p-9 border border-gray-100 shadow-[0_8px_60px_rgba(0,0,0,.08)]"
                style={{ animation: "fadeIn .4s ease" }}
              >
                {/* Large quote mark */}
                <Quote size={56} className="text-[--blue]/8 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} size={16} className="text-[--orange] fill-[--orange]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[--ink] text-lg leading-relaxed font-medium mb-8">
                  "{t.quote}"
                </p>

                {/* Client */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className={cn(
                    "w-12 h-12 rounded-full font-display font-black text-sm flex items-center justify-center text-white shrink-0",
                    t.color === "blue" ? "bg-[--blue]" : "bg-[--orange]"
                  )}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-display font-bold text-[--ink]">{t.name}</p>
                    <p className="text-gray-400 text-xs font-medium">{t.role}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[--orange]">
                      Verified Client
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
      `}</style>
    </section>
  );
}
