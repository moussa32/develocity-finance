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

const RoadMapSlider = () => {
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
            <h3 className="text-[32px] mb-[6px] font-semibold">Phase 1</h3>
            <span className="text-base text-[#B8B8B8]">Live</span>
          </div>
          <div className="relative grid grid-cols-1 gap-8 lg:gap-2 lg:px-20 my-7">
            <hr className="absolute block w-full top-2/4"></hr>
            <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          </div>
          <div className="w-[92vw] h-[61.5vw] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
            <h4 className="text-center text-2xl font-semibold">Startup</h4>
            <ul className="text-base mt-4">
              <li>• Website Launching</li>
              <li>• Project #1 Introduction</li>
              <li>• Company Registration</li>
              <li>• License & Legale Opinion</li>
              <li>• Opening Office In Dubai</li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="mx-auto mt-16 text-center">
            <Image className="mb-6 mx-auto" src={phaseTwo} alt="phase 2 icon" />
            <h3 className="text-[32px] mb-[6px] font-semibold">Phase 2</h3>
            <span className="text-base text-[#B8B8B8]">Live</span>
          </div>
          <div className="relative grid grid-cols-1 gap-8 lg:gap-2 lg:px-20 my-7">
            <hr className="absolute block w-full top-2/4"></hr>
            <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          </div>
          <div className="w-[92vw] h-[61.5vw] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
            <h4 className="text-center text-2xl font-semibold">Fair Launch</h4>
            <ul className="text-base mt-4">
              <li>• Publishing Develocity Tool</li>
              <li>• Starting Pre-Sale</li>
              <li>• Marketing Campaign</li>
              <li>• Project #2 Introduction</li>
              <li>• Promoting & Marketing</li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="mx-auto mt-16 text-center">
            <Image className="mb-6 mx-auto" src={phaseThree} alt="phase 3 icon" />
            <h3 className="text-[32px] mb-[6px] font-semibold">Phase 3</h3>
            <span className="text-base text-[#B8B8B8]">Live</span>
          </div>
          <div className="relative grid grid-cols-1 gap-8 lg:gap-2 lg:px-20 my-7">
            <hr className="absolute block w-full top-2/4"></hr>
            <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          </div>
          <div className="w-[92vw] h-[61.5vw] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
            <h4 className="text-center text-2xl font-semibold">Expansion</h4>
            <ul className="text-base mt-4">
              <li>• Publishing SWAP Tool</li>
              <li>• Marketing Campaign</li>
              <li>• Project #3 Introduction</li>
              <li>• NFT First Edition</li>
              <li>• Centralized Exchanges</li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <div className="mx-auto mt-16 text-center">
            <Image className="mb-6 mx-auto" src={phaseFour} alt="phase 4 icon" />
            <h3 className="text-[32px] mb-[6px] font-semibold">Phase 4</h3>
            <span className="text-base text-[#B8B8B8]">Live</span>
          </div>
          <div className="relative grid grid-cols-1 gap-8 lg:gap-2 lg:px-20 my-7">
            <hr className="absolute block w-full top-2/4"></hr>
            <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          </div>
          <div className="w-[92vw] h-[61.5vw] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
            <h4 className="text-center text-2xl font-semibold">
              Opportunities
            </h4>
            <ul className="text-base mt-4">
              <li>• Publishing Bridge</li>
              <li>• Project #4 Introduction</li>
              <li>• Marketing Campaign</li>
              <li>• Promoting & Marketing</li>
              <li>• Looking For Opportunities</li>
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
