import MenuHamburger from "./MenuHamburger";
import MenuLinks from "./MenuLinks";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className=" bg-gradient-to-r from-blue-400 to-cyan-400 ">
      <div className="mx-auto max-w-7xl py-4 sm:px-16">
        <div className="relative flex items-center justify-between ">
          <MenuHamburger />

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center -translate-x-1/2">
              <p className="font-bold text-white ">Rafal Bobko</p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <MenuLinks />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ThemeToggle />
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  {/* <Image
                    className="size-8 rounded-full"
                    src="https://dl.dropboxusercontent.com/scl/fi/t3tzii5ck1e1mt7z54r9o/cvBlack.jpg?rlkey=stia4ramuhu1i4ejoc50q1try&st=t03doebf"
                    alt="User"
                    width={500}
                    height={500}
                  /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
