import Link from "next/link";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import ProjectCard from "../ProjectCard";
import { getProjects } from "@/lib/content";

// Change these slugs to choose which projects are featured
const FEATURED = ["skillbridge-ai", "novamind-cloud", "atomquest"];

export default function FeaturedProjects() {
  const projects = getProjects().filter((p) => FEATURED.includes(p.slug));

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Featured work"
          title="Projects I've built"
          description="A selection of applications I've designed and developed."
        />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/projects" className="font-medium text-blue hover:underline">
          View all projects →
        </Link>
      </div>
    </section>
  );
}