import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { LuWaypoints, LuGoal } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";
import { FcMindMap } from "react-icons/fc";

export const features = [
  {
    title: "Education",
    href: "/about#education",
    icon: <FaGraduationCap className="w-12 h-12 text-blue-600" />,
    description: [
      <>
        <div>
          • CodersLab Szkoła It - <b>JavaScript Developer </b>
          <span className="text-xs">(2023-2024)</span>
          <br />
          <br />• WSKZ Postgraduates Studies - <b>
            Backend Developer .NET(C#){" "}
          </b>{" "}
          <span className="text-xs">(2025-ongoing)</span>

        </div>
      </>,
    ],
  },
  {
    title: "Skills",
    href: "/about#skills",
    icon: <GiSkills className="w-12 h-12 text-green-400" />,
    description:
      "JavaScript • TypeScript • React • Next.js • VITE • Tailwind CSS • Redux Toolkit • Node.js • Vitest • React Testing Library • REST APIs • C# / .NET • Git • Docker",
  },
  {
    title: "Experience",
    href: "/about#experience",
    icon: <LuWaypoints className="w-12 h-12 text-violet-600" />,
    description:
      "I have spent countless hours coding, debugging, and collaborating on projects. My journey has been a mix of learning, building, and growing as a developer.",
  },
  {
    title: "Projects",
    href: "/my-projects",
    icon: <GrProjects className="w-12 h-12 text-stone-600" />,
    description:
      "My Projects section includes examples showcasing CMS integration, CRUD operations, microfrontend architecture, API integrations, and responsive landing pages.",
  },
  {
    title: "Goals",
    href: "/about",
    icon: <LuGoal className="w-12 h-12 text-red-500" />,
    description:
      "Build impactful, accessible, and scalable web applications while continuously staying up to date with modern technologies.",
  },
  {
    title: "Approach",
    href: "/about",
    icon: <FcMindMap className="w-12 h-12 text-green-500" />,
    description:
      "I value clean, maintainable code, high performance, and intuitive user experiences. I enjoy collaboration and creative problem-solving.",
  },
];
