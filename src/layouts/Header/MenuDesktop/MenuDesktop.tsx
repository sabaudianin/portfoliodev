"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { Links } from "../../../types/navlinks";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiceSection/useActiveSection";

export const MenuDesktop = () => {
  const pathname = usePathname();


  const sectionIds = useMemo(
    () => Links.map((l) => l.url.replace("/#", "")).filter((id) => id !== "/"),
    []
  );

  const activeSection = useActiveSection(sectionIds);

  return (
    <nav aria-label="Main desktop navigation">
      <ul className="flex items-center gap-1 bg-background/5 dark:bg-foreground/5 p-1 rounded-2xl border border-background/5 dark:border-foreground/5 backdrop-blur-md">
        {Links.map((link) => {

          const isFolderActive = pathname === link.url;
          const isSectionActive = pathname === "/" && activeSection && link.url.includes(`#${activeSection}`);
          const isActive = isFolderActive || isSectionActive;

          return (
            <li key={link.id} className="relative">
              <Link
                href={link.url}
                aria-label={link.ariaLabel}
                className={`relative z-10 px-4 py-2 text-sm font-bold transition-colors duration-300 block ${isActive
                  ? "text-foreground"
                  : "text-foreground/50 hover:text-foreground"
                  }`}
              >
                {link.title}
              </Link>

              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-background/5 dark:bg-foreground/10 rounded-xl shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] border border-background/5 dark:border-foreground/5"
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};