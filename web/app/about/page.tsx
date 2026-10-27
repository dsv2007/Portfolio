import type { Metadata } from "next";
import { GraduationCap, Smartphone, Globe, Brain } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getProfile } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "About Santhivarshini D, AI and Data Science student.",
};

const interests = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    text: "Building intelligent applications and learning how machine learning models are trained and tested.",
  },
  {
    icon: Globe,
    title: "Web Development",
    text: "Creating responsive, accessible websites and full-stack applications with React and Next.js.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    text: "Learning Flutter and Dart to bring ideas to Android devices.",
  },
];

export default function AboutPage() {
  const profile = getProfile();

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="About me"
          title="Building useful technology, one project at a time"
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="leading-relaxed text-muted">{profile.intro}</p>
          <p className="mt-4 leading-relaxed text-muted">
            I learn by building. My projects, certifications and virtual
            internships help me practise new tools and turn what I study into
            working applications.
          </p>
          <p className="mt-4 font-medium text-cyan">{profile.availability}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-6">
            <GraduationCap className="h-7 w-7 text-blue" aria-hidden="true" />
            <h3 className="mt-3 font-semibold">Education</h3>
            <p className="mt-2 text-sm">{profile.education.degree}</p>
            <p className="text-sm text-muted">{profile.education.institution}</p>
            <p className="mt-2 text-sm text-muted">
              Expected graduation: {profile.education.expectedGraduation}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {interests.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="glass h-full rounded-2xl p-6">
              <item.icon className="h-6 w-6 text-violet" aria-hidden="true" />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}