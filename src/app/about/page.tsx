import { doto } from "@/ui/fonts";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import { TechSkills } from "./TechSkills/TechSkills";

export default function AboutMe() {
  return (
    <MainLayout>
      <section>
        <TechSkills />
      </section>
    </MainLayout>
  );
}
