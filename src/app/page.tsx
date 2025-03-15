import React from "react";
import { Intro } from "./_components/intro";
import { About } from "./_components/about";
import { Pillar } from "./_components/pillar";
import { Info } from "./_components/info";

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Pillar />
      <Info />
    </main>
  );
}
