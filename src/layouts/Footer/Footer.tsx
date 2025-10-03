import React from "react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full text-center p-4 bg-gradient-to-l from-blue-400 to-cyan-400 shadow-lg text-black text-sm lg:text-lg font-semibold">
      <section className="flex items-center justify-evenly ">
        <address>
          <div className="space-y-2 ">
            <div className="flex items-center justify-center gap-2">
              <FaPhone
                role="img"
                aria-label="phone"
                className="text-base "
                aria-hidden="true"
              />
              <a
                href="tel:+48793386445"
                className="hover:underline"
                aria-label="Call +48 793 386 445"
              >
                +48 793386445
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaEnvelope
                role="img"
                aria-label="envelope"
                className="hover:underline break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-200 rounded"
                aria-hidden="true"
              />
              <a
                href="mailto:rafbobbob@gmail.com"
                className="hover:underline break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-200 rounded"
                aria-label="Email: rafbobbob@gmail.com"
              >
                rafbobbob@gmail.com
              </a>
            </div>
          </div>
        </address>

        <div className="flex items-center justify-center gap-4 ">
          <a
            href="https://github.com/sabaudianin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/70 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-200 rounded "
          >
            <FaGithub
              aria-hidden="true"
              className="text-4xl"
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
              className="text-3xl"
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </section>
      <div
        className="my-3 mx-auto h-px w-40 bg-black/20"
        aria-hidden="true"
      />
      <p className="text-xs lg:text-sm">
        © {new Date().getFullYear()} Rafal Bobko. All rights reserved.
      </p>
    </footer>
  );
};
