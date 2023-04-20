import SwapToolIcon from "@/images/swap-tool.svg";
import CryptoAcademyIcon from "@/images/crypto-academy.svg";
import BridgeIcon from "@/images/bridge-icon.svg";
import DexIcon from "@/images/dex-icon.svg";
import MultiFunctionalIcon from "@/images/multi-functional.svg";
import WalletIcon from "@/images/wallet.svg";
import EcosystemTitle from "@/images/EcosystemTitle.png";
import EcosystemVideo from "../../public/assets/video/Eco-system.mp4";
// import Coins from "@/images/coins.png";
import Image from "next/image";
import useTranslation from "@/shared/Hooks/useTranslation";

const Ecosystem = () => {
  const { t } = useTranslation("common");
  return (
    <section className="container pt-16 pb-24 lg:py-48">
      <Image
        src={EcosystemTitle}
        alt="ecosystem"
        className="block w-[313.15px] max-w-[975.58px] mx-auto md:w-96 lg:w-full lg:mx-0 ltr:lg:ml-auto rtl:lg:mr-auto"
      />
      <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col order-2 md:order-1">
          <span className="text-sm w-[206px] py-2 px-4 text-[#101828] font-medium rounded-2xl tags-box-shadow">
            {t?.homeSection?.ecoSystemSection?.lableI}
          </span>
          <h3 className="text-[#101828] text-center font-PolySans text-[28px] font-bold mt-3 mb-4 md:mb-6 ltr:md:text-left rtl:md:text-right md:font-sans md:text-2xl lg:text-4xl">
            {t?.homeSection?.ecoSystemSection?.mainText}
          </h3>
          <p className="text-neutral-600 text-base">{t?.homeSection?.ecoSystemSection?.subText}</p>
          <p className="text-neutral-600 text-base mt-4">{t?.homeSection?.ecoSystemSection?.subTextSecondParagraph}</p>
          <div className="flex flex-wrap lg:grid lg:grid-cols-2 mt-8 gap-y-4">
            <div className="flex items-center w-3/5 ltr:mr-5 rtl:ml-5 ltr:lg:mr-0 rtl:lg:ml-0 lg:w-full">
              <Image src={MultiFunctionalIcon} className="w-8 h-8" alt="MultiFunctional" />
              <h4 className="ltr:ml-2 rtl:mr-2 text-[#171717] font-medium text-base">
                {t?.homeSection?.ecoSystemSection?.tools?.multiFunctionalTool}
              </h4>
            </div>
            <div className="flex items-center">
              <Image src={SwapToolIcon} className="w-8 h-8" alt="SwapTool" />
              <h4 className="ltr:ml-2 rtl:mr-2 text-[#171717] font-medium text-base">
                {t?.homeSection?.ecoSystemSection?.tools?.swapTool}
              </h4>
            </div>
            <div className="flex items-center w-3/5 ltr:mr-5 rtl:ml-5 ltr:lg:mr-0 rtl:lg:ml-0 lg:w-full">
              <Image src={WalletIcon} className="w-8 h-8" alt="Wallet" />
              <h4 className="ltr:ml-2 rtl:mr-2 text-[#171717] font-medium text-base">
                {t?.homeSection?.ecoSystemSection?.tools?.wallet}
              </h4>
            </div>
            <div className="flex items-center">
              <Image src={BridgeIcon} className="w-8 h-8" alt="Bridge" />
              <h4 className="ltr:ml-2 rtl:mr-2 text-[#171717] font-medium text-base">
                {t?.homeSection?.ecoSystemSection?.tools?.bridge}
              </h4>
            </div>
            <div className="flex items-center w-3/5 ltr:mr-5 rtl:ml-5 ltr:lg:mr-0 rtl:lg:ml-0 lg:w-full">
              <Image src={CryptoAcademyIcon} className="w-8 h-8" alt="CryptoAcademy" />
              <h4 className="ltr:ml-2 rtl:mr-2 text-[#171717] font-medium text-base">
                {t?.homeSection?.ecoSystemSection?.tools?.cryptoAcademy}
              </h4>
            </div>
            <div className="flex items-center">
              <Image src={DexIcon} className="w-8 h-8" alt="DEX" />
              <h4 className="ltr:ml-2 rtl:mr-2 text-[#171717] font-medium text-base">
                {t?.homeSection?.ecoSystemSection?.tools?.dex}
              </h4>
            </div>
          </div>
        </div>
        <video
          src={EcosystemVideo}
          className="block order-1 mx-auto mt-14 mb-[66px] w-[361px] lg:w-full lg:max-w-[592px] md:order-2"
          playsInline
          autoPlay
          muted
        ></video>

        {/*   <Image
          src={Coins}
          alt="coins"
          title="coins"
          className="block order-1 mx-auto mt-14 mb-[66px] w-[361px] lg:w-full lg:max-w-[592px] md:order-2"
        />*/}
      </div>
    </section>
  );
};

export default Ecosystem;
