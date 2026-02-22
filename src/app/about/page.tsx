'use client'

import { TechSkills } from "./TechSkills/TechSkills";
import { Education } from "./education/Eductaion";
import { Experience } from "./experience/Experience";
import { Certificats } from "./certificats/Certificats";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <>
      <section className="grid gap-y-20 pt-20">
        <div className="relative mx-auto max-w-5xl text-center px-6">
          {/* Subtelna poświata dostosowana do trybu */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-to/5 dark:bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Header z mocnym kontrastem */}
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-foreground transition-colors">
              Let me <span className="bg-gradient-to-r from-foreground/40 to-foreground/70 bg-clip-text ">introduce</span> myself
            </h2>

            <div className="relative space-y-6">


              <p className="text-xl md:text-3xl text-foreground/80 leading-tight font-medium max-w-4xl mx-auto tracking-tight">
                I&apos;m a <span className="text-foreground  font-bold">passionate and detail-oriented</span> developer with a love for
                building <span className="text-primary-to">elegant, user-focused</span> digital experiences.
              </p>

              <p className="text-base md:text-xl text-foreground/60  leading-relaxed max-w-2xl mx-auto font-medium">
                With a strong background in modern web technologies and a
                <span className="border-b-2 border-primary-to/30 pb-0.5 text-foreground "> problem-solving mindset</span>,
                I aim to craft clean, efficient, and scalable code that brings ideas to life.
              </p>
            </div>


            <div className="flex flex-wrap justify-center gap-12 pt-8">
              <div className="group flex flex-col items-center">
                <span className="text-3xl font-black tracking-tighter text-foreground  group-hover:text-primary-to transition-colors">Clean Code</span>
                <span className="font-doto text-[10px] uppercase tracking-[0.3em] font-bold">My Standard</span>
              </div>

              <div className="w-[1px] h-12 bg-foreground/10 hidden md:block self-center" />

              <div className="group flex flex-col items-center">
                <span className="text-3xl font-black text-foreground  tracking-tighter group-hover:text-primary-to transition-colors">Scalable UI</span>
                <span className="font-doto text-[10px] uppercase tracking-[0.3em] text-primary-to/60 font-bold">My Focus</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Komponenty składowe */}
        <div className="space-y-32 pb-32">
          <TechSkills />
          <Education />
          <Certificats />
          <Experience />
        </div>
      </section>
    </>
  );
}