import Link from "next/link";
import { Award } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { getCertifications } from "@/lib/content";
import { formatMonthYear } from "@/lib/format";

export default function CertHighlights() {
  const certs = getCertifications().slice(0, 4);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications and training"
          description="Recent certifications from Infosys Springboard, NPTEL and more."
        />
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map((c, i) => {
          const date = formatMonthYear(c.date);
          return (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="glass h-full rounded-2xl p-5">
                <Award className="h-6 w-6 text-violet" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-semibold leading-snug">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs text-muted">{c.issuer}</p>
                {date && <p className="mt-1 text-xs text-muted">{date}</p>}
              </div>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-8">
        <Link
          href="/certifications"
          className="font-medium text-blue hover:underline"
        >
          View all certifications →
        </Link>
      </div>
    </section>
  );
}