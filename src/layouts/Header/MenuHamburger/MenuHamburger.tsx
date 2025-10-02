"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Links } from "../../../types/navlinks";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";

export const MenuHamburger: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className=" z-20 inline-flex items-center justify-center rounded-md p-2 font-extrabold"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 h-screen z-10  bg-black/40 animate-fade-in motion-reduce:animate-none"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="absolute z-20 right-0 top-20 w-1/2 px-8 glass shadow-lg transition-opacity duration-200 ease-in-out rounded-xl  motion-reduce:transition-none"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col space-y-1 py-3 text-center text-xl">
            {Links.map((link) => {
              const active =
                pathname === link.url || pathname.startsWith(`${link.url}/`);
              return (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    aria-current={active ? "page" : undefined}
                    aria-label={link.ariaLabel}
                    onClick={closeMenu}
                    className={`inline-flex items-center whitespace-nowrap rounded-md px-3 py-2 font-bold active:bg-[var(--primary-to)]/50 transition motion-reduce:transition-none ${
                      active ? "bg-white/15 " : ""
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
};
