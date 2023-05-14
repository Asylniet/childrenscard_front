import React from "react";
import { Header } from "@/components/Header/Header";
import { ProfileHero } from "@/components/Profile/ProfileHero";
import { Comments } from "@/components/Comment/Comments";

export default function Home() {
  return (
    <main>
        <Header />
        <ProfileHero />
        <Comments />
    </main>
  )
}
