import ThemeToggle from "@/components/ThemeToggle";
import { getProfile, getProjects } from "@/lib/content";

export default function Home() {
  const profile = getProfile();
  const projects = getProjects();

  return (
    <main className="mx-auto max-w-3xl p-8">
      <div className="mb-8 flex items-center justify-between">
        <span className="text-sm text-muted">Theme test</span>
        <ThemeToggle />
      </div>

      <div className="glass rounded-2xl p-8">
        <h1 className="gradient-text text-4xl font-bold">{profile.name}</h1>
        <p className="mt-2 text-muted">{profile.headline}</p>
        <p className="mt-4">Projects loaded: {projects.length}</p>
        <button className="mt-6 rounded-full bg-blue px-5 py-2 font-medium text-white">
          Sample button
        </button>
      </div>
    </main>
  );
}