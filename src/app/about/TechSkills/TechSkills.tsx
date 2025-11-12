"use client";
import React from "react";
import { techCategories } from "../../../utils/constans/constans";

export const TechSkills = () => {
  return (
    <div
      id="skills"
      className="relative space-y-6"
    >
      <h2 className="p-2 text-4xl font-bold text-center card--glitch">
        Skills
      </h2>
      {techCategories.map((category, i) => (
        <div key={i}>
          <h3 className="text-xl font-semibold mb-4 text-center p-2">
            {category.title}
          </h3>
          <div className="relative">
            <div className="absolute border -top-4 border-cyan-400 w-full"></div>
          </div>
          <div className="grid grid-cols-8 sm:grid-cols-5 md:grid-cols-12 lg:grid-cols-8 justify-items-center place-items-center">
            {category.stack.map(({ icon, name, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex flex-col items-center hover:scale-105 transition-transform py-2"
              >
                <div
                  className="text-2xl md:text-4xl group-hover:animate-pulse"
                  title={name}
                >
                  {icon}
                </div>
                <span className="text-xs text-gray-700 dark:text-gray-300"></span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
