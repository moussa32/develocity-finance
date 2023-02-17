import { useEffect, useState } from "react";
import BloombergIcon from "../../public/assets/images/Bloomberg.svg";
import WiredIcon from "../../public/assets/images/WIRED.svg";
import CoindeskIcons from "../../public/assets/images/Coindesk.svg";
import YahooFinanceIcons from "../../public/assets/images/YahooFinance.svg";
import Loudspeaker from "../../public/assets/images/loudspeaker.svg";
import SideMenu from "../../shared/Components/SideMenu";
import { calculateTimeLeft } from "../../shared/Util/countdown";
import MobileImageSlider from "../../shared/Components/MobileImageSlider";
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
    <div className="relative header-bg bg-cover bg-center bg-no-repeat text-center overflow-hidden w-full md:bg-cover md:bg-right md:text-left h-[852px] md:h-[810px]">
      <SideMenu />
      <div className="container text-white mt-32 md:mt-60 z-20 md:flex md:flex-col">
        <div className="w-50 mx-auto flex flex-col justify-center z-20 md:h-[400px] lg:px-8 lg:ml-0 xl:w-[615px] xl:px-0">
          <div className="flex flex-col justify-center">
            <h2 className="font-PolySans text-[32px] mb-1 md:mb-0 sm:text-5xl md:text-6xl">Pre-Sale Countdown</h2>
            <time className="font-semibold text-7xl text-center md:mt-[29px]">
              {`${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}`}
            </time>
          </div>
          <div className="w-full flex justify-center md:justify-start mt-14">
            <div className="px-3.5 md:mt-[125px] h-16 bg-gray-500 bg-opacity-25 rounded-lg flex items-center gap-3 w-[329px] md:w-auto">
              <div className="flex items-center p-[5px] justify-center rounded-lg w-9 h-9 bg-gray-300 bg-opacity-20 basis-9 shrink-0">
                <Image className="w-full md:h-auto md:w-auto" src={Loudspeaker} alt="Loud Speaker" />
              </div>
              <div className="flex flex-col md:flex-row md:gap-x-1 md:items-center items-start text-xs xs:text-sm text-[#E9E9E9]">
                <p>
                  Sheikh <span className="underline underline-offset-2 text-[#00B9FF]">Marwan Bin Mohammed</span>
                </p>
                <span className="block md:inline">taking develocity in his incubator.</span>
              </div>
            </div>
          </div>
        </div>

        <MobileImageSlider
          containerClassNames="w-full mt-[100%]"
          slideContainerClassName="w-auto max-w-[173px] h-8"
          slidesPerView={1.9}
          spaceBetween={42}
          images={featuredImages}
          initialSlide={1}
        />
        <div className="hidden mt-[409px] md:flex md:mt-24 mb-14 justify-center md:flex-wrap md:justify-evenly mx-auto px-4 gap-x-11 md:gap-x-3 gap-y-6 md:my-14 md:gap-10 lg:gap-y-0">
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
