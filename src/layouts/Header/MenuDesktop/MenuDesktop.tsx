"use client";
import React from "react";
import Link from "next/link";
import { Links } from "../../../types/navlinks";
import { usePathname } from "next/navigation";

export const MenuDesktop = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1">
      {Links.map((link) => {
        const active =
          pathname === link.url || pathname.startsWith(`${link.url}/`);
        return (
          <li key={link.id}>
            <Link
              href={link.url}
              aria-current={active ? "page" : undefined}
              className={`inline-flex items-center rounded-md px-3 py-2 font-bold text-sm md:text-base  transition hover:scale-[1.03] hover:text-white  ${
                active ? "bg-white/15 text-black" : ""
              }`}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
