import Hero from "@/app/home/Hero/Hero";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import { AboutMe } from "./home/AboutMe/AboutMe";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <AboutMe />
    </MainLayout>
  );
}
