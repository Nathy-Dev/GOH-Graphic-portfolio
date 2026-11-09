import Image from "next/image";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import { stats } from "@/lib/data";

const disciplines = ["Brand identity", "Logo design", "Social & campaigns", "Creative training"];

export default function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="overflow-hidden pt-20">
      <div className="container-xl">
        <div className="grid items-center gap-6 pt-12 pb-10 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pt-16 lg:pb-14">
          <div className="relative z-10">
            <p className="eyebrow text-muted">Independent studio. Original thinking.</p>
            <h1 id="hero-title" className="mt-6 max-w-2xl text-[clamp(2.5rem,5.7vw,5.1rem)] font-bold leading-[1.06] tracking-[-0.06em]">
              Good design.<br />
              <span className="text-brand-blue">Great brands.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-muted sm:text-[17px] sm:leading-8">
              We turn ideas into brands worth remembering, and help the next generation of designers find their own voice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#portfolio" className="button button-primary">Explore the work <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a href="#contact" className="button button-outline">Start a project <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
            <div className="mt-8 flex items-center gap-2.5 text-xs font-medium text-muted">
              <span className="relative flex h-2 w-2 rounded-full bg-brand-blue" aria-hidden="true" />
              Based in Port Harcourt. Built for your brand.
            </div>
          </div>

          <div className="hero-stage mt-3 sm:mx-auto sm:w-full sm:max-w-xl lg:mt-0">
            <div className="hero-collage">
              <div className="absolute bottom-[10%] left-[2%] h-40 w-40 rounded-full bg-brand-blue/8 sm:h-52 sm:w-52" aria-hidden="true" />
              <div className="hero-card-primary">
                <div className="flex items-center justify-between bg-white px-3 py-2 text-[9px] font-semibold tracking-widest text-muted">
                  <span className="flex gap-1" aria-hidden="true"><span className="h-1.5 w-1.5 rounded-full bg-accent" /><span className="h-1.5 w-1.5 rounded-full bg-line" /><span className="h-1.5 w-1.5 rounded-full bg-line" /></span>
                  <span>ITZ-DONE / BRAND IDENTITY</span>
                </div>
                <div className="relative aspect-[4/5]">
                  <Image src="/previews/hero-identity.webp" alt="ITZ-DONE brand identity applied to a glass office entrance" fill priority sizes="(max-width: 640px) 72vw, (max-width: 1024px) 400px, 430px" className="object-cover" />
                </div>
              </div>
              <div className="hero-card-secondary">
                <div className="relative aspect-[3/4]">
                  <Image src="/previews/hero-campaign.webp" alt="An expressive orange GOH Graphix social media campaign design" fill sizes="(max-width: 640px) 43vw, 250px" className="object-cover" />
                </div>
              </div>
              <div className="hero-sticker" aria-hidden="true">
                <Sparkles size={24} className="mx-auto mb-2" />
                <p className="font-display text-xs font-bold leading-5 sm:text-sm">Made<br />for you.</p>
              </div>
            </div>
            <p className="mt-3 px-4 text-center text-[10px] font-semibold uppercase leading-5 tracking-[0.13em] text-muted">A little strategy. A lot of character.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-7 border-t border-line py-8 sm:grid-cols-4 sm:py-9">
          {stats.map(({ value, label }, index) => (
            <div key={label} className={index % 2 === 1 ? "border-l border-line pl-6 sm:pl-8" : "sm:border-l sm:border-line sm:pl-8 first:sm:border-0 first:sm:pl-0"}>
              <p className="font-display text-3xl font-bold tracking-tight text-ink"><CountUp end={value} /></p>
              <p className="mt-1.5 text-xs text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="dark-surface bg-brand-blue text-white">
        <div className="container-xl flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-5 sm:justify-between">
          {disciplines.map((discipline) => (
            <p key={discipline} className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-[11px]"><span className="h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />{discipline}</p>
          ))}
          <a href="#portfolio" aria-label="Discover selected work" className="hidden h-8 w-8 items-center justify-center rounded-full border border-white/50 lg:flex"><ArrowDown size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
