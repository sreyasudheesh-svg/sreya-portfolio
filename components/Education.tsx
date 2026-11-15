import { BookOpen, GraduationCap } from "lucide-react";
import Section from "@/components/Section";
import { currentlyLearning } from "@/data/learning";

export default function Education() {
  return (
    <Section id="education" eyebrow="The learning journey" title="Education & growth" description="Building strong foundations one concept and project at a time.">
      <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
        <article className="glass relative overflow-hidden rounded-2xl p-7 sm:p-8">
          <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />
          <div className="relative flex gap-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-violet-300/15 bg-violet-300/10 text-violet-200"><GraduationCap size={23} aria-hidden="true" /></span>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-violet-200">First Year</p>
              <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">B.Tech Computer Science and Engineering</h3>
              <p className="mt-2 text-sm text-slate-400">Joy University</p>
              <p className="mt-5 text-sm leading-6 text-slate-400">Exploring the fundamentals of computing while discovering the areas of technology I’m most excited to pursue.</p>
            </div>
          </div>
        </article>
        <article className="glass rounded-2xl p-7 sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent"><BookOpen size={19} aria-hidden="true" /></span>
            <h3 className="font-semibold text-white">Currently learning</h3>
          </div>
          <ul className="space-y-3">
            {currentlyLearning.map((item) => <li key={item} className="flex items-center gap-3 text-sm text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{item}</li>)}
          </ul>
        </article>
      </div>
    </Section>
  );
}
