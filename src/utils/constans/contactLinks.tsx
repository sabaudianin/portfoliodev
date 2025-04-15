import { ContactLink } from "@/types/contactLink";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

export const contactLinks: ContactLink[] = [
  {
    icon: <FaLinkedin className="text-blue-500" />,
    url: "https://linkedin.com/in/rafal-bobko-569388234",
    name: "LinkedIn",
  },
  {
    icon: <FaGithub className="text-white" />,
    url: "https://github.com/sabaudianin",
    name: "GitHub",
  },
  {
    icon: <FaEnvelope className="text-gray-300" />,
    url: "mailto:rafbobbob@gmail.com",
    name: "Email",
  },
  {
    icon: <FaPhone className="text-green-400" />,
    url: "tel:+48793386445",
    name: "Phone",
  },
];
