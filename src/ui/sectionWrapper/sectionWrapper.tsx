"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id: string;               // Musi pasować do linków w navlinks.ts (np. "about", "skills")
    className?: string;
    glowColor?: "blue" | "cyan" | "purple";
}

export const SectionWrapper = ({
    children,
    id,
    className = "",
    glowColor = "cyan",
}: SectionWrapperProps) => {

    const glowStyles = {
        blue: "bg-blue-500/10",
        cyan: "bg-cyan-500/10",
        purple: "bg-purple-500/10",
    };

    return (
        <motion.section
            id={id}
            // To jest kluczowe dla Scroll-Spy i czytników ekranu
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full overflow-hidden ${className}`}
        >
            {/* Dekoracyjne tło sekcji (Glow) */}
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none -z-10 opacity-50 ${glowStyles[glowColor]}`}
            />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </motion.section>
    );
};