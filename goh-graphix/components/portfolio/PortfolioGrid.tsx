"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { categories, works, type Category, type Work } from "@/lib/data";
import { cn } from "@/lib/utils";
import WorkCard from "./WorkCard";
import Lightbox from "./Lightbox";

const INITIAL_COUNT = 6;

export default function PortfolioGrid() {
  const [category, setCategory] = useState<Category>("All");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Work | null>(null);
  const filtered = useMemo(() => category === "All" ? works : works.filter((work) => work.category === category), [category]);
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
  const selectedIndex = selected ? filtered.findIndex((work) => work.id === selected.id) : -1;

  function chooseCategory(value: Category) {
    setCategory(value);
    setExpanded(false);
  }

  return (
    <div>
      <noscript>
        <style>{'.portfolio-filters, #portfolio-results, .portfolio-pagination { display: none; }'}</style>
        <p className="mb-6 text-sm leading-7 text-muted">Explore the original artwork below. Interactive filters and project previews are available with JavaScript enabled.</p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => <li key={work.id}><a href={work.image} target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-line bg-paper p-5 text-sm font-semibold text-brand-blue">{work.title}<span className="mt-2 block text-xs font-normal text-muted">{work.category} · View artwork in a new tab</span></a></li>)}
        </ul>
      </noscript>
      <div className="portfolio-filters -mx-5 mb-8 overflow-x-auto px-5 pb-3 sm:mx-0 sm:px-0" role="group" aria-label="Filter projects by category">
        <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
          {categories.map((item) => {
            const count = item === "All" ? works.length : works.filter((work) => work.category === item).length;
            return (
              <button key={item} type="button" onClick={() => chooseCategory(item)} aria-pressed={category === item} aria-controls="portfolio-results" className={cn("inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap rounded-lg border px-3.5 text-xs font-medium transition-colors", category === item ? "border-ink bg-ink text-white" : "border-line bg-white text-muted hover:border-brand-blue hover:text-brand-blue")}>
                {item === "All" ? "All work" : item}
                <span className={cn("text-[10px] tabular-nums", category === item ? "text-white/80" : "text-muted")}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="portfolio-results" className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((work, index) => <WorkCard key={work.id} work={work} index={index} onClick={() => setSelected(work)} />)}
      </div>

      <div className="portfolio-pagination mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <p aria-live="polite" aria-atomic="true" className="text-xs text-muted">Showing {visible.length} of {filtered.length} {category === "All" ? "projects" : `${category.toLowerCase()} projects`}</p>
        {filtered.length > INITIAL_COUNT ? (
          <button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} aria-controls="portfolio-results" className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-semibold text-brand-blue hover:text-ink">
            {expanded ? "Show less" : `View all ${filtered.length} projects`}
            {expanded ? <ArrowUp size={16} aria-hidden="true" /> : <ArrowDown size={16} aria-hidden="true" />}
          </button>
        ) : <p className="text-xs text-muted">Select a project for the full story.</p>}
      </div>

      <Lightbox work={selected} onClose={() => setSelected(null)} onPrev={() => { if (selectedIndex > 0) setSelected(filtered[selectedIndex - 1]); }} onNext={() => { if (selectedIndex >= 0 && selectedIndex < filtered.length - 1) setSelected(filtered[selectedIndex + 1]); }} hasPrev={selectedIndex > 0} hasNext={selectedIndex >= 0 && selectedIndex < filtered.length - 1} position={selectedIndex + 1} total={filtered.length} />
    </div>
  );
}
