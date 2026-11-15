export type ProjectStatus = "Developed" | "Completed";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "STARK AI Agent",
    description: "A Python-based AI agent project. More implementation details and a repository link can be added when available.",
    technologies: ["Python"],
    status: "Developed",
    featured: true,
  },
  {
    title: "Student CGPA Calculator",
    description: "A Python tool for entering subject grades and credits to calculate GPA and CGPA.",
    technologies: ["Python"],
    status: "Completed",
  },
];
