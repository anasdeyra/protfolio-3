import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import WorkBanner from "../components/WorkBanner";

export default function Home() {
  return (
    <div className="flex flex-col gap-52 max-md:gap-40 text-center max-5xl max-md:mx-4 max-lg:mx-16 mx-40 max-xl:mx-24 text-neutral-900 mb-48">
      <Hero />
      <ProjectsSection />
      <WorkBanner />
      <AboutSection />
    </div>
  );
}
