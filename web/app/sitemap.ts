import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getProjects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/skills",
    "/projects",
    "/certifications",
    "/experience",
    "/services",
    "/resume",
    "/contact",
  ];

  const projectPages = getProjects().map((p) => `/projects/${p.slug}`);

  return [...pages, ...projectPages].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}