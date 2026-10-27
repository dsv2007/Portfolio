import { getProfile } from "@/lib/content";

export default function Footer() {
  const profile = getProfile();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              GitHub
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              LinkedIn
            </a>
          )}
          {profile.contact.email && (
            <a href={`mailto:${profile.contact.email}`} className="hover:text-fg">
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}