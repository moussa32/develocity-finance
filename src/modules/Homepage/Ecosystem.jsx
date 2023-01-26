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
    <section className="container px-8 py-32 lg:py-48 lg:px-0 mx-auto">
      <img src={EcosystemTitle} alt="ecosystem" className="block ml-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col">
          <span className="bg-[#F3F4F8] rounded-2xl text-xs md:text-sm font-medium p-1.5 pr-[18px] flex items-center lg:flex-row gap-2 max-w-[360px]">
            <span className="bg-white py-1 px-2.5 rounded-2xl">Eco-System</span>
            <span className="text-[#344054]">Safey Enviroment For Your Assets</span>
          </span>
          <h3 className="text-[#101828] font-bold text-xl md:text-2xl lg:text-4xl mt-3 mb-6">
            Safe And Trustworthy Crypto Environment Upcoming
          </h3>
          <p className="text-neutral-500 text-base font-medium">
            Develocity strives to create a safe and trustworthy crypto environment where investors and developers can
            interact securely, considering the transparent credibility and technical measures and standards.
          </p>
          <p className="text-neutral-500 text-base font-medium mt-4">
            The main goal of DeVelocity is to provide useful decentralized tools that would be trusted entirely and
            transparent, where the traders will always be able to trade freely without any risk of being locked out or
            exposed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-y-4">
            <div className="flex items-center">
              <MultiFunctionalIcon className="w-8 h-8" />
              <h4 className="ml-2 text-[#101828] font-medium text-base">Multi-functional Tool</h4>
            </div>
            <div className="flex items-center">
              <SwapToolIcon className="w-8 h-8" />
              <h4 className="ml-2 text-[#101828] font-medium text-base">Swap Tool</h4>
            </div>
            <div className="flex items-center">
              <CryptoAcademyIcon className="w-8 h-8" />
              <h4 className="ml-2 text-[#101828] font-medium text-base">Crypto Academy</h4>
            </div>
            <div className="flex items-center">
              <BridgeIcon className="w-8 h-8" />
              <h4 className="ml-2 text-[#101828] font-medium text-base">Bridge</h4>
            </div>
            <div className="flex items-center">
              <DexIcon className="w-8 h-8" />
              <h4 className="ml-2 text-[#101828] font-medium text-base">Dex</h4>
            </div>
            <div className="flex items-center">
              <WalletIcon className="w-8 h-8" />
              <h4 className="ml-2 text-[#101828] font-medium text-base">Wallet</h4>
            </div>
          </div>
        </div>

        <img src={Coins} alt="coins" title="coins" />
      </div>
    </section>
  );
};

export default Ecosystem;
