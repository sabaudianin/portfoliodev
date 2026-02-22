"use client";


import { IoSunnySharp } from "react-icons/io5";
import { MdOutlineNightlightRound } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme/useTheme";

export default function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();

  if (!mounted) return <div className="size-12" />;

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="group relative size-12 flex items-center justify-center rounded-2xl border border-foreground/10  backdrop-blur-md transition-all duration-300 hover:border-primary-to/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] focus:outline-none overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.3, ease: "backOut" }}
          className="relative z-10"
        >
          {isDark ? (
            <IoSunnySharp
              className="text-2xl text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
              aria-hidden="true"
            />
          ) : (
            <MdOutlineNightlightRound
              className="text-2xl text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]"
              aria-hidden="true"
            />
          )}
        </motion.div>
      </AnimatePresence>


      <div className="absolute inset-0 bg-gradient-to-tr from-primary-from/10 to-primary-to/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </button>
  );
}