import React from "react";
import phaseOne from "../../assets/images/phase1.svg"
import phaseTwo from "../../assets/images/phase2.svg"
import phaseThree from "../../assets/images/phase3.svg"
import phaseFour from "../../assets/images/phase4.svg"
import phaseLine from "../../assets/images/phases-line.svg"

const RoadMap = () => {
  return (
    <div className=" my-48 bg-slate-900 text-white p-6">
      <h2 className="text-center text-6xl">Roadmap</h2>
      <p className="text-center text-lg lg:px-60 mt-2">
        Develocity aspires to present its final project in four primary stages.
        Each stage is presented separately and merged in the post-final stage to
        create a decentralised platform, which would be distinctively in terms
        of technology and development based on Web 3.0.
      </p>
      {/*<div className="flex flex-row md:flex-col justify-around md:justify-between"> */}
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-9">
          <div className="mx-auto text-center">
            <img className="mb-3" src={phaseOne} alt="phase 1 icon"/>
            <h3 className="text-2xl font-semibold">Phase 1</h3>
            <span className="text-base mt-2">Live</span>
          </div>
          <div className="mx-auto text-center">
            <img className="mb-3" src={phaseTwo} alt="phase 2 icon"/>
            <h3 className="text-2xl font-semibold">Phase 2</h3>
            <span className="text-base mt-2">We are here</span>
          </div>
          <div className="mx-auto text-center">
            <img className="mb-3" src={phaseThree} alt="phase 3 icon"/>
            <h3 className="text-2xl font-semibold">Phase 3</h3>
            <span className="text-base mt-2">Upcoming</span>
          </div>
          <div className="mx-auto text-center">
            <img className="mb-3" src={phaseFour} alt="phase 4 icon"/>
            <h3 className="text-2xl font-semibold">Phase 4</h3>
            <span className="text-base mt-2">Upcoming</span>
          </div>
        </div>
        <div className="relative grid grid-cols-4 gap-8 mt-9">
          <hr className="absolute block w-full top-2/4"></hr>
          {/*<div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-white md:hidden block"></div> */}
          <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
          <span className="w-[14px] h-[14px] mx-auto my-auto bg-white rounded-full"></span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-9">
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
          <h4 className="text-center text-2xl font-semibold">Opportunities</h4>
          <ul className="text-base mt-4">
            <li>• Publishing Bridge</li>
            <li>• Project #4 Introduction</li>
            <li>• Marketing Campaign</li>
            <li>• Promoting & Marketing</li>
            <li>• Looking For Opportunities</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default RoadMap;
