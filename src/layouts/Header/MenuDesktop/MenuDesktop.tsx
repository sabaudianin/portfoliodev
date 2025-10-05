"use client";
import React from "react";
import Link from "next/link";
import { Links } from "../../../types/navlinks";
import { usePathname } from "next/navigation";

export const MenuDesktop = () => {
  const pathname = usePathname();

  return (
    <ul className="w-full flex items-center justify-between gap-2 ">
      {Links.map((link) => {
        const active =
          pathname === link.url || pathname.startsWith(`${link.url}/`);
        return (
          <li key={link.id}>
            <Link
              href={link.url}
              aria-current={active ? "page" : undefined}
              aria-label={link.ariaLabel}
              className={`inline-flex items-center rounded-md px-3 py-2 font-bold  transition hover:scale-[1.03] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-offset-cyan-500 active:bg-[var(--primary-to)]/50 ${
                active ? "bg-white/15 " : ""
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
