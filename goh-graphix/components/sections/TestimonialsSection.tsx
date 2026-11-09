"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  return (
    <section aria-labelledby="testimonials-title" className="section-pad bg-paper relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Big statement + inline testimonials ── */}
          <FadeIn direction="right">
            <span className="eyebrow mb-6 inline-flex">Client Stories</span>
            <h2 id="testimonials-title" className="display-lg text-ink mt-4 mb-6">
              Don&apos;t take<br />
              our word<br />
              <span className="text-brand-blue">for it.</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-10">
              Real feedback from brands who trusted GOH Graphix with their most
              important visual asset — their identity.
            </p>

            {/* Testimonial dots nav */}
            <div className="flex flex-wrap items-center gap-1" role="group" aria-label="Choose testimonial">
              {testimonials.map((item, itemIndex) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(itemIndex)}
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-pressed={itemIndex === index}
                  className="grid h-11 w-11 place-items-center rounded-lg"
                >
                  <span aria-hidden="true" className={cn("h-2 rounded-full transition-colors", itemIndex === index ? "w-6 bg-brand-blue" : "w-2 bg-muted/40")} />
                </button>
              ))}
              <div className="ml-auto flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
                  className="w-11 h-11 rounded-full border border-line flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
                  className="w-11 h-11 rounded-full bg-brand-blue text-white flex items-center justify-center hover:bg-brand-blue-dark transition-colors"
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </FadeIn>

          {/* ── Right: Active testimonial card ── */}
          <FadeIn delay={150} direction="left">
            <div className="relative">
              {/* Background card offset */}
              <div className="absolute inset-0 bg-brand-blue/10 rounded-3xl translate-x-3 translate-y-3" aria-hidden="true" />

              <div
                key={index}
                aria-live="polite"
                aria-atomic="true"
                className="relative bg-white rounded-3xl p-6 sm:p-9 border border-line shadow-[0_8px_60px_rgba(0,0,0,.08)]"
                style={{ animation: "fadeIn .4s ease" }}
              >
                {/* Large quote mark */}
                <Quote size={42} className="text-brand-blue mb-4" aria-hidden="true" />

                {/* Quote */}
                <p className="sr-only">Testimonial {index + 1} of {testimonials.length}</p>
                <blockquote className="text-ink text-lg leading-relaxed font-medium mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Client */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className={cn(
                    "w-12 h-12 rounded-full font-display font-black text-sm flex items-center justify-center shrink-0",
                    testimonial.color === "blue" ? "bg-brand-blue text-white" : "bg-accent text-ink"
                  )} aria-hidden="true">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-display font-bold text-ink">{testimonial.name}</p>
                    <p className="text-muted text-xs font-medium">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto hidden sm:block">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-accent-dark">
                      Client story
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
