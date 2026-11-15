import { ArrowUp, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-slate-400"><span className="font-medium text-slate-200">Sreya Sudheesh.M</span> <span className="hidden text-slate-600 sm:inline">|</span> <span className="block sm:inline">Designed with curiosity. Built with passion.</span></p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/sreyasudheesh-svg" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-slate-500 transition hover:text-accent"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/sreya-sudheesh-b1b814409/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-slate-500 transition hover:text-accent"><Linkedin size={17} /></a>
          <a href="#home" aria-label="Back to top" className="ml-2 grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-accent/30 hover:text-accent"><ArrowUp size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
