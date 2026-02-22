
import Link from "next/link";

import { MenuHamburger } from "../MenuHamburger/MenuHamburger";
import { MenuDesktop } from "../MenuDesktop/MenuDesktop";
import ThemeToggle from "../../../components/ThemeToggle/ThemeToggle";

export const Navbar = () => {
  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 md:px-8 pointer-events-none">
      <div className="glass max-w-7xl mx-auto rounded-[2rem] border border-white/10 shadow-2xl pointer-events-auto">
        <nav aria-label="Main Navigation" className="px-4 py-2 md:px-6">
          <div className="flex h-16 items-center justify-between">

            <Link
              href="/"
              className="group flex flex-col focus:outline-none"
            >
              <span className="text-xl md:text-2xl font-black tracking-tighter leading-none group-hover:text-cyan-400 transition-colors">
                RAFAL BOBKO
              </span>
              <span className="text-[10px] font-doto tracking-[0.3em] uppercase text-gray-500 group-hover:text-white transition-colors">
                Fullstack Dev
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <MenuDesktop />
              </div>

              <div className="flex items-center gap-2 border-l border-white/10 pl-4">
                <ThemeToggle />
                <div className="md:hidden">
                  <MenuHamburger />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};