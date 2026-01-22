import { Section } from "@/components/Section";
import { profile } from "@/data/profile";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="flex flex-col justify-center min-h-[80vh] pt-20">
        <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-primary font-mono text-sm md:text-base tracking-wider uppercase">
            Senior React Native Engineer
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Building secure, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              production-grade
            </span>{" "}
            mobile apps.
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
            I specialize in React Native & Expo, focusing on performance, security, and seamless user experiences.
            5+ years of shipping apps to millions of users.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
            >
              View Projects
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-secondary/10 text-foreground font-semibold hover:bg-secondary/20 transition-all border border-white/5"
            >
              GitHub Profile
            </a>
            <a
              href={profile.resume}
              className="px-8 py-4 rounded-full bg-transparent text-secondary font-semibold hover:text-foreground transition-all flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section className="bg-card-bg/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-card-bg border border-border">
            <h3 className="text-xl font-bold mb-3 text-primary">React Native & Expo</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Expertise in bare workflow and managed projects, custom native modules, and high-performance list rendering.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card-bg border border-border">
            <h3 className="text-xl font-bold mb-3 text-primary">Mobile Security</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Implementation of SSL pinning, Jailbreak/Root detection, secure storage using Keychain/Keystore, and biometric auth.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card-bg border border-border">
            <h3 className="text-xl font-bold mb-3 text-primary">Production & OTA</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Seamless updates via CodePush/EAS Update, CI/CD pipelines, and rigorous analytics with Mixpanel/Firebase.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
