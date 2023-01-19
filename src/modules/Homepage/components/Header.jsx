import Navbar from "../../../shared/Components/Navbar";
import LadingHeaderBG from "../../../../src/assets/images/ladingHeaderBG.png";
import BloombergIcon from "../../../../src/assets/images/Bloomberg.svg";
import WiredIcon from "../../../../src/assets/images/WIRED.svg";
import CoindeskIcons from "../../../../src/assets/images/Coindesk.svg";
import YahooFinanceIcons from "../../../../src/assets/images/YahooFinance.svg";
import Loudspeaker from "../../../../src/assets/images/loudspeaker.svg";

export default function Header() {
  return (
    <div className="relative main-bg bg-center bg-no-repeat text-center overflow-hidden w-full md:bg-cover md:bg-right md:text-left md:h-[810px]">
      <img src={LadingHeaderBG} className="absolute h-full w-full z-0" />
      <div className="fixed w-full z-40">
        <Navbar background={'bg-opacity-5 bg-white'} />
      </div>
      <div className="container mx-auto text-white mt-36 z-20 flex flex-col">
        <div className="ml-20 w-[300%] md:w-[615px] z-20">
          <h2 className="md:text-6xl text-4xl text-center  font-bold mb-6">
            Pre-Sale Countdown
          </h2>
          <h2 className="md:text-6xl text-4xl text-center font-bold my-6">
            49:35:12
          </h2>
          <div className="mt-28 h-16 bg-white rounded-lg w-5/6 flex items-center">
            <div className="ml-3 p-2 rounded-lg shadow-lg shadow-gray-700">
              <img className="w-[16px]" src={`${Loudspeaker}`} />
            </div>
            <p className="ml-2 text-sm" style={{ color: "#E9E9E9" }}>
              <span style={{ color: "#00B9FF" }}>
                Sheikh Marwan Bin Mohammed
              </span>{" "}
              taking develocity in his incubator.
            </p>
          </div>
        </div>

        <div className="flex justify-evenly my-14 md:my-16 md:mt-[152px] mx-auto gap-1 md:gap-20">
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
