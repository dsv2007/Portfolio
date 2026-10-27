import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { getSkills } from "@/lib/content";

// Only skills at these honest levels are highlighted on the home page
const HIGHLIGHT_LEVELS = ["Practiced", "Project Experience"];

export default function TechHighlights() {
  const groups = getSkills()
    .map((cat) => ({
      category: cat.category,
      items: cat.items.filter((s) => HIGHLIGHT_LEVELS.includes(s.level)),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Technology"
          title="Tools I work with"
          description="Technologies I have used in real projects."
        />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.category} delay={i * 0.06}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="font-semibold">{g.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s.name}
                    className="rounded-full bg-surface-alt px-3 py-1 text-sm"
                  >
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}