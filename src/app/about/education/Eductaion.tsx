"use client";
import { motion } from "framer-motion";
import {
  containerVariants,
  titleVariants,
  cardVariants,
} from "@/ui/motion/motionVariants";

import React from "react";

export const Education = () => {
  return (
    <motion.section
      id="education"
      className="relative space-y-10 card p-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="font-bold text-4xl text-center card--glitch p-2 "
        variants={titleVariants}
      >
        Education
      </motion.h2>

      <motion.div
        className="relative text-center card p-2 py-4"
        variants={cardVariants}
      >
        <p className="text-lg font-bold  ">
          Wyższa Szkoła Kształcenia Zawodowego
        </p>

        <span className="text-sm font-extralight">2025 - ongoing</span>
        <p className="">Postgraduate studies</p>
        <p className="font-semibold">.NET (C#) Backend Development</p>
      </motion.div>

      <motion.div
        className="relative card p-2 py-4 my-10 text-center"
        variants={cardVariants}
      >
        <p className="text-lg font-bold  ">CodersLab School IT</p>
        <span className="text-sm font-extralight">2023-2024</span>
        <p className="">Certified Bootcamp Course</p>
        <p className="font-semibold">JavaScript Developer</p>
      </motion.div>

      <motion.div
        className="relative card p-2 py-4 text-center"
        variants={cardVariants}
      >
        <p className="text-lg font-semibold  ">
          Wyższa Szkoła Zawodowa im. Jana Pawła II w Białej Podlaskiej
        </p>
        <span className="text-sm font-extralight">2007-2011</span>
        <p className="">Bachelor&apos;s degree</p>
        <span className="font-semibold">Emergency Medical Services</span>
      </motion.div>
    </motion.section>
  );
};
