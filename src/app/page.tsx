import Hero from "@/layouts/Hero/Hero";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import { AboutMe } from "@/layouts/AboutMe/AboutMe";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <AboutMe />
    </MainLayout>
  );
}
