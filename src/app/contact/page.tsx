import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import { ContactForm } from "./contactForm/ContactForm";

const contactLinks = [
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
export default function Contact() {
  return (
    <MainLayout>
      <section className="grid place-items-center min-h-3/4 text-center p-2">
        <div className="text-center text-h-full pt-4">
          <h3 className="text-3xl font-semibold mb-2">Let’s Contact</h3>
          <p className="max-w-xl mx-auto text-md">
            Whether you're looking for a reliable developer, a collaborative
            teammate, or just want to chat, just reach out!
          </p>
        </div>
        <ul className="flex justify-center items-center">
          {" "}
          {contactLinks.map((link) => (
            <li
              key={link.name}
              className="text-4xl md:text-6xl p-4 hover:scale-120 animate-fade-in"
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
        <ContactForm />
      </section>
    </MainLayout>
  );
}
