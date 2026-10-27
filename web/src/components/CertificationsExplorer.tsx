"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import CertificateCard from "./CertificateCard";
import type { Certification } from "@/types/content";

export default function CertificationsExplorer({
  certs,
}: {
  certs: Certification[];
}) {
  const [issuer, setIssuer] = useState("All");
  const issuers = ["All", ...Array.from(new Set(certs.map((c) => c.issuer)))];
  const visible =
    issuer === "All" ? certs : certs.filter((c) => c.issuer === issuer);

  return (
    <>
      <div
        role="group"
        aria-label="Filter certificates by issuer"
        className="mb-8 flex flex-wrap gap-2"
      >
        {issuers.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={issuer === name}
            onClick={() => setIssuer(name)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              issuer === name
                ? "bg-gradient-to-r from-blue to-violet text-white"
                : "glass text-muted hover:text-fg"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-muted" aria-live="polite">
        Showing {visible.length} of {certs.length} certificates
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((c, i) => (
          <Reveal key={c.title + c.issuer} delay={(i % 6) * 0.05}>
            <CertificateCard cert={c} />
          </Reveal>
        ))}
      </div>
    </>
  );
}