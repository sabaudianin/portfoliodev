"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/utils/constans/projects";

export default function Projects() {
  return (
    <section className="mx-auto px-6 ">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center bg-gradient-to-b from-foreground to-foreground/40  bg-clip-text text-transparent"
      >
        Featured <span className="text-primary-to">Projects</span>
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group card-modern flex flex-col h-full !p-0 overflow-hidden border-foreground/5  transition-all duration-500 hover:border-primary-to/50"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
              />
              {/* Overlay poświaty */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-black tracking-tight text-foreground d uppercase transition-colors group-hover:text-primary-to">
                  {project.title}
                </h3>
              </div>

              <p className="text-foreground/60  text-sm leading-relaxed font-medium flex-grow">
                {project.description}
              </p>

              {/* PILLS CONTAINER - To jest klucz do lepszego UI */}
              <div className="flex flex-wrap gap-3 pt-6">
                {/* Live Demo Pill */}
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-foreground  text-background  rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary-to/10"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest">Live Demo</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>

                {/* Repository Pill */}
                <Link
                  href={project.repo}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 glass-modern border border-foreground/10  rounded-full transition-all hover:bg-foreground/5  hover:scale-105 active:scale-95"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest">Code</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}