import Link from "next/link";
import { ContactForm } from "./contactForm/ContactForm";
import { contactLinks } from "@/utils/constans/contactLinks";

export default function Contact() {
  return (
    <div className="relative min-h-[80vh] grid place-items-center px-4  overflow-hidden">
      {/* Tło dedykowane dla widoku kontaktu */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-to/10 rounded-full blur-[120px] -z-10" />

      <div className="w-full max-w-2xl space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter bg-gradient-to-b from-foreground to-foreground/40  bg-clip-text text-transparent">
            Let&apos;s Contact
          </h1>
          <p className="max-w-xl mx-auto text-foreground/70 font-medium leading-relaxed">
            Whether you&apos;re looking for a reliable developer, a collaborative
            teammate, or just want to chat, reach out!
          </p>
        </div>

        {/* Social Links z efektem Glass */}
        <ul className="flex justify-center items-center gap-6">
          {contactLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
                className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 glass rounded-2xl text-2xl md:text-3xl transition-all duration-300 hover:scale-110 hover:border-brand-to hover:text-brand-to"
              >
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>

        <ContactForm />
      </div>
    </div>
  );
}