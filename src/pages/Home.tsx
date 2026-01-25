import HomeHero from "../components/HomeHero";
import HomeSkills from "../components/HomeSkills";
import HomeProjects from "../components/HomeProjects";
import ImageModal from "../components/ImageModal";

export default function Home() {
  return (
    <>
      <div className="home">
        <HomeHero />
        <HomeSkills />
        <HomeProjects />
        <ImageModal />
      </div>
    </>
  );
}
