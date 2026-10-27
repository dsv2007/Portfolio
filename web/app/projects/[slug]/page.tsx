import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Reveal from "@/components/Reveal";
import StatusBadge from "@/components/StatusBadge";
import { getProject, getProjects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

// Builds one page per project at build time
export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.name, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const hasRole = project.role && project.role !== "TBD";

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
      >
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>

      <Reveal>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <h1 className="gradient-text text-4xl font-extrabold">
            {project.name}
          </h1>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-4 text-lg text-muted">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue to-violet px-5 py-2.5 text-sm font-semibold text-white"
            >
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              <Github className="h-4 w-4" /> Source code
            </a>
          )}
          {!project.liveUrl && !project.repoUrl && (
            <p className="text-sm text-muted">
              Demo and repository links will be added soon.
            </p>
          )}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6">
        {project.problem && (
          <Reveal>
            <section className="glass rounded-2xl p-6">
              <h2 className="font-semibold">Problem it addresses</h2>
              <p className="mt-2 text-muted">{project.problem}</p>
            </section>
          </Reveal>
        )}

        {project.features.length > 0 && (
          <Reveal>
            <section className="glass rounded-2xl p-6">
              <h2 className="font-semibold">Key features</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {project.tech.length > 0 && (
          <Reveal>
            <section className="glass rounded-2xl p-6">
              <h2 className="font-semibold">Technologies used</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-surface-alt px-3 py-1 text-sm"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {hasRole && (
          <Reveal>
            <section className="glass rounded-2xl p-6">
              <h2 className="font-semibold">My role</h2>
              <p className="mt-2 text-muted">{project.role}</p>
            </section>
          </Reveal>
        )}

        {project.disclaimer && (
          <Reveal>
            <p className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm">
              <strong>Note: </strong>
              {project.disclaimer}
            </p>
          </Reveal>
        )}
      </div>
    </main>
  );
}