import Hero from "@/app/home/Hero/Hero";
import { SectionWrapper } from "@/ui/sectionWrapper/sectionWrapper";
import { Features } from "./home/Features/Features";

export default function HomePage() {
  return (
    <>

      <Hero />


      <SectionWrapper id="about" glowColor="cyan">
        <Features />
      </SectionWrapper>


    </>
  );
}