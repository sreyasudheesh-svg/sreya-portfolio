import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-accent/30">
      <div className="relative grid h-48 place-items-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-violet-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.12),transparent_58%)]" aria-hidden="true" />
        <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-slate-950/40 text-accent shadow-glow transition group-hover:scale-105">
          <Layers3 size={28} aria-hidden="true" />
        </div>
        <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-slate-950/50 px-3 py-1 text-[11px] text-slate-300">{project.status}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => <span key={technology} className="rounded-lg border border-accent/15 bg-accent/[0.06] px-2.5 py-1 text-xs text-cyan-100">{technology}</span>)}
        </div>
        <div className="mt-6 flex gap-3 border-t border-white/[0.07] pt-5">
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-accent"><Github size={16} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>}
          {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-accent">Live Demo <ArrowUpRight size={13} aria-hidden="true" /></a>}
          {!project.githubUrl && !project.demoUrl && <span className="text-xs text-slate-500">Project links coming soon</span>}
        </div>
      </div>
    </article>
  );
}
