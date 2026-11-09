import Image from "next/image";
import { ArrowUpRight, PenTool } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad bg-white">
      <div className="container-xl grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <FadeIn>
          <div className="relative mx-auto max-w-md pb-6 pr-4 sm:pr-6">
            <div className="absolute inset-0 top-8 left-6 rounded-xl bg-brand-blue" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-xl bg-paper">
              <div className="relative aspect-[4/5]">
                <Image src="/samuel-nobg.png" alt="Samuel Hilary, founder and creative director of GOH Graphix" fill sizes="(max-width: 1023px) 440px, 40vw" className="object-cover object-top" />
              </div>
              <div className="dark-surface relative flex items-center justify-between gap-4 bg-ink px-6 py-5 text-white">
                <div><p className="font-display text-xl font-bold tracking-tight">Samuel Hilary</p><p className="mt-1 text-xs text-white/75">Founder & creative director</p></div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-ink"><PenTool size={19} aria-hidden="true" /></span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="eyebrow text-muted">03 / The person behind the pixels</p>
          <h2 id="about-title" className="display-lg mt-5">A designer.<br />A mentor.<br /><span className="text-brand-blue">Your creative partner.</span></h2>
          <p className="mt-6 text-sm leading-7 text-muted">GOH Graphix started with a simple belief: good design should tell your story, not somebody else&apos;s.</p>
          <p className="mt-4 text-sm leading-7 text-muted">Led by Samuel Hilary in Port Harcourt, we bring strategy and visual storytelling together to create brands with a clear identity. Every logo, campaign, and design begins with understanding the people behind it.</p>
          <p className="mt-4 text-sm leading-7 text-muted">And because great creativity grows when it is shared, Samuel also mentors aspiring designers through practical projects and honest, hands-on guidance.</p>
          <blockquote className="mt-7 border-l-2 border-accent pl-5">
            <p className="font-display text-xl font-semibold leading-relaxed tracking-tight">&ldquo;Every pixel has a purpose.<br />Every brand has a story.&rdquo;</p>
            <footer className="mt-2 text-xs text-muted">The GOH Graphix philosophy</footer>
          </blockquote>
          <a href="#contact" className="button button-primary mt-8">Work with Samuel <ArrowUpRight size={17} aria-hidden="true" /></a>
        </FadeIn>
      </div>
    </section>
  );
}
