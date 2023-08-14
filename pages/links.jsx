import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Tab } from "@headlessui/react";
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Open_Sans } from "@next/font/google";
import { BiLogoFacebook, BiLogoTelegram } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { useWindowSize } from "react-use";
import Image from "next/image";
import DeveLogo from "../public/assets/images/links-page-logo.svg";
import useTranslation from "@/shared/Hooks/useTranslation";
import useDirection from "@/store/direaction";
import copyArrowIcon from "../public/assets/images/copy-arrows.svg";
import successCopyIcon from "../public/assets/images/success-copy.svg";
import copy from "copy-to-clipboard";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SideMenu from "@/shared/Components/SideMenu";

const TabHeader = dynamic(() => import("@/components/Links/TabHeader"), {
  ssr: false,
});

const openSans = Open_Sans({ subsets: ["latin"], weight: ["600", "700"] });

const URLS = [
  { url: "https://develocity.finance", text: "develocity.finance" },
  { url: "https://develocity.solutions", text: "develocity.solutions" },
  { url: "https://develocity.finance", text: "develocity.finance" },
  { url: "https://develocity.solutions", text: "develocity.solutions" },
  { url: "https://develocity.finance", text: "develocity.finance" },
  { url: "https://develocity.solutions", text: "develocity.solutions" },
];

const LinksPage = () => {
  const [activeLink, setActiveLink] = useState({ linkCopiedIndex: null, copied: false });
  const [swiper, setSwiper] = useState(null);
  const { width } = useWindowSize();

  const { direction } = useDirection(state => state);
  const { t } = useTranslation("links");
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const tabsHeader = useMemo(() => [{ title: t?.Develocitys }, { title: t?.socialMedia }], [t]);

  useEffect(() => {
    if (swiper && !swiper.destroyed) {
      // Determine the current active slide index
      const activeSlideIndex = swiper.activeIndex;

      // Update direction and RTL settings
      swiper.changeLanguageDirection(direction);
      swiper.rtlTranslate = direction === "rtl";

      swiper.spaceBetween = direction === "rtl" ? 0 : 45;

      // Update the swiper instance and reset the slide position
      swiper.update();
      swiper.slideTo(activeSlideIndex, 0);
    }
  }, [swiper, direction]);

  const selectLink = useCallback(
    linkIndex => {
      if (activeLink.linkCopiedIndex === linkIndex) {
        setActiveLink({ linkCopiedIndex: null, copied: false });
      } else {
        setActiveLink({ linkCopiedIndex: linkIndex, copied: true });
        copy(URLS[linkIndex].url);
        window.open(URLS[linkIndex].url);
      }
    },
    [activeLink.linkCopiedIndex]
  );

  return (
    <section className="min-h-screen links-page-bg bg-cover">
      <SideMenu />
      <section className="container">
        <Image src={DeveLogo} alt="deve" className="mx-auto block pt-32 xl:pt-60" />
        <section className={`mx-auto pb-[115px] w-full ${openSans.className}`}>
          <Tab.Group>
            <Tab.List className="flex flex-col w-full items-start md:flex-row flex-nowrap space-y-6 md:space-y-0 md:space-x-[108px] xl:w-[968.85px] mx-auto rtl:space-x-reverse mt-24 xl:mt-[134.8px]">
              {tabsHeader.map((header, index) => (
                <Tab key={`${header.title}${index}`} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${
                        selected ? "border-b-4 border-[#6A65E7] border-opacity-70" : ""
                      } text-2xl w-full md:text-[34.54px] pb-2 text-white`}
                    >
                      {header.title}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-20 xl:mt-[142.2px] border-1 w-full xl:w-[968.85px] mx-auto border-[#6A65E7] rounded-3xl pt-10 xl:pt-[54px] px-7 xl:px-[46px] pb-[22px] text-white">
              <TabHeader />
              <Tab.Panel>
                <Swiper
                  className="mt-12 mb-[23.3px] h-[440px] [&_.swiper-pagination-bullet]:w-[15px] [&_.swiper-pagination-bullet]:h-[15px] [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination]:pt-5"
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: swiperNavPrevRef.current,
                    nextEl: swiperNavNextRef.current,
                  }}
                  pagination={{ clickable: true }}
                  onSwiper={swiper => setSwiper(swiper)}
                  speed={800}
                  slidesPerView={width <= 728 ? 1 : 2}
                  onInit={swiper => {
                    swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                    swiper.params.navigation.nextEl = swiperNavNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                >
                  {URLS.map((link, index) => (
                    <SwiperSlide key={`${link.linkCopiedIndex}${index}`}>
                      <button
                        onClick={() => selectLink(index)}
                        className={`${
                          activeLink.linkCopiedIndex === index ? "border-opacity-100" : "border-opacity-20"
                        } h-[394px] w-full lg:w-[415.3px] border-white border-1 text-2xl xl:text-[34.54px] relative py-[25.3px] rounded-2xl flex flex-col items-center justify-center bg-white bg-opacity-5`}
                      >
                        {link.text}
                        <span className="h-[57.52px] w-[57.52px] bg-[#6A65E7] rounded-full absolute bottom-8 mt-auto">
                          {activeLink.linkCopiedIndex === index && (
                            <span className="absolute bg-white z-20 w-[38.4px] h-[38.4px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                          )}
                        </span>
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div
                  className={`flex justify-between items-center h-[44.41px] text-[29.58px] w-full xl:w-[386.54px] ${
                    activeLink.copied ? `border-y-[1.41px] border-[#6A65E7] ltr:mr-auto rtl:ml-auto` : null
                  } px-6`}
                >
                  {activeLink.copied && (
                    <>
                      <Image src={copyArrowIcon} alt="copy" />
                      {t?.copied}
                      <Image src={successCopyIcon} alt="success copy" />
                    </>
                  )}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="flex flex-wrap items-center gap-[75px] mt-[120.9px] mb-[84px] justify-center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    className="grid grid-cols-1 place-content-center group"
                  >
                    <BiLogoFacebook className="bg-[#6A65E7] text-8xl rounded-full mx-auto p-3 group-hover:bg-white group-hover:text-indigo-500" />
                    <span className={`uppercase mt-[51.6px] ${openSans.className} text-[25.91px] font-semibold`}>
                      {t?.facebook}
                    </span>
                  </a>
                  <a
                    href="https://INSTAGRAM.com"
                    target="_blank"
                    className="grid grid-cols-1 place-content-center group"
                  >
                    <AiOutlineInstagram className="bg-[#6A65E7] text-8xl rounded-full mx-auto p-3 group-hover:bg-white group-hover:text-indigo-500" />
                    <span className={`uppercase mt-[51.6px] ${openSans.className} text-[25.91px] font-semibold`}>
                      {t?.instagram}
                    </span>
                  </a>
                  <a href="https://x.com" target="_blank" className="grid grid-cols-1 place-content-center group">
                    <AiOutlineTwitter className="bg-[#6A65E7] text-8xl rounded-full mx-auto p-3 group-hover:bg-white group-hover:text-indigo-500" />
                    <span className={`uppercase mt-[51.6px] ${openSans.className} text-[25.91px] font-semibold`}>
                      {t?.twitter}
                    </span>
                  </a>
                  <a
                    href="https://Telegram.com"
                    target="_blank"
                    className="grid grid-cols-1 place-content-center group"
                  >
                    <BiLogoTelegram className="bg-[#6A65E7] text-8xl rounded-full mx-auto p-3 group-hover:bg-white group-hover:text-indigo-500" />
                    <span className={`uppercase mt-[51.6px] ${openSans.className} text-[25.91px] font-semibold`}>
                      {t?.telegram}
                    </span>
                  </a>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>
      </section>
    </section>
  );
};

export default LinksPage;
