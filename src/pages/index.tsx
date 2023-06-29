import React from "react";
import { Hero } from "@/components/Hero/Hero";
import { Recomendations } from "@/components/Recomendations/Recomendations";
import { Interesting } from "@/components/Recomendations/Interesting";

export default function Home() {
  return (
    <>
      <Hero />
      <Recomendations />
      <Interesting />
    </>
  )
}
