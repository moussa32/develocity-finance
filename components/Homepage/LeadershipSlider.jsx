import React, { useEffect, useRef, useState } from "react";
import prevArrow from "../../public/assets/images/prev-arrow.svg";
import nextArrow from "../../public/assets/images/next-arrow.svg";
import twitter from "../../public/assets/images/LD_twitter.svg";
import facebook from "../../public/assets/images/LD_facebook.svg";
import instagram from "../../public/assets/images/LD_instagram.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import useTranslation from "@/shared/Hooks/useTranslation";
import useDirection from "@/store/direaction";

const LeadershipSlider = () => {
  const { t } = useTranslation("common");
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const { direction } = useDirection(state => state);

  useEffect(() => {
    if (swiper && !swiper.destroyed) {
      swiper.changeLanguageDirection(direction);
      swiper.rtlTranslate = direction === "rtl";
    }
  }, [swiper, direction]);

  return (
    <Swiper
      className="slider-padding mt-12 mb-32  d-hidden"
      modules={[Navigation]}
      navigation={{
        prevEl: swiperNavPrevRef.current,
        nextEl: swiperNavNextRef.current,
      }}
      onSwiper={swiper => setSwiper(swiper)}
      speed={800}
      slidesPerView={1.1}
      loop
      onInit={swiper => {
        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
        swiper.params.navigation.nextEl = swiperNavNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={`relative mx-auto pt-[27px] pb-[27px] transition-all ease-in-out duration-300 rounded-xl LD-cmo bg-cover bg-center bg-no-repeat bg-gradient-to-br from-[#1D2B64] to-[#F8CDDA] w-[80vw] h-[410px]
        ${isActive ? "" : "opacity-50"}`}
          >
            <div className="absolute bottom-0 right-0 left-0 bg-white opacity-10 z-0 h-28"></div>
            <div className="absolute bottom-0 right-0 left-0 z-20">
              <div className="px-6 pt-6 pb-6 ltr:text-left rtl:text-right text-white z-50">
                <p className="text-2xl font-medium">{t?.homeSection?.leadershipSection?.members[2].name}</p>
                <div className="flex justify-between mt-1">
                  <label className="text-[22px]">{t?.homeSection?.leadershipSection?.members[0].role}</label>
                  <div className="flex gap-2">
                    <Image className="w-5" src={facebook} />
                    <Image className="w-5" src={twitter} />
                    <Image className="w-5" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
      {/* <SwiperSlide>
        {({ isActive }) => (
          <div
            className={`relative mx-auto pt-[27px] pb-[27px] transition-all ease-in-out duration-300 rounded-xl bg-gradient-to-br from-[#1D2B64] to-[#F8CDDA] w-[80vw] h-[410px]
        ${isActive ? "" : "opacity-50"}`}
          >
            <div className="absolute bottom-0 right-0 left-0 bg-white opacity-10 z-0 h-28"></div>
            <div className="absolute bottom-0 right-0 left-0 z-20">
              <div className="px-6 pt-6 pb-6 ltr:text-left rtl:text-right text-white z-50">
                <p className="text-2xl rtl:text-right font-medium mb-1">
                  {t?.homeSection?.leadershipSection?.members[1].name}
                </p>
                <div className="flex justify-between mt-1">
                  <label className="text-[22px]">{t?.homeSection?.leadershipSection?.members[1].role}</label>
                  <div className="flex gap-2">
                    <Image className="w-5" src={facebook} />
                    <Image className="w-5" src={twitter} />
                    <Image className="w-5" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide> */}
      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={`relative mx-auto pt-[27px] pb-[27px] transition-all ease-in-out duration-300 rounded-xl LD-ceo bg-cover bg-center bg-no-repeat bg-gradient-to-br from-[#1D2B64] to-[#F8CDDA] w-[80vw] h-[410px]
      ${isActive ? "" : "opacity-50"}`}
          >
            <div className="absolute bottom-0 right-0 left-0 bg-white opacity-10 z-0 h-28"></div>
            <div className="absolute bottom-0 right-0 left-0 z-20">
              <div className="px-6 pt-6 pb-6 ltr:text-left rtl:text-right text-white z-50">
                <p className="mb-2 text-2xl rtl:text-right font-medium">
                  {t?.homeSection?.leadershipSection?.members[0].name}
                </p>
                <div className="flex justify-between mt-1">
                  <label className="text-[22px]">{t?.homeSection?.leadershipSection?.members[2].role}</label>
                  <div className="flex gap-2">
                    <Image className="w-5" src={facebook} />
                    <Image className="w-5" src={twitter} />
                    <Image className="w-5" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </SwiperSlide>
      <Image
        src={direction === "rtl" ? prevArrow : nextArrow}
        className="-bottom-6 md:bottom-0 md:top-1/2 left-[115px] mb-4 md:mb-0 md:left-0 absolute z-10 -translate-y-1/2 w-[50px] h-[50px] cursor-pointer bg-no-repeat bg-contain bg-center"
        ref={direction === "rtl" ? swiperNavPrevRef : swiperNavNextRef}
        alt={direction === "rtl" ? "البطاقة السابقة" : "Next Card"}
      />
      <Image
        src={direction === "rtl" ? nextArrow : prevArrow}
        className="-bottom-6 md:bottom-0 md:top-1/2 right-[115px] mb-4 md:mb-0 md:right-0 absolute z-10 -translate-y-1/2 w-[50px] h-[50px] cursor-pointer bg-no-repeat bg-contain bg-center"
        ref={direction === "rtl" ? swiperNavNextRef : swiperNavPrevRef}
        alt={direction === "rtl" ? "البطاقة التالية" : "Prev Card"}
      />
    </Swiper>
  );
};

export default LeadershipSlider;
