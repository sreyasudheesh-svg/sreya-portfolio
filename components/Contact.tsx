import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

const contactLinks = [
  { label: "Email", value: "sreyasudheesh14@gmail.com", href: "mailto:sreyasudheesh14@gmail.com", icon: Mail },
  { label: "GitHub", value: "github.com/sreyasudheesh-svg", href: "https://github.com/sreyasudheesh-svg", icon: Github },
  { label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/sreya-sudheesh-b1b814409/", icon: Linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Say hello" title="Let’s make something meaningful" description="Have a question, an idea, or an opportunity to learn together? I’d love to hear from you.">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
        <div className="space-y-3">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"} className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:border-accent/30">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-accent"><Icon size={19} aria-hidden="true" /></span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-slate-500">{label}</span>
                <span className="mt-1 block truncate text-sm font-medium text-slate-200">{value}</span>
              </span>
              <ArrowUpRight size={15} className="text-slate-500" aria-hidden="true" />
            </a>
          ))}
          <p className="px-1 pt-3 text-xs leading-5 text-slate-500">Prefer email? You can reach me directly at <a className="text-slate-300 underline decoration-slate-600 underline-offset-4 hover:text-accent" href="mailto:sreyasudheesh14@gmail.com">sreyasudheesh14@gmail.com</a>.</p>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
