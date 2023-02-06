import SwapToolIcon from "../../public/assets/images/swap-tool.svg";
import CryptoAcademyIcon from "../../public/assets/images/crypto-academy.svg";
import BridgeIcon from "../../public/assets/images/bridge-icon.svg";
import DexIcon from "../../public/assets/images/dex-icon.svg";
import MultiFunctionalIcon from "../../public/assets/images/multi-functional.svg";
import WalletIcon from "../../public/assets/images/wallet.svg";
import Image from "next/image";

const Ecosystem = () => {
  return (
    <section className="container pt-16 pb-24 lg:py-48">
      <img
        src="/assets/images/EcosystemTitle.png"
        alt="ecosystem"
        className="block w-[313.15px] max-w-[975.58px] mx-auto md:w-96 lg:w-full lg:mx-0 lg:ml-auto"
      />
      <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col order-2 md:order-1">
          <span className="bg-[#F3F4F8] w-full rounded-2xl text-sm font-medium p-1 md:p-1.5 md:pr-[18px] flex items-center gap-2 md:max-w-[360px] lg:flex-row">
            <span className="bg-white py-0.5 px-2 md:py-1 md:px-2.5 rounded-2xl">
              Eco-System
            </span>
            <span className="text-[#344054]">
              Safe Eenviroment For Your Assets
            </span>
          </span>
          <h3 className="text-[#101828] text-center font-PolySans text-[28px] font-bold mt-3 mb-4 md:mb-6 md:text-left md:font-sans md:text-2xl lg:text-4xl">
            Safe And Trustworthy Crypto Environment
          </h3>
          <p className="text-neutral-600 text-base">
            Develocity strives to create a safe and trustworthy crypto
            environment where investors and developers can interact securely,
            considering the transparent credibility and technical measures and
            standards.
          </p>
          <p className="text-neutral-600 text-base mt-4">
            The main goal of DeVelocity is to provide useful decentralized tools
            that would be trusted entirely and transparent, where the traders
            will always be able to trade freely without any risk of being locked
            out or exposed.
          </p>
          <div className="flex flex-wrap lg:grid lg:grid-cols-2 mt-8 gap-y-4">
            <div className="flex items-center w-3/5 mr-5 lg:mr-0 lg:w-full">
              <Image
                src={MultiFunctionalIcon}
                className="w-8 h-8"
                alt="MultiFunctionalIcon"
              />
              <h4 className="ml-2 text-[#171717] font-medium text-base">
                Multi-functional Tool
              </h4>
            </div>
            <div className="flex items-center">
              <Image
                src={SwapToolIcon}
                className="w-8 h-8"
                alt="SwapToolIcon"
              />
              <h4 className="ml-2 text-[#171717] font-medium text-base">
                Swap Tool
              </h4>
            </div>
            <div className="flex items-center w-3/5 mr-5 lg:mr-0 lg:w-full">
              <Image
                src={CryptoAcademyIcon}
                className="w-8 h-8"
                alt="CryptoAcademyIcon"
              />
              <h4 className="ml-2 text-[#171717] font-medium text-base">
                Crypto Academy
              </h4>
            </div>
            <div className="flex items-center">
              <Image src={BridgeIcon} className="w-8 h-8" alt="BridgeIcon" />
              <h4 className="ml-2 text-[#171717] font-medium text-base">
                Bridge
              </h4>
            </div>
            <div className="flex items-center w-3/5 mr-5 lg:mr-0 lg:w-full">
              <Image src={DexIcon} className="w-8 h-8" alt="DexIcon" />
              <h4 className="ml-2 text-[#171717] font-medium text-base">Dex</h4>
            </div>
            <div className="flex items-center">
              <Image src={WalletIcon} className="w-8 h-8" alt="WalletIcon" />
              <h4 className="ml-2 text-[#171717] font-medium text-base">
                Wallet
              </h4>
            </div>
          </div>
        </div>

        <img
          src="/assets/images/coins.png"
          alt="coins"
          title="coins"
          className="block order-1 mx-auto mt-14 mb-[66px] w-[361px] lg:w-full lg:max-w-[592px] md:order-2"
        />
      </div>
    </section>
  );
};

export default Ecosystem;
