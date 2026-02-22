"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/ui/sectionWrapper/sectionWrapper";

export const Education = () => {
  const educationData = [
    {
      school: "Wyższa Szkoła Kształcenia Zawodowego",
      date: "2025 - ongoing",
      degree: "Postgraduate studies",
      field: ".NET (C#) Backend Development",
      current: true,
    },
    {
      school: "CodersLab School IT",
      date: "2023 - 2024",
      degree: "Certified Bootcamp Course",
      field: "JavaScript Developer",
      current: false,
    },
    {
      school: "Akademia Bialska im. Jana Pawła II w Białej Podlaskiej",
      date: "2007 - 2011",
      degree: "Bachelor's degree",
      field: "Emergency Medical Services",
      current: false,
    },
  ];

  return (
    <SectionWrapper id="education" glowColor="purple">
      <div className="flex flex-col items-center">
        {/* Nagłówek bez Italic */}
        <motion.h2
          className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent text-center"
        >
          My Education & Journey
        </motion.h2>

        {/* Oś czasu: zmiana border-foreground/10 na dynamiczny kolor */}
        <div className="relative w-full max-w-4xl border-l-2 border-foreground/10 ml-4 md:ml-0">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 ml-8"
            >
              {/* Kropka na osi czasu - lepszy kontrast */}
              <div className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--background)] z-10 
                ${item.current
                  ? "bg-cyan-500 animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                  : "bg-foreground/20 dark:bg-foreground/20"}`}
              />

              <div className="card-modern group hover:scale-[1.01] transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  {/* POPRAWKA: text-foreground zamiast text-foreground */}
                  <h3 className="text-xl font-bold text-foreground  group-hover:text-[var(--primary-to)] transition-colors">
                    {item.school}
                  </h3>

                  <span className={`text-[10px] font-doto tracking-[0.2em] uppercase px-3 py-1 rounded-full border 
                    ${item.current
                      ? "border-cyan-500/50 text-cyan-600 dark:text-cyan-400 bg-cyan-500/5"
                      : "border-foreground/10 dark:border-foreground/10 text-foreground/50 dark:text-gray-500"}`}>
                    {item.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-foreground/40  uppercase tracking-widest font-bold">
                    {item.degree}
                  </p>
                  <p className="text-lg font-semibold text-foreground dark:text-foreground/90">
                    {item.field}
                  </p>
                </div>


                {item.current && (
                  <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-transparent rounded-r-[2rem]" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};