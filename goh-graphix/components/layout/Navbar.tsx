"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLockBodyScroll } from "@/lib/hooks";
import { trapDialogFocus } from "@/lib/dialog";
import { cn } from "@/lib/utils";
import { navigation, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const homeRef = useRef<HTMLAnchorElement>(null);
  useLockBodyScroll(open);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (desktop.matches && dialogRef.current?.open) {
        dialogRef.current?.close();
        setOpen(false);
        homeRef.current?.focus({ preventScroll: true });
      }
    };
    desktop.addEventListener("change", handleResize);
    return () => desktop.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window.IntersectionObserver !== "function") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -65% 0px" }
    );
    for (const id of ["home", ...navigation.map((link) => link.id), "contact"]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    dialogRef.current?.close();
    setOpen(false);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/8 bg-paper/95 backdrop-blur-xl">
        <div className="container-xl flex h-20 items-center justify-between gap-3 sm:gap-6">
          <a ref={homeRef} href="#home" aria-label="GOH Graphix home" className="flex shrink-0 items-center gap-2 rounded-sm sm:gap-2.5">
            <Image src="/logomark.png" alt="" width={42} height={42} priority className="h-8 w-8 object-contain sm:h-10 sm:w-10" />
            <span>
              <span className="block font-display text-[13px] font-extrabold leading-tight tracking-[-0.035em] sm:text-[17px]">GOH GRAPHIX<span className="text-accent">.</span></span>
              <span className="mt-1 hidden text-[9px] font-semibold tracking-[0.13em] text-muted sm:block">DESIGN STUDIO & ACADEMY</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {navigation.map(({ label, id }) => (
              <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} className={cn("rounded-md px-4 py-3 text-[13px] font-medium transition-colors hover:text-brand-blue", active === id ? "bg-brand-blue-soft text-brand-blue" : "text-muted")}>
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="button button-primary hidden min-h-11 py-2.5 lg:inline-flex">
            Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-navigation" className="mobile-menu-toggle grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line lg:hidden">
            <Menu size={21} aria-hidden="true" />
          </button>
        </div>
      </header>

      <noscript>
        <nav aria-label="Quick navigation" className="mt-20 flex flex-wrap justify-center gap-x-5 gap-y-2 border-b border-line bg-paper px-5 py-4 text-sm">
          {[...navigation, { label: "Contact", id: "contact" }].map(({ label, id }) => <a key={id} href={`#${id}`} className="inline-flex min-h-11 items-center text-brand-blue">{label}</a>)}
        </nav>
        <style>{'.mobile-menu-toggle { display: none; } #home { padding-top: 0; }'}</style>
      </noscript>

      <dialog ref={dialogRef} id="mobile-navigation" tabIndex={-1} aria-labelledby="mobile-menu-title" className="mobile-nav-dialog" onClose={() => setOpen(false)} onCancel={closeMenu} onKeyDown={trapDialogFocus} onClick={(event) => { if (event.target === event.currentTarget) closeMenu(); }}>
        <div className="flex min-h-full flex-col p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
            <h2 id="mobile-menu-title" className="font-display text-lg font-bold">Explore GOH Graphix</h2>
            <button type="button" onClick={closeMenu} aria-label="Close menu" autoFocus className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line">
              <X size={21} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="my-8">
            {[...navigation, { label: "Contact", id: "contact" }].map(({ label, id }, index) => (
              <a key={id} href={`#${id}`} onClick={closeMenu} aria-current={active === id ? "location" : undefined} className="group flex items-center gap-4 border-b border-line py-5 font-display text-3xl font-semibold hover:text-brand-blue">
                <span className="font-sans text-xs font-medium tabular-nums text-muted">0{index + 1}</span>
                {label}
                <ArrowUpRight size={22} className="ml-auto text-brand-blue" aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-5 pt-4">
            <a href="#contact" onClick={closeMenu} className="button button-primary w-full">Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href={`mailto:${site.email}`} className="block py-2 text-center text-sm text-muted">{site.email}</a>
            <p className="text-center text-xs text-muted">Independent studio. Original thinking.</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
