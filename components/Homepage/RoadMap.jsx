import Image from "next/image";
import phaseOne from "@/images/phase1.svg";
import phaseTwo from "@/images/phase2.svg";
import phaseThree from "@/images/phase3.svg";
import phaseFour from "@/images/phase4.svg";
import quote from "@/images/roadmap-quote.svg";
import RoadMapSlider from "./RoadMapSlider";
import StatsSection from "./StatsSection";
import useTranslation from "@/shared/Hooks/useTranslation";
import SheikhMarwanBinMohammed from "@/images/SheikhMarwanBinMohammed.png";

const RoadMap = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="relative mt-48 mb-24 bg-[#0A0D14] text-white pb-16 lg:mt-[300px]">
        <StatsSection />
        <div className="max-w-[864px] mx-auto">
          <h2 className="text-center font-PolySans text-[28px] md:text-6xl px-4 md:px-6">
            {t?.homeSection?.roadmapSection?.mainText}
          </h2>
          <p className="mx-auto text-center text-[#B8B8B8] text-base mt-4 px-4 md:text-lg md:px-6">
            {t?.homeSection?.roadmapSection?.mainTextSubstring}
          </p>
        </div>

        <div className="hidden md:block px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-20 gap-8 lg:gap-2 mt-16">
            <div className="mx-auto text-center">
              <Image className="mb-3" src={phaseOne} alt="phase 1 icon" />
              <h3 className="text-2xl font-semibold">{t?.homeSection?.roadmapSection?.phases[0]}</h3>
              <span className="text-base text-[#B8B8B8] mt-2">
                {t?.homeSection?.roadmapSection?.cards?.startup?.lable}
              </span>
            </div>
            <div className="mx-auto text-center">
              <Image className="mb-3" src={phaseTwo} alt="phase 2 icon" />
              <h3 className="text-2xl font-semibold">{t?.homeSection?.roadmapSection?.phases[1]}</h3>
              <span className="text-base text-[#B8B8B8] mt-2">
                {t?.homeSection?.roadmapSection?.cards?.fairlaunch?.lable}
              </span>
            </div>
            <div className="mx-auto text-center">
              <Image className="mb-3" src={phaseThree} alt="phase 3 icon" />
              <h3 className="text-2xl font-semibold">{t?.homeSection?.roadmapSection?.phases[2]}</h3>
              <span className="text-base text-[#B8B8B8] mt-2">
                {t?.homeSection?.roadmapSection?.cards?.expansion?.lable}
              </span>
            </div>
            <div className="mx-auto text-center">
              <Image className="mb-3" src={phaseFour} alt="phase 4 icon" />
              <h3 className="text-2xl font-semibold">{t?.homeSection?.roadmapSection?.phases[3]}</h3>
              <span className="text-base text-[#B8B8B8] mt-2">
                {t?.homeSection?.roadmapSection?.cards?.opportunities?.lable}
              </span>
            </div>
          </div>
          <div className="hidden relative md:grid grid-cols-4 gap-8 lg:gap-2 lg:px-20 mt-9">
            <hr className="absolute block w-full top-2/4"></hr>
            <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
            <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
            <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
            <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2 lg:px-20 mt-9">
            <div className="w-[280px] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
              <h4 className="text-center text-2xl font-semibold">
                {t?.homeSection?.roadmapSection?.cards?.startup?.mainText}
              </h4>
              <ul className="text-base mt-4">
                <li>• {t?.homeSection?.roadmapSection?.cards?.startup?.subText[0]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.startup?.subText[1]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.startup?.subText[2]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.startup?.subText[3]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.startup?.subText[4]}</li>
              </ul>
            </div>
            <div className="w-[280px] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
              <h4 className="text-center text-2xl font-semibold">
                {t?.homeSection?.roadmapSection?.cards?.fairlaunch?.mainText}
              </h4>
              <ul className="text-base mt-4">
                <li>• {t?.homeSection?.roadmapSection?.cards?.fairlaunch?.subText[0]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.fairlaunch?.subText[1]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.fairlaunch?.subText[2]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.fairlaunch?.subText[3]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.fairlaunch?.subText[4]}</li>
              </ul>
            </div>
            <div className="w-[280px] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
              <h4 className="text-center text-2xl font-semibold">
                {t?.homeSection?.roadmapSection?.cards?.expansion?.mainText}
              </h4>
              <ul className="text-base mt-4">
                <li>• {t?.homeSection?.roadmapSection?.cards?.expansion?.subText[0]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.expansion?.subText[1]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.expansion?.subText[2]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.expansion?.subText[3]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.expansion?.subText[4]}</li>
              </ul>
            </div>
            <div className="w-[280px] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
              <h4 className="text-center text-2xl font-semibold">
                {t?.homeSection?.roadmapSection?.cards?.opportunities?.mainText}
              </h4>
              <ul className="text-base mt-4">
                <li>• {t?.homeSection?.roadmapSection?.cards?.opportunities?.subText[0]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.opportunities?.subText[1]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.opportunities?.subText[2]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.opportunities?.subText[3]}</li>
                <li>• {t?.homeSection?.roadmapSection?.cards?.opportunities?.subText[4]}</li>
              </ul>
            </div>
          </div>
        </div>
        <RoadMapSlider />
        <section className="mt-24 lg:mt-32">
          <div className="max-w-[864px] mx-auto text-center">
            <h2 className="font-PolySans text-[52px] text-white">Sheikh Marwan Backs Develocity</h2>
            <p className="text-lg text-[#B8B8B8] mt-1">
              Develocity is backed by His Highness Sheikh Marwan Bin Mohammed Bin Rashed Al Maktoum, providing the
              necessary support to empower our team to push boundaries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8 px-4 md:px-6">
            <div className="w-[92vw] h-[78.5vw] md:w-[46vw] md:h-[42vw] my-auto lg:w-[488px] lg:h-[568px] mx-auto relative">
              <Image className="rounded-lg" src={SheikhMarwanBinMohammed} fill alt="Sheikh Marwan Bin Mohammed" />
            </div>
            <div className="text-center flex flex-col justify-center z-20 max-w-[592px] mt-11 md:mt-24 ltr:items-start rtl:items-end">
              <p className="text-lg font-extralight text-white relative">
                <Image
                  className="absolute opacity-20 -z-10 ltr:right-32 rtl:left-32 -top-9 ltr:md:right-[38%] rtl:md:left-[38%] ltr:lg:right-[45%] rtl:lg:left-[45%] lg:bottom-[170px]"
                  src={quote}
                  alt="quote icon"
                />
                {t?.homeSection?.roadmapSection?.quote?.mainText}
              </p>
              <div className="mx-auto mt-10.5">
                <span className="text-base italic px-16 text-white font-semibold mt-6 md:px-0 md:not-italic md:text-lg md:mt-7">
                  {t?.homeSection?.roadmapSection?.quote?.subText}
                </span>
                <a
                  href="https://www.sheikhmarwanmaktoum.com"
                  className="hidden underline text-[#B8B8B8] text-base md:block"
                >
                  sheikhmarwanmaktoum.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RoadMap;
