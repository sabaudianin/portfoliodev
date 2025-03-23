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
    <Marquee>
      <IoLogoJavascript />
      <FaReact />
      <FaHtml5 />
      <FaCss3 />
      <RiTailwindCssFill />
      <RiNextjsFill />
      <SiRedux />
      <SiTypescript />
      <FaGithub />
      <BiLogoVisualStudio />
      <SiVitest />
      <SiReactrouter />
      <SiReactquery />
      <SiZod />
      <SiMui />
      <FaSass />
    </Marquee>
  );
};
