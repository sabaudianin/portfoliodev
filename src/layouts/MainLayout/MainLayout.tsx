import { Navbar } from "@/layouts/Header/Navbar/Navbar";
import type { ReactNode } from "react";
import { Footer } from "@/layouts/Footer/FooterLayout";

export const MainLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => {
  return (
    <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto] ">
      <Navbar />

      <main className="container mx-auto px-4 ">{children}</main>

      <Footer />
    </div>
  );
};
