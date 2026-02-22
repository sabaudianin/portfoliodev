"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/ui/sectionWrapper/sectionWrapper";

const experienceData = [
  {
    role: "Frontend / Full-Stack Developer",
    company: "Freelance & Personal Projects",
    period: "2024 - Present",
    location: "Poland",
    description: [
      "Designed and developed modern web applications using React, Next.js (App Router), and TypeScript.",
      "Built full-stack solutions with Prisma, PostgreSQL, authentication systems, and REST APIs.",
      "Implemented responsive, accessible UI with Tailwind CSS, shadcn/ui, and Radix UI.",
      "Integrated third-party services including payments, email delivery, and headless CMS platforms.",
      "Focused on performance optimization, SEO, and clean architecture following production-level standards.",
      "Wrote unit and E2E tests using Vitest, React Testing Library, and Playwright.",
      "Deployed and maintained applications using Docker and Vercel."
    ],
    current: true
  },
  {
    role: "Warehouse Manager",
    company: "Olexim Sp. z o.o.",
    period: "Nov 2014 - Present",
    location: "Poland",
    description: [
      "Led warehouse operations, improving supply chain efficiency through proactive problem-solving.",
      "Managed a cross-functional team to ensure timely order fulfillment and smooth logistics.",
      "Collaborated with clients and suppliers to resolve logistical issues effectively.",
      "Oversaw inventory, scheduling, and operational workflows with high organizational precision."
    ],
    current: true
  },


];

export const Experience = () => {
  return (
    <SectionWrapper id="experience" glowColor="cyan">
      <div className="flex flex-col items-center">
        {/* Nagłówek Sekcji */}
        <motion.h2
          className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center bg-gradient-to-b from-foreground to-foreground/40 bg-clip-text text-transparent"
        >
          Professional <span className="text-primary-gradient">Journey</span>
        </motion.h2>

        <div className="w-full max-w-4xl space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Karta Doświadczenia */}
              <div className="card-modern group relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-foreground group-hover:text-primary-gradient transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400 font-medium flex items-center gap-2">
                      {exp.company}
                      <span className="text-foreground/20">•</span>
                      <span className="text-sm text-gray-500">{exp.location}</span>
                    </p>
                  </div>

                  <div className={`px-4 py-1 rounded-full border text-xs font-doto tracking-widest ${exp.current ? "border-cyan-500/50 text-cyan-400 bg-cyan-500/5" : "border-foreground/10 text-gray-500"
                    }`}>
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 leading-relaxed">
                      <span className="text-cyan-500 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#22d3ee]" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Subtelny "sznyt" dla obecnej pracy */}
                {exp.current && (
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};