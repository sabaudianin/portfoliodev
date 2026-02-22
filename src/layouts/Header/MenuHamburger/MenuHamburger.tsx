"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Links } from "../../../types/navlinks";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";

import { AnimatePresence, motion } from "framer-motion";

export const MenuHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 transition-transform active:scale-90"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/60 flex items-center justify-center"
          >
            <motion.nav
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-[80%] text-center"
            >
              <ul className="space-y-6">
                {Links.map((link, i) => {
                  const active = pathname === link.url;
                  return (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.url}
                        onClick={() => setIsOpen(false)}
                        className={`text-4xl font-black tracking-tighter transition-all ${active ? "text-cyan-400" : "text-white hover:text-cyan-400"
                          }`}
                      >
                        {link.title}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};