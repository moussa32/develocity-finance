import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import useDirection from "@/store/direaction";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MobileImageSlider = ({ images, containerClassNames, slideImageClassName, slideContainerClassName, ...props }) => {
  const { direction } = useDirection(state => state);
  const [swiper, setSwiper] = useState(null);
  const { locale } = useRouter();

  useEffect(() => {
    if (swiper && !swiper.destroyed) {
      swiper.changeLanguageDirection(direction);
      swiper.rtlTranslate = direction === "rtl";
    }
  }, [swiper, direction]);

  return (
    <Swiper
      className={`${containerClassNames}`}
      modules={[Navigation]}
      speed={800}
      centeredSlides={true}
      dir={locale === "ar" ? "rtl" : "ltr"}
      onSwiper={swiper => setSwiper(swiper)}
      centeredSlidesBounds={true}
      {...props}
    >
      {images.map(({ defaultVersion, coloredVersion, title, link, imageClassName, imageActiveClassName }) => (
        <SwiperSlide className={`${slideContainerClassName} flex items-center justify-center`} key={title}>
          {({ isActive }) => (
            <Link href={`${link}`} className={`${slideImageClassName} flex items-center justify-center`}>
              {isActive ? (
                <Image
                  className={`absolute hover:cursor-pointer ${imageActiveClassName}`}
                  src={coloredVersion}
                  alt={title}
                />
              ) : (
                <Image className={`absolute hover:cursor-pointer ${imageClassName}`} src={defaultVersion} alt={title} />
              )}
            </Link>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileImageSlider;
