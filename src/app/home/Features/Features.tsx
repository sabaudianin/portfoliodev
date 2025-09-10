import React from "react";
import Link from "next/link";
import { features } from "@/utils/constans/features";

type Feature = {
  title: string;
  href: string;
  icon: React.ReactNode;
  description: string | string[];
};

export const Features = () => {
  return (
    <section
      aria-labelledby="features-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-y-16">
        <div className="mx-auto max-w-[36.75rem] text-center">
          <h2
            id="features-heading"
            className="text-3xl font-bold lg:text-4xl"
          >
            Short About Me
          </h2>
          <p className="text-base">
            A quick overview of who I am and what I do. For full details, check
            out the full About page.
          </p>
        </div>

        <ul className="w-full grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {(features as Feature[]).map((feature, i) => {
            const animateIcon =
              i % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right";
            const delay = `${i * 80}ms`;
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className={`group block h-full rounded-xl p-5 ring-1 ring-foreground hover:ring-fpreground/20 tranistion hover:-translate-y-0.5 hover:shadow-blue-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 card card--glitch p-6`}
                style={{ animationDelay: delay }}
              >
                <article className={`${animateIcon}`}>
                  <div className="w-fit mx-auto p-3 rounded-lg  ring-1 ring-inset ring-gray-200 dark:ring-gray-800 group-hover:shadow-lg transition bg-[var(--background-inverse)]">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 mb-2  text-lg font-bold lg:text-xl text-center">
                    {feature.title}
                  </h3>
                  {Array.isArray(feature.description) ? (
                    <ul
                      role="list"
                      className="space-y-1 text-center"
                    >
                      {feature.description.map((desc) => (
                        <li
                          key={desc}
                          className="text-base "
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-base text-center">
                      {feature.description}
                    </p>
                  )}
                </article>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
