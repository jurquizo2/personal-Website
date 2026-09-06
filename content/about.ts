export const aboutIntro =
  "Much of my career has been spent asking one question: how can markets, finance, and technology work better for the people and businesses usually underserved by them?";

export interface EducationItem {
  degree: string;
  institution: string;
  note?: string;
}

export const education: EducationItem[] = [
  { degree: "MBA", institution: "ESAN University, Peru" },
  { degree: "MSc, Information Systems (Human-Centered Computing)", institution: "University of Maryland, Baltimore County", note: "GPA 3.7" },
  { degree: "BBA", institution: "Saint Mary's Catholic University, Peru" },
];

export interface ProfessionalDevelopmentItem {
  program: string;
  institution: string;
  year: string;
}

export const professionalDevelopment: ProfessionalDevelopmentItem[] = [
  { program: "AI Strategy & Governance", institution: "University of Pennsylvania", year: "2025" },
  { program: "Generative AI in Business", institution: "University of Michigan", year: "2025" },
  { program: "Decentralized Finance", institution: "Duke University", year: "2022" },
];

export const bilingualNote = "Bilingual, English/Spanish.";
