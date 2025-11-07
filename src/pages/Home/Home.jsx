import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import OceanDepthBG from "../../components/OceanDepthBG";
import CategoryRow from "../../components/CategoryRow";
import PromoStrip from "../../components/PromoStrip";
import LocationHours from "../../components/LocationHours";
import { SECTIONS } from "../../constants/site";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--kk-abyss)", color: "var(--kk-light-foam)" }}
    >
      <OceanDepthBG />
      <Header />
      <main id="menu">
        <Hero />
        <PromoStrip />
        {SECTIONS.map((s) => (
          <CategoryRow key={s.id} section={s} />
        ))}
        <LocationHours />
      </main>
      <Footer />
    </div>
  );
}
