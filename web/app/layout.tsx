import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { getProfile } from "@/lib/content";
import Navbar from "@/components/Navbar";
import { siteUrl } from "@/lib/site";
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const profile = getProfile();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | ${profile.roles[0]}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Portfolio of Santhivarshini D, an AI and Data Science student building web and mobile applications. Projects, skills, certifications and contact details.",
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: `${profile.name} | ${profile.roles[0]}`,
    description:
      "AI and Data Science student building intelligent web and mobile applications.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={jakarta.variable}>
            <body>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2"
          >
            Skip to content
          </a>
          <Navbar />
          <div id="main">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}