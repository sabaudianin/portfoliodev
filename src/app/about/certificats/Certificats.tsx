"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/ui/sectionWrapper/sectionWrapper";

const certificatesData = [
  { src: "/dyploms/cod.png", alt: "CodersLab Diploma", width: 400, height: 500, label: "Fullstack Bootcamp" },
  { src: "/dyploms/charp.png", alt: "C# Certificate", width: 400, height: 280, label: "C# Backend" },
  { src: "/dyploms/ts.avif", alt: "TypeScript Certificate", width: 400, height: 300, label: "Modern TypeScript" },
  { src: "/dyploms/js.avif", alt: "JavaScript Certificate", width: 400, height: 300, label: "JavaScript Core" },
  { src: "/dyploms/react.avif", alt: "React Certificate", width: 400, height: 300, label: "React Mastery" },
];

export const Certificats = () => {
  return (
    <SectionWrapper id="certificates" glowColor="blue">
      <div className="flex flex-col items-center">
        {/* Nagłówek sekcji */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-5xl font-background uppercase pb-16 tracking-tighter text-center bg-gradient-to-b from-background to-background/40 dark:from-background dark:to-background/20 bg-clip-text text-transparent"
        >
          My <span className="text-primary-gradient">Certificates</span>
        </motion.h2>

        {/* Grid z certyfikatami */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Opakowanie obrazu - card-modern ze szklanym efektem */}
              <div className="card-modern p-3 overflow-hidden bg-background/5 border-background/10 group-hover:border-primary-to/50 transition-all duration-500">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-background/20">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay przy najechaniu */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-background font-doto text-xs tracking-[0.2em] uppercase">
                      View Document
                    </span>
                  </div>
                </div>

                {/* Podpis pod certyfikatem wewnątrz karty */}
                <div className="mt-4 px-2 flex justify-between items-center">
                  <span className="text-sm font-bold tracking-tight text-gray-400 group-hover:text-background transition-colors">
                    {cert.label}
                  </span>
                  <div className="h-px flex-grow mx-4 bg-background/10 group-hover:bg-primary-to/30 transition-all" />
                  <svg className="w-4 h-4 text-background/20 group-hover:text-primary-to transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Dodatkowy blask pod kartą przy hoverze */}
              <div className="absolute -inset-2 bg-primary-to/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};