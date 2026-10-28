import { getProfile, ensureHttps } from "@/lib/content";

export default function Footer() {
  const profile = getProfile();
  const year = new Date().getFullYear();

  const github = ensureHttps(profile.social.github);
  const linkedin = ensureHttps(profile.social.linkedin);
  const email = profile.contact.email;

  return (
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              GitHub
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg"
            >
              LinkedIn
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="hover:text-fg">
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}