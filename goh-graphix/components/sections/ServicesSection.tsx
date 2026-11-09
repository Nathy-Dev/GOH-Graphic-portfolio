import { ArrowUpRight, FileText, GraduationCap, Layers, PenTool, Share2 } from "lucide-react";
import { services } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";
import { ServiceLink } from "@/components/ui/InquiryProvider";
import { YouTubeIcon } from "@/components/ui/Icons";
import type { ContactService } from "@/lib/site";

const icons = { Layers, PenTool, Share2, FileText, Youtube: YouTubeIcon, GraduationCap };

const serviceChoices: Record<string, ContactService> = {
  "brand-identity": "Brand Identity",
  "logo-design": "Logo Design",
  "social-media": "Social Media",
  "flyer-design": "Flyer Design",
  thumbnail: "YouTube Thumbnail",
  training: "Design Training",
};

const process = [
  { title: "First, we listen.", description: "We get to know your brand, your audience, and what you want to achieve." },
  { title: "Then, we create.", description: "We turn the brief into a considered direction, with space for your feedback." },
  { title: "Finally, we deliver.", description: "You get a finished design and the files you need to put it to work." },
];

export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-pad bg-paper">
      <div className="container-xl">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-2 md:gap-12">
          <FadeIn>
            <p className="eyebrow text-muted">02 / What we do</p>
            <h2 id="services-title" className="display-lg mt-5">Big ideas.<br />The right execution.</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="max-w-md text-sm leading-7 text-muted md:ml-auto">From your very first logo to a complete visual world. We bring clarity, consistency, and a little unexpected character to the things you make.</p>
          </FadeIn>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons] || Layers;
            return (
              <FadeIn key={service.id} delay={index * 40} className="h-full">
                <article className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-brand-blue/40 sm:p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-blue-soft text-brand-blue"><Icon size={21} aria-hidden="true" /></span>
                    <span className="text-[11px] tabular-nums text-muted" aria-hidden="true">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{service.title}</h3>
                  <p className="mt-3 mb-5 text-sm leading-7 text-muted">{service.description}</p>
                  <ServiceLink service={serviceChoices[service.id]} className="mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded-sm text-xs font-semibold text-brand-blue hover:text-ink">
                    {service.id === "training" ? "Ask about training" : "Let’s make it happen"}
                    <ArrowUpRight size={15} aria-hidden="true" />
                    <span className="sr-only"> — {service.title}</span>
                  </ServiceLink>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <p className="eyebrow text-muted">A simple, collaborative process</p>
          <div className="mt-7 grid gap-8 md:grid-cols-3 md:gap-10">
            {process.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <span className="pt-1 text-sm font-semibold tabular-nums text-brand-blue">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
