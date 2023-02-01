import EcosystemTitle from "../../assets/images/EcosystemTitle.png";
import Coins from "../../assets/images/coins.png";
import { ReactComponent as SwapToolIcon } from "../../assets/images/swap-tool.svg";
import { ReactComponent as CryptoAcademyIcon } from "../../assets/images/crypto-academy.svg";
import { ReactComponent as BridgeIcon } from "../../assets/images/bridge-icon.svg";
import { ReactComponent as DexIcon } from "../../assets/images/dex-icon.svg";
import { ReactComponent as MultiFunctionalIcon } from "../../assets/images/multi-functional.svg";
import { ReactComponent as WalletIcon } from "../../assets/images/wallet.svg";

const Ecosystem = () => {
  return (
    <section className="container pt-16 pb-24 lg:py-48">
      <img
        src={EcosystemTitle}
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
          <h3 className="text-[#101828] text-center font-PolySans text-[28px] font-bold mt-3 mb-4 md:mb-6 md:font-sans md:text-2xl lg:text-4xl">
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
              <MultiFunctionalIcon className="w-8 h-8" />
              <h4 className="ml-2 text-[#171717] font-medium text-base">
                Multi-functional Tool
              </h4>
            </div>
            <div className="flex items-center">
              <SwapToolIcon className="w-8 h-8" />
              <h4 className="ml-2 text-[#171717] font-medium text-base">
                Swap Tool
              </h4>
            </div>
            <div className="flex items-center w-3/5 mr-5 lg:mr-0 lg:w-full">
              <CryptoAcademyIcon className="w-8 h-8" />
              <h4 className="ml-2 text-[#171717] font-medium text-base">
                Crypto Academy
              </h4>
            </div>
            <div className="flex items-center">
              <BridgeIcon className="w-8 h-8" />
              <h4 className="ml-2 text-[#171717] font-medium text-base">
                Bridge
              </h4>
            </div>
            <div className="flex items-center w-3/5 mr-5 lg:mr-0 lg:w-full">
              <DexIcon className="w-8 h-8" />
              <h4 className="ml-2 text-[#171717] font-medium text-base">Dex</h4>
            </div>
            <div className="flex items-center">
              <WalletIcon className="w-8 h-8" />
              <h4 className="ml-2 text-[#171717] font-medium text-base">
                Wallet
              </h4>
            </div>
          </div>
        </div>

        <img
          src={Coins}
          alt="coins"
          title="coins"
          className="block order-1 mx-auto mt-14 mb-[66px] w-[361px] lg:w-full lg:max-w-[592px] md:order-2"
        />
      </div>
    </section>
  );
};

export default Ecosystem;
