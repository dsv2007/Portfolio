import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Code, Globe, Smartphone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getProfile, getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: "Freelance web, mobile and AI prototype services.",
};

const icons = [Globe, Code, Smartphone, Brain];

export default function ServicesPage() {
  const services = getServices();
  const profile = getProfile();

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          description="I'm a student developer open to suitable freelance projects and collaborations."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="glass h-full rounded-2xl p-6">
                <Icon className="h-7 w-7 text-blue" aria-hidden="true" />
                <h2 className="mt-3 text-lg font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="glass mt-12 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold">Have a project in mind?</h2>
          <p className="mt-2 text-muted">{profile.availability}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-blue to-violet px-6 py-3 text-sm font-semibold text-white"
          >
            Discuss a project
          </Link>
        </div>
      </Reveal>
    </main>
  );
}