import { useEffect, useState } from "react";
import BloombergIcon from "../../public/assets/images/Bloomberg.svg";
import WiredIcon from "../../public/assets/images/WIRED.svg";
import CoindeskIcons from "../../public/assets/images/Coindesk.svg";
import YahooFinanceIcons from "../../public/assets/images/YahooFinance.svg";
import Loudspeaker from "../../public/assets/images/loudspeaker.svg";
import SideMenu from "../../shared/Components/SideMenu";
import { calculateTimeLeft } from "../../shared/Util/countdown";
import MobileImageSlider from "../../shared/Components/MobileImageSlider";
// import headerVideo from "../../public/assets/video/header-video-bg.mp4";
import Image from "next/image";
import useTranslation from "@/shared/Hooks/useTranslation";

const featuredImages = [
  {
    title: "Bloomberg",
    defaultVersion: BloombergIcon,
    coloredVersion: BloombergIcon,
    imageClassName: "opacity-10",
    imageActiveClassName: "opacity-30",
  },
  {
    title: "WiredIcon",
    defaultVersion: WiredIcon,
    coloredVersion: WiredIcon,
    imageClassName: "opacity-10",
    imageActiveClassName: "opacity-30",
  },
  {
    title: "CoindeskIcons",
    defaultVersion: CoindeskIcons,
    coloredVersion: CoindeskIcons,
    imageClassName: "opacity-10",
    imageActiveClassName: "opacity-30",
  },
  {
    title: "YahooFinanceIcons",
    defaultVersion: YahooFinanceIcons,
    coloredVersion: YahooFinanceIcons,
    imageClassName: "opacity-10",
    imageActiveClassName: "opacity-30",
  },
];

const Header = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { t, errors } = useTranslation("common");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="relative h-screen header-bg bg-cover bg-center bg-no-repeat text-center overflow-hidden w-full md:bg-cover md:bg-right md:text-left ">
      {/* <video
        src={headerVideo}
        className="absolute object-cover w-full h-full hidden md:block"
        autoPlay
        loop
        muted
      ></video> */}
      <SideMenu />
      <div className="container h-full text-white pt-32 md:pt-60 z-20 md:flex md:flex-col">
        <div className="w-50 mx-auto flex flex-col justify-center z-20 md:h-[400px] lg:px-8 lg:ml-0 xl:w-[615px] xl:px-0">
          <div className="flex flex-col justify-center">
            <h2 className="font-PolySans text-[32px] mb-1 md:mb-0 sm:text-5xl rtl:md:text-5xl ltr:md:text-6xl">
              {t?.homeSection?.preSaleCountdown}
            </h2>
            <time className="font-semibold text-7xl text-center md:mt-[29px]">
              {`${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}`}
            </time>
          </div>
          <div className="w-full flex justify-center md:justify-start mt-14 lg:rtl:pr-16">
            <div className="px-3.5 md:mt-[125px] h-16 bg-gray-500 bg-opacity-25 rounded-lg flex items-center gap-3 w-[329px] md:w-auto">
              <div className="flex items-center p-[5px] justify-center rounded-lg w-9 h-9 bg-gray-300 bg-opacity-20 basis-9 shrink-0">
                <Image className="w-full md:h-auto md:w-auto" src={Loudspeaker} alt="Loud Speaker" />
              </div>
              <div className="flex flex-col md:flex-row md:gap-x-1 md:items-center items-start text-xs xs:text-sm text-[#E9E9E9]">
                <p>
                  {t?.homeSection?.subText[0]}{" "}
                  <span className="underline underline-offset-2 text-[#00B9FF]">{t?.homeSection?.subText[1]}</span>
                </p>
                <span className="block md:inline">{t?.homeSection?.subText[2]}</span>
              </div>
            </div>
          </div>
        </div>

        <MobileImageSlider
          containerClassNames="w-full"
          slideContainerClassName="w-auto max-w-[173px] h-8"
          slidesPerView={1.9}
          spaceBetween={42}
          images={featuredImages}
          initialSlide={1}
        />
        <div className="hidden mt-auto mb-12 justify-center mx-auto px-4 gap-x-11 gap-y-6 md:flex md:gap-10 md:gap-x-10 md:flex-wrap md:justify-evenly lg:gap-x-14 lg:mb-20 lg:gap-y-0">
          <Image
            className="max-w-[150px] md:max-w-[100%] opacity-30 hover:opacity-80"
            src={BloombergIcon}
            alt="bloomberg"
          />
          <Image className="max-w-[150px] md:max-w-[100%] opacity-30 hover:opacity-80" src={WiredIcon} alt="Wired" />
          <Image
            className="max-w-[150px] md:max-w-[100%] opacity-30 hover:opacity-80"
            src={CoindeskIcons}
            alt="coindesk"
          />
          <Image
            className="max-w-[150px] md:max-w-[100%] opacity-30 hover:opacity-80"
            src={YahooFinanceIcons}
            alt="yahooFinance"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
