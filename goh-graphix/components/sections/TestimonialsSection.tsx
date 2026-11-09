"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";
import FadeIn from "@/components/ui/FadeIn";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  return (
    <section aria-labelledby="testimonials-title" className="section-pad bg-paper">
      <div className="container-xl grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-16">
        <FadeIn>
          <p className="eyebrow text-muted">Good people. Good partnerships.</p>
          <h2 id="testimonials-title" className="display-lg mt-5">The work speaks.<br />So do our clients.</h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">A few words from the businesses that put their trust in our craft.</p>
          <div className="mt-6 flex items-center gap-2">
            <button type="button" onClick={() => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-white transition-colors hover:bg-ink hover:text-white"><ChevronLeft size={18} aria-hidden="true" /></button>
            <button type="button" onClick={() => setIndex((current) => (current + 1) % testimonials.length)} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-lg border border-ink bg-ink text-white transition-colors hover:bg-brand-blue"><ChevronRight size={18} aria-hidden="true" /></button>
            <span className="ml-3 text-xs tabular-nums text-muted" aria-hidden="true">0{index + 1} / 0{testimonials.length}</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="rounded-xl border border-line bg-white p-6 sm:p-9">
            <Quote size={35} className="text-brand-blue" aria-hidden="true" />
            <div aria-live="polite" aria-atomic="true" className="mt-5">
              <p className="sr-only">Testimonial {index + 1} of {testimonials.length}</p>
              <blockquote className="min-h-[11rem] font-display text-[22px] font-semibold leading-[1.5] tracking-tight sm:min-h-[10rem] sm:text-2xl">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-6">
                <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-blue-soft text-xs font-semibold text-brand-blue">{testimonial.avatar}</span>
                <div><p className="text-sm font-semibold">{testimonial.name}</p><p className="mt-1 text-xs text-muted">{testimonial.role}</p></div>
              </div>
            </div>
            <div className="mt-5 flex gap-1" role="group" aria-label="Choose testimonial">
              {testimonials.map((item, itemIndex) => (
                <button key={item.id} type="button" onClick={() => setIndex(itemIndex)} aria-label={`Show testimonial from ${item.name}`} aria-pressed={itemIndex === index} className="grid h-11 w-11 place-items-center rounded-lg">
                  <span className={cn("h-1.5 rounded-full transition-colors", itemIndex === index ? "w-6 bg-brand-blue" : "w-2 bg-muted/40")} aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
