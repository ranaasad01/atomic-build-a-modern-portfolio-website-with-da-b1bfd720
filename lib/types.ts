export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
