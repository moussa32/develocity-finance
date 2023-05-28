import { memo, useState } from "react";
// import playIcon from "../../public/assets/images/playVideoIcon.svg";
import icon from "../../public/assets/images/Icon.png";
import coins from "../../public/assets/images/coins.png";
import crosshair from "../../public/assets/images/crosshair.png";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";
import useTranslation from "@/shared/Hooks/useTranslation";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { t } = useTranslation("common");
  const [focus, setFocus] = useState(false);
  const {
    ref: videoRef,
    inView,
    entry,
  } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section className="container max-w-[1008px] relative">
      <div className="absolute w-full sm:w-[361px] lg:w-full mx-auto top-[-100px] md:w-10/12 right-0 left-0 flex flex-col md:top-[-150px] lg:top-[-400px] h-[204px] md:h-[400px] lg:h-[700px] md:mb-10">
        <div className="w-full h-10 bg-white hidden md:block">
          <div className="flex justify-between items-center h-full w-12/12 md:w-8/12 mr-3">
            <div className="flex ml-4">
              <span className="h-3 w-3 rounded-full bg-[#EE6A5F] "></span>
              <span className="h-3 w-3 rounded-full mx-2 bg-[#F5BE50]"></span>
              <span className="h-3 w-3 rounded-full bg-[#62C554]"></span>
            </div>
            <div className="bg-slate-200 w-3/4 md:w-1/2">
              <h5 className="text-sm py-[2px] text-center text-[#3F444D]">https://tool.develocity.finance</h5>
            </div>
          </div>
        </div>
        <div ref={videoRef} className="h-full w-full stats-bg rounded-md flex justify-center items-center">
          {inView && (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Qj8dEwvcCCc"
              title="Multi-functional Tool - Crypto Scanner"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </div>
      <div className="pt-[166px] pb-[92px] md:pt-[310px] lg:flex lg:flex-row lg:gap-x-36 justify-center mx-auto items-center z-40 px-4 md:px-0">
        <div className="flex flex-col justify-center items-center my-12">
          <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center p-2">
            <Image className="w-5 h-5" src={crosshair} alt="crosshair" />
          </div>
          <CountUp start={focus ? 0 : null} end={90} duration={3} decimals={1} decimal="." suffix="%" redraw={true}>
            {({ countUpRef }) => (
              <VisibilitySensor
                onChange={isVisible => {
                  if (isVisible) {
                    setFocus(true);
                  }
                }}
                delayedCall
              >
                <h3 className="font-PolySans text-6xl text-white mt-4 mb-2" ref={countUpRef}></h3>
              </VisibilitySensor>
            )}
          </CountUp>
          <label className="text-[#B8B8B8] text-xl font-medium">
            {t?.homeSection?.roadmapSection?.lables?.accuracy}
          </label>
        </div>
        <div className="flex flex-col justify-center items-center my-12">
          <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center p-2">
            <Image className="w-5 h-5" src={coins} alt="coins" />
          </div>
          <CountUp start={focus ? 0 : null} end={12} duration={3} decimals={3} decimal=",">
            {({ countUpRef }) => (
              <VisibilitySensor
                onChange={isVisible => {
                  if (isVisible) {
                    setFocus(true);
                  }
                }}
                delayedCall
              >
                <h3 className="font-PolySans text-6xl text-white mt-4 mb-2" ref={countUpRef}></h3>
              </VisibilitySensor>
            )}
          </CountUp>
          <label className="text-[#B8B8B8] text-xl font-medium">
            {t?.homeSection?.roadmapSection?.lables?.tokensInDatabase}
          </label>
        </div>
        <div className="flex flex-col justify-center items-center my-12">
          <div className="rounded-full bg-white w-12 h-12 flex justify-center items-center p-2">
            <Image className="w-5 h-5" src={icon} alt="cion" />
          </div>
          <CountUp scrollSpyOnce={true} start={focus ? 0 : null} end={2} duration={3} decimal="," suffix="K">
            {({ countUpRef }) => (
              <VisibilitySensor
                onChange={isVisible => {
                  if (isVisible) {
                    setFocus(true);
                  }
                }}
                delayedCall
              >
                <h3 className="font-PolySans text-6xl text-white mt-4 mb-2" ref={countUpRef}></h3>
              </VisibilitySensor>
            )}
          </CountUp>
          <label className="text-[#B8B8B8] text-xl font-medium">
            {t?.homeSection?.roadmapSection?.lables?.dailyVisitors}
          </label>
        </div>
      </div>
    </section>
  );
};

export default memo(StatsSection);
