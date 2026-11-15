import type { LucideIcon } from "lucide-react";
import { Braces, Code2, Lightbulb, Terminal, Users, Workflow } from "lucide-react";

export type Skill = {
  name: string;
  description: string;
  icon: LucideIcon;
  category: "Language" | "Web" | "Core";
};

export const skills: Skill[] = [
  { name: "C++", description: "Exploring programming fundamentals and structured problem solving.", icon: Code2, category: "Language" },
  { name: "C#", description: "Learning object-oriented programming and application development.", icon: Braces, category: "Language" },
  { name: "Python", description: "Building a foundation in readable, versatile programming.", icon: Terminal, category: "Language" },
  { name: "HTML", description: "Creating the semantic structure behind web experiences.", icon: Workflow, category: "Web" },
  { name: "JavaScript", description: "Making web pages interactive and dynamic.", icon: Braces, category: "Web" },
  { name: "Problem solving", description: "Breaking challenges into clear, manageable steps.", icon: Lightbulb, category: "Core" },
];
