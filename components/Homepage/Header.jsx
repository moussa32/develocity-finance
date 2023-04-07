import BloombergIcon from "../../public/assets/images/Bloomberg.svg";
import WiredIcon from "../../public/assets/images/WIRED.svg";
import CoindeskIcons from "../../public/assets/images/Coindesk.svg";
import YahooFinanceIcons from "../../public/assets/images/YahooFinance.svg";
import SideMenu from "../../shared/Components/SideMenu";
import MobileImageSlider from "../../shared/Components/MobileImageSlider";
// import Loudspeaker from "../../public/assets/images/loudspeaker.svg";
// import headerVideo from "../../public/assets/video/header-video-bg.mp4";
import Image from "next/image";
import useTranslation from "@/shared/Hooks/useTranslation";
import useCountdown from "@/shared/Hooks/useCountdown";
import { RiExchangeFundsLine } from "react-icons/ri";
import { useWeb3Modal } from "@web3modal/react";
import { useState } from "react";
import { useAccount } from "wagmi";
import ModalBuyNow from "./Modal/ModalBuyNow";

const featuredImages = [
  {
    title: "Bloomberg",
    defaultVersion: BloombergIcon,
    coloredVersion: BloombergIcon,
    imageClassName: "opacity-10",
    imageActiveClassName: "opacity-30 feature-slider-image-active",
  },
  {
    title: "WiredIcon",
    defaultVersion: WiredIcon,
    coloredVersion: WiredIcon,
    imageClassName: "opacity-10",
    imageActiveClassName: "opacity-30 feature-slider-image-active",
  },
  {
    title: "CoindeskIcons",
    defaultVersion: CoindeskIcons,
    coloredVersion: CoindeskIcons,
    imageClassName: "opacity-10",
    imageActiveClassName: "opacity-30 feature-slider-image-active",
  },
  {
    title: "YahooFinanceIcons",
    defaultVersion: YahooFinanceIcons,
    coloredVersion: YahooFinanceIcons,
    imageClassName: "opacity-10",
    imageActiveClassName: "opacity-30 feature-slider-image-active",
  },
];

const Header = () => {
  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { t, errors } = useTranslation("common");
  const { remaining, isFinished } = useCountdown("2023-04-06T13:44:00");
  const [isBuyNowModalOpen, setIsBuyNowModalOpen] = useState(false);

  const handleOpen = state => {
    setIsBuyNowModalOpen(state);
  };

  async function onOpen() {
    setLoading(true);
    await open();
    console.log(isConnected);
    setLoading(false);
  }

  async function onClick() {
    if (isConnected) {
      setIsBuyNowModalOpen(true);
    } else {
      onOpen();
    }
  }

  return (
    <div className="relative h-screen header-bg bg-cover bg-center bg-no-repeat text-center overflow-hidden w-full md:bg-cover md:bg-right md:text-left ">
      {/* <video
        src={headerVideo}
        className="absolute object-cover w-full h-full hidden md:block"
        autoPlay
        playsInline
        loop
        muted
      ></video> */}
      <SideMenu />
      <div className="container h-full text-white pt-32 md:pt-60 md:flex md:flex-col">
        <div className="w-50 mx-auto flex flex-col justify-center z-20 md:h-[400px] lg:px-8 lg:ml-0 xl:w-[615px] xl:px-0">
          <div className="flex flex-col justify-center">
            <h2 className="font-PolySans text-[32px] mb-1 md:mb-0 sm:text-5xl rtl:md:text-5xl ltr:md:text-6xl">
              {t?.homeSection?.preSaleCountdown}
            </h2>
            {!isFinished ? (
              <time className="font-semibold text-7xl text-center md:mt-[29px]">
                {`${remaining.days}:${remaining.hours}:${remaining.minutes}`}
              </time>
            ) : (
              <button
                onClick={onClick}
                className="flex items-center gap-4 mx-auto justify-center py-3 px-[34px] w-full border-2 border-indigo-500 rounded-xl duration-300 bg-indigo-500/30 text-white text-md font-medium mt-10 hover:border-transparent hover:bg-indigo-500 md:w-64 md:rounded-sm md:px-[45px]"
              >
                <RiExchangeFundsLine size={26} /> Buy Now
              </button>
            )}
            {isConnected && (
              <ModalBuyNow
                open={isBuyNowModalOpen}
                onClose={() => setIsBuyNowModalOpen(false)}
                handleOpen={handleOpen}
              />
            )}
          </div>
          {/* <div className="w-full flex justify-center md:justify-start mt-14 lg:rtl:pr-16">
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
          </div> */}
        </div>

        <MobileImageSlider
          containerClassNames="mt-0 w-full"
          slideContainerClassName="w-auto max-w-[173px] h-8"
          slidesPerView={1.9}
          spaceBetween={42}
          slideImageClassName="flex-col h-full"
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
