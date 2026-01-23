import { Project } from "@/data/types";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group block glass-card p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:glow-border"
        >
            <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all mb-3">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-2 leading-relaxed">
                    {project.problem}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium rounded-full glass-panel border border-white/10 text-gray-300"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 3 && (
                            <span className="px-3 py-1 text-xs font-medium rounded-full glass-panel border border-white/10 text-gray-300">
                                +{project.techStack.length - 3}
                            </span>
                        )}
                    </div>
                    <div className="text-neon-cyan text-sm font-semibold flex items-center group-hover:text-white transition-colors">
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
