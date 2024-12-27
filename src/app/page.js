import HeroSection from "./[components]/HeroSection";
import HeaderSection from "./[components]/HeaderSection";
import ExperinceSection from "./[components]/ExperinceSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col z-50">
      <HeaderSection />

      <div className="container mt-24 mx-auto px-12 py-4b z-5 ">
        <HeroSection />
        <ExperinceSection />
      </div>
    </main>
  );
}
