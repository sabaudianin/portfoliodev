'use client'

import { TechSkills } from "./TechSkills/TechSkills";
import { Education } from "./education/Eductaion";
import { Experience } from "./experience/Experience";
import { Certificats } from "./certificats/Certificats";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <>
      <section className="grid gap-y-12  ">
        <div className="relative mx-auto max-w-4xl text-center px-4">
          {/*  poświata */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >


            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
              Let me <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent ">introduce</span> myself:
            </h2>

            <div className="relative">
              {/* Ozdobny cudzysłów w tle */}
              <span className="absolute -top-10 -left-4 text-9xl text-white/5 font-serif pointer-events-none">“</span>

              <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-light max-w-3xl mx-auto">
                I&apos;m a <span className="text-white font-medium">passionate and detail-oriented</span> developer with a love for
                building <span className="text-cyan-400">elegant, user-focused</span> digital experiences.
              </p>

              <p className="mt-4 text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                With a strong background in modern web technologies and a
                <span className="border-b border-cyan-500/50 text-gray-200"> problem-solving mindset</span>,
                I aim to craft clean, efficient, and scalable code that brings ideas to life.
              </p>
            </div>

            {/* Statystyki lub małe wyróżniki pod tekstem */}
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white tracking-tighter">Clean Code</span>
                <span className="text-[10px] uppercase tracking-widest text-cyan-500">My Standard</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden md:block" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-white tracking-tighter">Scalable UI</span>
                <span className="text-[10px] uppercase tracking-widest text-cyan-500">My Focus</span>
              </div>
            </div>
          </motion.div>
        </div>

        <TechSkills />
        <Education />

        <Certificats />
        <Experience />
      </section>
    </>
  );
}
