import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import section from "../components/sectionsOfLandingScreen/index";

const HomeScreen = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-[200] overflow-clip">
      <div className={`sticky top-0 z-50`}>
        <Navbar co={"275ED9"} onNavItemClick={handleScrollToSection} />
      </div>
      <section.Hero id="hero-section" />
      <section.HowItWorks id="how-it-works-section" />
      <section.PopularJobs id="popular-jobs-section" />
    </div>
  );
}

export default HomeScreen;
