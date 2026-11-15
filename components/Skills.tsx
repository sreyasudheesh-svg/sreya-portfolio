import { skills } from "@/data/skills";
import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="My toolkit" title="Skills I’m building" description="A growing set of tools and foundations I’m practicing as I explore software development.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
      </div>
    </Section>
  );
}
