import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const MobileImageSlider = ({
  images,
  containerClassNames,
  slideImageClassName,
  slideContainerClassName,
  ...props
}) => {
  return (
    <Swiper
      className={`mt-8 md:hidden ${containerClassNames}`}
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
          imageClassName,
          imageActiveClassName,
        }) => (
          <SwiperSlide
            className={`${slideContainerClassName} flex items-center justify-center`}
            key={title}
          >
            {({ isActive }) => (
              <div
                className={`${slideImageClassName} flex items-center justify-center`}
              >
                {isActive ? (
                  <img
                    className={`absolute hover:cursor-pointer ${imageActiveClassName}`}
                    src={coloredVersion}
                    alt={title}
                  />
                ) : (
                  <img
                    className={`absolute hover:cursor-pointer ${imageClassName}`}
                    src={defaultVersion}
                    alt={title}
                  />
                )}
              </div>
            )}
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default MobileImageSlider;
