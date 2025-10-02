import { TechSkills } from "./TechSkills/TechSkills";
import { Education } from "./education/Eductaion";
import { Experience } from "./experience/Experience";

export default function AboutMe() {
  return (
    <>
      <section className="grid gap-y-12 pt-8">
        <div className="mx-auto max-w-[36.75rem] text-center text-gray-950 dark:text-gray-50">
          <div className="text-center pt-12">
            <span className=" text-2xl font-bold text-center text-white">
              Take a look at what I do — my skills, experience, and a bit about
              me.
            </span>
          </div>
          <h2 className="text-3xl font-bold my-6 lg:text-4xl">
            Let me introduce myself.
          </h2>
          <p className="text-base ">
            I&#39;m a passionate and detail-oriented developer with a love for
            building elegant, user-focused digital experiences. With a strong
            background in modern web technologies and a problem-solving mindset,
            I aim to craft clean, efficient, and scalable code that brings ideas
            to life.
          </p>
        </div>

        <TechSkills />
        <Education />
        <section id="experience">
          <Experience />
        </section>
      </section>
    </>
  );
}
