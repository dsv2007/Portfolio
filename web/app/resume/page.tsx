import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getProfile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download or preview the resume of Santhivarshini D.",
};

export default function ResumePage() {
  const profile = getProfile();
  const resume = profile.resumeUrl;

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Resume"
          title="My resume"
          description="Preview it here or download a copy."
        />
      </Reveal>

      {resume ? (
        <Reveal>
          <div className="mb-6 flex flex-wrap gap-3">
            <a
              href={resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue to-violet px-6 py-3 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download PDF
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" /> Open in new tab
            </a>
          </div>

          <div className="glass overflow-hidden rounded-2xl">
            <object
              data={`${resume}#view=FitH`}
              type="application/pdf"
              className="h-[75vh] w-full"
              aria-label="Resume preview"
            >
              <p className="p-6 text-sm text-muted">
                Your browser can&apos;t preview PDFs here. Use the download
                button above instead.
              </p>
            </object>
          </div>
        </Reveal>
      ) : (
        <div className="glass rounded-2xl p-10 text-center">
          <p className="font-medium">My resume will be available here soon.</p>
        </div>
      )}
    </main>
  );
}