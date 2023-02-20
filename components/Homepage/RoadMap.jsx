import Image from "next/image";
import phaseOne from "../../public/assets/images/phase1.svg";
import phaseTwo from "../../public/assets/images/phase2.svg";
import phaseThree from "../../public/assets/images/phase3.svg";
import phaseFour from "../../public/assets/images/phase4.svg";
import quote from "../../public/assets/images/roadmap-quote.svg";
import RoadMapSlider from "./RoadMapSlider";
import StatsSection from "./StatsSection";
import useTranslation from "@/shared/Hooks/useTranslation";

const RoadMap = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="relative roadmap-bg bg-center bg-no-repeat md:bg-cover my-48 bg-[#0A0D14] text-white pb-16 lg:mt-[300px]">
        <StatsSection />
        <h2 className="text-center font-PolySans text-[28px] md:text-6xl px-4 md:px-6">
          {t?.homeSection?.roadmapSection?.mainText}
        </h2>
        <p className="mx-auto text-center text-[#B8B8B8] md:w-[320px] lg:w-[800px] text-base md:text-lg mt-4 px-4 md:px-6">
          {t?.homeSection?.roadmapSection?.mainTextSubstring}
        </p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 mt-24 lg:mt-48 gap-8 px-4 md:px-6">
          <div className="w-[92vw] h-[78.5vw] md:w-[46vw] md:h-[42vw] my-auto lg:w-[488px] lg:h-[442px] mx-auto bg-gradient-to-br from-[#1D2B64] to-[#F8CDDA] rounded-lg"></div>
          <div className="text-center">
            <p className="text-xl text-[#FAFAFA] md:text-3xl relative z-20 font-medium mt-11 md:mt-24">
              <Image
                className="absolute opacity-20 -z-10 ltr:right-32 rtl:left-32 -top-9 ltr:md:right-[38%] rtl:md:left-[38%] ltr:lg:right-[45%] rtl:lg:left-[45%] lg:bottom-[170px]"
                src={quote}
                alt="quote icon"
              />
              {t?.homeSection?.roadmapSection?.quote?.mainText}
            </p>
            <h6 className="text-base italic px-16 md:px-0 md:not-italic md:text-lg text-[#737373] font-semibold mt-6 md:mt-7">
              {t?.homeSection?.roadmapSection?.quote?.subText}
            </h6>
            <h6 className="hidden md:block text-[#B8B8B8] text-base">sheikhmarwanmaktoum.com</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
