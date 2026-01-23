"use client";

export function SkillStrip() {
    const skills = [
        "WEB DESIGN",
        "APP DESIGN",
        "DEVELOPMENT",
        "WEB FLOW",
        "BRANDING",
        "UI/UX DESIGN",
        "REACT NATIVE",
        "FIREBASE"
    ];

    return (
        <div className="relative py-16 overflow-hidden -rotate-2 my-20">
            <div className="bg-gradient-neon py-6">
                <div className="flex gap-8 animate-marquee whitespace-nowrap">
                    {/* First set */}
                    {skills.map((skill, index) => (
                        <div key={`skill-1-${index}`} className="flex items-center gap-8">
                            <span className="text-white font-bold text-xl md:text-2xl tracking-wider">
                                {skill}
                            </span>
                            <span className="text-white/50">✦</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {skills.map((skill, index) => (
                        <div key={`skill-2-${index}`} className="flex items-center gap-8">
                            <span className="text-white font-bold text-xl md:text-2xl tracking-wider">
                                {skill}
                            </span>
                            <span className="text-white/50">✦</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </div>
    );
}
