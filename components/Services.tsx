import { Section } from "./Section";

interface Service {
    icon: string;
    title: string;
    description: string;
}

export function Services() {
    const services: Service[] = [
        {
            icon: "🎨",
            title: "UI/UX Creative Design",
            description: "Crafting beautiful, intuitive interfaces that users love. From wireframes to high-fidelity prototypes, I design with purpose."
        },
        {
            icon: "🎯",
            title: "Visual Graphic Design",
            description: "Creating stunning visual identities and brand assets that stand out. Every pixel matters in the digital world."
        },
        {
            icon: "📱",
            title: "Strategy & Digital Marketing",
            description: "Data-driven strategies to grow your product. From user acquisition to retention, planning for success."
        }
    ];

    return (
        <Section className="py-20">
            <div className="space-y-12">
                {/* Section Header */}
                <div className="space-y-4 animate-fade-in">
                    <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
                        — MY SERVICES
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        WHAT I&apos;M <br />
                        <span className="text-gradient-pink">OFFERING</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group glass-card p-8 rounded-2xl hover:bg-card-bg/80 transition-all duration-300 hover:scale-105 hover:glow-border cursor-pointer"
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div className="space-y-4">
                                <div className="text-5xl group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <button className="text-sm font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-2 group-hover:gap-3 duration-300">
                                    READ MORE
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* All Service Button */}
                <div className="flex justify-center pt-8">
                    <button className="px-10 py-4 bg-gradient-neon text-white font-bold rounded-full hover:scale-105 transition-transform glow-border uppercase tracking-wider">
                        All Service
                    </button>
                </div>
            </div>
        </Section>
    );
}
