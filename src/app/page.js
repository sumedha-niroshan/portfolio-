import HeroSection from "./[components]/HeroSection";
import HeaderSection from "./[components]/HeaderSection";
import ExperinceSection from "./[components]/ExperinceSection";
import ProjectSection from "./[components]/ProjectSection";
import SkillSection from "./[components]/SkillSection";
import EducationSection from "./[components]/EducationSection";
import AboutMeSection from "./[components]/AboutMeSection";
import Footer from "./[components]/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col z-50">
      <HeaderSection />

      <div className="container mt-24 mx-auto px-12 py-4b z-5">
        <HeroSection />
        <ExperinceSection />
        <ProjectSection />
        <SkillSection />
        <EducationSection />
        <AboutMeSection />
        <Footer />
      </div>
      
    </main>
  );
}
