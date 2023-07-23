// import Leadership from "@/components/Homepage/Leadership";
import dynamic from "next/dynamic";
import withLazyLoad from "@/shared/Util/withLazyLoad";
import Loader from "@/shared/Components/Loader";

const Ecosystem = dynamic(() => import("@/components/Homepage/Ecosystem"));
const Academy = dynamic(() => import("@/components/Homepage/Academy"));
const Scanner = dynamic(() => import("@/components/Homepage/Scanner"));
const RoadMap = dynamic(() => import("@/components/Homepage/RoadMap"));
const Partnerships = dynamic(() => import("@/components/Homepage/Partnerships"));
const Blog = dynamic(() => import("@/components/Homepage/Blog"));
const FrequentlyQuestions = dynamic(() => import("@/components/Homepage/FrequentlyQuestions"));

const LazyEcosystem = withLazyLoad(Ecosystem);
const LazyAcademy = withLazyLoad(Academy);
const LazyScanner = withLazyLoad(Scanner);
const LazyRoadMap = withLazyLoad(RoadMap);
const LazyPartnerships = withLazyLoad(Partnerships);
const LazyBlog = withLazyLoad(Blog);
const LazyFrequentlyQuestions = withLazyLoad(FrequentlyQuestions);

const Header = dynamic(() => import("../components/Homepage/Header"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-black text-white">
      <Loader />
    </div>
  ),
});

const Home = () => {
  return (
    <>
      <Header />
      <LazyEcosystem />
      <LazyAcademy />
      <LazyScanner />
      <LazyRoadMap />
      {/* <Leadership /> */}
      <LazyPartnerships />
      <LazyBlog />
      <LazyFrequentlyQuestions />
    </>
  );
};

export default Home;
