import { useEffect, useState } from "react";
import BloombergIcon from "../../assets/images/Bloomberg.svg";
import WiredIcon from "../../assets/images/WIRED.svg";
import CoindeskIcons from "../../assets/images/Coindesk.svg";
import YahooFinanceIcons from "../../assets/images/YahooFinance.svg";
import Loudspeaker from "../../assets/images/loudspeaker.svg";
import SideMenu from "../../shared/Components/SideMenu";
import { calculateTimeLeft } from "../../shared/Util/countdown";

const Header = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="relative header-bg bg-cover bg-center bg-no-repeat text-center overflow-hidden w-full md:bg-cover md:bg-right md:text-left md:h-[810px]">
      <SideMenu />
      <div className="container mx-auto text-white mt-32 md:mt-60 z-20 flex flex-col">
        <div className="w-50 mx-auto flex flex-col justify-center z-20 md:h-[400px] lg:px-8 lg:ml-0 xl:w-[615px] xl:px-0">
          <div className="flex flex-col justify-center">
            <h2 className="font-PolySans text-[42px] mb-6 md:mb-0 sm:text-5xl md:text-6xl">
              Pre-Sale Countdown
            </h2>
            <time className="font-semibold text-4xl text-center md:mt-[29px] sm:text-5xl md:text-7xl">
              {`${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}
            </time>
          </div>
          <div className=" w-full flex justify-center md:justify-start">
            <div className="px-3.5 mt-[56px] md:mt-[125px] w-11/12 h-16 bg-gray-500 bg-opacity-25 rounded-lg flex items-center gap-3">
              <div className="flex items-center justify-center rounded-lg w-9 h-9 bg-gray-300 bg-opacity-20 basis-9 shrink-0">
                <img
                  className="w-[18px] h-[18px] md:h-auto md:w-auto"
                  src={`${Loudspeaker}`}
                />
              </div>
              <p
                className="ml-2 text-xs xs:text-sm"
                style={{ color: "#E9E9E9" }}
              >
                Sheikh{" "}
                <span
                  className="underline underline-offset-2"
                  style={{ color: "#00B9FF" }}
                >
                  Marwan Bin Mohammed
                </span>{" "}
                taking develocity in his incubator.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[409px] md:mt-24  mb-14 flex justify-center md:flex-wrap md:justify-evenly mx-auto px-4 gap-x-11 md:gap-x-3 gap-y-6 md:my-14 md:gap-10 lg:gap-y-0">
          <img
            className="max-w-[150px] md:max-w-[100%] opacity-30 hover:opacity-80"
            src={`${BloombergIcon}`}
          />
          <img
            className="max-w-[150px] md:max-w-[100%] opacity-30 hover:opacity-80"
            src={`${WiredIcon}`}
          />
          <img
            className="max-w-[150px] md:max-w-[100%] opacity-30 hover:opacity-80"
            src={`${CoindeskIcons}`}
          />
          <img
            className="max-w-[150px] md:max-w-[100%] opacity-30 hover:opacity-80"
            src={`${YahooFinanceIcons}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
