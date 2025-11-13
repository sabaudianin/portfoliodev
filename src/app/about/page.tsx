import { TechSkills } from "./TechSkills/TechSkills";
import { Education } from "./education/Eductaion";
import { Experience } from "./experience/Experience";
import { Certificats } from "./certificats/Certificats";

export default function AboutMe() {
  return (
    <>
      <section className="grid gap-y-12 py-8 ">
        <div className="mx-auto max-w-[36.75rem] text-center ">
          <h2 className="text-3xl font-bold  lg:text-4xl pb-2">
            Let me introduce myself:
          </h2>
          <p className="text-base md:text-xl">
            I&#39;m a passionate and detail-oriented developer with a love for
            building elegant, user-focused digital experiences. With a strong
            background in modern web technologies and a problem-solving mindset,
            I aim to craft clean, efficient, and scalable code that brings ideas
            to life.
          </p>
        </div>

        <TechSkills />
        <Education />

        <Certificats />
        <Experience />
      </section>
    </>
  );
}
