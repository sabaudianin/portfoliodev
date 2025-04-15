import Link from "next/link";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import { ContactForm } from "./contactForm/ContactForm";
import { contactLinks } from "@/utils/constans/contactLinks";

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
