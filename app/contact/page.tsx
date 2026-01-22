import { Section } from "@/components/Section";
import { profile } from "@/data/profile";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Lijin.",
};

export default function ContactPage() {
    return (
        <Section className="py-20 flex flex-col items-center text-center">
            <div className="max-w-2xl space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Get In Touch</h1>
                <p className="text-xl text-secondary leading-relaxed">
                    I&apos;m currently interested in senior mobile engineering roles where I can help build secure, high-scale applications.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                    <a
                        href={`mailto:${profile.email}`}
                        className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 w-full md:w-auto"
                    >
                        Email Me
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full bg-card-bg border border-border text-foreground font-semibold hover:bg-secondary/10 transition-all w-full md:w-auto"
                    >
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </Section>
    );
}
