export type ProjectLayoutType = 'generative' | 'editorial' | 'bento' | 'widescreen';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  role: string;
  year: string;
  client: string;
  summary: string;
  fullDescription: string;
  architectureHighlights: string[];
  techStack: string[];
  layoutType: ProjectLayoutType;
  accentColor: string;
  metrics: ProjectMetric[];
  githubUrl: string;
  liveUrl: string;
  status: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
}

export interface TechnicalSkill {
  name: string;
  focus?: string;
  depth: 'Expert' | 'Advanced' | 'Proficient';
}

export interface TechnicalCategory {
  category: string;
  code: string;
  description: string;
  skills: TechnicalSkill[];
}

export interface PersonalData {
  dateOfBirth: string;
  citizenship: string;
  sex: string;
  civilStatus: string;
}

export interface PortfolioConfig {
  developerName: string;
  developerRole: string;
  availability: string;
  location: string;
  phone?: string;
  timezone: string;
  email: string;
  github: string;
  resumeUrl: string;
  editorialHeadline: string;
  editorialSubhead: string;
  manifestoStatement: string;
  manifestoParagraph: string;
  objective?: string;
  qualifications?: string[];
  personalData?: PersonalData;
  references?: string;
}
