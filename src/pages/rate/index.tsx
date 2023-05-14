import React from "react";
import { Header } from "@/components/Header/Header";
import { ProfileHero } from "@/components/Profile/ProfileHero";
import { RateForm } from "@/components/rate/RateForm";

export default function Rate() {
    return (
        <main>
            <Header />
            <ProfileHero qr={false} />
            <RateForm />
        </main>
    )
}