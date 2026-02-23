"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCode, FaExternalLinkSquareAlt } from "react-icons/fa";
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
            className="group card-modern flex flex-col h-full !p-0 overflow-hidden border-foreground/5 transition-all duration-500 hover:border-primary-to/50"
          >

            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>


            <div className="p-8 flex flex-col flex-grow space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-black tracking-tight text-foreground d uppercase transition-colors group-hover:text-primary-to">
                  {project.title}
                </h3>
              </div>

              <p className="text-foreground/60  text-sm leading-relaxed font-medium flex-grow">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-3 pt-6">

                <Link
                  href={project.link}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-foreground text-background rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary-to/10"
                >
                  <span className="text-xs font-black uppercase tracking-widest">Live Demo</span>
                  <FaExternalLinkSquareAlt />
                </Link>


                <Link
                  href={project.repo}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 glass-modern border border-foreground/10 rounded-full transition-all hover:bg-foreground/5 hover:scale-105 active:scale-95"
                >
                  <span className="text-xs font-black uppercase tracking-widest">Code</span>
                  <FaCode />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}