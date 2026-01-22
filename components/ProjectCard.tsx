import { Project } from "@/data/types";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block p-6 rounded-2xl bg-card-bg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
        >
            <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                </h3>
                <p className="text-secondary text-sm md:text-base font-medium mb-4 line-clamp-2">
                    {project.problem}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs font-medium rounded-md bg-secondary/10 text-secondary border border-secondary/20"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 3 && (
                            <span className="px-2 py-1 text-xs font-medium rounded-md bg-secondary/10 text-secondary border border-secondary/20">
                                +{project.techStack.length - 3}
                            </span>
                        )}
                    </div>
                    <div className="text-primary text-sm font-semibold flex items-center group-hover:underline">
                        View Case Study
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
}
