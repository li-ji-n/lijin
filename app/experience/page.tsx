import { Section } from "@/components/Section";
import { experience } from "@/data/experience";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience",
    description: "Career timeline and professional experience of Lijin.",
};

export default function ExperiencePage() {
    return (
        <Section className="py-20">
            <div className="space-y-4 mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h1>
                <p className="text-secondary text-lg">
                    5+ years in mobile engineering, leading teams and shipping production apps.
                </p>
            </div>

            <div className="border-l-2 border-border/50 ml-3 md:ml-6 space-y-12">
                {experience.map((job, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                            <h2 className="text-2xl font-bold text-foreground">{job.role}</h2>
                            <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                                {job.duration}
                            </span>
                        </div>

                        <h3 className="text-xl text-secondary mb-6 font-medium">{job.company}</h3>

                        <ul className="space-y-3">
                            {job.impact.map((point, idx) => (
                                <li key={idx} className="text-secondary/90 leading-relaxed flex items-start gap-3">
                                    <span className="text-primary mt-2 flex-shrink-0 text-xs">●</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
