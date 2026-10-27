export type SkillLevel =
  | "Beginner"
  | "Familiar"
  | "Practiced"
  | "Project Experience"
  | "Exploring"
  | "In Progress";

export type ProjectStatus = "Completed" | "In Progress" | "Prototype";

export interface Profile {
  name: string;
  handle: string;
  headline: string;
  roles: string[];
  education: {
    degree: string;
    institution: string;
    expectedGraduation: string;
  };
  intro: string;
  availability: string;
  photo: string;
  resumeUrl: string | null;
  contact: {
    email: string | null;
    phone: string | null;
    location: string;
  };
  social: {
    github: string | null;
    linkedin: string | null;
  };
}

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Project {
  slug: string;
  name: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  features: string[];
  tech: string[];
  role: string;
  cover: string | null;
  liveUrl: string | null;
  repoUrl: string | null;
  disclaimer?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string | null;
  score?: string;
  file: string | null;
  credentialId: string | null;
  verifyUrl: string | null;
}

export interface TrainingItem {
  title: string;
  note: string;
}

export interface ExperienceItem {
  title: string;
  type: string;
  duration?: string;
  summary: string;
  details: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface PortfolioContent {
  profile: Profile;
  skills: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  training: TrainingItem[];
  experience: ExperienceItem[];
  services: Service[];
}