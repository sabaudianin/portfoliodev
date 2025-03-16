"use client";

import Link from "next/link";
import { useState } from "react";

const MenuHamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative sm:hidden">
      <button
        type="button"
        className="relative z-20 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        {isOpen ? (
          <svg
            className="block size-8"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="block size-8"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="absolute top-full left-0 w-screen bg-gray-800 shadow-lg transition-opacity duration-200 ease-in-out"
          role="navigation"
        >
          <ul className="flex flex-col space-y-1 px-4 py-3">
            <li>
              <Link
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-white bg-gray-900"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/myProjects"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/aboutMe"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About Me
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MenuHamburger;
