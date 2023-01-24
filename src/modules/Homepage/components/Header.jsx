import Navbar from "../../../shared/Components/Navbar";
import LadingHeaderBG from "../../../../src/assets/images/ladingHeaderBG.png";
import BloombergIcon from "../../../../src/assets/images/Bloomberg.svg";
import WiredIcon from "../../../../src/assets/images/WIRED.svg";
import CoindeskIcons from "../../../../src/assets/images/Coindesk.svg";
import YahooFinanceIcons from "../../../../src/assets/images/YahooFinance.svg";
import Loudspeaker from "../../../../src/assets/images/loudspeaker.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`2/10/${year}`) - +new Date();
  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    return () => clearTimeout(timer);
  });

  return (
    <div className="relative main-bg bg-center bg-no-repeat text-center overflow-hidden w-full md:bg-cover md:bg-right md:text-left md:h-[810px]">
      <img src={LadingHeaderBG} className="absolute h-full w-full z-0" />
      <div className="fixed w-full z-40">
        <Navbar background={"bg-opacity-0"} />
      </div>
      <div className="container mx-auto text-white mt-64 z-20 flex flex-col">
        <div className="w-50 md:w-[615px] md:h-[400px] z-20">
          <h2 className="md:text-6xl text-4xl mb-6">
            Pre-Sale Countdown
          </h2>
          <h2 className="md:text-6xl text-4xl text-center my-6">
            {`${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}
          </h2>
          <div className="mt-20 h-16 bg-gray-500 bg-opacity-25 rounded-lg w-11/12 flex items-center">
            <div className="ml-3 p-2 rounded-lg  bg-gray-300 bg-opacity-20">
              <img className="rotate-180 w-[25px]" src={`${Loudspeaker}`} />
            </div>
            <p className="ml-2 text-sm" style={{ color: "#E9E9E9" }}>
              Sheikh{" "}
              <span className="underline underline-offset-2" style={{ color: "#00B9FF" }}>
                Marwan Bin Mohammed
              </span>
              {" "} taking develocity in his incubator.
            </p>
          </div>
        </div>

        <div className="flex justify-evenly my-14 md:mt-12 mx-auto gap-1 md:gap-10">
          <img
            className="w-[65px] md:w-[100%] opacity-30 hover:opacity-80"
            src={`${BloombergIcon}`}
          />
          <img
            className="w-[65px] md:w-[100%] opacity-30 hover:opacity-80"
            src={`${WiredIcon}`}
          />
          <img
            className="w-[65px] md:w-[100%] opacity-30 hover:opacity-80"
            src={`${CoindeskIcons}`}
          />
          <img
            className="w-[55px] md:w-[100%] opacity-30 hover:opacity-80"
            src={`${YahooFinanceIcons}`}
          />
        </div>
      </div>
    </div>
  );
}
