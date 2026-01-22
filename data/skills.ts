import { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
    {
        category: "Mobile Core",
        items: ["React Native", "Expo", "TypeScript", "JavaScript (ES6+)", "React Hooks", "Navigation"]
    },
    {
        category: "Backend & Data",
        items: ["Firebase (Auth, Firestore, Functions)", "GraphQL", "Apollo Client", "REST APIs", "Node.js"]
    },
    {
        category: "Production & Tooling",
        items: ["EAS (Expo Application Services)", "CodePush (OTA)", "App Center", "Mixpanel", "Git/GitHub", "CI/CD"]
    },
    {
        category: "Security",
        items: ["SSL Pinning", "Secure Storage (Keychain/Keystore)", "Root/Jailbreak Detection", "OAuth 2.0", "Biometric Auth"]
    }
];
