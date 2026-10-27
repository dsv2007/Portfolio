import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getExperience, getTraining } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Virtual internships, job simulations and training.",
};

export default function ExperiencePage() {
  const items = getExperience();
  const training = getTraining();

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Internships and learning"
          description="Virtual internships and job simulations I have completed."
        />
      </Reveal>

      <ol className="relative space-y-8 border-l border-line pl-8">
        {items.map((item, i) => (
          <li key={item.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.85rem] flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue to-violet text-white"
            >
              <Briefcase className="h-4 w-4" />
            </span>
            <Reveal delay={i * 0.06}>
              <div className="glass rounded-2xl p-6">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-1 text-sm text-cyan">
                  {item.type}
                  {item.duration ? ` · ${item.duration}` : ""}
                </p>
                <p className="mt-3 text-muted">{item.summary}</p>
                {item.details.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                    {item.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      {training.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Training</h2>
          <ul className="mt-4 space-y-3">
            {training.map((t) => (
              <li key={t.title} className="glass rounded-2xl p-5 font-medium">
                {t.title}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}