import Academy from "../components/Homepage/Academy";
import Blog from "../components/Homepage/Blog";
import Leadership from "../components/Homepage/Leadership";
import Ecosystem from "../components/Homepage/Ecosystem";
import Partnerships from "../components/Homepage/Partnerships";
import RoadMap from "../components/Homepage/RoadMap";
import Scanner from "../components/Homepage/Scanner";
import Header from "../components/Homepage/Header";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.cjs";

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

export async function getStaticProps({ locale = "en" }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        [
          "common",
          "footer",
          "navbar",
          "blog",
          "contact-us",
          "terms-and-conditions",
        ],
        nextI18NextConfig
      )),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
