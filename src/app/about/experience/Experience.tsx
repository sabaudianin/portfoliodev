"use client";
import { motion } from "framer-motion";
import {
  containerVariants,
  titleVariants,
  cardVariants,
} from "@/ui/motion/motionVariants";

export const Experience = () => {
  return (
    <motion.section
      className="card p-4 space-y-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative  space-y-10 py-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold  mb-4 text-center card--glitch p-2 "
          variants={titleVariants}
        >
          Experience Timeline
        </motion.h2>

        <motion.div
          className="card p-2"
          variants={cardVariants}
        >
          <p className="text-lg font-semibold ">Warehouse Manager</p>
          <span className="text-sm text-gray-500">
            Olexim Sp. z o.o. | November 2014 - Present | Poland
          </span>
          <ul className="list-disc pl-5 mt-2  space-y-1">
            <li>
              Led warehouse operations, improving supply chain efficiency
              through proactive problem-solving and process optimization.
            </li>
            <li>
              Managed a cross-functional team to ensure timely order fulfillment
              and smooth day-to-day logistics.
            </li>
            <li>
              Collaborated with clients and suppliers to streamline
              communication and resolve logistical issues quickly and
              effectively.
            </li>
            <li>
              Demonstrated excellent organizational skills by overseeing
              inventory, scheduling, and operational workflows.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="card p-2"
          variants={cardVariants}
        >
          <p className="text-lg font-semibold ">Warehouse Manager</p>
          <span className="text-sm text-gray-500">
            Pol-Cel Sp.z o.o. | November 2012 - October 2014 | Poland
          </span>
          <ul className="list-disc pl-5 mt-2  space-y-1">
            <li>
              Led and supervised a team, improving communication, teamwork, and
              leadership skills.
            </li>
            <li>
              Coordinated with clients and suppliers, ensuring high-quality
              service and building relations.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="card p-2"
          variants={cardVariants}
        >
          <p className="text-lg font-semibold ">Team Supervisor</p>
          <span className="text-sm text-gray-500">
            Mid Coul Farms | May 2011 - November 2012 | Scotland
          </span>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Built strong leadership and interpersonal skills through effective
              team coordination and conflict resolution.
            </li>
            <li>
              Developed a strong foundation in time management and adaptability
              skills.
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};
