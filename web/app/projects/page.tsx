import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Web, AI and mobile projects by Santhivarshini D.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="What I've built"
          description="Search or filter by status and technology. Open a project for the full details."
        />
      </Reveal>
      <ProjectsExplorer projects={getProjects()} />
    </main>
  );
}