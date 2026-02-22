"use client";
import Image from "next/image";
import Typewriter from "@/components/Typewriter/Typewriter";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden px-6">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Lewa */}
        <div className="flex flex-col space-y-8 text-center md:text-left">
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-doto text-cyan-500 tracking-[0.2em] text-sm md:text-base uppercase"
            >
              Available for new opportunities
            </motion.h2>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
              Hi there, I&apos;m <br />
              <Typewriter text="Rafal Bobko" />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light"
          >
            I&apos;m a <span className="text-white font-medium">Fullstack Developer</span> specializing in crafting
            high-performance web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <Link
              href="/my-projects"
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">See my projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="https://sabaudianin.github.io/CV/"
              target="_blank"
              className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white font-medium rounded-2xl transition-all"
            >
              Download CV
            </Link>
          </motion.div>
        </div>

        {/* Prawa  */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative">



            <Image
              src="/avatar.png"
              alt="Rafal Bobko"
              width={450}
              height={450}
              priority
              className="relative rounded-[2.5rem] grayscale-[20%] hover:grayscale-0 transition-all duration-500 shadow-2xl  group-hover:rotate-0"
            />


            {/* <div className="absolute -bottom-6 -left-6 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-bounce-slow">
              <span className="text-cyan-400 font-bold">50+</span>
              <span className="ml-2 text-xs text-gray-400">Projects Completed</span>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}