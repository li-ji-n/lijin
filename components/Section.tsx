import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
    children: React.ReactNode;
    className?: string; // For additional styles
    id?: string;
}

export function Section({ children, className, id }: SectionProps) {
    return (
        <section id={id} className={cn("py-16 md:py-24 px-6 md:px-12", className)}>
            <div className="max-w-6xl mx-auto w-full">
                {children}
            </div>
        </section>
    );
}
