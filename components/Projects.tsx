"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

const statuses = ["All", ...Array.from(new Set(projects.map((project) => project.status)))];
const technologies = ["All", ...Array.from(new Set(projects.flatMap((project) => project.technologies)))];

export default function Projects() {
  const [status, setStatus] = useState("All");
  const [technology, setTechnology] = useState("All");
  const filteredProjects = useMemo(() => projects.filter((project) =>
    (status === "All" || project.status === status) &&
    (technology === "All" || project.technologies.includes(technology))
  ), [status, technology]);

  return (
    <Section id="projects" eyebrow="Selected work" title="Projects in progress" description="A small collection of things I’ve worked on. I’m looking forward to adding more as I learn and build.">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2" aria-label="Filter projects by status">
          {statuses.map((item) => <button key={item} type="button" aria-pressed={status === item} onClick={() => setStatus(item)} className={`rounded-lg border px-3 py-2 text-xs transition ${status === item ? "border-accent/40 bg-accent/10 text-accent" : "border-white/10 text-slate-400 hover:border-white/25 hover:text-white"}`}>{item}</button>)}
        </div>
        <label className="flex items-center gap-2 text-xs text-slate-400">
          Technology
          <select value={technology} onChange={(event) => setTechnology(event.target.value)} className="rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-xs text-white focus:border-accent">
            {technologies.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
      {filteredProjects.length === 0 && <p className="rounded-2xl border border-dashed border-white/15 py-12 text-center text-sm text-slate-400">No projects match those filters yet.</p>}
    </Section>
  );
}
