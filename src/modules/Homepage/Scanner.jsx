import ScanTitle from "../../assets/images/ScanTitle.png";
import { ReactComponent as AppleStoreIcon } from "../../assets/images/AppleStoreIcon.svg";
import { ReactComponent as GooglePlayIcon } from "../../assets/images/GooglePlayIcon.svg";

const Scanner = () => {
  return (
    <section className="pb-60 container px-10 py-32 lg:py-48 lg:px-0 mx-auto">
      <img src={ScanTitle} alt="scanner" className="block mx-auto mb-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:mt-24">
        <div className="flex flex-col ml-auto">
          <span className="bg-[#F3F4F8] rounded-2xl text-xs md:text-sm font-medium p-1.5 pr-[18px] flex items-center lg:flex-row gap-2 max-w-[238px]">
            <span className="bg-white py-1 px-2.5 rounded-2xl flex items-center">
              <span className="block mr-1.5 bg-indigo-500 w-2 h-2 rounded-full"></span>Beta
            </span>
            <span className="text-[#344054]">Multi-Functional Tool</span>
          </span>
          <h3 className="text-[#101828] font-bold text-xl md:text-2xl lg:text-4xl mt-3 mb-6">
            Easy to Become a PRO in Crypto Investments
          </h3>
          <p className="text-neutral-500 text-base font-medium">
            DeFi users are always trying to find the ideal investment, and they are willing to take the risk; even if
            they try as much as they can to reduce the risk, they won’t be able to determine the size of the risk. This
            is the part where we can benefit the user the most, where all he needs to do is avoid participating in any
            investment without understanding what kind of risk he is getting into.
          </p>
          <p className="text-neutral-500 text-base font-medium mt-4">
            The multi-functional tool comes to help the users with their challenges by scanning the contract or
            searching for the token to get a quick and deep detailed report about the token.
          </p>
          <div className="flex flex-col gap-y-4 gap-x-6 sm:flex-row mt-8">
            <button className="py-[15px] px-[45px] bg-indigo-500 text-white text-md font-medium sm:w-48">
              Get Started
            </button>
            <div className="flex justify-center sm:justify-start">
              <button className="py-3.5 px-4 border-[##D0D5DD] border-[1px] rounded">
                <AppleStoreIcon />
              </button>
              <button className="py-3.5 px-4 border-[##D0D5DD] border-[1px] rounded ml-3">
                <GooglePlayIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scanner;
