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

  return (
    <div className="h-[200] overflow-clip">
      <div className={`sticky top-0 z-50 `}>
        <Navbar co = {isScrolled?"263238":"275ED9"}/>
      </div>
      <section.Hero />
      <section.HowItWorks />
    </div>
  );
}

export default HomeScreen;
