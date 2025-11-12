import Image from "next/image";
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
  SiReactrouter,
  SiReactquery,
  SiZod,
  SiMui,
  SiWebpack,
  SiTestinglibrary,
  SiSupabase,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";
import type { TechCategory } from "@/types/tech";

export const techCategories: TechCategory[] = [
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
          <Image
            src="icons/Vite.svg"
            alt="c"
            title="C"
            width={20}
            height={20}
            className="hover:scale-105 transition-transform w-7 h-7 lg:w-10 lg:h-10"
          />
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
        icon: <DiVisualstudio className="text-violet-600" />,
        name: "VisualStudioS Code",
        link: "https://visualstudio.microsoft.com/pl/",
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
          <Image
            src="icons/Playwrite.svg"
            alt="Playwright"
            title="Playwright"
            width={24}
            height={24}
            className="hover:scale-105 transition-transform w-8 h-8 lg:w-10 lg:h-10"
          />
        ),
        name: "Playwright",
        link: "https://playwright.dev/",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 244 244"
            className="hover:scale-105 transition-transform w-8 h-8 lg:w-10 lg:h-10"
          >
            <path
              fill="#fcc72b"
              d="m192.115 70.808l-61.2 88.488a5.27 5.27 0 0 1-2.673 2.002a5.3 5.3 0 0 1-3.343-.005a5.25 5.25 0 0 1-2.66-2.01a5.2 5.2 0 0 1-.903-3.203l2.45-48.854l-39.543-8.386a5.26 5.26 0 0 1-2.292-1.118a5.22 5.22 0 0 1-1.83-4.581a5.2 5.2 0 0 1 .895-2.383L142.218 2.27a5.28 5.28 0 0 1 6.016-1.996a5.24 5.24 0 0 1 2.66 2.01c.643.942.96 2.066.903 3.203l-2.45 48.855l39.542 8.386a5.26 5.26 0 0 1 2.293 1.117a5.21 5.21 0 0 1 1.829 4.582a5.2 5.2 0 0 1-.896 2.382"
            />
            <path
              fill="#729b1b"
              d="M128.025 233.537a12.36 12.36 0 0 1-8.763-3.63l-57.828-57.823a12.39 12.39 0 0 1 .023-17.5a12.394 12.394 0 0 1 17.5-.024l49.068 49.061L234.917 96.733a12.39 12.39 0 0 1 17.523 17.524l-115.655 115.65a12.34 12.34 0 0 1-8.76 3.63"
            />
            <path
              fill="#729b1b"
              fillOpacity="0.5"
              d="M127.975 233.537a12.36 12.36 0 0 0 8.763-3.63l57.828-57.823a12.4 12.4 0 0 0 3.605-8.754a12.395 12.395 0 0 0-12.375-12.376a12.4 12.4 0 0 0-8.755 3.606l-49.066 49.061L21.082 96.733a12.392 12.392 0 0 0-17.524 17.524l115.656 115.65a12.35 12.35 0 0 0 8.76 3.63"
            />
          </svg>
        ),
        name: "Vitest",
        link: "https://vitest.dev/",
      },
      {
        icon: <SiTestinglibrary className="text-red-500" />,
        name: "Testing Library",
        link: "https://testing-library.com/",
      },
    ],
  },
  {
    title: "Backend",
    stack: [
      {
        icon: (
          <Image
            src="icons/sharp.svg"
            alt="c"
            title="C"
            width={24}
            height={24}
            className="hover:scale-105 transition-transform w-8 h-8 lg:w-10 lg:h-10"
          />
        ),
        name: "C#",
        link: "https://dotnet.microsoft.com/en-us/languages/csharp",
      },
      {
        icon: (
          <Image
            src="icons/firebase.svg"
            alt="Firebase Icon"
            title="Firebase"
            width={24}
            height={24}
            className="hover:scale-105 transition-transform  w-8 h-8 lg:w-10 lg:h-10"
          />
        ),
        name: "Firebase",
        link: "https://firebase.google.com/",
      },

      {
        icon: <SiSupabase className="text-emerald-500" />,
        name: "Supabase",
        link: "https://supabase.com/",
      },
    ],
  },
];
