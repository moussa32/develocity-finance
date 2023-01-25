import React, { useRef } from "react";
import quote from "../../assets/images/quote-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      speed={800}
      slidesPerView={1}
      loop
    >
      <SwiperSlide>
        <div className="relative px-10 lg:px-0">
          <img
            className="absolute z-10 right-28 -top-10 md:right-[47%] lg:bottom-[170px]"
            src={`${quote}`}
            alt="quote icon"
          />
          <p className="text-xl relative z-20 md:text-4xl md:leading-[44px] font-medium text-neutral-900 mt-16 md:mt-24 lg:px-52">
            “We entrepreneurs are loners, vagabonds, troublemakers. Success is
            simply a matter of finding and surrounding ourselves with those
            open-minded and clever souls who can take our insanity and put it to
            good use.”
          </p>
        </div>
        <h6 className="text-lg font-semibold mt-5 md:mt-8">Brian Armstrong</h6>
        <h6 className="text-[#525C7A] text-base">CEO of Coinbase</h6>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative px-10 lg:px-0">
          <img
            className="absolute z-10 right-28 -top-10 md:right-[47%] lg:bottom-[170px]"
            src={`${quote}`}
            alt="quote icon"
          />
          <p className="text-xl relative z-20 md:text-4xl md:leading-[44px] font-medium text-neutral-900 mt-16 md:mt-24 lg:px-52">
            “We entrepreneurs are loners, vagabonds, troublemakers. Success is
            simply a matter of finding and surrounding ourselves with those
            open-minded and clever souls who can take our insanity and put it to
            good use.”
          </p>
        </div>
        <h6 className="text-lg font-semibold mt-5 md:mt-8">Brian Armstrong</h6>
        <h6 className="text-[#525C7A] text-base">CEO of Coinbase</h6>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
