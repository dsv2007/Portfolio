"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types/content";

const STATUSES = ["All", "Completed", "In Progress", "Prototype"] as const;

export default function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("All");
  const [tech, setTech] = useState("All");

  const allTech = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((p) => p.tech))).sort()],
    [projects]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesText =
        q === "" ||
        [p.name, p.summary, ...p.tech].join(" ").toLowerCase().includes(q);
      const matchesStatus = status === "All" || p.status === status;
      const matchesTech = tech === "All" || p.tech.includes(tech);
      return matchesText && matchesStatus && matchesTech;
    });
  }, [projects, query, status, tech]);

  const reset = () => {
    setQuery("");
    setStatus("All");
    setTech("All");
  };

  return (
    <>
      <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto_auto]">
        <div className="relative">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, description or technology"
            className="glass w-full rounded-full py-3 pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-cyan"
          />
        </div>

        <div>
          <label htmlFor="status-filter" className="sr-only">
            Filter by status
          </label>
          <select
            id="status-filter"
            value={status}
            onChange={(e) => setStatus(e.target.value as (typeof STATUSES)[number])}
            className="glass w-full rounded-full px-4 py-3 text-sm"
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s === "All" ? "All statuses" : s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tech-filter" className="sr-only">
            Filter by technology
          </label>
          <select
            id="tech-filter"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="glass w-full rounded-full px-4 py-3 text-sm"
          >
            {allTech.map((t) => (
              <option key={t} value={t}>
                {t === "All" ? "All technologies" : t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-4 text-sm text-muted" aria-live="polite">
        Showing {filtered.length} of {projects.length} projects
      </p>

      {filtered.length === 0 ? (
        <div className="glass rounded-2xl p-10 text-center">
          <p className="font-medium">No projects match your filters.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 rounded-full bg-gradient-to-r from-blue to-violet px-5 py-2 text-sm font-semibold text-white"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </>
  );
}