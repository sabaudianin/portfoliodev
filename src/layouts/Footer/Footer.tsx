import React from "react";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full text-left p-2 font-doto ">
      <section className="flex items-stretch justify-evenly rounded-4xl glass text-white p-4 shadow-dark-glow">
        <address className="text-xs md:text-base font-display pt-2">
          <div className="flex items-center justify-center hover:scale-[1.03] mt-2">
            <FaPhone
              role="img"
              aria-label="phone"
              aria-hidden="true"
              className="text-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-200 rounded
                "
            />
            <a
              href="tel:+48793386445"
              aria-label="Call +48 793 386 445"
              className="break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-200 rounded ml-1"
            >
              +48 793386445
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 hover:scale-[1.03] tranistion-transform duration-300">
            <FaEnvelope
              role="img"
              aria-label="envelope"
              className=" text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-200 rounded"
              aria-hidden="true"
            />
            <a
              href="mailto:rafbobbob@gmail.com"
              className="break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-200 rounded"
              aria-label="Email: rafbobbob@gmail.com"
            >
              rafbobbob@gmail.com
            </a>
          </div>
        </address>

        <div className="flex items-center justify-center gap-4 text-xl md:text-2xl lg:text-4xl">
          <a
            href="https://github.com/sabaudianin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-200 rounded "
          >
            <FaGithub
              aria-hidden="true"
              className=" text-black bg-white hover:bg-gray-200 hover:scale-[1.03]  rounded-full "
            />
            <span className="sr-only ">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/rafal-bobko-569388234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-200 rounded"
          >
            <FaLinkedin
              aria-hidden="true"
              className="text-blue-500 bg-white hover:bg-gray-200 hover:scale-[1.03] rounded"
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </section>
      <div
        className="my-3 mx-auto h-px w-full bg-[var(--background-inverse)]"
        aria-hidden="true"
      />

      <div className="w-full flex justify-center text-xs lg:text-sm text-center gap-4">
        <span>
          © {new Date().getFullYear()} Rafal Bobko. All rights reserved.
        </span>
        <Link
          href="/privacy"
          className="font-semibold hover:underline hover:text-bold transition"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};
