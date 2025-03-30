"use client";

import { useTheme } from "@/hooks/useTheme";
import React from "react";

export const Education = () => {
  const { mounted } = useTheme();
  if (!mounted) return null;

  return (
    <div className="relative  pr-6 sm:pr-6 border-r-4 border-cyan-300 space-y-10">
      <h2 className="font-bold text-4xl ">Education</h2>
      <div className="relative pl-6 sm:pl-2 my-2">
        <div className="absolute left-0 sm:-left-[1.1rem] top-1 w-4 h-4  rounded-full  bg-cyan-400 "></div>
        <p className="text-lg font-bold ">
          Wyższa Szkoła Kształcenia Zawodowego
        </p>
        <span className="text-sm font-extralight">2025 – ongoing</span>
        <p className="">Postgraduate studies</p>
        <span className="font-semibold">.NET (C#) Backend Development</span>
      </div>
      <div className="relative pl-6 sm:pl-2 my-2">
        <div className="absolute left-0 sm:-left-[1.1rem] top-1 w-4 h-4 bg-cyan-500 rounded-full  "></div>
        <p className="text-lg font-bold  ">CodersLab School IT</p>
        <span className="text-sm font-extralight">2023–2024</span>
        <p className="font-semibold">JavaScript Developer</p>
      </div>

      <div className="relative pl-6 sm:pl-2 my-2">
        <div className="absolute left-0 sm:-left-[1.1rem] top-1 w-4 h-4 bg-cyan-500 rounded-full  "></div>
        <p className="text-lg font-semibold  ">
          Wyższa Szkoła Zawodowa im. Jana Pawła II w Białej Podlaskiej
        </p>
        <span className="text-sm font-extralight">2007–2011</span>
        <p className="">Bachelor’s degree</p>
        <span className="font-semibold">Emergency Medical Services</span>
      </div>
    </div>
  );
};
