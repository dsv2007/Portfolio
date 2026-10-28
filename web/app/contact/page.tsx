import type { Metadata } from "next";
import { Code, Mail, MapPin, Link2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { getProfile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about internships, freelance work or collaborations.",
};

export default function ContactPage() {
  const profile = getProfile();
  const { email, location } = profile.contact;
  const { github, linkedin } = profile.social;

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description={profile.availability}
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="space-y-4">
            <li className="glass flex items-center gap-3 rounded-2xl p-5">
              <MapPin className="h-5 w-5 text-blue" aria-hidden="true" />
              <span className="text-sm">{location}</span>
            </li>
            {email && (
              <li className="glass flex items-center gap-3 rounded-2xl p-5">
                <Mail className="h-5 w-5 text-violet" aria-hidden="true" />
                <a href={`mailto:${email}`} className="text-sm hover:underline">
                  {email}
                </a>
              </li>
            )}
            {github && (
              <li className="glass flex items-center gap-3 rounded-2xl p-5">
                <Code className="h-5 w-5 text-cyan" aria-hidden="true" />
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  GitHub
                </a>
              </li>
            )}
            {linkedin && (
              <li className="glass flex items-center gap-3 rounded-2xl p-5">
                <Link2 className="h-5 w-5 text-blue" aria-hidden="true" />
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </main>
  );
}