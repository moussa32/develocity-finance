import Blog from "./components/Blog";
import Leadership from "./components/Leadership";
import StatsSection from "./components/StatsSection";
import Partnerships from "./Partnerships";
import RoadMap from "./RoadMap";
const Home = () => {
  return (
    <div>
      <StatsSection />
      <RoadMap />
      <Partnerships />
      <Blog />
      <Leadership />
    </div>
  );
};

export default Home;
