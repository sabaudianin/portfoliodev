"use client";

import { techCategories } from "@/utils/constans/techCategories";
import { motion } from "framer-motion";
import {
  containerVariants,
  titleVariants,
  cardVariants,
} from "@/ui/motion/motionVariants";

export const TechSkills = () => {
  return (
    <motion.section
      id="skills"
      className="relative max-w-7xl mx-auto  px-4 space-y-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >

      <div className="text-center space-y-4">
        <motion.h2
          className="text-5xl md:text-6xl font-black tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent uppercase"
          variants={titleVariants}
        >
          Tech Stack
        </motion.h2>
        <p className="text-gray-400 font-doto text-sm md:text-base">
          Technologies & tools :
        </p>
      </div>

      <div className="space-y-20">
        {techCategories.map((category, i) => (
          <div key={i} className="relative">

            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold font-doto text-cyan-400 whitespace-nowrap uppercase tracking-widest">
                {category.title}
              </h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </div>


            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
              {category.stack.map(({ icon, name, link }) => (
                <motion.a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
                >

                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-xl transition-all duration-300 rounded-full" />

                  <div className="relative z-10 text-3xl md:text-5xl text-gray-400 group-hover:text-white transition-colors duration-300">
                    {icon}
                  </div>


                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 group-hover:-bottom-6 text-[10px] font-bold tracking-tighter text-cyan-400 uppercase transition-all duration-300">
                    {name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};