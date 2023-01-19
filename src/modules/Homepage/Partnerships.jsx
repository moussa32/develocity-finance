import React from "react";
import coinbase from "../../assets/images/coinbase.svg";
import bitmex from "../../assets/images/bitmex.svg";
import mtCom from "../../assets/images/mt-com.svg";
import binance from "../../assets/images/binance.svg";
import quote from "../../assets/images/quote-icon.svg";

const Partnerships = () => {
  return (
    <div className="container mx-auto text-center mt-48 mb-24">
      <h2 className="text-[#29233B] text-4xl md:text-6xl font-medium md:font-normal">Partnerships that Last</h2>
      <h6 className="text-[#525C7A] mt-3">
        We have connected with amazing people, businesses, and organizations for
        the past 2 years. qdhj
      </h6>
      <div className="flex justify-evenly mt-8 px-32 mx-auto gap-1 lg:gap-14">
        <img
          className="w-[65px] md:w-[180px] lg:w-[100%] hover:fill-[#525C7A]"
          src={`${coinbase}`}
          alt="coinbase icon"
        />
        <img
          className="w-[65px] md:w-[180px] lg:w-[100%] hover:opacity-80"
          src={`${bitmex}`}
          alt="bitmex icon"
        />
        <img
          className="w-[65px] md:w-[180px] lg:w-[100%] hover:opacity-80"
          src={`${mtCom}`}
          alt="mt.com icon"
        />
        <img
          className="w-[65px] md:w-[180px] lg:w-[100%] hover:opacity-80"
          src={`${binance}`}
          alt="binance icon"
        />
      </div>
      <p className="text-2xl md:text-4xl relative font-medium text-neutral-900 mt-16 md:mt-24 lg:px-52">
        <img className="absolute -z-10 right-28 -top-10 md:right-[47%] lg:bottom-[170px]" src={`${quote}`} alt="quote icon"/>
        “We entrepreneurs are loners, vagabonds, troublemakers. Success is
        simply a matter of finding and surrounding ourselves with those
        open-minded and clever souls who can take our insanity and put it to
        good use.”
      </p>
      <h6 className="text-lg font-semibold mt-5 md:mt-7">Brian Armstrong</h6>
      <h6 className="text-[#525C7A] text-base">CEO of Coinbase</h6>
    </div>
  );
};

export default Partnerships;
