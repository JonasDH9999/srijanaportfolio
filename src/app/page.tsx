// src/app/page.tsx
import type { NextPage } from "next";
import HeroSection from "./components/HeroSection";

const Home: NextPage = () => {
  return (
    <main>
      <HeroSection />
    </main>
  );
};

export default Home;
