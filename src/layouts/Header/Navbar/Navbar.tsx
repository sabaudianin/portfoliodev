import React from "react";
import Link from "next/link";

import MenuHamburger from "../MenuHamburger/MenuHamburger";
import MenuLinks from "../MenuLinks/MenuLinks";
import ThemeToggle from "../../../components/ThemeToggle/ThemeToggle";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <div className="bg-primary-gradient">
        {/* Skip link dla dostępności */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-white/90 focus:px-3 focus:py-2 focus:text-slate-900"
        >
          Przejdź do treści
        </a>

        <nav
          aria-label="Główna nawigacja"
          className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-14 items-center justify-between">
            <div className="flex flex-1 items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center rounded-md px-2 text-lg font-extrabold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-cyan-500 animate-fade-in animate-blur-in"
              >
                Rafal Bobko
              </Link>

              <div className="hidden sm:block">
                <MenuLinks />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <ThemeToggle />

              <div className="sm:hidden">
                <MenuHamburger />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
