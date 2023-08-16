import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useCallback, useRef } from "react";
import { useWindowSize } from "react-use";
import useDirection from "@/store/direaction";
import copy from "copy-to-clipboard";
import Image from "next/image";

const LinksSlider = ({ urls, activeLink, changeActiveLink }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const { width } = useWindowSize();
  const { direction } = useDirection(state => state);

  const selectLink = useCallback(
    linkIndex => {
      if (activeLink.linkCopiedIndex === linkIndex) {
        changeActiveLink({ linkCopiedIndex: null, copied: false });
      } else {
        changeActiveLink({ linkCopiedIndex: linkIndex, copied: true });
        copy(urls[linkIndex].url);
        window.open(urls[linkIndex].url);
      }
    },
    [activeLink.linkCopiedIndex]
  );

  return (
    <Swiper
      className="mt-12 mb-[23.3px] h-[440px] [&_.swiper-pagination-bullet]:w-[15px] [&_.swiper-pagination-bullet]:h-[15px] [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination]:pt-5"
      modules={[Navigation, Pagination]}
      key={direction}
      navigation={{
        prevEl: swiperNavPrevRef.current,
        nextEl: swiperNavNextRef.current,
      }}
      pagination={{ clickable: true }}
      speed={800}
      spaceBetween={width <= 1024 ? 45 : direction === "rtl" ? 0 : 45}
      slidesPerView={width <= 728 ? 1 : 2}
      onInit={swiper => {
        swiper.params.navigation.prevEl = swiperNavPrevRef.current;
        swiper.params.navigation.nextEl = swiperNavNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      {urls.map((link, index) => (
        <SwiperSlide key={`${link.linkCopiedIndex}${index}`}>
          <button
            onClick={() => selectLink(index)}
            className={`${
              activeLink.linkCopiedIndex === index ? "border-opacity-100" : "border-opacity-20"
            } h-[360px] w-full xl:w-[370px] border-white border-1 text-2xl relative py-[25.3px] pt-0 rounded-2xl flex flex-col items-center justify-start bg-white bg-opacity-5`}
          >
            {console.log(link.icon)}
            {link.icon && (
              <div className="flex items-center justify-center flex-col gap-8">
                <Image className="mt-10" src={link.icon} alt={link.text} />
                <h2 className="text-lg lg:text-2xl mt-auto">{link.text}</h2>
              </div>
            )}

            {!link.icon && <h2 className="text-lg lg:text-2xl mt-auto">{link.text}</h2>}

            <span className=" h-12 w-12 bg-[#6A65E7] relative rounded-full mt-auto">
              {activeLink.linkCopiedIndex === index && (
                <span className="absolute bg-white z-20 w-[38.4px] h-[38.4px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              )}
            </span>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LinksSlider;
