import { doto } from "@/ui/fonts";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import { TechSkills } from "./techSkills/TechSkills";
import { Education } from "./education/Eductaion";
import { Experience } from "./experience/Experience";

export default function AboutMe() {
  return (
    <MainLayout>
      <section>
        <p className="text-3xl sm:text-4xl font-bold pt-12 text-center">
          This is the part where i talk about myself.
        </p>
        <TechSkills />
        <Education />
        <Experience />
      </section>
    </MainLayout>
  );
}
