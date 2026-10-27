"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import type { SkillCategory, SkillLevel } from "@/types/content";

const levelStyles: Record<SkillLevel, string> = {
  Beginner: "bg-slate-500/15 text-slate-600 dark:text-slate-300",
  Familiar: "bg-blue/15 text-blue",
  Practiced: "bg-cyan/15 text-cyan",
  "Project Experience": "bg-violet/15 text-violet",
  Exploring: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  "In Progress": "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
};

export default function SkillsExplorer({
  categories,
}: {
  categories: SkillCategory[];
}) {
  const [active, setActive] = useState("All");
  const names = ["All", ...categories.map((c) => c.category)];
  const visible =
    active === "All" ? categories : categories.filter((c) => c.category === active);

  return (
    <>
      <div
        role="group"
        aria-label="Filter skills by category"
        className="mb-8 flex flex-wrap gap-2"
      >
        {names.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={active === name}
            onClick={() => setActive(name)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === name
                ? "bg-gradient-to-r from-blue to-violet text-white"
                : "glass text-muted hover:text-fg"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((cat, i) => (
          <Reveal key={cat.category} delay={i * 0.05}>
            <section className="glass h-full rounded-2xl p-6">
              <h2 className="text-lg font-semibold">{cat.category}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center gap-2 rounded-full bg-surface-alt py-1 pl-3 pr-1 text-sm"
                  >
                    {s.name}
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${levelStyles[s.level]}`}
                    >
                      {s.level}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </>
  );
}