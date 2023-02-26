import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

const MobileImageSlider = ({
  images,
  containerClassNames,
  slideImageClassName,
  slideContainerClassName,
  ...props
}) => {
  return (
    <Swiper
      className={`mt-8 d-hidden ${containerClassNames}`}
      modules={[Navigation]}
      speed={800}
      centeredSlides={true}
      centeredSlidesBounds={true}
      {...props}
    >
      {images.map(
        ({
          defaultVersion,
          coloredVersion,
          title,
          link,
          imageClassName,
          imageActiveClassName,
        }) => (
          <SwiperSlide
            className={`${slideContainerClassName} flex items-center justify-center`}
            key={title}
          >
            {({ isActive }) => (
              <Link
                href={`${link}`}
                className={`${slideImageClassName} flex items-center justify-center`}
              >
                {isActive ? (
                  <Image
                    className={`absolute hover:cursor-pointer ${imageActiveClassName}`}
                    src={coloredVersion}
                    alt={title}
                  />
                ) : (
                  <Image
                    className={`absolute hover:cursor-pointer ${imageClassName}`}
                    src={defaultVersion}
                    alt={title}
                  />
                )}
              </Link>
            )}
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default MobileImageSlider;
