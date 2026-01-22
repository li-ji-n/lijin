import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Case studies of production-grade React Native applications built by Lijin.",
};

export default function ProjectsPage() {
    return (
        <Section className="py-20">
            <div className="space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Work</h1>
                <p className="text-secondary text-lg max-w-2xl">
                    A collection of production mobile applications focusing on performance, security, and scalability.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </Section>
    );
}
