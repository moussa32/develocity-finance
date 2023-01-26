import icon from "../../../assets/images/Icon.svg";
import coins from "../../../assets/images/coins.svg";
import crosshair from "../../../assets/images/crosshair.svg";
import playIcon from "../../../assets/images/playVideoIcon.svg";
import CountUp from "react-countup";

export default function StatsSection() {
  return (
    <div className="container mx-auto">
      <div className="mx-auto flex flex-col w-10/12 h-[700px] mb-10">
        <div className="w-full h-10 bg-white">
          <div className="flex justify-between items-center h-full w-12/12 md:w-8/12 mr-3">
            <div className="flex ml-4">
              <span className="h-3 w-3 rounded-full bg-[#EE6A5F] "></span>
              <span className="h-3 w-3 rounded-full mx-2 bg-[#F5BE50]"></span>
              <span className="h-3 w-3 rounded-full bg-[#62C554]"></span>
            </div>
            <div className="rounded-sm bg-slate-200 w-3/4 md:w-1/2">
              <h5 className="text-sm py-[2px] text-center text-[#3F444D]">
                develocity.finance/scanner/
              </h5>
            </div>
          </div>
        </div>
        <div className="h-full w-full bg-indigo-500 rounded-b-md flex justify-center items-center">
          <a href="https://youtu.be/4NyKdBPyz_g" target="_blank">
            <img className="w-12 h-48" src={playIcon} />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-8/12 mx-auto  bg-[#0A0D14]">
        <div className="flex flex-col justify-center items-center my-14">
          <div className="rounded-full bg-slate-800  p-2">
            <img className="w-4" src={crosshair} />
          </div>
          <CountUp start={0} end={99.8} duration={3} decimals={1} decimal="," suffix="%">
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
    </div>
  );
}
