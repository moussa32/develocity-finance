import Navbar from "../Components/Navbar";
import SideMenu from "../Components/SideMenu";

const StaticPageHeader = ({ headerClassNames, summary, title, titleClassNames, description }) => {
  return (
    <>
      <Navbar containerClassName="fixed bg-white/[0.1] mx-auto inset-x-0 top-[40px] z-50" />
      <section
        className={`bg-gradient-to-b from-[#0A0C14] to-[#292156] ${
          headerClassNames ? headerClassNames : "h-[400px] lg:h-[464px]"
        } text-white`}
      >
        <SideMenu />
        <header className="container mx-auto text-center flex justify-center items-center flex-col h-full">
          <span className="block text-indigo-500 font-medium text-md lg:text-lg mb-4 xl:mt-[45px]">{summary}</span>
          <h1 className={`text-2xl md:text-3xl lg:text-5xl font-semibold ${titleClassNames}`}>{title}</h1>
          <p className="text-md lg:text-xl font-medium mt-8 max-w-[762px]">{description}</p>
        </header>
      </section>
    </>
  );
};

export default StaticPageHeader;
