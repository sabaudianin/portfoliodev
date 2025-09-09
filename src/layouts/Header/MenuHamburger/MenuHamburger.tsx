"use client";

import Link from "next/link";
import { useState } from "react";
import { Links } from "../../../types/navlinks";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";

export const MenuHamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative sm:hidden">
      <button
        type="button"
        className="relative z-20 inline-flex items-center justify-center rounded-md p-2 hover:scale-105 font-extrabold"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="absolute top-16 right-0 bg-gray-800 shadow-lg transition-opacity duration-200 ease-in-out"
          role="menu"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col space-y-1 px-4 py-3">
            {Links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
