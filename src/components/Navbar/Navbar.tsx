import MenuHamburger from "./MenuHamburger";
import MenuLinks from "./MenuLinks";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className=" bg-gradient-to-r from-blue-400 to-cyan-400 ">
      <div className="mx-auto max-w-7xl py-4 sm:px-16">
        <div className="relative flex items-center justify-between ">
          <MenuHamburger />

          <div className="flex flex-1 items-center justify-between ">
            <div className=" text-2xl font bold">
              <Link href="/">
                <p className="font-bold text-white ">Rafal Bobko</p>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <MenuLinks />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
