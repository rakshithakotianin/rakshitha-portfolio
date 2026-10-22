export interface Project {
  id: string;
  title: string;
  status: 'Ongoing' | 'Completed';
  statusBadge: string;
  description: string;
  capabilities: string[];
  technologies: {
    name: string;
    type: 'confirmed' | 'planned' | 'core';
  }[];
  githubUrl?: string;
  demoUrl?: string;
  notes?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    category: string;
    icon?: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  branch?: string;
  specialization?: string;
  institution: string;
  period: string;
  gradeLabel: string;
  gradeValue: string;
  board?: string;
  highlights?: string[];
}

export interface SoftSkill {
  name: string;
  description: string;
  iconName: string;
}

export interface ContactInfo {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  linkedInUrl: string;
  linkedInDisplay: string;
  availability: string;
}

export interface SplineConfig {
  /**
   * The exported scene URL from Spline (e.g. 'https://prod.spline.design/.../scene.splinecode').
   * If empty or undefined, a stylish configurable placeholder with instructions will be rendered.
   */
  sceneUrl: string;
  creatorName?: string;
  creatorUrl?: string;
  enableMobileScene: boolean;
}
