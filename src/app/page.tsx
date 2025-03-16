import { Navbar } from "@/components/Navbar/Navbar";
import Hero from "@/layouts/Hero/Hero";
export default function Home() {
  return (
    <>
      <header className="min-w-sm">
        <Navbar />
      </header>
      <main>
        <Hero />
        <p>TEKST TESTOWy</p>
      </main>
      <footer>Footer</footer>
    </>
  );
}
