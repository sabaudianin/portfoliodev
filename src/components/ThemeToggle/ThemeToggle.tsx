import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { JSX } from "react";

export default function ThemeToggle(): JSX.Element {
  const { theme, mounted, toggleTheme } = useTheme();
  if (!mounted) return <></>; //unikniecie błedu SSR

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all hover:scale-110 "
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M12 3a1 1 0 011 1v2a1 1 0 01-2 0V4a1 1 0 011-1zm5.657 3.343a1 1 0 010 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM21 11a1 1 0 110 2h-2a1 1 0 110-2h2zM17.657 17.657a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 011.414-1.414l1.414 1.414a1 1 0 010 1.414zM12 19a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm-5.657-1.343a1 1 0 010-1.414l1.414-1.414a1 1 0 011.414 1.414L7.757 17.657a1 1 0 01-1.414 0zM5 11a1 1 0 110 2H3a1 1 0 110-2h2zM6.343 6.343a1 1 0 011.414 0l1.414 1.414A1 1 0 117.757 9.17L6.343 7.757a1 1 0 010-1.414zM12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M12 2a10 10 0 0110 10 10.015 10.015 0 01-10 10A10.015 10.015 0 012 12 10 10 0 0112 2zm0 2a8 8 0 100 16 8 8 0 000-16zm1 2a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1zm-5.657 3.343a1 1 0 010 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zm11.314 0a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM12 16a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z" />
        </svg>
      )}
    </button>
  );
}
