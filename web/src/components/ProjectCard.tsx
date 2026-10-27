import Link from "next/link";
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";
import StatusBadge from "./StatusBadge";
import type { Project } from "@/types/content";

export default function ProjectCard({ project }: { project: Project }) {
  const shownTech = project.tech.slice(0, 4);
  const extra = project.tech.length - shownTech.length;

  return (
    <article className="glass flex h-full flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">
          <Link href={`/projects/${project.slug}`} className="hover:text-blue">
            {project.name}
          </Link>
        </h3>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      {shownTech.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {shownTech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-surface-alt px-2.5 py-1 text-xs text-muted"
            >
              {t}
            </li>
          ))}
          {extra > 0 && (
            <li className="rounded-full bg-surface-alt px-2.5 py-1 text-xs text-muted">
              +{extra} more
            </li>
          )}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-medium">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-blue hover:underline"
        >
          View details <ArrowUpRight className="h-4 w-4" />
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted hover:text-fg"
          >
            <ExternalLink className="h-4 w-4" /> Live demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted hover:text-fg"
          >
            <Github className="h-4 w-4" /> Code
          </a>
        )}
      </div>
    </article>
  );
}