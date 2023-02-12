import Academy from "../components/Homepage/Academy";
import Blog from "../components/Homepage/Blog";
import Leadership from "../components/Homepage/Leadership";
import Ecosystem from "../components/Homepage/Ecosystem";
import Partnerships from "../components/Homepage/Partnerships";
import RoadMap from "../components/Homepage/RoadMap";
import Scanner from "../components/Homepage/Scanner";
import Header from "../components/Homepage/Header";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Pre sale - Develocity</title>
      </Head>
      <Header />
      <Ecosystem />
      <Academy />
      <Scanner />
      <RoadMap />
      <Leadership />
      <Partnerships />
      <Blog />
    </>
  );
};

export default Home;
