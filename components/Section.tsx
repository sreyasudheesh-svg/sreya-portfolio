import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="mb-10 max-w-2xl sm:mb-14">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
        <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        {description && <p className="mt-4 leading-7 text-slate-400">{description}</p>}
      </div>
      {children}
    </section>
  );
}
