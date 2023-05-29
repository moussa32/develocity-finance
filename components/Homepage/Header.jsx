// import BloombergIcon from "../../public/assets/images/Bloomberg.svg";
// import WiredIcon from "../../public/assets/images/WIRED.svg";
// import CoindeskIcons from "../../public/assets/images/Coindesk.svg";
// import YahooFinanceIcons from "../../public/assets/images/YahooFinance.svg";
import SideMenu from "../../shared/Components/SideMenu";
// import MobileImageSlider from "../../shared/Components/MobileImageSlider";
// import Loudspeaker from "../../public/assets/images/loudspeaker.svg";
import headerVideo from "../../public/assets/video/Pre-Sale-Header-Background.mp4";
import headerMobileVideo from "../../public/assets/video/Pre-Sale-Header-Background-Mobile.mp4";
import nationalTimes from "../../public/assets/images/national-times.svg";
import blockchianNews from "../../public/assets/images/blockchian_news.svg";
import emiratesFreePress from "../../public/assets/images/emirates-free-press.svg";
import abuDhabiReporter from "../../public/assets/images/abu-dhabi-reporter.svg"
import APNews from "../../public/assets/images/AP_logo.jpg"
// import Image from "next/image";
import useTranslation from "@/shared/Hooks/useTranslation";
import  ntdown from "@/shared/Hooks/useCountdown";
import { useWeb3Modal } from "@web3modal/react";
import { useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Image from "next/image";
import ModalBuyNow from "./Modal/ModalBuyNow";
import BuyToken from "./BuyToken";
import Stages from "./AllStagesModal/Stages";
import MobileImageSlider from "../../shared/Components/MobileImageSlider";
import { Autoplay } from "swiper";

const Header = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { t, errors } = useTranslation("common");
  const { remaining, isFinished } = useCountdown(1584119600000);
  const [isBuyNowModalOpen, setIsBuyNowModalOpen] = useState(false);
  const [openAfterSuccessConnection, setOpenAfterSuccessConnection] = useState(false);
  const [isAllStagesOpen, setIsAllStagesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleOpen = state => {
    setIsBuyNowModalOpen(state);
  };

  useEffect(() => {
    if (openAfterSuccessConnection) {
      setIsBuyNowModalOpen(true);
    }
  }, [openAfterSuccessConnection]);

  useEffect(() => {
    function detectMobile() {
      return window.innerWidth < 520; // 520 is the breakpoint for mobile devices
    }

    setIsMobile(detectMobile());

    function handleResize() {
      setIsMobile(detectMobile());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onOpen = async () => {
    await open({
      route: "SelectNetwork",
    });
    setOpenAfterSuccessConnection(true);
  };

  const closeModal = () => {
    setIsBuyNowModalOpen(false);
  };

  const onClick = useCallback(async () => {
    if (isConnected) {
      setIsBuyNowModalOpen(true);
    } else {
      onOpen();
    }
  }, [isConnected, onOpen]);

  const handleOpenAllStages = useCallback(() => {
    setIsAllStagesOpen(true);
  }, [isAllStagesOpen]);

  const handleCloseAllStages = useCallback(() => {
    setIsAllStagesOpen(false);
  }, [isAllStagesOpen]);

  const partnerships = [
    {
      title: "US National Times",
      link: "https://www.usnationaltimes.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust",
      defaultVersion: nationalTimes,
      coloredVersion: nationalTimes,
      imageActiveClassName: "max-w-[150px] md:max-w-[100%] opacity-30 opacity-80",
      imageClassName: "max-w-[150px] md:max-w-[100%] opacity-30 ",
    },
    {
      title: "Blockchian News",
      link: "https://www.blockchainnewsonline.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust",
      defaultVersion: blockchianNews,
      coloredVersion: blockchianNews,
      imageActiveClassName: "max-w-[150px] md:max-w-[100%] opacity-30 opacity-80",
      imageClassName: "max-w-[150px] md:max-w-[100%] opacity-30 ",
    },
    {
      title: "Emirates Free Press",
      link: "https://www.emiratesfreepress.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust",
      defaultVersion: emiratesFreePress,
      coloredVersion: emiratesFreePress,
      imageActiveClassName: "max-w-[150px] md:max-w-[100%] opacity-30 opacity-80",
      imageClassName: "max-w-[150px] md:max-w-[100%] opacity-30 ",
    },
    {
      title: "AP News",
      link: "https://apnews.com/press-release/ein-presswire-newsmatics/technology-blockchain-ein-presswire-newsmatics-2ee78691e9e218b951d069b1d5e07ea4",
      defaultVersion: APNews,
      coloredVersion: APNews,
      imageActiveClassName: "max-w-[150px] md:max-w-[100%] opacity-30 opacity-80",
      imageClassName: "max-w-[150px] md:max-w-[100%] opacity-30 ",
    }
    ,
    {
      title: "Abu Dhabi Reporter",
      link: "https://www.abudhabireporter.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust",
      defaultVersion: abuDhabiReporter,
      coloredVersion: abuDhabiReporter,
      imageActiveClassName: "max-w-[150px] md:max-w-[100%] opacity-30 opacity-80",
      imageClassName: "max-w-[150px] md:max-w-[100%] opacity-30 ",
    }
  ];


  return (
    <div className="relative h-screen header-bg bg-cover bg-center bg-no-repeat text-center overflow-hidden w-full md:bg-cover md:bg-right md:text-left ">
      {isFinished && (
        <video
          src={isMobile ? headerMobileVideo : headerVideo}
          className="absolute z-0 object-cover w-full h-full block"
          autoPlay
          playsInline
          loop
          muted
        ></video>
      )}
      <SideMenu />
      <div className="container h-full text-white pt-32 md:pt-60 md:flex md:flex-col">
        <div className="w-50 relative mx-auto flex flex-col justify-center z-20 lg:px-8 lg:ml-0 xl:w-[700px] xl:px-0">
          <div className="flex flex-col justify-center">
            {isFinished ? (
              <BuyToken handleBuyNowButton={onClick} openAllStagesModal={handleOpenAllStages} />
            ) : (
              <>
                <h2 className="font-PolySans text-[28px] mb-1 md:mb-0 sm:text-5xl rtl:md:text-5xl ltr:md:text-6xl uppercase">
                  {t?.homeSection?.preSaleCountdown}
                </h2>
                <time className="font-semibold text-6xl text-[42px] lg:text-[70px] text-center md:mt-[29px]">
                  {`${remaining.days}:${remaining.hours}:${remaining.minutes}:${remaining.seconds}`}
                </time>
              </>
            )}
            {isConnected && <ModalBuyNow open={isBuyNowModalOpen} onClose={closeModal} handleOpen={handleOpen} />}
            <Stages show={isAllStagesOpen} onClose={handleCloseAllStages} />
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
        <div className="hidden mt-auto mb-12 justify-center mx-auto px-4 gap-x-11 gap-y-6 md:flex md:gap-10 md:gap-x-10 md:flex-wrap md:justify-evenly lg:gap-x-14 lg:mb-20 lg:gap-y-0">
          <a href="https://www.emiratesfreepress.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust">
          <Image
            className="lg:max-w-[100px] md:max-w-[100%] opacity-30 hover:opacity-80"
            src={emiratesFreePress}
            alt="Emirates Free Press"
          />
          </a>
          <a href="https://www.usnationaltimes.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust">
          <Image 
            className="lg:max-w-[100px] md:max-w-[100%] opacity-30 hover:opacity-80" 
            src={nationalTimes} 
            alt="US National Times" 
          />
          </a>
          <a href="https://www.emiratesfreepress.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust">
          <Image
            className="lg:max-w-[100px] md:max-w-[100%] opacity-30 hover:opacity-80"
            src={blockchianNews}
            alt="Blockchian News"
          />
          </a>
          <a href="https://apnews.com/press-release/ein-presswire-newsmatics/technology-blockchain-ein-presswire-newsmatics-2ee78691e9e218b951d069b1d5e07ea4">
          <Image
            className="lg:max-w-[100px] md:max-w-[100%] opacity-30 hover:opacity-80"
            src={APNews}
            alt="AP NEWs"
          />
          </a>
          <a href="https://www.abudhabireporter.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust">
          <Image
            className="lg:max-w-[100px] md:max-w-[100%] opacity-30 hover:opacity-80"
            src={abuDhabiReporter}
            alt="Abu Dhabi Reporter"
          />
          </a>
        </div>
          <MobileImageSlider
              images={partnerships}
              slidesPerView={1.8}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              initialSlide={1}
              modules={[Autoplay]}
              containerClassNames="mt-1 max-h-[150px] lg:!hidden"
              slideImageClassName="h-[100px]"
          />
        
      </div>
    </div>
    
  );
};

export default Header;
