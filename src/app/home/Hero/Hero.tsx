"use client";
import Image from "next/image";

import Typewriter from "@/components/Typewriter/Typewriter";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="w-full md:pt-32 flex items-center justify-between overflow-x-hidden"
      aria-label="Hero section with introduction"
    >
      <div className="p-2 mx-auto flex flex-col md:flex-row items-center h-full text-center gap-8">
        <div className="flex flex-col gap-4  justify-center md:w-1/2 w-full ">
          <div className="py-8">
            <h2 className=" font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight animate-jelloH">
              Hi there, I&apos;am
            </h2>
            <span className="sr-only">Rafal Bobko</span>
            <span
              aria-hidden
              className="text-primary-gradient"
            ></span>
            <h2 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold text-primary-gradient">
              <Typewriter text="Rafal Bobko" />
            </h2>
          </div>
          <p className="font-semibold lg:text-3xl sm:text-xl text-lg  my-2 text-foreground/90 animate-slide-in-left">
            I&apos;m a passionate developer focused on building user-friendly
            web applications. With a background in JavaScript, TypeScript, C#,
            .NET and modern frameworks like React and Next.js, I enjoy solving
            real-world problems and constantly learning new tools to improve my
            workflow.
          </p>
          <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-blur-in">
            <Link
              href="https://sabaudianin.github.io/Cv-Html-Css-Eng/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open my CV in a new tab"
              className="btn-primary md:text-lg md:px-8 md:py-4"
            >
              Check my CV
            </Link>

            <Link
              href="/my-projects"
              className="btn-primary md:text-lg md:px-8 md:py-4"
            >
              See my projects
            </Link>
          </div>
        </div>

        <div className="relative md:w-1/2 w-full hidden md:flex justify-center animate-blur-in animate-slide-in-right">
          <Image
            src={"/avatar.png"}
            alt="Rafal Bobko- portrait"
            width={500}
            height={500}
            priority
            sizes="(min-width: 1024px) 500px, 60vw"
            className="rounded-lg shadow-xl "
          />
        </div>
      </div>
    </section>
  );
}
