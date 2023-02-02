import React from "react";
import coinbase from "../../assets/images/coinbase.svg";
import bitmex from "../../assets/images/bitmex.svg";
import xtCom from "../../assets/images/xt.svg";
import binance from "../../assets/images/binance.svg";
import coinbaseColored from "../../assets/images/coinbase-colored.svg";
import bitmexColored from "../../assets/images/bitmex-colored.svg";
import xtComColored from "../../assets/images/xt-colored.svg";
import binanceColored from "../../assets/images/binance-colored.svg";
import Slider from "./Slider";
import MobileImageSlider from "../../shared/Components/MobileImageSlider";

const partnerships = [
  {
    title: "coinbase",
    defaultVersion: coinbase,
    coloredVersion: coinbaseColored,
  },
  {
    title: "bitmex",
    defaultVersion: bitmex,
    coloredVersion: bitmexColored,
  },
  {
    title: "xtCom",
    defaultVersion: xtCom,
    coloredVersion: xtComColored,
  },
  {
    title: "binance",
    defaultVersion: binance,
    coloredVersion: binanceColored,
  },
];

const Partnerships = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container mx-auto text-center md:py-24 lg:px-0">
        <h2 className="text-[#29233B] font-PolySans text-[28px] px-4 md:px-8 md:text-6xl font-medium md:font-normal">
          Partnerships that Last
        </h2>
        <h6 className="text-[#525C7A] text-[15px] px-4 md:px-8 md:text-lg mt-4">
          We have connected with amazing people, businesses, and organizations
          for the past 2 years.
        </h6>
        <div className="hidden md:grid grid-cols-4 h-[44px] mt-8 px-4 md:px-2 lg:px-32 mx-auto gap-1 lg:gap-14">
          {partnerships.map(({ title, defaultVersion, coloredVersion }) => (
            <div
              key={title}
              className="group relative w-[65px] md:w-[170px] lg:w-[180px]"
            >
              <img
                className="absolute group-hover:opacity-0  hover:cursor-pointer"
                src={defaultVersion}
                alt={title}
              />
              <img
                className="absolute opacity-0 group-hover:opacity-100 hover:cursor-pointer"
                src={coloredVersion}
                alt={title}
              />
            </div>
          ))}
        </div>
        <MobileImageSlider
          images={partnerships}
          slidesPerView={1.6}
          initialSlide={2}
          slideImageClassName="h-11 w-[200px]"
        />
        <Slider />
      </div>
    </div>
  );
};

export default Partnerships;
