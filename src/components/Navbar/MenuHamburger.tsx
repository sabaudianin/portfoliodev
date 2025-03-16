"use client";

import Link from "next/link";
import { useState } from "react";

export default function MenuHamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative sm:hidden">
      <button
        type="button"
        className="relative z-20 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <svg
            className="block size-8"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
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
        <div className="absolute top-full left-0 w-screen bg-gray-800 shadow-lg">
          <div className="flex flex-col space-y-1 px-4 py-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-white bg-gray-900"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/myProjects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/aboutMe"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About Me
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
