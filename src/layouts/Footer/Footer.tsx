import React from "react";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full p-4 md:p-8 font-doto ">
      {/* glassmorphism */}
      <section className="relative max-w-7xl mx-auto rounded-[2.5rem] bg-foreground/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden">

        {/* shine background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">


          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              LET&apos;S BUILD <br /> SOMETHING EPIC.
            </h2>
            <p className="text-gray-400 max-w-xs text-sm md:text-base">
              Available for new projects and creative challenges. Let&apos;s connect!
            </p>
          </div>


          <address className="not-italic space-y-4 flex flex-col items-start md:items-center lg:items-start">
            <a
              href="tel:+48793386445"
              className="group flex items-center gap-3 hover:text-cyan-400 transition-colors duration-300"
            >
              <div className="p-3 bg-foreground/5 rounded-2xl group-hover:bg-cyan-500/20 transition-all">
                <FaPhone className="text-cyan-500" />
              </div>
              <span className="font-medium">+48 793 386 445</span>
            </a>

            <a
              href="mailto:rafbobbob@gmail.com"
              className="group flex items-center gap-3 hover:text-blue-400 transition-colors duration-300"
            >
              <div className="p-3 bg-foreground/5 rounded-2xl group-hover:bg-blue-500/20 transition-all">
                <FaEnvelope className="text-blue-400" />
              </div>
              <span className="font-medium">rafbobbob@gmail.com</span>
            </a>
          </address>


          <div className="flex justify-start md:justify-end gap-4">
            <a
              href="https://github.com/sabaudianin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-black hover:-translate-y-2 transition-all duration-300 shadow-lg"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafal-bobko-569388234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 rounded-full hover:bg-[#0077b5] hover:text-white hover:-translate-y-2 transition-all duration-300 shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>


        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Rafał Bobko. Crafted with passion.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="cursor-default">Design: RafBob</span>
          </div>
        </div>
      </section>
    </footer>
  );
};
