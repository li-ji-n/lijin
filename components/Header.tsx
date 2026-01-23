"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { useState } from "react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight group">
                    <span className="group-hover:text-gradient transition-all">
                        {profile.name}
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/projects"
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                    >
                        Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all" />
                    </Link>
                    <Link
                        href="/experience"
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                    >
                        Experience
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all" />
                    </Link>
                    <Link
                        href="/skills"
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                    >
                        Skills
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all" />
                    </Link>
                    <Link
                        href="/contact"
                        className="px-6 py-2 bg-gradient-neon text-white font-semibold rounded-full hover:scale-105 transition-transform text-sm"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <nav className="md:hidden glass-panel border-t border-white/5 px-6 py-4 flex flex-col gap-4">
                    <Link href="/projects" className="text-sm font-medium text-gray-300 hover:text-white">
                        Projects
                    </Link>
                    <Link href="/experience" className="text-sm font-medium text-gray-300 hover:text-white">
                        Experience
                    </Link>
                    <Link href="/skills" className="text-sm font-medium text-gray-300 hover:text-white">
                        Skills
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white">
                        Contact
                    </Link>
                </nav>
            )}
        </header>
    );
}
