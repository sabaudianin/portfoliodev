"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { features } from "@/utils/constans/features";

type Feature = {
  title: string;
  href: string;
  icon: React.ReactNode;
  description: string | string[];
};

export const Features = () => {


  return (
    <section
      aria-labelledby="features-heading"
      className="w-full py-20 lg:py-32 relative overflow-hidden"
    >

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            id="features-heading"
            className="text-4xl font-black tracking-tight lg:text-5xl mb-4 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent uppercase"
          >
            Quick Snapshot
          </motion.h2>
          <p className="text-gray-400 font-doto text-sm md:text-base">
            Everything you need to know about my professional DNA.
          </p>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(features as Feature[]).map((feature, i) => {
            const delay = i * 0.1;

            return (
              <motion.li
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className="group h-full"
              >
                <Link
                  href={feature.href}
                  className="relative block h-full p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.08] hover:border-cyan-500/50 overflow-hidden"
                >

                  <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <article className="relative z-10 flex flex-col h-full">

                    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-cyan-400 group-hover:scale-110 group-hover:text-white transition-all duration-500 shadow-xl border border-white/5">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-4 font-doto tracking-tight group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>

                    <div className="text-gray-400 leading-relaxed text-sm md:text-base flex-grow">
                      {Array.isArray(feature.description) ? (
                        <ul className="space-y-2">
                          {feature.description.map((desc) => (
                            <li key={desc} className="flex items-start gap-2">

                              {desc}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{feature.description}</p>
                      )}
                    </div>


                    <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-cyan-400 transition-colors">
                      Explore
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </article>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};