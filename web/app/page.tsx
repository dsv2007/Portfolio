import { getProfile, getProjects } from "@/lib/content";

export default function Home() {
  const profile = getProfile();
  const projects = getProjects();

  return (
    <main style={{ padding: 32 }}>
      <h1>{profile.name}</h1>
      <p>{profile.headline}</p>
      <p>Projects loaded: {projects.length}</p>
    </main>
  );
}