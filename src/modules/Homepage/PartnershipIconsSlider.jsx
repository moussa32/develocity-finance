import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import coinbase from "../../assets/images/coinbase.svg";
import bitmex from "../../assets/images/bitmex.svg";
import xtCom from "../../assets/images/xt.svg";
import binance from "../../assets/images/binance.svg";
import coinbaseColored from "../../assets/images/coinbase-colored.svg";
import bitmexColored from "../../assets/images/bitmex-colored.svg";
import xtComColored from "../../assets/images/xt-colored.svg";
import binanceColored from "../../assets/images/binance-colored.svg";
import "swiper/css";
import "swiper/css/navigation";

const PartnershipIconsSlider = () => {
  return (
    <Swiper
      className="mt-8 md:hidden"
      modules={[Navigation]}
      speed={800}
      slidesPerView={1.60}
      centeredSlides={true}
      centeredSlidesBounds={true}
      loop
    >
      <SwiperSlide>
        {({ isActive }) => (
          <div className="h-11 w-[200px] mx-auto">
            <div className="relative">
              {isActive ? (
                <img
                  className="absolute hover:cursor-pointer"
                  src={`${coinbaseColored}`}
                  alt="coinbase icon"
                />
              ) : (
                <img
                  className="absolute hover:cursor-pointer"
                  src={`${coinbase}`}
                  alt="coinbase icon"
                />
              )}
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="h-11 w-[200px] mx-auto">
            <div className="relative">
              {isActive ? (
                <img
                  className="absolute hover:cursor-pointer"
                  src={`${bitmexColored}`}
                  alt="bitmex icon"
                />
              ) : (
                <img
                  className="absolute hover:cursor-pointer"
                  src={`${bitmex}`}
                  alt="bitmex icon"
                />
              )}
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="h-11 w-[200px] mx-auto">
            <div className="relative">
              {isActive ? (
                <img
                  className="absolute hover:cursor-pointer"
                  src={`${xtComColored}`}
                  alt="xtCom icon"
                />
              ) : (
                <img
                  className="absolute hover:cursor-pointer"
                  src={`${xtCom}`}
                  alt="xtCom icon"
                />
              )}
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="h-11 w-[200px] mx-auto">
            <div className="relative">
              {isActive ? (
                <img
                  className="absolute hover:cursor-pointer"
                  src={`${binanceColored}`}
                  alt="binance icon"
                />
              ) : (
                <img
                  className="absolute hover:cursor-pointer"
                  src={`${binance}`}
                  alt="binance icon"
                />
              )}
            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default PartnershipIconsSlider;
