import Image from "next/image";
import phaseOne from "../../public/assets/images/phase1.svg";
import phaseTwo from "../../public/assets/images/phase2.svg";
import phaseThree from "../../public/assets/images/phase3.svg";
import phaseFour from "../../public/assets/images/phase4.svg";
import quote from "../../public/assets/images/roadmap-quote.svg";
import RoadMapSlider from "./RoadMapSlider";
import StatsSection from "./StatsSection";

const RoadMap = () => {
  return (
    <>
      <div className="relative roadmap-bg bg-center bg-no-repeat md:bg-cover my-48 bg-[#0A0D14] text-white pb-16 lg:mt-[300px]">
        <StatsSection />
        <h2 className="text-center font-PolySans text-[28px] md:text-6xl px-4 md:px-6">
          Roadmap
        </h2>
        <p className="mx-auto text-center text-[#B8B8B8] md:w-[320px] lg:w-[800px] text-base md:text-lg mt-4 px-4 md:px-6">
          Develocity aspires to present its final project in four primary
          stages. Each stage is presented separately and merged in the
          post-final stage to create a decentralised platform, which would be
          distinctively in terms of technology and development based on Web 3.0.
        </p>
        <div className="hidden md:block px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-20 gap-8 lg:gap-2 mt-16">
            <div className="mx-auto text-center">
              <Image className="mb-3" src={phaseOne} alt="phase 1 icon" />
              <h3 className="text-2xl font-semibold">Phase 1</h3>
              <span className="text-base text-[#B8B8B8] mt-2">Live</span>
            </div>
            <div className="mx-auto text-center">
              <Image className="mb-3" src={phaseTwo} alt="phase 2 icon" />
              <h3 className="text-2xl font-semibold">Phase 2</h3>
              <span className="text-base text-[#B8B8B8] mt-2">We are here</span>
            </div>
            <div className="mx-auto text-center">
              <Image className="mb-3" src={phaseThree} alt="phase 3 icon" />
              <h3 className="text-2xl font-semibold">Phase 3</h3>
              <span className="text-base text-[#B8B8B8] mt-2">Upcoming</span>
            </div>
            <div className="mx-auto text-center">
              <Image className="mb-3" src={phaseFour} alt="phase 4 icon" />
              <h3 className="text-2xl font-semibold">Phase 4</h3>
              <span className="text-base text-[#B8B8B8] mt-2">Upcoming</span>
            </div>
          </div>
          <div className="hidden relative md:grid grid-cols-4 gap-8 lg:gap-2 lg:px-20 mt-9">
            <hr className="absolute block w-full top-2/4"></hr>
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
              <h4 className="text-center text-2xl font-semibold">
                Fair Launch
              </h4>
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
        </div>
        <RoadMapSlider />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-24 lg:mt-48 gap-8 px-4 md:px-6">
          <div className="w-[92vw] h-[78.5vw] md:w-[46vw] md:h-[42vw] my-auto lg:w-[488px] lg:h-[442px] mx-auto bg-gradient-to-br from-[#1D2B64] to-[#F8CDDA] rounded-lg"></div>
          <div className="text-center">
            <p className="text-xl text-[#FAFAFA] md:text-3xl relative z-20 font-medium mt-11 md:mt-24">
              <Image
                className="absolute opacity-20 -z-10 right-32 -top-9 md:right-[38%] lg:right-[45%] lg:bottom-[170px]"
                src={quote}
                alt="quote icon"
              />
              “We entrepreneurs are loners, vagabonds, troublemakers. Success is
              simply a matter of finding and surrounding ourselves with those
              open-minded and clever souls who can take our insanity and put it
              to good use.”
            </p>
            <h6 className="text-base italic px-16 md:px-0 md:not-italic md:text-lg text-[#737373] font-semibold mt-6 md:mt-7">
              Marwan bin Mohammed bin Rashid Al Maktoum
            </h6>
            <h6 className="hidden md:block text-[#B8B8B8] text-base">
              sheikhmarwanmaktoum.com
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
