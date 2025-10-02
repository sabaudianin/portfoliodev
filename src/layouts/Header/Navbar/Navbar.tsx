import React from "react";
import Link from "next/link";

import { MenuHamburger } from "../MenuHamburger/MenuHamburger";
import { MenuDesktop } from "../MenuDesktop/MenuDesktop";
import ThemeToggle from "../../../components/ThemeToggle/ThemeToggle";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 shadow-cyan-glow">
      <div className="glass relative lg:py-4">
        {/* Skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-white/90 focus:px-3 focus:py-2 focus:text-slate-900"
        >
          Skip to Content
        </a>

        <nav
          aria-label="Main Navigation"
          className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-14 items-center justify-between">
            <div className="flex flex-1 items-center justify-between gap-3">
              <Link
                href="/"
                aria-label="Main page"
                className="inline-flex items-center rounded-md px-2 text-xl lg:text-4xl font-extrabold text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/90 focus-visible:ring-offset-1    animate-fade-in animate-blur-in active:scale-[1.1] hover:text-white/90 transition"
              >
                Rafal Bobko
              </Link>

              <div className="hidden sm:block">
                <MenuDesktop />
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
