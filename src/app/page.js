import HeroSection from "./[components]/HeroSection";
import NavBar from "./[components]/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col z-50">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4b z-5 ">
        <HeroSection />
      </div>
    </main>
  );
}
