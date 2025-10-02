"use client";

import React from "react";
import { IoSunnySharp } from "react-icons/io5";
import { MdOutlineNightlightRound } from "react-icons/md";

import { useTheme } from "@/hooks/useTheme/useTheme";

export default function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();
  if (!mounted) return <></>; //unikniecie błedu SSR

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={label}
      title={label}
      className="relative size-12 rounded-md hover:scale-[1.25] inline-flex items-center justify-center transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-500 motion-reduce:transform-none"
    >
      {isDark ? (
        <IoSunnySharp
          className="text-2xl active:scale-[1.4] transition-transform motion-reduce:active:scale-100"
          aria-hidden="true"
        />
      ) : (
        <MdOutlineNightlightRound
          className="text-2xl active:scale-[1.4] transition-transform  motion-reduce:active:scale-100"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
