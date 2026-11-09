import { ArrowUpRight, Check, GraduationCap, PenTool, Shapes, Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { ServiceLink } from "@/components/ui/InquiryProvider";

const topics = ["Design fundamentals & visual thinking", "Brand identity & logo design", "Real briefs, practical projects", "Portfolio building & personal mentorship"];

export default function TrainingSection() {
  return (
    <section id="training" aria-labelledby="training-title" className="dark-surface section-pad relative overflow-hidden bg-brand-blue text-white">
      <div className="blueprint pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-xl relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
        <FadeIn>
          <p className="eyebrow text-white/85">04 / The creative academy</p>
          <h2 id="training-title" className="display-lg mt-5">Your creative future<br />starts with <span className="text-accent">a first step.</span></h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/80">A beginner today. A confident designer tomorrow. Learn the thinking behind good design, build with real projects, and get direct guidance from someone who does this every day.</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {topics.map((topic) => <li key={topic} className="flex items-start gap-2.5 text-xs leading-6 text-white/90"><Check size={16} className="mt-1 shrink-0 text-accent" aria-hidden="true" />{topic}</li>)}
          </ul>
          <ServiceLink service="Design Training" className="button button-accent mt-8">Let&apos;s talk about training <ArrowUpRight size={18} aria-hidden="true" /></ServiceLink>
          <p className="mt-4 text-xs leading-6 text-white/75">Ask us about the next intake, format, and course fees.</p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="relative mx-auto max-w-md rounded-2xl border border-white/25 bg-white/8 p-5 sm:p-7">
            <div className="mb-7 flex items-center justify-between gap-3 border-b border-white/20 pb-5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/85">From curiosity to craft</span>
              <GraduationCap size={25} className="text-accent" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative flex aspect-square flex-col justify-between overflow-hidden rounded-xl bg-paper p-5 text-ink">
                <PenTool size={28} className="text-brand-blue" aria-hidden="true" />
                <p className="font-display text-2xl font-bold leading-tight tracking-tight">Learn<br />the rules.</p>
              </div>
              <div className="flex aspect-square flex-col justify-between rounded-xl bg-accent p-5 text-ink">
                <Shapes size={28} aria-hidden="true" />
                <p className="font-display text-2xl font-bold leading-tight tracking-tight">Find<br />your style.</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4 rounded-xl bg-ink px-5 py-5">
              <p className="font-display text-xl font-semibold tracking-tight">Make something<br /><span className="text-accent">that is yours.</span></p>
              <Sparkles size={32} className="shrink-0 text-accent" aria-hidden="true" />
            </div>
            <p className="mt-6 text-center text-xs text-white/80">No experience needed. Just a willingness to learn.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
