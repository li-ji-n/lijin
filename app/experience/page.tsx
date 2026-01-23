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
            <div className="space-y-6 mb-16 animate-fade-in">
                <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
                    — CAREER PATH
                </p>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    My <span className="text-gradient-pink">Experience</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                    5+ years in mobile engineering, leading teams and shipping production apps.
                </p>
            </div>

            <div className="relative">
                {/* Gradient Timeline Line */}
                <div className="absolute left-3 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-blue to-neon-pink opacity-30" />

                <div className="space-y-12">
                    {experience.map((job, index) => (
                        <div key={index} className="relative pl-12 md:pl-16 group">
                            {/* Glowing Timeline Dot */}
                            <div className="absolute left-[7px] md:left-[19px] top-2 w-5 h-5 rounded-full bg-gradient-neon ring-4 ring-background/50 glow-border animate-pulse-slow"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            />

                            <div className="glass-card p-6 md:p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 hover:glow-border">
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-gradient transition-all">
                                        {job.role}
                                    </h2>
                                    <span className="text-sm font-mono bg-gradient-neon text-white px-4 py-1.5 rounded-full mt-2 md:mt-0 w-fit">
                                        {job.duration}
                                    </span>
                                </div>

                                <h3 className="text-xl text-gray-300 mb-6 font-medium">{job.company}</h3>

                                <ul className="space-y-4">
                                    {job.impact.map((point, idx) => (
                                        <li key={idx} className="text-gray-400 leading-relaxed flex items-start gap-3">
                                            <span className="text-neon-cyan mt-1.5 flex-shrink-0">✦</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
