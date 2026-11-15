import { ArrowUpRight, Sparkles } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav aria-label="Main navigation" className="glass mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6">
        <a href="#home" className="flex shrink-0 items-center gap-2 text-sm font-semibold text-white" aria-label="Sreya Sudheesh home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/10 text-accent"><Sparkles size={16} aria-hidden="true" /></span>
          <span className="hidden sm:inline">Sreya Sudheesh<span className="text-accent">.M</span></span>
          <span className="sm:hidden">Sreya<span className="text-accent">.M</span></span>
        </a>
        <div className="flex min-w-0 items-center gap-4 overflow-x-auto text-xs text-slate-300 sm:gap-6 sm:text-sm">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="whitespace-nowrap transition-colors hover:text-accent">{label}</a>
          ))}
        </div>
        <a href="#contact" className="hidden shrink-0 items-center gap-1 rounded-xl border border-white/10 px-3 py-2 text-xs font-medium text-white transition hover:border-accent/50 hover:text-accent md:flex">
          Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
