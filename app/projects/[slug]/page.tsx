import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate static params for all projects at build time
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Generate metadata for each project page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.problem,
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <div className="bg-card-bg border-b border-border">
                <Section className="py-20 md:py-28">
                    <div className="max-w-4xl space-y-6">
                        <div className="flex flex-wrap gap-2 text-primary font-mono text-sm uppercase tracking-wide">
                            {project.techStack.join(" • ")}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-2xl">
                            {project.problem}
                        </p>
                    </div>
                </Section>
            </div>

            <Section className="py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Responsibilities */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-foreground">Responsibilities</h2>
                            <ul className="space-y-4">
                                {project.responsibilities.map((item, idx) => (
                                    <li key={idx} className="flex gap-4 text-secondary/90 leading-relaxed">
                                        <span className="text-primary font-bold">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technical Decisions */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-foreground">Key Technical Decisions</h2>
                            <div className="space-y-6">
                                {project.technicalDecisions.map((item, idx) => (
                                    <div key={idx} className="p-6 rounded-xl bg-card-bg border border-border">
                                        <p className="text-secondary/90 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Security */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-foreground">Security Considerations</h2>
                            <ul className="grid gap-4">
                                {project.securityConsiderations.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-secondary/90">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-10">

                        {/* Outcomes */}
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                            <h3 className="text-lg font-bold mb-6 text-primary uppercase tracking-wider">Outcomes</h3>
                            <ul className="space-y-4">
                                {project.outcomes.map((item, idx) => (
                                    <li key={idx} className="text-foreground/90 font-medium border-b border-primary/10 last:border-0 pb-3 last:pb-0">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Features List */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-foreground">Key Multimedia Features</h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="text-secondary flex gap-2">
                                        <span className="text-muted-foreground">→</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </Section>
        </div>
    );
}
