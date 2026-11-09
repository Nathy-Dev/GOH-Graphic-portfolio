import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export default function PortfolioSection() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="section-pad bg-white">
      <div className="container-xl">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1.1fr_1fr] md:gap-12">
          <FadeIn>
            <p className="eyebrow text-muted">01 / Selected work</p>
            <h2 id="portfolio-title" className="display-lg mt-5">Made to stand out.<br /><span className="text-brand-blue">Built to mean something.</span></h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="max-w-md text-sm leading-7 text-muted md:ml-auto">A collection of identities, campaigns, and creative experiments. Different briefs. One thoughtful approach.</p>
            <a href="#contact" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-blue hover:text-ink md:float-right">Your project could be next <ArrowUpRight size={16} aria-hidden="true" /></a>
          </FadeIn>
        </div>
        <PortfolioGrid />
      </div>
    </section>
  );
}
