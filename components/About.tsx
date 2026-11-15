import { Brain, Compass, MessageCircle, Rocket } from "lucide-react";
import Section from "@/components/Section";

const strengths = [
  { title: "Fast Learner", description: "Curious by nature, eager to explore new tools and ideas.", icon: Brain },
  { title: "Team Player", description: "A thoughtful communicator who values sharing ideas and listening.", icon: MessageCircle },
  { title: "Challenge Seeker", description: "Ready to take on unfamiliar problems and learn along the way.", icon: Compass },
  { title: "Growth Mindset", description: "Treating every experience as a chance to improve.", icon: Rocket },
];

export default function About() {
  return (
    <Section id="about" eyebrow="A little about me" title="More than just coding" description="I’m a first-year Computer Science and Engineering student, curious about how technology works and how it can make a difference. I learn quickly, adapt to new situations, and enjoy communicating and working with others as I grow into software development.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map(({ title, description, icon: Icon }) => (
          <article key={title} className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30">
            <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-accent/15 bg-accent/10 text-accent"><Icon size={20} aria-hidden="true" /></span>
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
