import { useRef } from "react";
import quote from "../../public/assets/images/quote-icon.svg";
import prevArrow from "../../public/assets/images/prev-arrow.svg";
import nextArrow from "../../public/assets/images/next-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <Swiper
      className="slider-padding"
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
        <div className="relative px-4 md:px-8">
          <Image
            className="absolute z-10 right-32 -top-9 md:right-[47%] lg:bottom-[170px]"
            src={quote}
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
        <div className="relative  px-4 md:px-8">
          <Image
            className="absolute z-10 right-32 -top-9 md:right-[47%] lg:bottom-[170px]"
            src={quote}
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
      <Image
        src={prevArrow}
        className="-bottom-6 md:bottom-0 md:top-1/2 left-[115px] mb-4 md:mb-0 md:left-0 absolute z-10 -translate-y-1/2 w-[50px] h-[50px] cursor-pointer bg-no-repeat bg-contain bg-center"
        ref={swiperNavPrevRef}
      />
      <Image
        src={nextArrow}
        className="-bottom-6 md:bottom-0 md:top-1/2 right-[115px] mb-4 md:mb-0 md:right-0 absolute z-10 -translate-y-1/2 w-[50px] h-[50px] cursor-pointer bg-no-repeat bg-contain bg-center"
        ref={swiperNavNextRef}
      />
    </Swiper>
  );
};

export default Slider;
