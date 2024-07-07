
import Navbar from "../components/Navbar";
import section from "../components/sectionsOfLandingScreen/index"
const HomeScreen = () => {
  return (
    <div className="bg-primary h-[200] pb-[1rem] overflow-clip">
      <Navbar />
      <section.Hero/>
    </div>
  );
}

export default HomeScreen;
