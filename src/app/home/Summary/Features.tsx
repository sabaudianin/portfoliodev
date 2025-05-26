"use client";

import React from "react";
import Link from "next/link";
import { features } from "@/utils/constans/features";
export default function Features() {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="flex flex-col items-center mx-auto max-w-[78rem] px-6  gap-y-16">
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
