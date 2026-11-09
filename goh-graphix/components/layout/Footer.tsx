import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/Icons";
import { navigation, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="dark-surface bg-ink text-white">
      <div className="container-xl pt-14 pb-7">
        <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">
          <div>
            <a href="#home" aria-label="GOH Graphix home" className="inline-flex items-center gap-3 rounded-sm">
              <Image src="/logomark.png" alt="" width={44} height={44} className="h-11 w-11 object-contain" />
              <span className="font-display text-xl font-bold tracking-tight">GOH GRAPHIX<span className="text-accent">.</span></span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">Strong visual brands. Thoughtful design. A new generation of creative minds.</p>
            <div className="mt-5 flex gap-2">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="GOH Graphix on Instagram (opens in a new tab)" className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 transition-colors hover:bg-white hover:text-ink"><InstagramIcon size={18} /></a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="GOH Graphix on Facebook (opens in a new tab)" className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 transition-colors hover:bg-white hover:text-ink"><FacebookIcon size={18} /></a>
              <a href={`mailto:${site.email}`} aria-label="Email GOH Graphix" className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 transition-colors hover:bg-white hover:text-ink"><Mail size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/65">Explore</h2>
            <nav aria-label="Footer navigation" className="mt-4 flex flex-col items-start">
              {[...navigation, { label: "Contact", id: "contact" }].map(({ label, id }) => (
                <a key={id} href={`#${id}`} className="group flex min-h-10 items-center gap-3 text-sm text-white/80 hover:text-accent">{label}<ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" /></a>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/65">Say hello</h2>
            <a href={`mailto:${site.email}`} className="mt-4 block py-2 text-sm text-white/85 hover:text-accent">{site.email}</a>
            <a href={site.phoneHref} className="block py-2 text-sm text-white/85 hover:text-accent">{site.phone}</a>
            <p className="mt-4 text-sm text-white/70">{site.location}</p>
            <p className="mt-2 text-xs leading-6 text-white/65">{site.hours}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs leading-6 text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GOH Graphix. All rights reserved.</p>
          <a href="#home" className="inline-flex min-h-10 items-center gap-2 self-start hover:text-white">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
