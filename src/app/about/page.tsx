import { doto } from "@/ui/fonts";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";
import { TechSkills } from "./techSkills/TechSkills";
import { Education } from "./education/Eductaion";
import { Experience } from "./experience/Experience";

export default function AboutMe() {
  return (
    <MainLayout>
      <section className="grid gap-y-12">
        <div className="text-center pt-12">
          <span className=" text-2xl font-bold text-center text-white">
            Take a look at what I do — my skills, experience, and a bit about
            me.
          </span>
        </div>
        <TechSkills />
        <Education />
        <Experience />
      </section>
    </MainLayout>
  );
}
