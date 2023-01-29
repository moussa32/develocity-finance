import Academy from "./Academy";
import Blog from "./Blog";
import Leadership from "./Leadership";
import StatsSection from "./StatsSection";
import Ecosystem from "./Ecosystem";
import Partnerships from "./Partnerships";
import RoadMap from "./RoadMap";
import Scanner from "./Scanner";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <Ecosystem />
      <Academy />
      <Scanner />
      <StatsSection />
      <RoadMap />
      <Leadership />
      <Partnerships />
      <Blog />
    </>
  );
};

export default Home;
