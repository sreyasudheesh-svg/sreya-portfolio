import type { Skill } from "@/data/skills";

export default function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <article className="glass group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/30">
      <div className="flex items-start justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06] text-accent transition group-hover:bg-accent/10"><Icon size={19} aria-hidden="true" /></span>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-slate-500">{skill.category}</span>
      </div>
      <h3 className="mt-5 font-semibold text-white">{skill.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{skill.description}</p>
    </article>
  );
}
