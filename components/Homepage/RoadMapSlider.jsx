import React, { useRef } from "react";
import Image from "next/image";
import prevArrow from "../../public/assets/images/roadmap-prev-arrow.svg";
import nextArrow from "../../public/assets/images/roadmap-next-arow.svg";
import phaseOne from "../../public/assets/images/phase1.svg";
import phaseTwo from "../../public/assets/images/phase2.svg";
import phaseThree from "../../public/assets/images/phase3.svg";
import phaseFour from "../../public/assets/images/phase4.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import useTranslation from "@/shared/Hooks/useTranslation";

const RoadMapSlider = () => {
  const { t } = useTranslation("common");
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  return (
    <Swiper
      className="slider-padding d-hidden"
      modules={[Navigation]}
      navigation={{
        prevEl: swiperNavPrevRef.current,
        nextEl: swiperNavNextRef.current,
      }}
      speed={800}
      slidesPerView={1}
      loop
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
        swiper.params.navigation.nextEl = swiperNavNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      <SwiperSlide>
        <div>
          <div className="mx-auto mt-16 text-center">
            <Image className="mb-6 mx-auto" src={phaseOne} alt="phase 1 icon" />
            <h3 className="text-[32px] mb-[6px] font-semibold">{t?.homeSection?.roadmapSection?.phases[0]}</h3>
            <span className="text-base text-[#B8B8B8]">{t?.homeSection?.roadmapSection?.cards?.startup?.lable}</span>
          </div>
          <div className="relative grid grid-cols-1 gap-8 lg:gap-2 lg:px-20 my-7">
            <hr className="absolute block w-full top-2/4"></hr>
            <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          </div>
          <div className="w-[92vw] h-[61.5vw] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
            <h4 className="text-center text-2xl font-semibold">{t?.homeSection?.roadmapSection?.cards?.startup?.mainText}</h4>
            <ul className="text-base mt-4">
              <li>• {t?.homeSection?.roadmapSection?.cards?.startup?.subText[0]}</li>
              <li>• {t?.homeSection?.roadmapSection?.cards?.startup?.subText[1]}</li>
              <li>• {t?.homeSection?.roadmapSection?.cards?.startup?.subText[2]}</li>
              <li>• {t?.homeSection?.roadmapSection?.cards?.startup?.subText[3]}</li>
              <li>• {t?.homeSection?.roadmapSection?.cards?.startup?.subText[4]}</li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="mx-auto mt-16 text-center">
            <Image className="mb-6 mx-auto" src={phaseTwo} alt="phase 2 icon" />
            <h3 className="text-[32px] mb-[6px] font-semibold">{t?.homeSection?.roadmapSection?.phases[1]}</h3>
            <span className="text-base text-[#B8B8B8]">{t?.homeSection?.roadmapSection?.cards?.fairlaunch?.lable}</span>
          </div>
          <div className="relative grid grid-cols-1 gap-8 lg:gap-2 lg:px-20 my-7">
            <hr className="absolute block w-full top-2/4"></hr>
            <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          </div>
          <div className="w-[92vw] h-[61.5vw] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
            <h4 className="text-center text-2xl font-semibold">{t?.homeSection?.roadmapSection?.cards?.fairlaunch?.mainText}</h4>
            <ul className="text-base mt-4">
              <li>• {t?.homeSection?.roadmapSection?.cards?.fairlaunch?.subText[0]}</li>
              <li>• {t?.homeSection?.roadmapSection?.cards?.fairlaunch?.subText[1]}</li>
              <li>• {t?.homeSection?.roadmapSection?.cards?.fairlaunch?.subText[2]}</li>
              <li>• {t?.homeSection?.roadmapSection?.cards?.fairlaunch?.subText[3]}</li>
              <li>• {t?.homeSection?.roadmapSection?.cards?.fairlaunch?.subText[4]}</li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="mx-auto mt-16 text-center">
            <Image className="mb-6 mx-auto" src={phaseThree} alt="phase 3 icon" />
            <h3 className="text-[32px] mb-[6px] font-semibold">{t?.homeSection?.roadmapSection?.phases[2]}</h3>
            <span className="text-base text-[#B8B8B8]">{t?.homeSection?.roadmapSection?.cards?.expansion?.lable}</span>
          </div>
          <div className="relative grid grid-cols-1 gap-8 lg:gap-2 lg:px-20 my-7">
            <hr className="absolute block w-full top-2/4"></hr>
            <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          </div>
          <div className="w-[92vw] h-[61.5vw] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
            <h4 className="text-center text-2xl font-semibold">{t?.homeSection?.roadmapSection?.cards?.expansion?.mainText}</h4>
            <ul className="text-base mt-4">
              <li>• {t?.homeSection?.roadmapSection?.cards?.expansion?.subText[0]}</li>
              <li>• {t?.homeSection?.roadmapSection?.cards?.expansion?.subText[1]}</li>
              <li>• {t?.homeSection?.roadmapSection?.cards?.expansion?.subText[2]}</li>
              <li>• {t?.homeSection?.roadmapSection?.cards?.expansion?.subText[3]}</li>
              <li>• {t?.homeSection?.roadmapSection?.cards?.expansion?.subText[4]}</li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="mx-auto mt-16 text-center">
            <Image className="mb-6 mx-auto" src={phaseFour} alt="phase 4 icon" />
            <h3 className="text-[32px] mb-[6px] font-semibold">{t?.homeSection?.roadmapSection?.phases[3]}</h3>
            <span className="text-base text-[#B8B8B8]">{t?.homeSection?.roadmapSection?.cards?.opportunities?.lable}</span>
          </div>
          <div className="relative grid grid-cols-1 gap-8 lg:gap-2 lg:px-20 my-7">
            <hr className="absolute block w-full top-2/4"></hr>
            <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          </div>
          <div className="w-[92vw] h-[61.5vw] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
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
      </SwiperSlide>
      <Image
        src={prevArrow}
        alt={"prev arrow"}
        className="-bottom-6 md:bottom-0 md:top-1/2 left-[130px] mb-4 md:mb-0 md:left-0 absolute z-10 -translate-y-1/2 w-[50px] h-[50px] cursor-pointer bg-no-repeat bg-contain bg-center"
        ref={swiperNavPrevRef}
      />
      <Image
        src={nextArrow}
        alt={"next arrow"}
        className="-bottom-6 md:bottom-0 md:top-1/2 right-[130px] mb-4 md:mb-0 md:right-0 absolute z-10 -translate-y-1/2 w-[50px] h-[50px] cursor-pointer bg-no-repeat bg-contain bg-center"
        ref={swiperNavNextRef}
      />
    </Swiper>
  );
};

export default RoadMapSlider;
