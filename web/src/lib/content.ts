import raw from "@/data/portfolio.json";
import type { PortfolioContent, Project } from "@/types/content";

const content = raw as unknown as PortfolioContent;

export const getProfile = () => content.profile;
export const getSkills = () => content.skills;
export const getProjects = (): Project[] => content.projects;
export const getProject = (slug: string) =>
  content.projects.find((p) => p.slug === slug);
export const getCertifications = () => content.certifications;
export const getTraining = () => content.training;
export const getExperience = () => content.experience;
export const getServices = () => content.services;