import React from "react";
import phaseOne from "../../assets/images/phase1.svg";
import phaseTwo from "../../assets/images/phase2.svg";
import phaseThree from "../../assets/images/phase3.svg";
import phaseFour from "../../assets/images/phase4.svg";
import phaseLine from "../../assets/images/phases-line.svg";
import quote from "../../assets/images/roadmap-quote.svg";
import CountUp from "react-countup";
import icon from "../../assets/images/Icon.svg";
import coins from "../../assets/images/coins.svg";
import crosshair from "../../assets/images/crosshair.svg";

const RoadMap = () => {
  return (
    <>
      <div className="roadmap-bg bg-center bg-no-repeat md:bg-cover my-48 bg-[#0A0D14] text-white py-24 px-6">
        <div className="pt-[100px] md:pt-[400px] pb-[100px] flex flex-col lg:flex-row justify-between items-center w-6/12 mx-auto z-50">
          <div className="flex flex-col justify-center items-center my-14">
            <div className="rounded-full bg-slate-800  p-2">
              <img className="w-4" src={crosshair} />
            </div>
            <CountUp
              start={0}
              end={99.8}
              duration={3}
              decimals={1}
              decimal=","
              suffix="%"
            >
              {({ countUpRef }) => (
                <h1
                  className="font-sans text-6xl text-white my-2"
                  ref={countUpRef}
                ></h1>
              )}
            </CountUp>
            <label className="text-gray-500">Accuracy</label>
          </div>
          <div className="flex flex-col justify-center items-center my-14">
            <div className="rounded-full bg-slate-800  p-2">
              <img className="w-4" src={coins} />
            </div>
            <CountUp start={0} end={7} duration={3} decimals={4} decimal=",">
              {({ countUpRef }) => (
                <h1
                  className="font-sans text-6xl text-white my-2"
                  ref={countUpRef}
                ></h1>
              )}
            </CountUp>
            <label className="text-gray-500">Tokens in database</label>
          </div>
          <div className="flex flex-col justify-center items-center my-14">
            <div className="rounded-full bg-slate-800  p-2">
              <img className="w-4" src={icon} />
            </div>
            <CountUp start={0} end={25} duration={3} decimal="," suffix="K">
              {({ countUpRef }) => (
                <h1
                  className="font-sans text-6xl text-white my-2"
                  ref={countUpRef}
                ></h1>
              )}
            </CountUp>
            <label className="text-gray-500">Daily visitors</label>
          </div>
        </div>
        <h2 className="text-center font-PolySans text-6xl">Roadmap</h2>
        <p className="mx-auto text-center text-[#B8B8B8] md:w-[320px] lg:w-[800px] text-lg mt-2">
          Develocity aspires to present its final project in four primary
          stages. Each stage is presented separately and merged in the
          post-final stage to create a decentralised platform, which would be
          distinctively in terms of technology and development based on Web 3.0.
        </p>
        {/*<div className="flex flex-row md:flex-col justify-around md:justify-between"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-20 gap-8 lg:gap-2 mt-16">
          <div className="mx-auto text-center">
            <img className="mb-3" src={phaseOne} alt="phase 1 icon" />
            <h3 className="text-2xl font-semibold">Phase 1</h3>
            <span className="text-base text-[#B8B8B8] mt-2">Live</span>
          </div>
          <div className="mx-auto text-center">
            <img className="mb-3" src={phaseTwo} alt="phase 2 icon" />
            <h3 className="text-2xl font-semibold">Phase 2</h3>
            <span className="text-base text-[#B8B8B8] mt-2">We are here</span>
          </div>
          <div className="mx-auto text-center">
            <img className="mb-3" src={phaseThree} alt="phase 3 icon" />
            <h3 className="text-2xl font-semibold">Phase 3</h3>
            <span className="text-base text-[#B8B8B8] mt-2">Upcoming</span>
          </div>
          <div className="mx-auto text-center">
            <img className="mb-3" src={phaseFour} alt="phase 4 icon" />
            <h3 className="text-2xl font-semibold">Phase 4</h3>
            <span className="text-base text-[#B8B8B8] mt-2">Upcoming</span>
          </div>
        </div>
        <div className="hidden relative md:grid grid-cols-4 gap-8 lg:gap-2 lg:px-20 mt-9">
          <hr className="absolute block w-full top-2/4"></hr>
          {/*<div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-white md:hidden block"></div> */}
          <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2 lg:px-20 mt-9">
          <div className="w-[280px] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
            <h4 className="text-center text-2xl font-semibold">Startup</h4>
            <ul className="text-base mt-4">
              <li>• Website Launching</li>
              <li>• Project #1 Introduction</li>
              <li>• Company Registration</li>
              <li>• License & Legale Opinion</li>
              <li>• Opening Office In Dubai</li>
            </ul>
          </div>
          <div className="w-[280px] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
            <h4 className="text-center text-2xl font-semibold">Fair Launch</h4>
            <ul className="text-base mt-4">
              <li>• Publishing Develocity Tool</li>
              <li>• Starting Pre-Sale</li>
              <li>• Marketing Campaign</li>
              <li>• Project #2 Introduction</li>
              <li>• Promoting & Marketing</li>
            </ul>
          </div>
          <div className="w-[280px] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
            <h4 className="text-center text-2xl font-semibold">Expansion</h4>
            <ul className="text-base mt-4">
              <li>• Publishing SWAP Tool</li>
              <li>• Marketing Campaign</li>
              <li>• Project #3 Introduction</li>
              <li>• NFT First Edition</li>
              <li>• Centralized Exchanges</li>
            </ul>
          </div>
          <div className="w-[280px] bg-opacity-5 mx-auto bg-white rounded-xl p-6">
            <h4 className="text-center text-2xl font-semibold">
              Opportunities
            </h4>
            <ul className="text-base mt-4">
              <li>• Publishing Bridge</li>
              <li>• Project #4 Introduction</li>
              <li>• Marketing Campaign</li>
              <li>• Promoting & Marketing</li>
              <li>• Looking For Opportunities</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-24 lg:mt-48 gap-8">
          <div className="w-72 h-[242px] lg:w-[488px] my-auto lg:h-[442px] mx-auto bg-[#E1E1E1]"></div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl relative z-20 font-medium mt-16 md:mt-24">
              <img
                className="absolute opacity-20 -z-10 right-32 -top-10 md:right-[38%] lg:right-[45%] lg:bottom-[170px]"
                src={`${quote}`}
                alt="quote icon"
              />
              “We entrepreneurs are loners, vagabonds, troublemakers. Success is
              simply a matter of finding and surrounding ourselves with those
              open-minded and clever souls who can take our insanity and put it
              to good use.”
            </p>
            <h6 className="text-lg font-semibold mt-5 md:mt-7">
              Marwan bin Mohammed bin Rashid Al Maktoum
            </h6>
            <h6 className="text-[#B8B8B8] text-base">
              sheikhmarwanmaktoum.com
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
