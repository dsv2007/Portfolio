import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CertificationsExplorer from "@/components/CertificationsExplorer";
import { getCertifications, getTraining } from "@/lib/content";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Certifications and training completed by Santhivarshini D.",
};

export default function CertificationsPage() {
  const training = getTraining();

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications and training"
          description="Filter by issuer. Certificate files are added as I collect them."
        />
      </Reveal>

      <CertificationsExplorer certs={getCertifications()} />

      {training.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold">Training</h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {training.map((t) => (
              <li key={t.title} className="glass rounded-2xl p-5">
                <h3 className="font-semibold">{t.title}</h3>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}