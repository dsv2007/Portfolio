import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechHighlights from "@/components/home/TechHighlights";
import CertHighlights from "@/components/home/CertHighlights";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <TechHighlights />
      <CertHighlights />
    </main>
  );
}