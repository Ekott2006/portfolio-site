
import ConnectMeSection from "./Components/ConnectMeSection";
import Footer from "./Components/Footer";
import HeaderComponent from "./Components/Header";
import LandingIntroSection from "./Components/LandingIntro";
import ProjectsSection from "./Components/ProjectsSection";
import SkillSection from "./Components/SkillSection";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <LandingIntroSection />
        <SkillSection />
        <ProjectsSection />
        <ConnectMeSection />
      </main>
      <Footer/>
    </>
  );
};

export default App;
