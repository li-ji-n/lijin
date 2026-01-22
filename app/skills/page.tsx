import { Section } from "@/components/Section";
import { skills } from "@/data/skills";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills",
    description: "Technical skills and expertise in React Native, security, and backend integration.",
};

export default function SkillsPage() {
    return (
        <Section className="py-20">
            <div className="space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Skills</h1>
                <p className="text-secondary text-lg">
                    A comprehensive overview of my technical stack and tools.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((group) => (
                    <div key={group.category} className="p-8 rounded-2xl bg-card-bg border border-border hover:border-border/80 transition-colors">
                        <h2 className="text-2xl font-bold mb-6 text-foreground">{group.category}</h2>
                        <div className="flex flex-wrap gap-3">
                            {group.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 rounded-lg bg-background border border-border/50 text-secondary text-sm font-medium hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
