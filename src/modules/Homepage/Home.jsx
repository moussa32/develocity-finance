import Academy from "./Academy";
import Blog from "./components/Blog";
import Leadership from "./components/Leadership";
import StatsSection from "./components/StatsSection";
import Ecosystem from "./Ecosystem";
import Partnerships from "./Partnerships";
import RoadMap from "./RoadMap";
import Scanner from "./Scanner";

const Home = () => {
  return (
    <div>
      <Ecosystem />
      <Academy />
      <Scanner />
      <StatsSection />
      <RoadMap />
      <Partnerships />
      <Blog />
      <Leadership />
    </div>
  );
};

export default Home;
