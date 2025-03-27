"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import { ReactNode } from "react";
import { Footer } from "@/layouts/Footer/Footer";

export const MainLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] ">
      <header className="w-full shadow-md">
        <Navbar />
      </header>
      <main className="container mx-auto px-4">{children}</main>
      <footer className="w-full text-center">
        <Footer />
      </footer>
    </div>
  );
};
