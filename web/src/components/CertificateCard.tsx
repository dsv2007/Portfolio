import { Award, BadgeCheck, FileText } from "lucide-react";
import { formatMonthYear } from "@/lib/format";
import type { Certification } from "@/types/content";

export default function CertificateCard({ cert }: { cert: Certification }) {
  const date = formatMonthYear(cert.date);

  return (
    <article className="glass flex h-full flex-col rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-xl">
      <Award className="h-7 w-7 text-violet" aria-hidden="true" />

      <h3 className="mt-3 font-semibold leading-snug">{cert.title}</h3>
      <p className="mt-1 text-sm text-muted">{cert.issuer}</p>

      <dl className="mt-3 space-y-1 text-xs text-muted">
        {date && (
          <div className="flex gap-1">
            <dt className="font-medium">Issued:</dt>
            <dd>{date}</dd>
          </div>
        )}
        {cert.score && (
          <div className="flex gap-1">
            <dt className="font-medium">Score:</dt>
            <dd>{cert.score}</dd>
          </div>
        )}
        {cert.credentialId && (
          <div className="flex gap-1 break-all">
            <dt className="font-medium">Credential ID:</dt>
            <dd>{cert.credentialId}</dd>
          </div>
        )}
      </dl>

      <div className="mt-auto flex flex-wrap items-center gap-4 pt-5 text-sm font-medium">
        {cert.file ? (
          <a
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue hover:underline"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            View Certificate
          </a>
        ) : (
          <span className="text-xs text-muted">Certificate file coming soon</span>
        )}
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted hover:text-fg"
          >
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Verify
          </a>
        )}
      </div>
    </article>
  );
}