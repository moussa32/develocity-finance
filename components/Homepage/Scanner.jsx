import ScannerWallet from "../../public/assets/images/scannerWallet.svg";
import AppleStoreIcon from "../../public/assets/images/AppleStoreIcon.svg";
import GooglePlayIcon from "../../public/assets/images/GooglePlayIcon.svg";
import ScanTitle from "../../public/assets/images/ScanTitle.png";
import ScannerMobileCoins from "../../public/assets/images/ScannerMobileCoins.png";
import Image from "next/image";

const Scanner = () => {
  return (
    <section className="container lg:py-48 lg:px-0 mx-auto">
      <picture>
        <source media="(max-width:768px)" srcSet="/assets/images/ScannerMobileTitle.png" />
        <Image src={ScanTitle} alt="scanner" className="block mx-auto mb-2 w-3/5" />
      </picture>
      <Image src={ScannerMobileCoins} alt="scanner" className="block max-w-[308px] mx-auto mt-12 md:hidden" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:mt-24">
        <div className="flex flex-col ml-auto">
          <span className="bg-[#F3F4F8] mx-auto mb-4 mt-16 md:mt-0 md:mb-0 rounded-2xl text-sm md:mx-0 font-medium p-1 md:p-1.5 pr-[18px] flex items-center lg:flex-row gap-2 max-w-[238px]">
            <span className="bg-white px-2 py-0.5 md:py-1 md:px-2.5 rounded-2xl flex items-center">
              <span className="hidden md:block mr-1.5 bg-indigo-500 w-2 h-2 rounded-full"></span>
              Beta
            </span>
            <span className="text-[#344054]">Multi-Functional Tool</span>
          </span>
          <h3 className="text-[#101828] text-[28px] text-center leading-9 font-PolySans font-bold text-xl md:mt-3 mb-4 md:text-2xl md:mb-6 lg:text-4xl md:font-sans md:text-left">
            Become A PRO In <span className="block md:inline">Crypto Investments</span>
          </h3>
          <p className="text-neutral-500 text-base font-normal md:font-medium">
            DeFi users are always trying to find the ideal investment, and they are willing to take the risk; even if
            they try as much as they can to reduce the risk, they won’t be able to determine the size of the risk. This
            is the part where we can benefit the user the most, where all he needs to do is avoid participating in any
            investment without understanding what kind of risk he is getting into.
          </p>
          <p className="text-neutral-500 text-base font-normal md:font-medium mt-4">
            The multi-functional tool comes to help the users with their challenges by scanning the contract or
            searching for the token to get a quick and deep detailed report about the token.
          </p>
          <div className="flex gap-y-4 gap-x-6 sm:flex-row mt-8">
            <button className="py-[15px] px-[45px] bg-indigo-500 text-white text-[18px] md:text-md font-medium w-full rounded-sm sm:w-48">
              Get Started
            </button>
            <div className="flex justify-center sm:justify-start">
              <button className="py-3.5 px-4 border-[##D0D5DD] border-[1px] rounded">
                <Image src={AppleStoreIcon} />
              </button>
              <button className="py-3.5 px-4 border-[##D0D5DD] border-[1px] rounded ml-3">
                <Image src={GooglePlayIcon} />
              </button>
            </div>
          </div>
        </div>
        <Image src={ScannerWallet} className="hidden lg:block" />
      </div>
    </section>
  );
};

export default Scanner;
