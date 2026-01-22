import { Project } from "./types";

export const projects: Project[] = [
    {
        slug: "airline-travel-booking",
        title: "Airline / Travel Booking App",
        problem: "Needed a high-performance, secure mobile app for booking flights and managing itineraries with real-time updates.",
        responsibilities: [
            "Led the React Native development using Expo.",
            "implemented secure session management and authentication.",
            "Integrated Mixpanel for user analytics and funnel tracking."
        ],
        techStack: ["React Native", "Expo", "Firebase", "Mixpanel", "TypeScript"],
        features: [
            "Real-time flight status updates",
            "Secure payment gateway integration",
            "Offline mode for itinerary access"
        ],
        technicalDecisions: [
            "Selected Expo for rapid development and OTA update capabilities.",
            "Used Firebase for backend services to minimize infrastructure overhead."
        ],
        securityConsiderations: [
            "Implemented SSL pinning to prevent Man-in-the-Middle attacks.",
            "Added root/jailbreak detection to ensure active runtime integrity.",
            "Secure session management with validated tokens."
        ],
        outcomes: [
            "Achieved 99.9% upset-free sessions.",
            "Reduced check-in time by 40%."
        ]
    },
    {
        slug: "ecommerce-subscription",
        title: "Ecommerce / Subscription App",
        problem: "Required a robust subscription management system with seamless In-App Purchases and secure data storage.",
        responsibilities: [
            "Architected the GraphQL data layer for efficient fetching.",
            "Implemented In-App Purchases (IAP) for subscriptions.",
            "Secured sensitive user data using MMKV and Keychain."
        ],
        techStack: ["React Native", "GraphQL", "Apollo Client", "MMKV", "IAP"],
        features: [
            "Subscription tier management",
            "One-click checkout",
            "Personalized product recommendations"
        ],
        technicalDecisions: [
            "Chose GraphQL to reduce over-fetching and improve network performance on mobile.",
            "Utilized MMKV for high-performance synchronous storage."
        ],
        securityConsiderations: [
            "Encrypted local storage for sensitive user preferences.",
            "Validated receipt verification on the server-side to prevent fraud."
        ],
        outcomes: [
            "Increased subscription conversion by 15%.",
            "Improved app launch time by 30% using MMKV."
        ]
    },
    {
        slug: "firebase-social-app",
        title: "Firebase-based Social App",
        problem: "Building a scalable social platform with real-time geolocation and instant updates.",
        responsibilities: [
            "Developed real-time chat and geolocation features using Firebase.",
            "Set up CI/CD pipelines with CodePush for OTA updates.",
            "Optimized map rendering performance."
        ],
        techStack: ["React Native", "Firebase Auth", "Firestore", "Google Maps", "CodePush"],
        features: [
            "Real-time user tracking on maps",
            "Instant messaging",
            "Over-the-Air (OTA) updates"
        ],
        technicalDecisions: [
            "Leveraged Firestore listeners for real-time data sync.",
            "Implemented CodePush to deliver critical bug fixes instantly without app store review."
        ],
        securityConsiderations: [
            "Strict Firestore security rules to prevent unauthorized data access.",
            "Implemented role-based access control (RBAC)."
        ],
        outcomes: [
            "Scaled to 10k+ concurrent users.",
            "Reduced bug fix deployment time from days to minutes with CodePush."
        ]
    }
];
