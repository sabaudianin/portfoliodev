"use client";

import { useTheme } from "@/hooks/useTheme/useTheme";
import React from "react";

export const Education = () => {
  const { mounted } = useTheme();
  if (!mounted) return null;

  return (
    <div
      id="education"
      className="relative pr-6 sm:pr-6 border-r-4 border-cyan-600 space-y-10"
    >
      <h2 className="font-bold text-4xl text-center card--glitch p-2 ">
        Education
      </h2>

      <div className="relative text-center card p-2 py-4">
        <p className="text-lg font-bold  ">
          Wyższa Szkoła Kształcenia Zawodowego
        </p>

        <span className="text-sm font-extralight">2025 - ongoing</span>
        <p className="">Postgraduate studies</p>
        <p className="font-semibold">.NET (C#) Backend Development</p>
      </div>

      <div className="relative card p-2 py-4 my-10 text-center">
        <p className="text-lg font-bold  ">CodersLab School IT</p>
        <span className="text-sm font-extralight">2023-2024</span>
        <p className="">Certified Bootcamp Course</p>
        <p className="font-semibold">JavaScript Developer</p>
      </div>

      <div className="relative card p-2 py-4 text-center">
        <p className="text-lg font-semibold  ">
          Wyższa Szkoła Zawodowa im. Jana Pawła II w Białej Podlaskiej
        </p>
        <span className="text-sm font-extralight">2007-2011</span>
        <p className="">Bachelor&apos;s degree</p>
        <span className="font-semibold">Emergency Medical Services</span>
      </div>
    </div>
  );
};
