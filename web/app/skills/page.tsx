import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SkillsExplorer from "@/components/SkillsExplorer";
import { getSkills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills in AI, web, mobile, backend and cloud.",
};

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies and tools"
          description="Labels describe my honest level: from Beginner and Exploring to Practiced and Project Experience."
        />
      </Reveal>
      <SkillsExplorer categories={getSkills()} />
    </main>
  );
}