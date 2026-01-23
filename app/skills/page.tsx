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
            <div className="space-y-6 mb-16 animate-fade-in">
                <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
                    — TECH STACK
                </p>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    Technical <span className="text-gradient">Skills</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                    A comprehensive overview of my technical stack and tools.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((group, groupIndex) => (
                    <div
                        key={group.category}
                        className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 hover:glow-border group"
                        style={{ animationDelay: `${groupIndex * 0.1}s` }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white group-hover:text-gradient transition-all">
                            {group.category}
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {group.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 rounded-lg glass-panel border border-white/10 text-gray-300 text-sm font-medium hover:text-white hover:border-neon-purple/50 hover:bg-neon-purple/10 transition-all cursor-default hover:scale-105"
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
