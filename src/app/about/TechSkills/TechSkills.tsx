"use client";
import React from "react";
import Link from "next/link";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaSass,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  SiRedux,
  SiTypescript,
  SiVitest,
  SiReactrouter,
  SiReactquery,
  SiZod,
  SiMui,
  SiWebpack,
  SiVite,
  SiWebstorm,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const techCategories = [
  {
    title: "Frontend",
    stack: [
      {
        icon: <IoLogoJavascript className="text-yellow-400" />,
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        icon: <SiTypescript className="text-blue-500" />,
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      {
        icon: <FaReact className="text-sky-400" />,
        name: "React",
        link: "https://react.dev/",
      },
      {
        icon: <FaHtml5 className="text-white bg-orange-500 rounded" />,
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        icon: <FaCss3 className="text-white bg-blue-500 rounded" />,
        name: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        icon: <RiTailwindCssFill className="text-sky-600" />,
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },

      {
        icon: <SiRedux className="text-red-600" />,
        name: "Redux",
        link: "https://redux.js.org/",
      },
      {
        icon: <SiReactrouter className="text-rose-500" />,
        name: "React Router",
        link: "https://reactrouter.com/",
      },
      {
        icon: <SiReactquery className="text-pink-600" />,
        name: "React Query",
        link: "https://tanstack.com/query",
      },
      {
        icon: <SiZod className="text-blue-600" />,
        name: "Zod",
        link: "https://zod.dev/",
      },
      {
        icon: <SiMui className="text-sky-500" />,
        name: "MUI",
        link: "https://mui.com/",
      },
      {
        icon: <FaSass className="text-pink-400" />,
        name: "Sass",
        link: "https://sass-lang.com/",
      },
    ],
  },
  {
    title: " Dev Tools",
    stack: [
      {
        icon: <RiNextjsFill className="" />,
        name: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        icon: <SiWebpack className="text-blue-300" />,
        name: "Webpack",
        link: "https://webpack.js.org/",
      },
      {
        icon: (
          <SiVite className="text-yellow-400 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded" />
        ),
        name: "Vite",
        link: "https://vitejs.dev/",
      },

      {
        icon: <FaGithub className="" />,
        name: "GitHub",
        link: "https://github.com/",
      },
      {
        icon: <FaNodeJs className="text-green-400" />,
        name: "Node.js",
        link: "https://nodejs.org/",
      },
      {
        icon: <BiLogoVisualStudio className="text-blue-600" />,
        name: "VS Code",
        link: "https://code.visualstudio.com/",
      },
      {
        icon: <SiWebstorm className="text-white dark:text-gray-200" />,
        name: "WebStorm",
        link: "https://www.jetbrains.com/webstorm/",
      },
      {
        icon: <FaDocker className="text-blue-400" />,
        name: "Docker",
        link: "https://www.docker.com",
      },
    ],
  },
  {
    title: "Tests",
    stack: [
      {
        icon: (
          <img
            src="https://playwright.dev/img/playwright-logo.svg"
            alt="Playwright"
            title="Playwright"
            className="w-7 h-7 hover:scale-105 transition-transform"
          />
        ),
        name: "Playwright",
        link: "https://playwright.dev/",
      },
      {
        icon: (
          <SiVitest className="text-yellow-400 border-b-4 border-green-500" />
        ),
        name: "Vitest",
        link: "https://vitest.dev/",
      },
    ],
  },
];

export const TechSkills = () => {
  return (
    <div className="relative space-y-6  ">
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
            {category.stack.map(({ icon, name, link }, i) => (
              <Link
                key={i}
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
