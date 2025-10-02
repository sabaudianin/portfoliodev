"use client";
import React from "react";
import Link from "next/link";
import { techCategories } from "../../../utils/constans/constans";

export const TechSkills = () => {
  return (
    <div
      id="skills"
      className="relative space-y-6"
    >
      <h2 className=" text-4xl font-bold">Skills</h2>
      {techCategories.map((category, i) => (
        <div key={i}>
          <h3 className="text-xl font-semibold mb-4 text-center">
            {category.title}
          </h3>
          <div className="relative">
            <div className="absolute border -top-4 border-cyan-400 w-full"></div>
          </div>
          <div className="grid grid-cols-8 sm:grid-cols-5 md:grid-cols-12 lg:grid-cols-8  justify-items-center">
            {category.stack.map(({ icon, name, link }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex flex-col items-center py-1 hover:scale-105 transition-transform py-2"
              >
                <div
                  className="text-2xl md:text-4xl group-hover:animate-pulse"
                  title={name}
                >
                  {icon}
                </div>
                <span className="text-xs text-gray-700 dark:text-gray-300">
                  {/* {name} */}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
