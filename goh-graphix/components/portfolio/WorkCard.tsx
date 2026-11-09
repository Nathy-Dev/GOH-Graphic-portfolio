"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Work } from "@/lib/data";

interface WorkCardProps {
  work: Work;
  index: number;
  onClick: () => void;
}

export default function WorkCard({ work, index, onClick }: WorkCardProps) {
  return (
    <button type="button" onClick={onClick} aria-haspopup="dialog" aria-label={`${work.title} — view project`} className="group block w-full rounded-xl text-left">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-paper ring-1 ring-ink/8 transition-shadow duration-300 group-hover:shadow-xl">
        <Image src={work.preview || work.image} alt="" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04] group-focus-visible:scale-[1.04]" />
        <span className="absolute right-3 bottom-3 grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white/95 text-ink shadow-sm transition-colors group-hover:bg-brand-blue group-hover:text-white group-focus-visible:bg-brand-blue group-focus-visible:text-white"><ArrowUpRight size={18} aria-hidden="true" /></span>
      </div>
      <div className="flex items-start justify-between gap-3 px-0.5 pt-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-blue">{work.category}</p>
          <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-brand-blue">{work.title}</h3>
          {work.client && <p className="mt-1.5 text-xs text-muted">{work.client}</p>}
        </div>
        <span className="pt-0.5 text-[11px] tabular-nums text-muted" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      </div>
    </button>
  );
}
