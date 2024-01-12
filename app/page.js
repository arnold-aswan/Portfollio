import Image from "next/image";
import { Main, About, Skills, Projects, Connect } from "@/components";
// import Loading from "./load/loading";

export default function Home() {
  return (
    <main className="">
      <Main />
      <About />
      <Skills />
      <Projects />
      <Connect />
    </main>
  );
}
