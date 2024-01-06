import Image from "next/image";
import { Main, About, Skills, Projects } from "@/components";

export default function Home() {
  return (
    <main className="">
      <Main />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
