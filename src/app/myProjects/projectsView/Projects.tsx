"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/constans/projects";

export const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
        My Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {project.description}
              </p>
              <Link
                href={project.repo}
                target="_blank"
                className="inline-block mt-4 text-blue-600 dark:text-blue-400 text-sm hover:underline"
              >
                View Repository ↗
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
