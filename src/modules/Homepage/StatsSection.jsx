import { useState } from "react";
import playIcon from "../../assets/images/playVideoIcon.svg";
import icon from "../../assets/images/Icon.svg";
import coins from "../../assets/images/coins.svg";
import crosshair from "../../assets/images/crosshair.svg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function StatsSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [focus, setFocus] = useState(false);
  return (
    <section className="container max-w-[1008px] relative">
      <div className="absolute w-[361px] lg:w-full mx-auto top-[-100px] md:w-10/12 right-0 left-0 flex flex-col md:top-[-150px] lg:top-[-400px] h-[204px] md:h-[400px] lg:h-[700px] md:mb-10">
        <div className="w-full h-10 bg-white hidden md:block">
          <div className="flex justify-between items-center h-full w-12/12 md:w-8/12 mr-3">
            <div className="flex ml-4">
              <span className="h-3 w-3 rounded-full bg-[#EE6A5F] "></span>
              <span className="h-3 w-3 rounded-full mx-2 bg-[#F5BE50]"></span>
              <span className="h-3 w-3 rounded-full bg-[#62C554]"></span>
            </div>
            <div className="bg-slate-200 w-3/4 md:w-1/2">
              <h5 className="text-sm py-[2px] text-center text-[#3F444D]">
                develocity.finance/scanner/
              </h5>
            </div>
          </div>
        </div>
        <div
          className={`h-full w-full ${
            !showVideo && "stats-bg"
          } rounded-md flex justify-center items-center`}
        >
          <iframe
            className={`${showVideo ? "w-full" : "hidden"} h-full`}
            src="https://www.youtube.com/embed/WjoplqS1u18"
            title="8K VIDEOS | World 8K Videos HDR UltraHD  (120 FPS) | Sony Demo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />

          {!showVideo && (
            <button onClick={() => setShowVideo(true)}>
              <img className="w-12 h-48" src={playIcon} />
            </button>
          )}
        </div>
      </div>
      <div className="pt-[166px] pb-[92px] md:pt-[400px] lg:flex lg:flex-row lg:gap-x-36 justify-center mx-auto items-center z-40 px-4 md:px-0">
        <div className="flex flex-col justify-center items-center my-12">
          <div className="rounded-full bg-slate-800 w-12 h-12 flex justify-center items-center p-2">
            <img className="md:w-4" src={crosshair} />
          </div>
          <CountUp
            start={focus ? 0 : null}
            end={99.8}
            duration={3}
            decimals={1}
            decimal=","
            suffix="%"
            redraw={true}
          >
            {({ countUpRef }) => (
              <VisibilitySensor
                onChange={(isVisible) => {
                  if (isVisible) {
                    setFocus(true);
                  }
                }}
                delayedCall
              >
                <h1
                  className="font-sans text-6xl text-white mt-4 mb-2"
                  ref={countUpRef}
                ></h1>
              </VisibilitySensor>
            )}
          </CountUp>
          <label className="text-[#B8B8B8]">Accuracy</label>
        </div>
        <div className="flex flex-col justify-center items-center my-12">
          <div className="rounded-full bg-slate-800 w-12 h-12 flex justify-center items-center p-2">
            <img className="md:w-4" src={coins} />
          </div>
          <CountUp
            start={focus ? 0 : null}
            end={7}
            duration={3}
            decimals={4}
            decimal=","
          >
            {({ countUpRef }) => (
              <VisibilitySensor
                onChange={(isVisible) => {
                  if (isVisible) {
                    setFocus(true);
                  }
                }}
                delayedCall
              >
                <h1
                  className="font-sans text-6xl text-white mt-4 mb-2"
                  ref={countUpRef}
                ></h1>
              </VisibilitySensor>
            )}
          </CountUp>
          <label className="text-[#B8B8B8]">Tokens in database</label>
        </div>
        <div className="flex flex-col justify-center items-center my-12">
          <div className="rounded-full bg-slate-800 w-12 h-12 flex justify-center items-center p-2">
            <img className="md:w-4" src={icon} />
          </div>
          <CountUp
            scrollSpyOnce={true}
            start={focus ? 0 : null}
            end={25}
            duration={3}
            decimal=","
            suffix="K"
          >
            {({ countUpRef }) => (
              <VisibilitySensor
                onChange={(isVisible) => {
                  if (isVisible) {
                    setFocus(true);
                  }
                }}
                delayedCall
              >
                <h1
                  className="font-sans text-6xl text-white mt-4 mb-2"
                  ref={countUpRef}
                ></h1>
              </VisibilitySensor>
            )}
          </CountUp>
          <label className="text-[#B8B8B8]">Daily visitors</label>
        </div>
      </div>
    </section>
  );
}
