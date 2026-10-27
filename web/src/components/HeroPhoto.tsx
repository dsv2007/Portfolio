"use client";

import Image from "next/image";
import { useState } from "react";

interface HeroPhotoProps {
  src: string;
  name: string;
}

export default function HeroPhoto({ src, name }: HeroPhotoProps) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72">
      {/* Gradient ring */}
      <div
        aria-hidden="true"
        className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-blue via-violet to-cyan opacity-80 blur-sm"
      />
      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-bg bg-surface-alt">
        {failed ? (
          <div
            role="img"
            aria-label={`${name} (photo coming soon)`}
            className="gradient-text flex h-full w-full items-center justify-center text-6xl font-bold"
          >
            {initials}
          </div>
        ) : (
          <Image
            src={src}
            alt={`Portrait of ${name}`}
            fill
            priority
            sizes="(min-width: 640px) 288px, 224px"
            className="object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}