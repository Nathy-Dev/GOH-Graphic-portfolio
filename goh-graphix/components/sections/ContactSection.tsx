"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, Copy, Mail, MessageCircle, Phone } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useInquiry } from "@/components/ui/InquiryProvider";
import { useCopyToClipboard } from "@/lib/hooks";
import { prepareInquiry } from "@/lib/inquiry";
import { contactServices, isContactService, site } from "@/lib/site";

type FormField = "name" | "email" | "service" | "message";
type FormErrors = Partial<Record<FormField, string>>;

export default function ContactSection() {
  const { service, setService } = useInquiry();
  const [errors, setErrors] = useState<FormErrors>({});
  const [draft, setDraft] = useState<ReturnType<typeof prepareInquiry> | null>(null);
  const { copied, error: copyError, copy, reset: resetCopy } = useCopyToClipboard();
  const currentDraft = draft?.service === service ? draft : null;
  const serviceError = service ? undefined : errors.service;

  function handleChange(event: ChangeEvent<HTMLFormElement>) {
    setDraft(null);
    resetCopy();
    const field = event.target.name;
    if (field === "name" || field === "email" || field === "service" || field === "message") {
      setErrors((previous) => ({ ...previous, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    resetCopy();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const nextErrors: FormErrors = {};

    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email address.";
    else if (emailInput.validity.typeMismatch) nextErrors.email = "Please enter a valid email address.";
    if (!service) nextErrors.service = "Please choose a service.";
    if (!message) nextErrors.message = "Tell us a little about your project or training goals.";

    setErrors(nextErrors);
    const firstInvalidField = Object.keys(nextErrors)[0];
    if (firstInvalidField) {
      setDraft(null);
      (form.elements.namedItem(firstInvalidField) as HTMLElement | null)?.focus();
      return;
    }

    if (service) setDraft(prepareInquiry({ name, email, phone, service, message }));
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad border-t border-line bg-paper">
      <div className="container-xl">
        <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
          <FadeIn>
            <p className="eyebrow text-muted">06 / Let’s work together</p>
            <h2 id="contact-title" className="display-lg mt-5">Good design starts<br />with a conversation.</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="max-w-md text-sm leading-7 text-muted md:ml-auto">A new brand, a fresh direction, or your first step into design. Tell us what you have in mind, and let’s find the right way forward.</p>
          </FadeIn>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="min-w-0 lg:col-span-2">
            <div className="rounded-xl bg-brand-blue-soft p-6 sm:p-8">
              <MessageCircle size={26} className="text-brand-blue" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold tracking-tight">Prefer a quick hello?</h3>
              <p className="mt-3 text-sm leading-7 text-muted">You can reach Samuel directly. No long brief needed to get the conversation started.</p>
              <a href={`${site.whatsapp}?text=${encodeURIComponent("Hello GOH Graphix, I’d like to discuss a design project or training.")}`} target="_blank" rel="noopener noreferrer" className="button button-primary mt-6 w-full">
                Chat on WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>

            <div className="mt-6 divide-y divide-line">
              <a href={`mailto:${site.email}`} className="group flex min-h-20 items-center gap-4 py-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line bg-white text-brand-blue"><Mail size={18} aria-hidden="true" /></span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted">Drop us an email</span>
                  <span className="mt-1 block break-words text-sm font-semibold group-hover:text-brand-blue">{site.email}</span>
                </span>
                <ArrowUpRight size={17} className="ml-auto shrink-0 text-muted" aria-hidden="true" />
              </a>
              <a href={site.phoneHref} className="group flex min-h-20 items-center gap-4 py-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line bg-white text-brand-blue"><Phone size={18} aria-hidden="true" /></span>
                <span>
                  <span className="block text-xs text-muted">Give us a call</span>
                  <span className="mt-1 block text-sm font-semibold group-hover:text-brand-blue">{site.phone}</span>
                </span>
                <ArrowUpRight size={17} className="ml-auto shrink-0 text-muted" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-6 border-t border-line pt-6 text-sm leading-7 text-muted">
              <p className="font-semibold text-ink">Based in {site.location}.</p>
              <p>Working with brands wherever they are.</p>
              <p className="mt-3 text-xs">{site.hours}</p>
            </div>
          </FadeIn>

          <FadeIn delay={100} className="min-w-0 lg:col-span-3">
            <div className="rounded-xl border border-line bg-white p-6 sm:p-8 lg:p-10">
              <noscript>
                <style>{".inquiry-form { display: none; }"}</style>
                <p className="text-sm leading-7 text-muted">Please use the WhatsApp, email, or phone links to contact us. The message builder needs JavaScript.</p>
              </noscript>
              <form onSubmit={handleSubmit} onChange={handleChange} noValidate aria-labelledby="inquiry-title" aria-describedby="inquiry-help" className="inquiry-form space-y-6">
                <div>
                  <h3 id="inquiry-title" className="text-2xl font-bold tracking-tight">Tell us a little more.</h3>
                  <p id="inquiry-help" className="mt-2 text-sm leading-6 text-muted">We’ll prepare a message for you to send through WhatsApp or email. Fields marked * are required.</p>
                </div>

                {(errors.name || errors.email || errors.message || serviceError) && (
                  <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">Please check the highlighted fields before preparing your message.</p>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="inquiry-name" className="form-label">Your name *</label>
                    <input id="inquiry-name" name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Full name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className="form-input" />
                    {errors.name && <p id="name-error" className="form-error">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="inquiry-email" className="form-label">Email address *</label>
                    <input id="inquiry-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className="form-input" />
                    {errors.email && <p id="email-error" className="form-error">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="inquiry-phone" className="form-label">Phone / WhatsApp <span className="font-normal text-muted">(optional)</span></label>
                    <input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="+234 …" className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="inquiry-service" className="form-label">What can we help with? *</label>
                    <select id="inquiry-service" name="service" required value={service} onChange={(event) => setService(isContactService(event.target.value) ? event.target.value : "")} aria-invalid={Boolean(serviceError)} aria-describedby={serviceError ? "service-error" : undefined} className="form-input">
                      <option value="" disabled>Select a service</option>
                      {contactServices.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
                    </select>
                    {serviceError && <p id="service-error" className="form-error">{serviceError}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="form-label">Your project or training goals *</label>
                  <textarea id="inquiry-message" name="message" required rows={5} maxLength={2000} placeholder="Tell us about your brand, what you need, and any timeline you have in mind…" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className="form-input min-h-36 resize-y" />
                  {errors.message && <p id="message-error" className="form-error">{errors.message}</p>}
                </div>

                <button type="submit" className="button button-primary w-full">Prepare my message <ArrowRight size={17} aria-hidden="true" /></button>
                <p className="text-xs leading-6 text-muted">Nothing is sent from this website. You choose the app, review your message, and press send there.</p>

                {currentDraft && (
                  <div className="rounded-lg border border-brand-blue/20 bg-brand-blue-soft p-5">
                    <p role="status" className="text-sm font-semibold text-brand-blue">Your message is ready — it hasn’t been sent yet.</p>
                    <p className="mt-2 text-sm leading-6 text-muted">Choose an app to finish sending it. Your details stay in this form.</p>
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                      <a href={currentDraft.whatsappUrl} target="_blank" rel="noopener noreferrer" className="button button-primary flex-1">Open WhatsApp <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only">(opens in a new tab)</span></a>
                      <a href={currentDraft.emailUrl} className="button button-outline flex-1">Open email draft <Mail size={16} aria-hidden="true" /></a>
                    </div>
                    <details className="mt-5 border-t border-brand-blue/15 pt-4">
                      <summary className="list-none text-sm font-semibold text-brand-blue">Preview your message</summary>
                      <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-7 text-ink">{currentDraft.message}</p>
                    </details>
                    <button type="button" onClick={() => { void copy(currentDraft.message); }} className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-sm text-xs font-semibold text-brand-blue">{copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}{copied ? "Message copied" : "Copy message instead"}</button>
                    <p role="status" className="text-xs leading-6 text-muted">{copyError ? "Copying isn’t available here. Select the text in the preview and copy it manually." : copied ? "Paste your message into WhatsApp or your email app to send it." : "If an app doesn’t open, copy your message and use the contact details."}</p>
                  </div>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
