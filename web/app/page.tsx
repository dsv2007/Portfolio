import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getProfile, getProjects } from "@/lib/content";

export default function Home() {
  const profile = getProfile();
  const projects = getProjects();

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Component test"
          title={profile.name}
          description={profile.headline}
        />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted">{p.summary}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}