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
import PartnershipIconsSlider from "./PartnershipIconsSlider";

const Partnerships = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container mx-auto text-center md:py-24 px-4 md:px-8 lg:px-0">
        <h2 className="text-[#29233B] font-PolySans text-[28px] md:text-6xl font-medium md:font-normal">
          Partnerships that Last
        </h2>
        <h6 className="text-[#525C7A] text-[15px] md:text-lg mt-4">
          We have connected with amazing people, businesses, and organizations
          for the past 2 years.
        </h6>
        <div className="hidden md:grid grid-cols-4 h-[44px] mt-8 px-4 md:px-0 lg:px-32 mx-auto gap-1 lg:gap-14">
          <div className="group relative w-[65px] md:w-[170px] lg:w-[180px]">
            <img
              className="absolute group-hover:opacity-0  hover:cursor-pointer"
              src={`${coinbase}`}
              alt="coinbase icon"
            />
            <img
              className="absolute opacity-0 group-hover:opacity-100 hover:cursor-pointer"
              src={`${coinbaseColored}`}
              alt="coinbase icon"
            />
          </div>

          <div className="group relative w-[65px] md:w-[170px] lg:w-[180px]">
            <img
              className="absolute group-hover:opacity-0  hover:cursor-pointer"
              src={`${bitmex}`}
              alt="bitmex icon"
            />
            <img
              className="absolute opacity-0 group-hover:opacity-100 hover:cursor-pointer"
              src={`${bitmexColored}`}
              alt="bitmex icon"
            />
          </div>

          <div className="group relative w-[65px] md:w-[170px] lg:w-[180px]">
            <img
              className="absolute group-hover:opacity-0  hover:cursor-pointer"
              src={`${xtCom}`}
              alt="xtCom icon"
            />
            <img
              className="absolute opacity-0 group-hover:opacity-100 hover:cursor-pointer"
              src={`${xtComColored}`}
              alt="xtCom icon"
            />
          </div>

          <div className="group relative w-[65px] md:w-[170px] lg:w-[180px]">
            <img
              className="absolute group-hover:opacity-0  hover:cursor-pointer"
              src={`${binance}`}
              alt="binance icon"
            />
            <img
              className="absolute opacity-0 group-hover:opacity-100 hover:cursor-pointer"
              src={`${binanceColored}`}
              alt="binance icon"
            />
          </div>
        </div>
        <PartnershipIconsSlider />
        <Slider />
      </div>
    </div>
  );
};

export default Partnerships;
