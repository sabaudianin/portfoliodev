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
    <div className="sm:hidden">
      <button
        type="button"
        className=" z-20 inline-flex items-center justify-center rounded-md p-2 hover:scale-105 font-extrabold"
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
          className="absolute right-0 top-22 w-1/2 glass shadow-lg transition-opacity duration-200 ease-in-out rounded-xl px-8"
          role="menu"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col space-y-1 py-3 text-center text-xl">
            {Links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="block whitespace-nowrap px-3 py-2 font-extrabold transition"
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
