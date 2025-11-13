"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  titleVariants,
  cardVariants,
} from "@/ui/motion/motionVariants";

export const Certificats = () => {
  return (
    <motion.section
      className="w-full card p-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="card--glitch text-center p-2 font-bold text-3xl sm:text-4xl my-8"
        variants={titleVariants}
      >
        Certificates:
      </motion.h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        <motion.div variants={cardVariants}>
          <Image
            src="/dyploms/cod.png"
            alt="coderslab"
            width={300}
            height={200}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Image
            src="/dyploms/charp.png"
            alt="C#"
            width={300}
            height={200}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Image
            src="/dyploms/ts.avif"
            alt="typescript"
            width={300}
            height={200}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Image
            src="/dyploms/js.avif"
            alt="JavaScript"
            width={300}
            height={200}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <Image
            src="/dyploms/react.avif"
            alt="react"
            width={300}
            height={200}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
