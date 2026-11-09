import { ArrowUpRight, Plus } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const questions = [
  { question: "How do we start a project?", answer: "Tell us a little about your brand and what you need using the project form below, WhatsApp, or email. We will discuss the brief, scope, deliverables, and next steps with you before the work begins." },
  { question: "How much does a design project cost?", answer: "Every brief is different. Pricing depends on the type of work, the number of deliverables, and the scope of the project. Share your requirements and we will put together a quote that matches them." },
  { question: "How long will my project take?", answer: "The timeline depends on the size of the brief and the feedback involved. We will agree on a schedule with you before starting, so you know what to expect. If you have a deadline, include it in your message." },
  { question: "Can we work together remotely?", answer: "Yes. We can discuss your brief and review designs online. The studio is based in Port Harcourt, but your project does not need to be." },
  { question: "Do I need experience to join the training?", answer: "No. The training is beginner-friendly and focuses on fundamentals, practical projects, and mentorship. Contact us for the current course options, requirements, fees, and next intake." },
];

export default function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="section-pad border-t border-line bg-white">
      <div className="container-xl grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <FadeIn>
          <p className="eyebrow text-muted">A little clarity</p>
          <h2 id="faq-title" className="display-lg mt-5">Good questions.<br />Straight answers.</h2>
          <a href="#contact" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-brand-blue hover:text-ink">Have something else in mind? <ArrowUpRight size={16} aria-hidden="true" /></a>
        </FadeIn>
        <div className="border-t border-line">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group border-b border-line">
              <summary className="flex min-h-16 list-none items-center justify-between gap-5 py-5 text-sm font-semibold sm:text-base">
                {question}<Plus size={18} className="shrink-0 text-brand-blue transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="max-w-xl pr-5 pb-6 text-sm leading-7 text-muted">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
