"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { useLockBodyScroll } from "@/lib/hooks";
import { trapDialogFocus } from "@/lib/dialog";
import { ServiceLink } from "@/components/ui/InquiryProvider";
import { isContactService } from "@/lib/site";
import type { Work } from "@/lib/data";

interface LightboxProps {
  work: Work | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  position: number;
  total: number;
}

export default function Lightbox({ work, onClose, onPrev, onNext, hasPrev, hasNext, position, total }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = Boolean(work);
  useLockBodyScroll(open);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  function closeProject() {
    dialogRef.current?.close();
    onClose();
  }

  return (
    <dialog ref={dialogRef} tabIndex={-1} aria-labelledby="project-title" aria-describedby="project-description" className="project-dialog" onClose={onClose} onCancel={closeProject} onClick={(event) => { if (event.target === event.currentTarget) closeProject(); }} onKeyDown={(event) => {
      trapDialogFocus(event);
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === "ArrowLeft" && hasPrev) { event.preventDefault(); onPrev(); }
      if (event.key === "ArrowRight" && hasNext) { event.preventDefault(); onNext(); }
    }}>
      {work && (
        <>
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-white/95 px-4 py-3 backdrop-blur-sm sm:px-6">
            <p className="text-xs font-medium text-muted">Selected work <span className="ml-3 tabular-nums">{String(position).padStart(2, "0")} / {String(total).padStart(2, "0")}</span></p>
            <button type="button" onClick={closeProject} aria-label="Close project" autoFocus className="grid h-11 w-11 place-items-center rounded-lg border border-line transition-colors hover:bg-ink hover:text-white"><X size={20} aria-hidden="true" /></button>
          </div>
          <div className="grid lg:grid-cols-[1.45fr_1fr]">
            <div className="flex min-w-0 flex-col bg-paper p-3 sm:p-5">
              <div className="relative min-h-[42dvh] flex-1 lg:min-h-[58dvh]">
                <Image src={work.image} alt={work.title} fill sizes="(max-width: 1023px) 100vw, 60vw" loading="eager" className="object-contain" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <button type="button" onClick={onPrev} disabled={!hasPrev} aria-label="Previous project" className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line bg-white transition-colors hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-35"><ChevronLeft size={20} aria-hidden="true" /></button>
                <a href={work.image} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-center text-xs font-medium text-brand-blue hover:text-ink">View full artwork <ExternalLink size={13} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
                <button type="button" onClick={onNext} disabled={!hasNext} aria-label="Next project" className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line bg-white transition-colors hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-35"><ChevronRight size={20} aria-hidden="true" /></button>
              </div>
            </div>
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <div aria-live="polite" aria-atomic="true">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-blue">{work.category}</p>
                <h2 id="project-title" className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em]">{work.title}</h2>
                {work.client && <p className="mt-3 text-sm font-medium text-muted">For {work.client}</p>}
                <p id="project-description" className="mt-6 text-sm leading-7 text-muted">{work.description}</p>
              </div>
              <ul aria-label="Project tags" className="mt-6 flex flex-wrap gap-2">
                {work.tags.map((tag) => <li key={tag} className="rounded-md bg-paper px-3 py-2 text-xs text-muted">{tag}</li>)}
              </ul>
              <div className="mt-auto pt-10">
                <ServiceLink service={isContactService(work.category) ? work.category : "Logo Design"} onClick={closeProject} className="button button-primary w-full">Start a similar project <ArrowUpRight size={16} aria-hidden="true" /></ServiceLink>
                <p className="mt-4 text-center text-xs leading-6 text-muted">Use the arrow keys to explore. Escape to close.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
