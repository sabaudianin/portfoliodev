import { doto } from "@/ui/fonts";
import { MainLayout } from "@/layouts/MainLayout/MainLayout";

export default function AboutMe() {
  return (
    <MainLayout>
      <section>
        <p className={`${doto.className} text-4xl`}>ABOUT ME</p>
      </section>
    </MainLayout>
  );
}
