import Link from "next/link";
import { ArrowRight, Briefcase, Download, Mail } from "lucide-react";
import Reveal from "./Reveal";
import HeroPhoto from "./HeroPhoto";
import { getProfile } from "@/lib/content";

const primaryBtn =
  "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue to-violet px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03]";
const secondaryBtn =
  "glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-[1.03]";

export default function Hero() {
  const profile = getProfile();
  const photoSrc = "/" + profile.photo.replace(/^\//, "");

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
    >
      {/* Animated background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-bg" />
        <div className="blob -left-24 top-0 h-80 w-80 bg-blue" />
        <div
          className="blob -right-24 top-40 h-96 w-96 bg-violet"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="blob bottom-0 left-1/3 h-72 w-72 bg-cyan"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Reveal>
          <HeroPhoto src={photoSrc} name={profile.name} />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-cyan">
            Hello, I&apos;m
          </p>
          <h1
            id="hero-title"
            className="gradient-text mt-2 text-4xl font-extrabold sm:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium sm:text-xl">
            {profile.headline}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-5 flex flex-wrap justify-center gap-2">
            {profile.roles.map((role) => (
              <li
                key={role}
                className="glass rounded-full px-3 py-1 text-xs font-medium text-muted"
              >
                {role}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-muted">{profile.intro}</p>
          <p className="mt-4 text-sm font-medium text-cyan">
            {profile.availability}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/projects" className={primaryBtn}>
              Explore My Projects <ArrowRight className="h-4 w-4" />
            </Link>

            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} download className={secondaryBtn}>
                <Download className="h-4 w-4" /> Download Resume
              </a>
            ) : (
              <span
                aria-disabled="true"
                title="Resume will be added soon"
                className={`${secondaryBtn} cursor-not-allowed opacity-60 hover:scale-100`}
              >
                <Download className="h-4 w-4" /> Resume (coming soon)
              </span>
            )}

            <Link href="/contact" className={secondaryBtn}>
              <Briefcase className="h-4 w-4" /> Hire Me / Discuss a Project
            </Link>

            <Link href="/contact" className={secondaryBtn}>
              <Mail className="h-4 w-4" /> Contact Me
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}