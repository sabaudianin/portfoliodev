import Hero from "@/app/home/Hero/Hero";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import { Summary } from "./home/Summary/Summary";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Summary />
    </MainLayout>
  );
}
