import Marquee from "react-fast-marquee";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaHtml5, FaCss3, FaGithub, FaSass } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  SiRedux,
  SiTypescript,
  SiVitest,
  SiReactrouter,
  SiReactquery,
  SiZod,
  SiMui,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

export const TechSkills = () => {
  return (
    <div className="overflow-hidden max-w-[100vw]">
      <Marquee className="py-8">
        <IoLogoJavascript className="text-yellow-400 text-5xl mx-6" />
        <SiTypescript className="text-blue-500 text-5xl mx-6" />
        <FaReact className="text-sky-400 text-5xl mx-6" />
        <FaHtml5 className="text-orange-600 text-5xl mx-6" />
        <FaCss3 className="text-blue-600 text-5xl mx-6" />
        <RiTailwindCssFill className="text-cyan-400 text-5xl mx-6" />
        <RiNextjsFill className="text-black dark:text-white text-5xl mx-6" />
        <SiRedux className="text-purple-500 text-5xl mx-6" />
        <FaGithub className="text-black dark:text-white text-5xl mx-6" />
        <BiLogoVisualStudio className="text-blue-500 text-5xl mx-6" />
        <SiVitest className="text-lime-500 text-5xl mx-6" />
        <SiReactrouter className="text-rose-500 text-5xl mx-6" />
        <SiReactquery className="text-pink-600 text-5xl mx-6" />
        <SiZod className="text-emerald-600 text-5xl mx-6" />
        <SiMui className="text-sky-500 text-5xl mx-6" />
        <FaSass className="text-pink-400 text-5xl mx-6" />
      </Marquee>
    </div>
  );
};
