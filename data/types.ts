export interface Profile {
    name: string;
    role: string;
    summary: string;
    email: string;
    github: string;
    linkedin: string;
    resume: string; // Path to PDF
}

export interface Project {
    slug: string;
    title: string;
    problem: string;
    responsibilities: string[];
    techStack: string[];
    features: string[];
    technicalDecisions: string[];
    securityConsiderations: string[];
    outcomes: string[];
    repoUrl?: string; // Optional
    liveUrl?: string; // Optional
}

export interface Experience {
    company: string;
    role: string;
    duration: string;
    impact: string[]; // Max 3 bullet points
}

export interface SkillGroup {
    category: string;
    items: string[];
}
