"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ChevronRight, Circle } from "lucide-react";
import { useEffect, useState } from "react";

const phrases = [
  "Building Ideas Into Reality.",
  "Learning Today, Innovating Tomorrow.",
  "Adapting Fast. Thinking Different. Building Better.",
  "Always Ready for the Next Challenge.",
];

function TypingLine() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setText(phrases[0]);
      return;
    }
    const current = phrases[phraseIndex];
    const wait = deleting ? 35 : text.length === current.length ? 1600 : 75;
    const timer = window.setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text.length === 0) {
        setDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, wait);
    return () => window.clearTimeout(timer);
  }, [deleting, phraseIndex, reduceMotion, text]);

  return <span aria-label={phrases[phraseIndex]}>{text}<span className="ml-0.5 animate-pulse text-accent" aria-hidden="true">|</span></span>;
}

function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.2 }}
      className="glass relative mx-auto w-full max-w-lg rounded-2xl p-1 shadow-glow"
      role="img"
      aria-label="Decorative code terminal"
    >
      <div className="overflow-hidden rounded-[0.9rem] bg-slate-950/90">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex gap-2" aria-hidden="true"><Circle className="fill-rose-400 text-rose-400" size={9} /><Circle className="fill-amber-300 text-amber-300" size={9} /><Circle className="fill-emerald-400 text-emerald-400" size={9} /></div>
          <span className="font-mono text-[11px] text-slate-500">sreya.ts</span>
          <span className="w-8" />
        </div>
        <div className="space-y-4 px-5 py-6 font-mono text-xs leading-6 sm:px-7 sm:py-8 sm:text-sm">
          <p><span className="text-violet-300">const</span> <span className="text-sky-200">developer</span> = {"{"}</p>
          <p className="pl-5"><span className="text-slate-400">name:</span> <span className="text-emerald-300">&quot;Sreya Sudheesh.M&quot;</span>,</p>
          <p className="pl-5"><span className="text-slate-400">focus:</span> <span className="text-emerald-300">&quot;Computer Science&quot;</span>,</p>
          <p className="pl-5"><span className="text-slate-400">mindset:</span> <span className="text-emerald-300">&quot;always learning&quot;</span>,</p>
          <p className="pl-5"><span className="text-slate-400">readyFor:</span> <span className="text-violet-300">newChallenges</span>,</p>
          <p>{"};"}</p>
          <p className="pt-2 text-slate-400"><ChevronRight className="mr-1 inline text-accent" size={15} aria-hidden="true" /> building what&apos;s next<span className="animate-pulse text-accent">_</span></p>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-3 hidden rounded-xl border border-accent/20 bg-slate-900 px-4 py-2 font-mono text-xs text-accent shadow-lg sm:block">{"<keepGrowing />"}</div>
    </motion.div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="relative flex min-h-[760px] scroll-mt-0 items-center overflow-hidden px-5 pb-20 pt-32 sm:min-h-[850px] sm:px-8">
      <div className="grid-pattern pointer-events-none absolute inset-x-0 top-0 h-[78%] opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-5 flex items-center gap-3 font-mono text-xs font-semibold tracking-[0.24em] text-accent sm:text-sm">
            <span className="h-px w-8 bg-accent" /> HELLO, WORLD! I&apos;M
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="gradient-text">Sreya<br className="hidden sm:block" /> Sudheesh.M</span>
          </h1>
          <p className="mt-5 text-lg font-medium text-white sm:text-xl">
            First-Year B.Tech CSE Student
          </p>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">Aspiring Software Developer <span className="px-1 text-slate-600">|</span> Lifelong Learner</p>
          <p className="mt-6 min-h-7 font-mono text-sm text-accent sm:text-base"><TypingLine /></p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">
              View Projects <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/50 hover:text-accent">
              Contact Me <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-xs text-slate-500">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" /></span>
            Open to learning, building, and collaborating
          </div>
        </motion.div>
        <TerminalCard />
      </div>
    </section>
  );
}
