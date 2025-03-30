"use client";

import React from "react";
import Link from "next/link";

export default function Features() {
  const features = [
    {
      title: "Education",
      href: "/about#education",
      icon: (
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 3L1 9l11 6 9-4.91v6.11h2V9L12 3zm0 13.09L3.74 10.5 2.6 11.26 12 17l9.4-5.74-1.14-.76L12 16.09z" />
        </svg>
      ),
      description: [
        "CodersLab Szkoła It - JavaScript Developer (2023–2024).",
        "Wyższa Szkoła Kształcenia Zawodowego - Back-end .NET (C#) Developer (2025–).",
      ],
    },
    {
      title: "Skills",
      href: "/about#skills",
      icon: (
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 7.77L18.39 18H5.61L12 7.77M12 2L1 21h22L12 2z" />
        </svg>
      ),
      description:
        "JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, Git, REST APIs.",
    },
    {
      title: "Experience",
      href: "/about#experience",
      icon: (
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 6H4v12h16V6zm0-2a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16z" />
        </svg>
      ),
      description:
        "3+ years in web development. Worked on SaaS products, startups, and freelance projects.",
    },
    {
      title: "Projects",
      href: "/about#projects",
      icon: (
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14 2H6a2 2 0 00-2 2v6h2V4h8V2zm4 4h-4a2 2 0 00-2 2v6H4v2h8v6a2 2 0 002 2h4a2 2 0 002-2V8a2 2 0 00-2-2z" />
        </svg>
      ),
      description:
        "Portfolio, E-commerce dashboard, Design-to-code converter, Blog engine with CMS integration.",
    },
    {
      title: "Goals",
      href: "/about#goals",
      icon: (
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 14.93V20h-2v-3.07a8.015 8.015 0 01-5.93-5.93H4v-2h3.07a8.015 8.015 0 015.93-5.93V4h2v3.07a8.015 8.015 0 015.93 5.93H20v2h-3.07a8.015 8.015 0 01-5.93 5.93z" />
        </svg>
      ),
      description:
        "Build impactful, accessible, and scalable web apps. Stay up-to-date with modern tech.",
    },
    {
      title: "Approach",
      href: "/about#approach",
      icon: (
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 00-3.17 19.48c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34a2.66 2.66 0 00-1.11-1.46c-.91-.62.07-.6.07-.6a2.1 2.1 0 011.54 1.04 2.13 2.13 0 002.91.83 2.13 2.13 0 01.63-1.34c-2.22-.25-4.56-1.11-4.56-4.94a3.88 3.88 0 011.03-2.7 3.6 3.6 0 01.1-2.67s.84-.27 2.75 1.03a9.48 9.48 0 015 0c1.91-1.3 2.75-1.03 2.75-1.03a3.6 3.6 0 01.1 2.67 3.88 3.88 0 011.03 2.7c0 3.84-2.34 4.69-4.57 4.93a2.39 2.39 0 01.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0012 2z" />
        </svg>
      ),
      description:
        "I value clean code, performance, and intuitive UX. I enjoy collaboration and creative problem solving.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="flex flex-col items-center mx-auto max-w-[78rem] px-6 py-32 gap-y-16">
        <div className="mx-auto max-w-[36.75rem] text-center text-gray-950 dark:text-gray-50">
          <h2 className="text-3xl font-bold mb-3 lg:text-4xl">
            About Me Summary
          </h2>
          <p className="text-base">
            A quick overview of who I am and what I do. For full details, check
            out the full About page.
          </p>
        </div>

        <div className="w-full grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Link
              key={idx}
              href={feature.href}
              className="text-center group"
            >
              <div className="w-fit mx-auto p-3 rounded-lg bg-white dark:bg-gray-950 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 text-gray-950 dark:text-white group-hover:shadow-lg transition">
                {feature.icon}
              </div>
              <h4 className="mt-4 mb-2 text-gray-950 dark:text-gray-50 text-lg font-bold lg:text-xl">
                {feature.title}
              </h4>
              {Array.isArray(feature.description) ? (
                <ul className="space-y-1">
                  {feature.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-base text-gray-950 dark:text-gray-50"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base text-gray-950 dark:text-gray-50">
                  {feature.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
