import { profile } from "@/data/profile";

export function Footer() {
    return (
        <footer className="w-full border-t border-border py-8 mt-auto bg-card-bg/50">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-secondary">
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-secondary hover:text-foreground transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-secondary hover:text-foreground transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={`mailto:${profile.email}`}
                        className="text-sm text-secondary hover:text-foreground transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
