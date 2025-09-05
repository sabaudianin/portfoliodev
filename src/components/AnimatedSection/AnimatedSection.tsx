"use client";
import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

export default function AnimatedSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const initial = reduce ? { opacity: 0 } : { opacity: 0, y: 12 };
  const animate = reduce ? { opacity: 1 } : { opacity: 1, y: 0 };
  return (
    <motion.section
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
